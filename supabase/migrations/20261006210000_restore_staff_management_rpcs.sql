-- Restore the staff-management RPCs when the deployed database is missing
-- them or PostgREST's schema cache has not picked up their definitions.

create or replace function public.electropay_list_staff()
returns table (
  user_id uuid,
  full_name text,
  email text,
  role text,
  active boolean,
  has_business_data_access boolean,
  access_status text,
  email_confirmed boolean,
  created_at timestamptz,
  last_sign_in_at timestamptz
)
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_organization_id uuid;
begin
  select p.organization_id into v_organization_id
  from public.profiles p
  where p.user_id = (select auth.uid())
    and p.role = 'ADMIN'
    and p.active;

  if v_organization_id is null then
    raise exception 'Only an active administrator can view staff.' using errcode = '42501';
  end if;

  return query
  select p.user_id,
         p.full_name,
         coalesce(u.email, ''),
         p.role,
         p.active,
         (p.active and (p.role = 'ADMIN' or exists (
           select 1
           from public.electropay_permissions ep
           where ep.organization_id = p.organization_id
             and ep.user_id = p.user_id
             and ep.permission_key = 'BUSINESS_DATA_READ'
         ))),
         case
           when not p.active then 'SUSPENDED'
           when p.role = 'ADMIN' then 'APPROVED'
           when exists (
             select 1
             from public.electropay_permissions ep
             where ep.organization_id = p.organization_id
               and ep.user_id = p.user_id
               and ep.permission_key = 'BUSINESS_DATA_READ'
           ) then 'APPROVED'
           when r.request_status = 'REVOKED' then 'SUSPENDED'
           else coalesce(r.request_status, 'PENDING')
         end,
         u.email_confirmed_at is not null,
         p.created_at,
         u.last_sign_in_at
  from public.profiles p
  join auth.users u on u.id = p.user_id
  left join public.staff_access_requests r on r.user_id = p.user_id
  where p.organization_id = v_organization_id
    and p.role in ('ADMIN', 'STAFF')
  order by p.created_at;
end
$$;

create or replace function public.electropay_update_my_profile(p_full_name text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if nullif(trim(p_full_name), '') is null or length(trim(p_full_name)) > 120 then
    raise exception 'Enter a name between 1 and 120 characters.' using errcode = '22023';
  end if;
  update public.profiles set full_name = trim(p_full_name)
  where user_id = (select auth.uid());
  if not found then
    raise exception 'The ElectroPay profile could not be found.' using errcode = 'P0002';
  end if;
  insert into public.audit_log (organization_id, actor_id, action, record_type, record_id)
  select p.organization_id, p.user_id, 'PROFILE_UPDATED', 'USER', p.user_id::text
  from public.profiles p
  where p.user_id = (select auth.uid());
end
$$;

revoke all on function public.electropay_list_staff() from public, anon;
revoke all on function public.electropay_update_my_profile(text) from public, anon;
grant execute on function public.electropay_list_staff() to authenticated;
grant execute on function public.electropay_update_my_profile(text) to authenticated;

notify pgrst, 'reload schema';
