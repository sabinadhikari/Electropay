    /* ==========================================================================
       1. I18N / TRANSLATION DICTIONARY
       ========================================================================== */
    const translations = {
      en: {
        appName: "ElectroPay",
        appSubTitle: "Ledger & Billing",
        navMain: "MAIN",
        navDashboard: "Dashboard",
        navNewPayment: "New Payment",
        navPaymentRecords: "Payment Records",
        navAnalytics: "Analytics",
        navFinancial: "FINANCIAL",
        navAdvancesDue: "Advances & Due",
        navSystem: "SYSTEM",
        navBackupRestore: "Backup / Restore",
        navSettings: "Settings",
        sidebarStatus: "System Ready",
        themeLight: "Light",
        themeDark: "Dark",
        ledgerSynced: "Ledger Synced",
        kpiTotalBilled: "Total Billed",
        kpiTotalCollected: "Total Collected",
        kpiOutstandingDue: "Outstanding Due",
        kpiAdvanceBalance: "Advance Balance",
        recentPayments: "Recent Payment Records",
        viewAll: "View All",
        tblDate: "Date",
        tblReceipt: "Receipt #",
        tblUnits: "Units",
        tblBilled: "Billed Cost",
        tblPaid: "Amount Paid",
        tblDue: "Due",
        tblAdvance: "Advance",
        tblStatus: "Status",
        tblActions: "Actions",
        formTitle: "Record Electricity Payment",
        lblDate: "Payment Date",
        lblPaymentMethod: "Payment Method",
        lblPrevReading: "Previous Reading",
        lblCurrReading: "Current Reading",
        lblRate: "Rate (Rs / Unit)",
        liveSummaryTitle: "Live Financial Summary",
        unitsConsumed: "Units Consumed",
        billCost: "Current Bill",
        prevAdvanceApplied: "Advance Applied",
        netPayable: "Net Amount Payable",
        lblAmountPaid: "Amount Paid Now (Rs)",
        paymentHelperAdvance: "You already have an advance payment of Rs. {advance}. To fulfill the current payment, you only need to pay Rs. {amount}.",
        paymentHelperAdvanceCovered: "Your advance payment of Rs. {advance} covers this bill. Remaining credit: Rs. {credit}.",
        paymentHelperDue: "Your current due is Rs. {amount}. To fulfill this payment, you need to pay Rs. {amount}.",
        paymentHelperNoBalance: "No previous due or advance. Enter the amount you want to pay for this bill.",
        newBalanceStatus: "New Status: ",
        btnSavePayment: "Save Payment Record",
        analyticsTotalUnits: "Total Units Consumed",
        analyticsAvgBill: "Avg Monthly Bill",
        analyticsHighestBill: "Highest Bill",
        analyticsTotalRecords: "Total Transactions",
        chartConsumptionTitle: "Units Consumption Trend",
        chartPaymentTrendTitle: "Payment vs Billed Trend",
        chartMethodsTitle: "Payment Methods Distribution",
        snapshotTitle: "Meter & Account State Snapshot",
        snapshotAdvanceTitle: "Current Advance Credit",
        snapshotDueTitle: "Current Pending Due",
        snapAdvanceDesc: "This amount will automatically deduct from your next electricity bill.",
        snapDueDesc: "This amount will automatically add to your next electricity bill.",
        snapLastReading: "Last Meter Reading",
        snapConfigRate: "Configured Default Rate",
        snapLastUpdated: "Last Transaction Date",
        backupTitle: "Excel Backup & System Restore",
        backupExportTitle: "Export Application Data",
        backupExportDesc: "Download a local JSON backup of all ledger transactions and settings.",
        btnExportJSON: "Export Backup",
        backupImportTitle: "Restore Application Data",
        backupImportDesc: "Restore ledger records from a previously exported backup file.",
        btnImportJSON: "Import File",
        resetTitle: "Reset Application State",
        resetDesc: "Wipe all stored records and reset configured values to system defaults.",
        btnResetSystem: "Reset Data",
        settingsTitle: "System Configuration",
        settingRate: "Default Rate per Unit (Rs)",
        settingPrefix: "Receipt Number Prefix",
        btnSaveSettings: "Save Configuration",
        btnBackToRecords: "Back to Records",
        btnPrintReceipt: "Print Receipt",
        receiptTitle: "Electricity Payment Receipt",
        rcptMeterSection: "Meter & Consumption",
        rcptFinancialSection: "Payment Breakdown",
        prevAdvance: "Previous Advance",
        advanceApplied: "Advance Applied",
        prevDue: "Previous Outstanding Due",
        newAdvance: "Remaining Advance",
        newDue: "Remaining Due",
        rcptFooterMsg: "Thank you for your prompt payment. Keep this receipt for future reference."
      },
      ne: {
        appName: "इलेक्ट्रो-पे",
        appSubTitle: "लेजर र बिलिङ",
        navMain: "मुख्य",
        navDashboard: "ड्यासबोर्ड",
        navNewPayment: "नयाँ भुक्तानी",
        navPaymentRecords: "भुक्तानी रेकर्डहरू",
        navAnalytics: "विश्लेषण",
        navFinancial: "वित्तीय",
        navAdvancesDue: "पेश्की र बाँकी",
        navSystem: "प्रणाली",
        navBackupRestore: "ब्याकअप / पुनर्स्थापना",
        navSettings: "सेटिङहरू",
        sidebarStatus: "प्रणाली तयार छ",
        themeLight: "उज्यालो",
        themeDark: "अध्यारो",
        ledgerSynced: "लेजर सिंक भयो",
        kpiTotalBilled: "कूल बिल रकम",
        kpiTotalCollected: "कूल असुली रकम",
        kpiOutstandingDue: "बाँकी बक्यौता",
        kpiAdvanceBalance: "पेश्की मौज्दात",
        recentPayments: "हालैका भुक्तानी रेकर्डहरू",
        viewAll: "सबै हेर्नुहोस्",
        tblDate: "मिति",
        tblReceipt: "रसिद नं.",
        tblUnits: "युनिट",
        tblBilled: "बिल रकम",
        tblPaid: "तिरेको रकम",
        tblDue: "बाँकी",
        tblAdvance: "पेश्की",
        tblStatus: "स्थिति",
        tblActions: "कार्यहरू",
        formTitle: "विद्युत् भुक्तानी प्रविष्टि",
        lblDate: "भुक्तानी मिति",
        lblPaymentMethod: "भुक्तानी माध्यम",
        lblPrevReading: "अघिल्लो रिडिङ",
        lblCurrReading: "हालको रिडिङ",
        lblRate: "दर (रु / युनिट)",
        liveSummaryTitle: "प्रत्यक्ष वित्तीय सारांश",
        unitsConsumed: "खपत युनिट",
        billCost: "हालको बिल",
        prevAdvanceApplied: "समायोजित पेश्की",
        netPayable: "खुद भुक्तानी दायित्व",
        lblAmountPaid: "अहिले तिरेको रकम (रु)",
        paymentHelperAdvance: "तपाईंसँग पहिले नै रु. {advance} पेश्की छ। हालको भुक्तानी पूरा गर्न तपाईंले रु. {amount} मात्र तिर्नुपर्छ।",
        paymentHelperAdvanceCovered: "तपाईंको रु. {advance} पेश्कीले यो बिल समेट्छ। बाँकी पेश्की: रु. {credit}।",
        paymentHelperDue: "तपाईंको हालको बाँकी रु. {amount} छ। यो भुक्तानी पूरा गर्न रु. {amount} तिर्नुपर्छ।",
        paymentHelperNoBalance: "अघिल्लो बाँकी वा पेश्की छैन। यो बिलका लागि तिर्न चाहेको रकम प्रविष्ट गर्नुहोस्।",
        newBalanceStatus: "नयाँ स्थिति: ",
        btnSavePayment: "भुक्तानी रेकर्ड सुरक्षित गर्नुहोस्",
        analyticsTotalUnits: "कूल खपत युनिट",
        analyticsAvgBill: "औसत मासिक बिल",
        analyticsHighestBill: "उच्चतम बिल",
        analyticsTotalRecords: "कूल कारोबार",
        chartConsumptionTitle: "युनिट खपत ट्रेन्ड",
        chartPaymentTrendTitle: "भुक्तानी र बिल ट्रेन्ड",
        chartMethodsTitle: "भुक्तानी माध्यम वितरण",
        snapshotTitle: "मिटर र खाता स्थिति विवरण",
        snapshotAdvanceTitle: "हालको पेश्की मौज्दात",
        snapshotDueTitle: "हालको बाँकी बक्यौता",
        snapAdvanceDesc: "यो रकम आगामी विद्युत् बिलमा स्वतः घटाइनेछ।",
        snapDueDesc: "यो रकम आगामी विद्युत् बिलमा स्वतः जोडिनेछ।",
        snapLastReading: "अन्तिम मिटर रिडिङ",
        snapConfigRate: "निर्धारित दर",
        snapLastUpdated: "अन्तिम कारोबार मिति",
        backupTitle: "एक्सेल ब्याकअप र प्रणाली पुनर्स्थापना",
        backupExportTitle: "डाटा निर्यात गर्नुहोस्",
        backupExportDesc: "सबै लेजर कारोबार र सेटिङहरूको ब्याकअप फाइल डाउनलोड गर्नुहोस्।",
        btnExportJSON: "ब्याकअप डाउनलोड",
        backupImportTitle: "डाटा पुनर्स्थापना गर्नुहोस्",
        backupImportDesc: "अघिल्लो ब्याकअप फाइलबाट डाटा पुनः लोड गर्नुहोस्।",
        btnImportJSON: "फाइल छान्नुहोस्",
        resetTitle: "प्रणाली रीसेट गर्नुहोस्",
        resetDesc: "सबै रेकर्डहरू हटाउनुहोस् र प्रारम्भिक स्थितिमा फर्कनुहोस्।",
        btnResetSystem: "रीसेट गर्नुहोस्",
        settingsTitle: "प्रणाली सेटिङहरू",
        settingRate: "प्रति युनिट दर (रु)",
        settingPrefix: "रसिद नम्बर प्रिफिक्स",
        btnSaveSettings: "सेटिङहरू सुरक्षित गर्नुहोस्",
        btnBackToRecords: "रेकर्डमा फर्कनुहोस्",
        btnPrintReceipt: "रसिद प्रिन्ट गर्नुहोस्",
        receiptTitle: "विद्युत् भुक्तानी रसिद",
        rcptMeterSection: "मिटर र खपत विवरण",
        rcptFinancialSection: "भुक्तानी हिसाब",
        prevAdvance: "अघिल्लो पेश्की",
        advanceApplied: "समायोजित पेश्की",
        prevDue: "अघिल्लो बाँकी बक्यौता",
        newAdvance: "बाँकी पेश्की मौज्दात",
        newDue: "बाँकी भुक्तानी दायित्व",
        rcptFooterMsg: "समयमै भुक्तानी गर्नुभएकोमा धन्यवाद।"
      }
    };

    /* ==========================================================================
       2. SINGLE AUTHORITATIVE APP STATE
       ========================================================================== */
    const STORAGE_KEY = 'ELECTROPAY_AUTHORITATIVE_STATE_V2';

    let state = {
      version: "2.0",
      settings: {
        rate: 10,
        receiptPrefix: "EPR-",
        paymentMethods: ["Cash", "eSewa", "Khalti", "Bank Transfer"],
        autoExcelBackup: true
      },
      uiPreferences: {
        lang: "en",
        theme: "light"
      },
      records: [],
      deletedRecordIds: []
    };

    let paymentHelperHovered = false;
    let excelSyncInProgress = false;
    let pendingExcelConflicts = null;
    const selectedPaymentIds = new Set();
    let activeReceiptType = 'single';

    function formatDateForDisplay(dateValue) {
      const rawValue = String(dateValue ?? '').trim();
      if (!rawValue || rawValue === 'N/A') return 'N/A';
      try {
        const NepaliDateCtor = typeof window !== 'undefined' && (
          (typeof window.NepaliDate === 'function' ? window.NepaliDate : window.NepaliDate?.default)
        );
        if (NepaliDateCtor) {
          const adDate = /\d{4}-\d{2}-\d{2}/.test(rawValue)
            ? new Date(`${rawValue}T00:00:00Z`)
            : new Date(rawValue);
          return `${new NepaliDateCtor(adDate).format('YYYY-MM-DD')} BS`;
        }
        return rawValue;
      } catch (error) {
        console.warn('Could not format date in Nepali BS:', error);
        return rawValue;
      }
    }

    function formatNepaliDateTime(dateValue = new Date()) {
      try {
        const NepaliDateCtor = typeof window !== 'undefined' && (
          (typeof window.NepaliDate === 'function' ? window.NepaliDate : window.NepaliDate?.default)
        );

        if (!NepaliDateCtor) {
          return new Date(dateValue).toLocaleString('en-GB', { hour12: false });
        }

        const adDate = new Date(dateValue);
        const nepaliDate = new NepaliDateCtor(adDate).format('YYYY-MM-DD');
        const timeString = adDate.toLocaleTimeString('en-GB', { hour12: false });
        return `${nepaliDate} ${timeString} BS`;
      } catch (error) {
        console.warn('Could not format Nepali date-time:', error);
        return new Date(dateValue).toLocaleString('en-GB', { hour12: false });
      }
    }

    function updateHeaderNepaliDateTime() {
      const element = document.getElementById('header-nepali-datetime');
      if (!element) return;
      element.textContent = formatNepaliDateTime(new Date());
    }

    // Chart instances store
    let activeCharts = {
      consumption: null,
      payments: null,
      methods: null
    };

    /* ==========================================================================
       3. INITIALIZATION & PERSISTENCE LIFECYCLE
       ========================================================================== */
    window.addEventListener('DOMContentLoaded', () => {
      loadStateFromStorage();
      applyThemeUI();
      applyLanguageUI();
      rebuildLedger();
      switchTab('dashboard');
      lucide.createIcons();
      updateHeaderNepaliDateTime();
      window.setInterval(updateHeaderNepaliDateTime, 1000);
      void updateExcelBackupLocationStatus();

      // Register print cleanup event listener
      window.onafterprint = () => {
        document.body.classList.remove('printing-receipt');
        document.body.classList.remove('printing-combined-receipt');
      };
    });

    function loadStateFromStorage() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          state = { ...state, ...parsed };
          state.settings = { ...state.settings, ...(parsed.settings || {}) };
          state.uiPreferences = { ...state.uiPreferences, ...(parsed.uiPreferences || {}) };
          state.settings.autoExcelBackup = parsed.settings?.autoExcelBackup !== false;
          state.deletedRecordIds = Array.isArray(parsed.deletedRecordIds) ? parsed.deletedRecordIds : [];
        }
      } catch (err) {
        console.error("Failed loading state:", err);
      }
    }

    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (err) {
        console.error("Failed saving state:", err);
      }
    }

    /* ==========================================================================
       4. FINANCIAL LEDGER REBUILD & CALCULATION ENGINE
       ========================================================================== */
    function rebuildLedger() {
      // Sort records chronologically ascending to recalculate carry-overs
      state.records.sort((a, b) => new Date(a.date) - new Date(b.date));

      let runningAdvance = 0;
      let runningDue = 0;

      state.records = state.records.map((rec, idx) => {
        const units = Math.max(0, rec.currentReading - rec.previousReading);
        const billCost = units * rec.rate;

        const prevAdvance = runningAdvance;
        const prevDue = runningDue;

        // Apply previous advance to bill
        const advanceApplied = Math.min(prevAdvance, billCost);
        const netAfterAdvance = billCost - advanceApplied;
        const remainingAdvanceAfterBill = prevAdvance - advanceApplied;

        // Total amount required now
        const netPayable = netAfterAdvance + prevDue;

        const paid = rec.amountPaid;
        let newAdvance = remainingAdvanceAfterBill;
        let newDue = 0;

        if (paid >= netPayable) {
          const excess = paid - netPayable;
          newAdvance += excess;
          newDue = 0;
        } else {
          newDue = netPayable - paid;
        }

        runningAdvance = newAdvance;
        runningDue = newDue;

        let status = 'PAID';
        if (newDue > 0) {
          status = paid > 0 ? 'PARTIAL' : 'DUE';
        } else if (newAdvance > 0) {
          status = 'ADVANCE';
        }

        return {
          ...rec,
          id: rec.id || `ELEC-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${idx}-${Math.random().toString(16).slice(2)}`}`,
          receiptNo: rec.receiptNo || `${state.settings.receiptPrefix}${String(idx + 1).padStart(6, '0')}`,
          units,
          billCost,
          previousAdvance: prevAdvance,
          advanceApplied,
          previousDue: prevDue,
          netPayable,
          newAdvance,
          newDue,
          status
        };
      });

      saveState();
      refreshActiveViews();
    }

    function getLatestLedgerState() {
      if (state.records.length === 0) {
        return {
          lastReading: 0,
          currentAdvance: 0,
          currentDue: 0,
          lastDate: 'N/A'
        };
      }
      const last = state.records[state.records.length - 1];
      return {
        lastReading: last.currentReading,
        currentAdvance: last.newAdvance,
        currentDue: last.newDue,
        lastDate: last.date
      };
    }

    /* ==========================================================================
       5. UI TAB ROUTING & NAVIGATION
       ========================================================================== */
    function switchTab(tabId) {
      document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
      document.querySelectorAll('.nav-item').forEach(el => {
        el.classList.remove('bg-emerald-50', 'dark:bg-emerald-950/50', 'text-emerald-600', 'dark:text-emerald-400');
        el.classList.remove('nav-item-active');
        el.classList.add('text-gray-600', 'dark:text-gray-300');
      });

      const activeTab = document.getElementById(`tab-${tabId}`);
      if (activeTab) activeTab.classList.remove('hidden');

      const activeNav = document.getElementById(`nav-${tabId}`);
      if (activeNav) {
        activeNav.classList.add('bg-emerald-50', 'dark:bg-emerald-950/50', 'text-emerald-600', 'dark:text-emerald-400');
        activeNav.classList.add('nav-item-active');
        activeNav.classList.remove('text-gray-600', 'dark:text-gray-300');
      }

      // Title & Subtitle update
      const lang = state.uiPreferences.lang;
      const titles = {
        'dashboard': [translations[lang].navDashboard, "Overview of electricity payment metrics"],
        'new-payment': [translations[lang].navNewPayment, "Calculate and log electricity bill"],
        'records': [translations[lang].navPaymentRecords, "Audit and manage past transactions"],
        'analytics': [translations[lang].navAnalytics, "Visual analysis of consumption and payments"],
        'snapshot': [translations[lang].navAdvancesDue, "Current advance credit and pending balances"],
        'backup': [translations[lang].navBackupRestore, "Export JSON or reset application state"],
        'settings': [translations[lang].navSettings, "Configure default tariff and receipt options"],
        'receipt': [translations[lang].receiptTitle, "Printable customer voucher"]
      };
      const pageIcons = {
        'dashboard': 'layout-dashboard',
        'new-payment': 'file-plus-2',
        'records': 'receipt-text',
        'analytics': 'chart-no-axes-combined',
        'snapshot': 'scale',
        'backup': 'database',
        'settings': 'settings-2',
        'receipt': 'receipt'
      };

      if (titles[tabId]) {
        document.getElementById('page-title').textContent = titles[tabId][0];
        document.getElementById('page-desc').textContent = titles[tabId][1];
      }
      if (pageIcons[tabId]) {
        document.getElementById('page-title-icon-container').innerHTML =
          `<i data-lucide="${pageIcons[tabId]}" class="w-4 h-4" aria-hidden="true"></i>`;
        lucide.createIcons();
      }

      if (tabId === 'new-payment') setupNewPaymentForm();
      if (tabId === 'records') renderRecordsTable();
      if (tabId === 'analytics') renderAnalytics();
      if (tabId === 'snapshot') renderSnapshotView();
      if (tabId === 'settings') loadSettingsForm();
      if (tabId === 'backup') {
        document.getElementById('excel-auto-backup').checked = state.settings.autoExcelBackup !== false;
        void updateExcelBackupLocationStatus();
      }

      toggleSidebar(false);
    }

    function toggleSidebar(open) {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('mobile-overlay');
      if (open) {
        sidebar.classList.remove('-translate-x-full');
        overlay.classList.remove('hidden');
      } else {
        sidebar.classList.add('-translate-x-full');
        overlay.classList.add('hidden');
      }
    }

    /* ==========================================================================
       6. THEME & I18N TOGGLES
       ========================================================================== */
    function toggleTheme() {
      state.uiPreferences.theme = state.uiPreferences.theme === 'light' ? 'dark' : 'light';
      saveState();
      applyThemeUI();
      if (!document.getElementById('tab-analytics').classList.contains('hidden')) {
        renderAnalytics();
      }
    }

    function applyThemeUI() {
      const isDark = state.uiPreferences.theme === 'dark';
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-label').textContent = translations[state.uiPreferences.lang].themeDark;
      } else {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-label').textContent = translations[state.uiPreferences.lang].themeLight;
      }
    }

    function toggleLanguage() {
      state.uiPreferences.lang = state.uiPreferences.lang === 'en' ? 'ne' : 'en';
      saveState();
      applyLanguageUI();
      refreshActiveViews();
    }

    function applyLanguageUI() {
      const lang = state.uiPreferences.lang;
      document.getElementById('lang-label').textContent = lang.toUpperCase();
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
      applyThemeUI();
      if (!document.getElementById('tab-new-payment').classList.contains('hidden')) {
        calculateLivePaymentSummary();
      }
    }

    function refreshActiveViews() {
      renderDashboard();
      renderRecordsTable();
      renderSnapshotView();
      if (!document.getElementById('tab-analytics').classList.contains('hidden')) {
        renderAnalytics();
      }
    }

    /* ==========================================================================
       7. DASHBOARD VIEW
       ========================================================================== */
    function renderDashboard() {
      const totalBilled = state.records.reduce((acc, r) => acc + r.billCost, 0);
      const totalPaid = state.records.reduce((acc, r) => acc + r.amountPaid, 0);
      const latest = getLatestLedgerState();

      document.getElementById('dash-total-billed').textContent = `Rs. ${totalBilled.toLocaleString()}`;
      document.getElementById('dash-total-paid').textContent = `Rs. ${totalPaid.toLocaleString()}`;
      document.getElementById('dash-current-due').textContent = `Rs. ${latest.currentDue.toLocaleString()}`;
      document.getElementById('dash-current-advance').textContent = `Rs. ${latest.currentAdvance.toLocaleString()}`;

      const tbody = document.getElementById('dash-recent-tbody');
      tbody.innerHTML = '';

      const recent = [...state.records].reverse().slice(0, 5);
      if (recent.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="px-5 py-6 text-center text-xs text-gray-400">No payment records found.</td></tr>`;
        return;
      }

      recent.forEach(r => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors';
        tr.innerHTML = `
          <td class="px-5 py-3 font-medium">${formatDateForDisplay(r.date)}</td>
          <td class="px-5 py-3 font-mono text-xs">${r.receiptNo}</td>
          <td class="px-5 py-3 text-right">${r.units}</td>
          <td class="px-5 py-3 text-right">Rs. ${r.billCost.toLocaleString()}</td>
          <td class="px-5 py-3 text-right font-bold text-emerald-600 dark:text-emerald-400">Rs. ${r.amountPaid.toLocaleString()}</td>
          <td class="px-5 py-3">${getStatusBadge(r.status)}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    /* ==========================================================================
       8. NEW PAYMENT FORM & LIVE RECKONING
       ========================================================================== */
    function setupNewPaymentForm() {
      const latest = getLatestLedgerState();
      document.getElementById('input-date').value = new Date().toISOString().split('T')[0];
      document.getElementById('input-prev-reading').value = latest.lastReading;
      document.getElementById('input-curr-reading').value = latest.lastReading;
      document.getElementById('input-rate').value = state.settings.rate;
      document.getElementById('input-amount-paid').value = 0;
      calculateLivePaymentSummary();
    }

    function calculateLivePaymentSummary() {
      const prevReading = parseFloat(document.getElementById('input-prev-reading').value) || 0;
      const currReading = parseFloat(document.getElementById('input-curr-reading').value) || 0;
      const rate = parseFloat(document.getElementById('input-rate').value) || 0;
      const amountPaid = parseFloat(document.getElementById('input-amount-paid').value) || 0;

      const units = Math.max(0, currReading - prevReading);
      const billCost = units * rate;

      const latest = getLatestLedgerState();
      const prevAdvance = latest.currentAdvance;
      const prevDue = latest.currentDue;

      const advanceApplied = Math.min(prevAdvance, billCost);
      const netPayable = (billCost - advanceApplied) + prevDue;
      updatePaymentHelper(prevAdvance, prevDue, billCost, netPayable);

      document.getElementById('live-units').textContent = units;
      document.getElementById('live-cost').textContent = `Rs. ${billCost.toLocaleString()}`;
      document.getElementById('live-advance-applied').textContent = `Rs. ${advanceApplied.toLocaleString()}`;
      document.getElementById('live-net-payable').textContent = `Rs. ${netPayable.toLocaleString()}`;

      // Explanation banner
      const expl = document.getElementById('advance-explanation');
      if (prevAdvance > 0) {
        expl.textContent = `Previous advance credit of Rs. ${prevAdvance.toLocaleString()} is available. Rs. ${advanceApplied.toLocaleString()} was applied to this bill.`;
      } else if (prevDue > 0) {
        expl.textContent = `Previous outstanding balance of Rs. ${prevDue.toLocaleString()} added to net payable amount.`;
      } else {
        expl.textContent = `No prior advance or outstanding balance.`;
      }

      // Live status preview
      let newStatus = 'PAID';
      if (amountPaid < netPayable) {
        newStatus = amountPaid > 0 ? 'PARTIAL' : 'DUE';
      } else if (amountPaid > netPayable || (prevAdvance - advanceApplied) > 0) {
        newStatus = 'ADVANCE';
      }

      const badge = document.getElementById('live-status-badge');
      badge.outerHTML = getStatusBadge(newStatus, 'live-status-badge');
    }

    function updatePaymentHelper(prevAdvance, prevDue, billCost, netPayable) {
      const lang = state.uiPreferences.lang;
      const messages = translations[lang];
      const amountNeededNow = Math.max(0, netPayable);
      let message;

      if (prevAdvance > 0) {
        if (amountNeededNow > 0) {
          message = messages.paymentHelperAdvance
            .replace('{advance}', prevAdvance.toLocaleString())
            .replace('{amount}', amountNeededNow.toLocaleString());
        } else {
          const remainingCredit = Math.max(0, prevAdvance - billCost);
          message = messages.paymentHelperAdvanceCovered
            .replace('{advance}', prevAdvance.toLocaleString())
            .replace('{credit}', remainingCredit.toLocaleString());
        }
      } else if (prevDue > 0) {
        message = messages.paymentHelperDue.replaceAll('{amount}', amountNeededNow.toLocaleString());
      } else {
        message = messages.paymentHelperNoBalance;
      }

      document.getElementById('payment-helper-message').textContent = message;
    }

    function showPaymentHelper(fromHover = false) {
      if (fromHover) {
        if (!window.matchMedia('(hover: hover)').matches) return;
        paymentHelperHovered = true;
      }
      document.getElementById('payment-helper').classList.remove('hidden');
      document.getElementById('input-amount-paid').setAttribute('aria-expanded', 'true');
    }

    function hidePaymentHelper(onBlur = false) {
      if (onBlur) paymentHelperHovered = false;
      const amountInput = document.getElementById('input-amount-paid');
      if (amountInput.matches(':focus') || (!onBlur && paymentHelperHovered)) return;
      document.getElementById('payment-helper').classList.add('hidden');
      amountInput.setAttribute('aria-expanded', 'false');
    }

    function handleNewPayment(e) {
      e.preventDefault();
      const prevReading = parseFloat(document.getElementById('input-prev-reading').value);
      const currReading = parseFloat(document.getElementById('input-curr-reading').value);

      if (currReading < prevReading) {
        showToast("Current meter reading cannot be less than previous reading.", "error");
        return;
      }

      const newRecord = {
        id: `ELEC-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`}`,
        createdAt: new Date().toISOString(),
        date: document.getElementById('input-date').value,
        paymentMethod: document.getElementById('input-method').value,
        previousReading: prevReading,
        currentReading: currReading,
        rate: parseFloat(document.getElementById('input-rate').value),
        amountPaid: parseFloat(document.getElementById('input-amount-paid').value)
      };

      state.records.push(newRecord);
      rebuildLedger();
      showToast("Payment record saved successfully!");
      switchTab('records');
      if (state.settings.autoExcelBackup !== false) {
        void syncExcelBackup(true);
      }
    }

    /* ==========================================================================
       9. PAYMENT RECORDS TABLE & ACTIONS
       ========================================================================== */
    function renderRecordsTable() {
      const tbody = document.getElementById('records-tbody');
      const query = document.getElementById('records-search')?.value.toLowerCase() || '';
      tbody.innerHTML = '';

      const currentRecordIds = new Set(state.records.map(record => record.id));
      selectedPaymentIds.forEach(id => {
        if (!currentRecordIds.has(id)) selectedPaymentIds.delete(id);
      });
      const filtered = state.records.filter(r => {
        const searchable = `${r.receiptNo} ${r.date} ${formatDateForDisplay(r.date)}`.toLowerCase();
        return searchable.includes(query);
      });

      document.getElementById('records-count').textContent = `Showing ${filtered.length} of ${state.records.length} records`;
      updatePaymentSelectionSummary(filtered);

      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" class="px-4 py-8 text-center text-xs text-gray-400">No payment records found.</td></tr>`;
        return;
      }

      [...filtered].reverse().forEach(r => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors';
        tr.innerHTML = `
          <td class="px-4 py-3 text-center"></td>
          <td class="px-4 py-3 font-mono text-xs font-bold">${r.receiptNo}</td>
          <td class="px-4 py-3 font-medium">${formatDateForDisplay(r.date)}</td>
          <td class="px-4 py-3 text-right">${r.units}</td>
          <td class="px-4 py-3 text-right">Rs. ${r.billCost.toLocaleString()}</td>
          <td class="px-4 py-3 text-right font-bold text-emerald-600 dark:text-emerald-400">Rs. ${r.amountPaid.toLocaleString()}</td>
          <td class="px-4 py-3 text-right text-amber-600 font-medium">Rs. ${r.newDue.toLocaleString()}</td>
          <td class="px-4 py-3 text-right text-blue-600 font-medium">Rs. ${r.newAdvance.toLocaleString()}</td>
          <td class="px-4 py-3">${getStatusBadge(r.status)}</td>
          <td class="px-4 py-3 text-center">
            <div class="flex items-center justify-center gap-2">
              <button onclick="viewReceipt('${r.id}')" class="p-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-gray-600 dark:text-gray-300" title="View Receipt">
                <i data-lucide="file-text" class="w-4 h-4"></i>
              </button>
              <button onclick="deleteRecord('${r.id}')" class="p-1.5 hover:bg-red-100 dark:hover:bg-red-950/50 rounded text-red-600 dark:text-red-400" title="Delete Record">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
          </td>
        `;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = selectedPaymentIds.has(r.id);
        checkbox.setAttribute('aria-label', `Select payment receipt ${r.receiptNo}`);
        checkbox.className = 'rounded border-gray-300 text-emerald-600 focus:ring-emerald-500';
        checkbox.addEventListener('change', () => togglePaymentSelection(r.id, checkbox.checked));
        tr.cells[0].appendChild(checkbox);
        tbody.appendChild(tr);
      });
      lucide.createIcons();
    }

    function getFilteredPaymentRecords() {
      const query = document.getElementById('records-search')?.value.toLowerCase() || '';
      return state.records.filter(record => {
        const searchable = `${record.receiptNo} ${record.date} ${formatDateForDisplay(record.date)}`.toLowerCase();
        return searchable.includes(query);
      });
    }

    function formatReceiptAmount(amount) {
      return Number(amount || 0).toLocaleString(undefined, { maximumFractionDigits: 2 });
    }

    function updatePaymentSelectionSummary(filtered = getFilteredPaymentRecords()) {
      const selectedRecords = state.records.filter(record => selectedPaymentIds.has(record.id));
      const total = selectedRecords.reduce((sum, record) => sum + Number(record.amountPaid || 0), 0);
      const summary = document.getElementById('records-selection-summary');
      const clearButton = document.getElementById('clear-payment-selection');
      const generateButton = document.getElementById('generate-combined-receipt');
      const selectAll = document.getElementById('select-all-payments');

      if (selectedRecords.length) {
        summary.textContent = `${selectedRecords.length} ${selectedRecords.length === 1 ? 'payment' : 'payments'} selected · Total: Rs. ${formatReceiptAmount(total)}`;
        summary.classList.remove('hidden');
        clearButton.classList.remove('hidden');
        clearButton.classList.add('flex');
        generateButton.classList.remove('hidden');
        generateButton.classList.add('flex');
      } else {
        summary.textContent = '';
        summary.classList.add('hidden');
        clearButton.classList.add('hidden');
        clearButton.classList.remove('flex');
        generateButton.classList.add('hidden');
        generateButton.classList.remove('flex');
      }

      const selectedVisible = filtered.filter(record => selectedPaymentIds.has(record.id)).length;
      selectAll.checked = filtered.length > 0 && selectedVisible === filtered.length;
      selectAll.indeterminate = selectedVisible > 0 && selectedVisible < filtered.length;
      selectAll.disabled = filtered.length === 0;
    }

    function togglePaymentSelection(id, selected) {
      if (selected) selectedPaymentIds.add(id);
      else selectedPaymentIds.delete(id);
      updatePaymentSelectionSummary();
    }

    function toggleSelectAllPayments(select) {
      getFilteredPaymentRecords().forEach(record => {
        if (select) selectedPaymentIds.add(record.id);
        else selectedPaymentIds.delete(record.id);
      });
      renderRecordsTable();
    }

    function clearPaymentSelection() {
      selectedPaymentIds.clear();
      renderRecordsTable();
    }

    function generateCombinedReceipt() {
      const selectedRecords = state.records.filter(record => selectedPaymentIds.has(record.id));
      if (selectedRecords.length === 0) {
        showToast('Select at least one payment record to generate a combined receipt.', 'error');
        return;
      }

      const rows = document.getElementById('combined-receipt-rows');
      rows.replaceChildren();
      selectedRecords.forEach(record => {
        const row = document.createElement('tr');
        [
          { value: formatDateForDisplay(record.date) },
          { value: record.receiptNo, className: 'font-mono font-semibold' },
          { value: record.paymentMethod || '—' },
          { value: `Rs. ${formatReceiptAmount(record.amountPaid)}`, className: 'amount font-semibold' }
        ].forEach(cellData => {
          const cell = document.createElement('td');
          cell.textContent = cellData.value;
          if (cellData.className) cell.className = cellData.className;
          row.appendChild(cell);
        });
        rows.appendChild(row);
      });

      const total = selectedRecords.reduce((sum, record) => sum + Number(record.amountPaid || 0), 0);
      const latest = selectedRecords[selectedRecords.length - 1];
      document.getElementById('combined-receipt-subtitle').textContent =
        `Combined receipt · ${selectedRecords.length} original payment ${selectedRecords.length === 1 ? 'record' : 'records'}`;
      document.getElementById('combined-receipt-count').textContent =
        `${selectedRecords.length} ${selectedRecords.length === 1 ? 'payment' : 'payments'}`;
      document.getElementById('combined-receipt-total').textContent = `Rs. ${formatReceiptAmount(total)}`;
      document.getElementById('combined-receipt-latest-date').textContent = formatDateForDisplay(latest.date);
      const due = Number(latest.newDue || 0);
      const advance = Number(latest.newAdvance || 0);
      document.getElementById('combined-receipt-balance').textContent =
        `Due: Rs. ${formatReceiptAmount(due)} · Advance: Rs. ${formatReceiptAmount(advance)}`;
      document.getElementById('combined-receipt-status').textContent = latest.status;

      activeReceiptType = 'combined';
      document.getElementById('receipt-card').classList.add('hidden');
      document.getElementById('combined-receipt-card').classList.remove('hidden');
      document.getElementById('receipt-print-label').textContent = 'Print Combined Receipt';
      switchTab('receipt');
      lucide.createIcons();
    }

    function deleteRecord(id) {
      showModal("Delete Payment Record", "Are you sure you want to delete this payment record? Ledger balance will be recalculated.", () => {
        if (!state.deletedRecordIds.includes(id)) state.deletedRecordIds.push(id);
        selectedPaymentIds.delete(id);
        state.records = state.records.filter(r => r.id !== id);
        rebuildLedger();
        showToast("Record deleted and ledger recalculated.");
        if (state.settings.autoExcelBackup !== false) void syncExcelBackup(true);
      });
    }

    /* ==========================================================================
       10. ANALYTICS — CONTROLLED LIFECYCLE (ROOT CAUSE FIXED)
       ========================================================================== */
    function destroyCharts() {
      Object.keys(activeCharts).forEach(key => {
        if (activeCharts[key]) {
          activeCharts[key].destroy();
          activeCharts[key] = null;
        }
      });
    }

    function renderAnalytics() {
      // 1. Calculate KPIs
      const totalUnits = state.records.reduce((acc, r) => acc + r.units, 0);
      const totalBilled = state.records.reduce((acc, r) => acc + r.billCost, 0);
      const avgBill = state.records.length > 0 ? Math.round(totalBilled / state.records.length) : 0;
      const maxBill = state.records.length > 0 ? Math.max(...state.records.map(r => r.billCost)) : 0;

      document.getElementById('analytics-total-units').textContent = `${totalUnits.toLocaleString()} kWh`;
      document.getElementById('analytics-avg-bill').textContent = `Rs. ${avgBill.toLocaleString()}`;
      document.getElementById('analytics-max-bill').textContent = `Rs. ${maxBill.toLocaleString()}`;
      document.getElementById('analytics-total-records').textContent = state.records.length;

      // 2. Destroy existing charts to prevent canvas loop and memory leak
      destroyCharts();

      const isDark = state.uiPreferences.theme === 'dark';
      const textColor = isDark ? '#9ca3af' : '#4b5563';
      const gridColor = isDark ? '#374151' : '#e5e7eb';

      const labels = state.records.map(r => formatDateForDisplay(r.date));
      const unitsData = state.records.map(r => r.units);
      const billedData = state.records.map(r => r.billCost);
      const paidData = state.records.map(r => r.amountPaid);

      // Common chart options enforcing maintainAspectRatio: false inside fixed parent
      const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: textColor } }
        },
        scales: {
          x: { ticks: { color: textColor }, grid: { color: gridColor } },
          y: { ticks: { color: textColor }, grid: { color: gridColor } }
        }
      };

      // Canvas 1: Consumption Trend
      const ctx1 = document.getElementById('chart-consumption')?.getContext('2d');
      if (ctx1) {
        activeCharts.consumption = new Chart(ctx1, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              label: 'Units Consumed (kWh)',
              data: unitsData,
              borderColor: '#10b981',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              fill: true,
              tension: 0.3
            }]
          },
          options: commonOptions
        });
      }

      // Canvas 2: Payment vs Billed Trend
      const ctx2 = document.getElementById('chart-payments')?.getContext('2d');
      if (ctx2) {
        activeCharts.payments = new Chart(ctx2, {
          type: 'bar',
          data: {
            labels,
            datasets: [
              { label: 'Billed (Rs)', data: billedData, backgroundColor: '#f59e0b' },
              { label: 'Paid (Rs)', data: paidData, backgroundColor: '#10b981' }
            ]
          },
          options: commonOptions
        });
      }

      // Canvas 3: Payment Methods Distribution
      const ctx3 = document.getElementById('chart-methods')?.getContext('2d');
      if (ctx3) {
        const methodCounts = {};
        state.records.forEach(r => {
          methodCounts[r.paymentMethod] = (methodCounts[r.paymentMethod] || 0) + 1;
        });

        activeCharts.methods = new Chart(ctx3, {
          type: 'doughnut',
          data: {
            labels: Object.keys(methodCounts),
            datasets: [{
              data: Object.values(methodCounts),
              backgroundColor: ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6']
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: textColor }, position: 'bottom' }
            }
          }
        });
      }
    }

    /* ==========================================================================
       11. SNAPSHOT, SETTINGS, & BACKUP RESTORE
       ========================================================================== */
    function renderSnapshotView() {
      const latest = getLatestLedgerState();
      document.getElementById('snap-advance').textContent = `Rs. ${latest.currentAdvance.toLocaleString()}`;
      document.getElementById('snap-due').textContent = `Rs. ${latest.currentDue.toLocaleString()}`;
      document.getElementById('snap-last-reading').textContent = latest.lastReading;
      document.getElementById('snap-rate').textContent = `Rs. ${state.settings.rate} / Unit`;
      document.getElementById('snap-last-date').textContent = formatDateForDisplay(latest.lastDate);
    }

    function loadSettingsForm() {
      document.getElementById('setting-rate').value = state.settings.rate;
      document.getElementById('setting-prefix').value = state.settings.receiptPrefix;
    }

    function saveSettings(e) {
      e.preventDefault();
      state.settings.rate = parseFloat(document.getElementById('setting-rate').value) || 10;
      state.settings.receiptPrefix = document.getElementById('setting-prefix').value || "EPR-";
      saveState();
      showToast("Configuration saved successfully.");
      refreshActiveViews();
    }

    function exportDataJSON() {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ElectroPay_Backup_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("Backup file downloaded.");
    }

    const EXCEL_BACKUP_FILE = 'Electricity_Payment_Backup.xlsx';
    const EXCEL_BACKUP_DB = 'ElectroPayBackupHandles';
    const EXCEL_BACKUP_STORE = 'handles';
    const EXCEL_RECORD_HEADERS = [
      'Record ID', 'Payment Date (as stored)', 'Internal Date', 'Receipt Number',
      'Previous Reading', 'Current Reading', 'Units', 'Rate', 'Electricity Cost',
      'Previous Advance', 'Advance Applied', 'Previous Due', 'Amount Required',
      'Amount Paid', 'Remaining Advance', 'Remaining Due', 'Status',
      'Payment Method', 'Remarks', 'Record Status', 'Last Updated'
    ];

    function openExcelBackupHandleStore() {
      return new Promise((resolve, reject) => {
        const request = indexedDB.open(EXCEL_BACKUP_DB, 1);
        request.onupgradeneeded = () => request.result.createObjectStore(EXCEL_BACKUP_STORE);
        request.onsuccess = () => resolve(request.result);
        request.onerror = () => reject(request.error || new Error('Could not open browser backup settings.'));
      });
    }

    async function storeExcelBackupDirectory(handle) {
      const db = await openExcelBackupHandleStore();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(EXCEL_BACKUP_STORE, 'readwrite');
        transaction.objectStore(EXCEL_BACKUP_STORE).put(handle, 'backup-directory');
        transaction.oncomplete = () => { db.close(); resolve(); };
        transaction.onerror = () => { const error = transaction.error; db.close(); reject(error || new Error('Could not save the backup folder permission.')); };
        transaction.onabort = () => { const error = transaction.error; db.close(); reject(error || new Error('Saving the backup folder permission was cancelled.')); };
      });
    }

    async function getExcelBackupDirectory() {
      const db = await openExcelBackupHandleStore();
      return new Promise((resolve, reject) => {
        const transaction = db.transaction(EXCEL_BACKUP_STORE, 'readonly');
        const request = transaction.objectStore(EXCEL_BACKUP_STORE).get('backup-directory');
        request.onsuccess = () => { const handle = request.result || null; db.close(); resolve(handle); };
        request.onerror = () => { const error = request.error; db.close(); reject(error || new Error('Could not read the saved backup folder.')); };
      });
    }

    async function updateExcelBackupLocationStatus() {
      const location = document.getElementById('excel-backup-location');
      if (!location) return;
      if (!window.showDirectoryPicker) {
        location.textContent = 'This browser does not support persistent folder access. Use current Chrome or Edge from localhost or HTTPS.';
        document.getElementById('excel-folder-button-label').textContent = 'Folder Access Unsupported';
        return;
      }

      try {
        const directory = await getExcelBackupDirectory();
        if (!directory) {
          location.textContent = 'Backup folder is not connected. Choose a folder to create or update the master workbook.';
          document.getElementById('excel-folder-button-label').textContent = 'Choose Backup Folder';
          return;
        }
        const permission = await directory.queryPermission({ mode: 'readwrite' });
        location.textContent = permission === 'granted'
          ? `Connected folder: ${directory.name}`
          : `Saved folder: ${directory.name}. Click Backup Now to grant access again.`;
        document.getElementById('excel-folder-button-label').textContent = 'Change Backup Folder';
        if (permission === 'granted' && window.ExcelJS) {
          try {
            const fileHandle = await directory.getFileHandle(EXCEL_BACKUP_FILE);
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(await (await fileHandle.getFile()).arrayBuffer());
            const records = validateExcelRecordsSheet(workbook.getWorksheet('Payment Records'));
            const metadata = getWorkbookMetadata(workbook.getWorksheet('Backup Information'));
            const lastBackup = metadata['Last Successful Backup (Local)'] || 'date unavailable';
            setExcelBackupStatus(`Master workbook ready. ${records.length} records (including archived rows); last successful backup: ${lastBackup}.`);
          } catch (error) {
            if (error.name === 'NotFoundError') {
              setExcelBackupStatus('Folder connected. The master workbook will be created on the first backup.');
            } else {
              setExcelBackupStatus(`The saved workbook could not be validated: ${error.message}`, true);
            }
          }
        }
      } catch (error) {
        console.error('Failed reading Excel backup folder permission:', error);
        location.textContent = 'Could not read the saved backup folder. Choose the folder again.';
      }
    }

    async function selectExcelBackupFolder() {
      if (!window.showDirectoryPicker) {
        showToast('Folder access is not available in this browser. Open the app from localhost in Chrome or Edge.', 'error');
        return;
      }
      try {
        const directory = await window.showDirectoryPicker({ id: 'electropay-backup', mode: 'readwrite' });
        await storeExcelBackupDirectory(directory);
        if (navigator.storage?.persist) await navigator.storage.persist();
        await updateExcelBackupLocationStatus();
        await syncExcelBackup(false);
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.error('Failed selecting Excel backup folder:', error);
        setExcelBackupStatus(`Could not connect the backup folder: ${error.message}`, true);
        showToast('Could not connect the Excel backup folder.', 'error');
      }
    }

    function setExcelBackupStatus(message, isError = false) {
      const status = document.getElementById('excel-backup-status');
      if (!status) return;
      status.textContent = message;
      status.classList.toggle('text-red-700', isError);
      status.classList.toggle('dark:text-red-300', isError);
      status.classList.toggle('text-emerald-800', !isError);
      status.classList.toggle('dark:text-emerald-200', !isError);
    }

    function setExcelAutoBackup(enabled) {
      state.settings.autoExcelBackup = enabled;
      saveState();
      showToast(enabled ? 'Automatic Excel backup enabled.' : 'Automatic Excel backup disabled.');
    }

    function excelDateValue(value) {
      if (value instanceof Date && !Number.isNaN(value.getTime())) {
        return value.toISOString().slice(0, 10);
      }
      return String(value ?? '').trim();
    }

    function validateExcelRecordsSheet(sheet) {
      if (!sheet || sheet.rowCount < 1) throw new Error('The workbook is missing its Payment Records sheet.');
      const actualHeaders = sheet.getRow(1).values.slice(1).map(value => String(value ?? '').trim());
      const required = ['Record ID', 'Payment Date (as stored)', 'Previous Reading', 'Current Reading', 'Rate', 'Amount Paid'];
      if (required.some(header => !actualHeaders.includes(header))) {
        throw new Error('The Payment Records sheet does not match the ElectroPay backup format. The existing workbook was not changed.');
      }
      const indexes = Object.fromEntries(actualHeaders.map((header, index) => [header, index + 1]));
      const records = [];
      const seenIds = new Set();

      for (let rowNumber = 2; rowNumber <= sheet.rowCount; rowNumber++) {
        const row = sheet.getRow(rowNumber);
        if (row.values.slice(1).every(value => value === null || value === undefined || value === '')) continue;
        const get = (header) => indexes[header] ? row.getCell(indexes[header]).value : '';
        const id = String(get('Record ID') ?? '').trim();
        if (!id) throw new Error(`Missing Record ID in workbook row ${rowNumber}. The existing workbook was not changed.`);
        if (seenIds.has(id)) throw new Error(`Duplicate Record ID "${id}" in the workbook. Resolve duplicates before synchronizing.`);
        seenIds.add(id);

        const previousReading = Number(get('Previous Reading'));
        const currentReading = Number(get('Current Reading'));
        const rate = Number(get('Rate'));
        const amountPaid = Number(get('Amount Paid'));
        const date = excelDateValue(get('Payment Date (as stored)'));
        if (!date || ![previousReading, currentReading, rate, amountPaid].every(Number.isFinite) ||
            previousReading < 0 || currentReading < previousReading || rate < 0 || amountPaid < 0) {
          throw new Error(`Invalid date, reading, rate, or amount in workbook row ${rowNumber}. The existing workbook was not changed.`);
        }
        records.push({
          id,
          date,
          receiptNo: String(get('Receipt Number') ?? ''),
          previousReading,
          currentReading,
          units: Number(get('Units')) || Math.max(0, currentReading - previousReading),
          rate,
          billCost: Number(get('Electricity Cost')) || 0,
          previousAdvance: Number(get('Previous Advance')) || 0,
          advanceApplied: Number(get('Advance Applied')) || 0,
          previousDue: Number(get('Previous Due')) || 0,
          netPayable: Number(get('Amount Required')) || 0,
          amountPaid,
          newAdvance: Number(get('Remaining Advance')) || 0,
          newDue: Number(get('Remaining Due')) || 0,
          status: String(get('Status') ?? ''),
          paymentMethod: String(get('Payment Method') ?? 'Cash'),
          remarks: String(get('Remarks') ?? ''),
          updatedAt: String(get('Last Updated') ?? ''),
          recordStatus: String(get('Record Status') || 'ACTIVE').toUpperCase() === 'DELETED' ? 'DELETED' : 'ACTIVE',
          rowNumber
        });
      }
      return records;
    }

    function getWorkbookMetadata(sheet) {
      const result = {};
      if (!sheet) return result;
      for (let row = 2; row <= sheet.rowCount; row++) {
        const key = String(sheet.getCell(row, 1).value ?? '').trim();
        if (key) result[key] = sheet.getCell(row, 2).value;
      }
      return result;
    }

    function sameExcelRecord(appRecord, excelRecord) {
      const numericFields = [
        'previousReading', 'currentReading', 'units', 'rate', 'billCost',
        'previousAdvance', 'advanceApplied', 'previousDue', 'netPayable',
        'amountPaid', 'newAdvance', 'newDue'
      ];
      return appRecord.date === excelRecord.date &&
        appRecord.receiptNo === excelRecord.receiptNo &&
        numericFields.every(field => Number(appRecord[field]) === Number(excelRecord[field])) &&
        appRecord.status === excelRecord.status &&
        String(appRecord.paymentMethod || 'Cash') === excelRecord.paymentMethod &&
        String(appRecord.remarks || '') === excelRecord.remarks &&
        String(appRecord.recordStatus || 'ACTIVE') === excelRecord.recordStatus &&
        String(appRecord.updatedAt || appRecord.createdAt || '') === excelRecord.updatedAt;
    }

    function excelRowFromAppRecord(record, recordStatus = 'ACTIVE') {
      return {
        id: record.id,
        date: record.date,
        receiptNo: record.receiptNo,
        previousReading: Number(record.previousReading),
        currentReading: Number(record.currentReading),
        units: Number(record.units),
        rate: Number(record.rate),
        billCost: Number(record.billCost),
        previousAdvance: Number(record.previousAdvance),
        advanceApplied: Number(record.advanceApplied),
        previousDue: Number(record.previousDue),
        netPayable: Number(record.netPayable),
        amountPaid: Number(record.amountPaid),
        newAdvance: Number(record.newAdvance),
        newDue: Number(record.newDue),
        status: record.status,
        paymentMethod: record.paymentMethod || 'Cash',
        remarks: record.remarks || '',
        recordStatus,
        updatedAt: record.updatedAt || record.createdAt || ''
      };
    }

    function appRecordFromExcelRecord(record) {
      return {
        id: record.id,
        date: record.date,
        receiptNo: record.receiptNo,
        previousReading: record.previousReading,
        currentReading: record.currentReading,
        rate: record.rate,
        amountPaid: record.amountPaid,
        paymentMethod: record.paymentMethod,
        remarks: record.remarks,
        updatedAt: record.updatedAt
      };
    }

    function requestExcelConflictChoices(conflicts) {
      const container = document.getElementById('excel-conflict-list');
      container.replaceChildren();
      conflicts.forEach((conflict, index) => {
        const card = document.createElement('div');
        card.className = 'rounded-xl border border-amber-200 bg-amber-50/70 p-3 dark:border-amber-900 dark:bg-amber-950/20';
        const title = document.createElement('p');
        title.className = 'font-mono text-xs font-bold text-gray-900 dark:text-gray-100';
        title.textContent = conflict.id;
        card.appendChild(title);

        const details = document.createElement('p');
        details.className = 'mt-1 text-xs text-gray-600 dark:text-gray-300';
        details.textContent = `App: Rs. ${Number(conflict.appRecord.amountPaid).toLocaleString()} paid, ${conflict.appRecord.status}; Excel: Rs. ${Number(conflict.excelRecord.amountPaid).toLocaleString()} paid, ${conflict.excelRecord.status || conflict.excelRecord.recordStatus}.`;
        card.appendChild(details);

        const choices = document.createElement('div');
        choices.className = 'mt-3 flex flex-wrap gap-x-5 gap-y-2 text-xs text-gray-700 dark:text-gray-200';
        [['app', 'Keep app version'], ['excel', 'Keep Excel version']].forEach(([value, label]) => {
          const choiceLabel = document.createElement('label');
          choiceLabel.className = 'inline-flex items-center gap-1.5 cursor-pointer';
          const input = document.createElement('input');
          input.type = 'radio';
          input.name = `excel-conflict-${index}`;
          input.value = value;
          input.checked = value === 'app';
          input.className = 'text-emerald-600 focus:ring-emerald-500';
          choiceLabel.append(input, document.createTextNode(label));
          choices.appendChild(choiceLabel);
        });
        card.appendChild(choices);
        container.appendChild(card);
      });

      document.getElementById('excel-conflict-modal').classList.remove('hidden');
      lucide.createIcons();
      return new Promise(resolve => { pendingExcelConflicts = { conflicts, resolve }; });
    }

    function confirmExcelConflicts() {
      if (!pendingExcelConflicts) return;
      const choices = pendingExcelConflicts.conflicts.map((_, index) =>
        document.querySelector(`input[name="excel-conflict-${index}"]:checked`)?.value || 'app'
      );
      resolveExcelConflicts(choices);
    }

    function resolveExcelConflicts(choices) {
      if (!pendingExcelConflicts) return;
      const { resolve } = pendingExcelConflicts;
      pendingExcelConflicts = null;
      document.getElementById('excel-conflict-modal').classList.add('hidden');
      resolve(choices);
    }

    function applyExcelRecordToApp(target, source) {
      target.date = source.date;
      target.receiptNo = source.receiptNo;
      target.previousReading = source.previousReading;
      target.currentReading = source.currentReading;
      target.rate = source.rate;
      target.amountPaid = source.amountPaid;
      target.paymentMethod = source.paymentMethod;
      target.remarks = source.remarks;
      target.updatedAt = new Date().toISOString();
    }

    function getWorksheetMetadata(workbook) {
      return getWorkbookMetadata(workbook.getWorksheet('Backup Information'));
    }

    function buildExcelBackupWorkbook(workbook, activeRecords, archivedRecords, metadata, syncResult) {
      ['Payment Records', 'Monthly Summary', 'Statistics', 'Backup Information', 'Calculation Method'].forEach(name => {
        const existing = workbook.getWorksheet(name);
        if (existing) workbook.removeWorksheet(existing.id);
      });

      const allRecords = [
        ...activeRecords.map(record => excelRowFromAppRecord(record, 'ACTIVE')),
        ...archivedRecords.map(record => ({ ...record, recordStatus: 'DELETED' }))
      ];
      allRecords.sort((a, b) => String(a.date).localeCompare(String(b.date)) || a.id.localeCompare(b.id));

      const recordsSheet = workbook.addWorksheet('Payment Records', { views: [{ state: 'frozen', ySplit: 1 }] });
      const rowValues = allRecords.map(record => [
        record.id, record.date, record.date, record.receiptNo, record.previousReading,
        record.currentReading, record.units, record.rate, record.billCost,
        record.previousAdvance, record.advanceApplied, record.previousDue,
        record.netPayable, record.amountPaid, record.newAdvance, record.newDue,
        record.status, record.paymentMethod, record.remarks, record.recordStatus, record.updatedAt
      ]);
      recordsSheet.addTable({
        name: 'ElectroPayPaymentRecords',
        ref: 'A1',
        headerRow: true,
        totalsRow: false,
        style: { theme: 'TableStyleMedium4', showRowStripes: true },
        columns: EXCEL_RECORD_HEADERS.map(name => ({ name })),
        rows: rowValues
      });
      recordsSheet.columns = [
        { width: 24 }, { width: 22 }, { width: 16 }, { width: 20 },
        { width: 18, style: { numFmt: '#,##0.00' } }, { width: 18, style: { numFmt: '#,##0.00' } },
        { width: 12, style: { numFmt: '#,##0.00' } }, { width: 14, style: { numFmt: '#,##0.00' } },
        { width: 18, style: { numFmt: '"Rs. " #,##0.00' } }, { width: 18, style: { numFmt: '"Rs. " #,##0.00' } },
        { width: 16, style: { numFmt: '"Rs. " #,##0.00' } }, { width: 16, style: { numFmt: '"Rs. " #,##0.00' } },
        { width: 18, style: { numFmt: '"Rs. " #,##0.00' } }, { width: 18, style: { numFmt: '"Rs. " #,##0.00' } },
        { width: 18, style: { numFmt: '"Rs. " #,##0.00' } }, { width: 16, style: { numFmt: '"Rs. " #,##0.00' } },
        { width: 16 }, { width: 20 }, { width: 36 }, { width: 16 }, { width: 28 }
      ];
      recordsSheet.getRow(1).height = 30;
      recordsSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      recordsSheet.autoFilter = { from: 'A1', to: `U${Math.max(1, allRecords.length + 1)}` };
      if (allRecords.length) {
        recordsSheet.addConditionalFormatting({
          ref: `Q2:Q${allRecords.length + 1}`,
          rules: [
            { type: 'containsText', text: 'PAID', style: { font: { color: { argb: 'FF15803D' }, bold: true }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFDCFCE7' } } } },
            { type: 'containsText', text: 'PARTIAL', style: { font: { color: { argb: 'FFB45309' }, bold: true }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEF3C7' } } } },
            { type: 'containsText', text: 'DUE', style: { font: { color: { argb: 'FFB91C1C' }, bold: true }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEE2E2' } } } }
          ]
        });
        recordsSheet.addConditionalFormatting({
          ref: `T2:T${allRecords.length + 1}`,
          rules: [
            { type: 'containsText', text: 'DELETED', style: { font: { color: { argb: 'FF6B7280' }, italic: true }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFF3F4F6' } } } }
          ]
        });
      }

      const monthly = new Map();
      activeRecords.forEach(record => {
        const month = String(record.date).slice(0, 7) || 'Unknown';
        const current = monthly.get(month) || { count: 0, units: 0, billed: 0, paid: 0, due: 0, advance: 0 };
        current.count++;
        current.units += Number(record.units);
        current.billed += Number(record.billCost);
        current.paid += Number(record.amountPaid);
        current.due = Number(record.newDue);
        current.advance = Number(record.newAdvance);
        monthly.set(month, current);
      });
      const monthlySheet = workbook.addWorksheet('Monthly Summary', { views: [{ state: 'frozen', ySplit: 1 }] });
      monthlySheet.addTable({
        name: 'ElectroPayMonthlySummary', ref: 'A1', headerRow: true, totalsRow: false,
        style: { theme: 'TableStyleMedium4', showRowStripes: true },
        columns: ['Month (as stored by app)', 'Records', 'Units', 'Billed (Rs.)', 'Paid (Rs.)', 'Ending Due (Rs.)', 'Ending Advance (Rs.)'].map(name => ({ name })),
        rows: [...monthly.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([month, values]) =>
          [month, values.count, values.units, values.billed, values.paid, values.due, values.advance])
      });
      monthlySheet.columns = [{ width: 24 }, { width: 12 }, { width: 14 }, { width: 18 }, { width: 18 }, { width: 20 }, { width: 22 }];
      monthlySheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      for (let col = 4; col <= 7; col++) monthlySheet.getColumn(col).numFmt = '"Rs. " #,##0.00';

      const activeBilled = activeRecords.reduce((sum, record) => sum + Number(record.billCost), 0);
      const activePaid = activeRecords.reduce((sum, record) => sum + Number(record.amountPaid), 0);
      const statistics = workbook.addWorksheet('Statistics');
      statistics.addRows([
        ['Metric', 'Value'],
        ['Active records', activeRecords.length],
        ['Archived deleted records', archivedRecords.length],
        ['Total units consumed', activeRecords.reduce((sum, record) => sum + Number(record.units), 0)],
        ['Total electricity cost (Rs.)', activeBilled],
        ['Total amount paid (Rs.)', activePaid],
        ['Current due (Rs.)', activeRecords.length ? Number(activeRecords[activeRecords.length - 1].newDue) : 0],
        ['Current advance (Rs.)', activeRecords.length ? Number(activeRecords[activeRecords.length - 1].newAdvance) : 0]
      ]);
      statistics.columns = [{ width: 34 }, { width: 24 }];
      statistics.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      statistics.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF047857' } };
      for (let row = 5; row <= 8; row++) statistics.getCell(row, 2).numFmt = '"Rs. " #,##0.00';

      const backupInfo = workbook.addWorksheet('Backup Information');
      const now = new Date();
      const firstBackup = metadata['First Backup (ISO)'] || now.toISOString();
      const backupRows = [
        ['Field', 'Value'],
        ['Backup File', EXCEL_BACKUP_FILE],
        ['First Backup (ISO)', firstBackup],
        ['Last Successful Backup (ISO)', now.toISOString()],
        ['Last Successful Backup (Local)', now.toLocaleString()],
        ['Active Records', activeRecords.length],
        ['Archived Deleted Records', archivedRecords.length],
        ['Software Version', state.version],
        ['Default Rate', state.settings.rate],
        ['Receipt Number Prefix', state.settings.receiptPrefix],
        ['Payment Methods (JSON)', JSON.stringify(state.settings.paymentMethods || [])],
        ['Backup Status', 'SUCCESS'],
        ['Last Synchronization', `${syncResult.added} new, ${syncResult.updated} updated, ${syncResult.deleted} archived, ${syncResult.restored} recovered from Excel`],
        ['Application Date Format', 'Original app value preserved; not converted to Bikram Sambat.'],
        ['Workbook Format Version', '1']
      ];
      backupInfo.addRows(backupRows);
      backupInfo.columns = [{ width: 34 }, { width: 88 }];
      backupInfo.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      backupInfo.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF047857' } };

      const method = workbook.addWorksheet('Calculation Method');
      method.addRows([
        ['Field', 'Calculation / Meaning'],
        ['Units', 'max(0, Current Reading - Previous Reading)'],
        ['Electricity Cost', 'Units × Rate'],
        ['Advance Applied', 'min(Previous Advance, Electricity Cost)'],
        ['Amount Required', '(Electricity Cost - Advance Applied) + Previous Due'],
        ['Remaining Due', 'max(0, Amount Required - Amount Paid)'],
        ['Remaining Advance', 'Unapplied previous advance + any payment above Amount Required'],
        ['Status', 'DUE / PARTIAL / PAID / ADVANCE, using the application ledger rules'],
        ['Record Status', 'ACTIVE records are in the application; DELETED rows are retained in the archive.'],
        ['Date Handling', 'The application currently stores its entered date as YYYY-MM-DD. The workbook preserves that exact value; no BS conversion is inferred.'],
        ['Recovery', 'Restore ACTIVE rows only. Archived DELETED rows remain available for audit and are not reactivated automatically.']
      ]);
      method.columns = [{ width: 28 }, { width: 100 }];
      method.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      method.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF047857' } };
      workbook.creator = 'ElectroPay';
      workbook.lastModifiedBy = 'ElectroPay';
      workbook.modified = now;
    }

    async function verifyExcelBackup(fileHandle, expectedRecords) {
      const savedFile = await fileHandle.getFile();
      if (savedFile.size === 0) throw new Error('The saved workbook is empty.');
      const workbook = new ExcelJS.Workbook();
      await workbook.xlsx.load(await savedFile.arrayBuffer());
      const records = validateExcelRecordsSheet(workbook.getWorksheet('Payment Records'));
      const actualById = new Map(records.map(record => [record.id, record]));
      if (actualById.size !== expectedRecords.length ||
          expectedRecords.some(expected => !actualById.has(expected.id) || !sameExcelRecord(expected, actualById.get(expected.id)))) {
        throw new Error('The saved workbook did not pass the record ID and payment-data verification check.');
      }
      return records.length;
    }

    async function writeExcelBackup(fileHandle, workbook, oldBytes, expectedRecords) {
      const data = await workbook.xlsx.writeBuffer();
      const writable = await fileHandle.createWritable();
      try {
        await writable.write(data);
        await writable.close();
      } catch (writeError) {
        try { await writable.abort(); } catch (abortError) { console.error('Failed aborting incomplete workbook write:', abortError); }
        throw writeError;
      }

      try {
        return await verifyExcelBackup(fileHandle, expectedRecords);
      } catch (verificationError) {
        if (oldBytes) {
          try {
            const recoveryWriter = await fileHandle.createWritable();
            await recoveryWriter.write(oldBytes);
            await recoveryWriter.close();
          } catch (recoveryError) {
            throw new Error(`Workbook verification failed (${verificationError.message}), and the previous workbook could not be restored (${recoveryError.message}).`);
          }
        }
        throw new Error(`Workbook verification failed; the previous workbook was restored. ${verificationError.message}`);
      }
    }

    async function syncExcelBackup(automatic = false) {
      if (automatic && state.settings.autoExcelBackup === false) return;
      if (!automatic) {
        try {
          if (!(await getExcelBackupDirectory())) {
            await selectExcelBackupFolder();
            return;
          }
        } catch (error) {
          console.error('Failed reading Excel backup folder:', error);
          setExcelBackupStatus(`Could not read the saved backup folder: ${error.message}`, true);
          showToast('Could not access the Excel backup folder.', 'error');
          return;
        }
      }
      if (excelSyncInProgress) {
        setExcelBackupStatus('An Excel backup is already in progress. Please wait.');
        return;
      }
      if (!window.ExcelJS) {
        const message = 'Excel workbook support could not load. Check your internet connection and reload the app.';
        setExcelBackupStatus(message, true);
        if (!automatic) showToast(message, 'error');
        return;
      }
      excelSyncInProgress = true;
      let oldBytes = null;
      let stateBeforeSync = null;
      let directory = null;
      let isNewWorkbook = false;
      try {
        directory = await getExcelBackupDirectory();
        if (!directory) {
          if (automatic) {
            setExcelBackupStatus('Automatic backup is waiting for a folder. Choose Backup Folder to connect one.', true);
            showToast('Payment saved, but Excel backup is not connected. Choose a backup folder to enable automatic backups.', 'error');
            return;
          }
          await selectExcelBackupFolder();
          return;
        }
        let permission = await directory.queryPermission({ mode: 'readwrite' });
        if (permission !== 'granted') permission = await directory.requestPermission({ mode: 'readwrite' });
        if (permission !== 'granted') throw new Error('Folder access was not granted.');

        setExcelBackupStatus('Checking records and synchronizing the master workbook…');
        stateBeforeSync = JSON.parse(JSON.stringify(state));
        const appRecords = state.records.map(record => ({ ...record }));
        const appById = new Map();
        for (const record of appRecords) {
          if (!record.id || appById.has(record.id)) throw new Error('The application contains a missing or duplicate Record ID. No workbook changes were made.');
          appById.set(record.id, record);
        }

        let fileHandle;
        let workbook = new ExcelJS.Workbook();
        let existingRows = [];
        let metadata = {};
        try {
          fileHandle = await directory.getFileHandle(EXCEL_BACKUP_FILE);
          const existingFile = await fileHandle.getFile();
          oldBytes = await existingFile.arrayBuffer();
          if (existingFile.size === 0) throw new Error('The existing Excel backup file is empty. It was not overwritten.');
          await workbook.xlsx.load(oldBytes);
          const recordsSheet = workbook.getWorksheet('Payment Records');
          existingRows = validateExcelRecordsSheet(recordsSheet);
          metadata = getWorkbookMetadata(workbook.getWorksheet('Backup Information'));
        } catch (error) {
          if (error.name === 'NotFoundError') {
            fileHandle = await directory.getFileHandle(EXCEL_BACKUP_FILE, { create: true });
            workbook = new ExcelJS.Workbook();
            isNewWorkbook = true;
          } else {
            throw error;
          }
        }

        const existingActive = existingRows.filter(record => record.recordStatus === 'ACTIVE');
        const missingFromApp = existingActive.filter(record => !appById.has(record.id) && !state.deletedRecordIds.includes(record.id));
        const allowedDifference = Math.max(2, Math.ceil(existingActive.length * 0.2));
        if (missingFromApp.length > allowedDifference) {
          const message = `Significant data discrepancy detected. App records: ${appRecords.length}. Active Excel backup records: ${existingActive.length}. Synchronization paused to protect the backup. Restore from Excel or review the records before trying again.`;
          setExcelBackupStatus(message, true);
          showModal('Backup paused to protect your data', message, null);
          return;
        }

        const existingById = new Map(existingRows.map(record => [record.id, record]));
        const conflicts = [];
        for (const record of appRecords) {
          const existing = existingById.get(record.id);
          if (!existing) continue;
          if (!sameExcelRecord(record, existing) ||
              (existing.recordStatus === 'DELETED' && !state.deletedRecordIds.includes(record.id))) {
            conflicts.push({ id: record.id, appRecord: record, excelRecord: existing });
          }
        }

        let choices = [];
        if (conflicts.length) {
          if (automatic) {
            const message = `${conflicts.length} record conflict${conflicts.length === 1 ? '' : 's'} require review. Automatic synchronization was paused; choose Backup Now to compare versions.`;
            setExcelBackupStatus(message, true);
            showToast('Excel backup paused: record conflicts need review.', 'error');
            return;
          }
          choices = await requestExcelConflictChoices(conflicts);
          if (!choices) {
            setExcelBackupStatus('Synchronization cancelled. The Excel workbook was not changed.');
            return;
          }
        }

        let added = 0;
        let updated = 0;
        let deleted = 0;
        let restored = 0;
        for (let index = 0; index < conflicts.length; index++) {
          const conflict = conflicts[index];
          const appRecord = appById.get(conflict.id);
          if (choices[index] === 'excel') {
            if (conflict.excelRecord.recordStatus === 'DELETED') {
              state.records = state.records.filter(record => record.id !== conflict.id);
              if (!state.deletedRecordIds.includes(conflict.id)) state.deletedRecordIds.push(conflict.id);
            } else {
              applyExcelRecordToApp(appRecord, conflict.excelRecord);
            }
          }
        }

        for (const excelRecord of existingActive) {
          if (appById.has(excelRecord.id)) continue;
          if (state.deletedRecordIds.includes(excelRecord.id)) {
            excelRecord.recordStatus = 'DELETED';
            deleted++;
          } else {
            state.records.push(appRecordFromExcelRecord(excelRecord));
            appById.set(excelRecord.id, state.records[state.records.length - 1]);
            restored++;
          }
        }

        const knownRows = new Map(existingRows.map(record => [record.id, record]));
        for (const record of state.records) {
          const previous = knownRows.get(record.id);
          if (!previous) added++;
          else if (!sameExcelRecord(record, previous) || previous.recordStatus === 'DELETED') updated++;
        }
        rebuildLedger();
        const activeRows = state.records.map(record => excelRowFromAppRecord(record, 'ACTIVE'));
        const activeIds = new Set(activeRows.map(record => record.id));
        const archivedRows = existingRows
          .filter(record => !activeIds.has(record.id))
          .map(record => ({ ...record, recordStatus: 'DELETED' }));

        const syncResult = { added, updated, deleted, restored };
        buildExcelBackupWorkbook(workbook, state.records, archivedRows, metadata, syncResult);
        const expectedRecords = [
          ...state.records,
          ...archivedRows
        ];
        const verifiedTotal = await writeExcelBackup(fileHandle, workbook, oldBytes, expectedRecords);
        await updateExcelBackupLocationStatus();
        const completedAt = new Date().toLocaleString();
        const message = `Backup completed: ${added} new, ${updated} updated, ${deleted} archived, ${restored} recovered from Excel. ${verifiedTotal} total records verified. Last backup: ${completedAt}.`;
        setExcelBackupStatus(message);
        if (!automatic) showToast(`Excel backup completed. ${verifiedTotal} records verified.`);
        saveState();
      } catch (error) {
        console.error('Excel backup synchronization failed:', error);
        if (isNewWorkbook && directory) {
          try {
            await directory.removeEntry(EXCEL_BACKUP_FILE);
          } catch (cleanupError) {
            console.error('Failed removing an incomplete new workbook:', cleanupError);
          }
        }
        if (stateBeforeSync) {
          state = stateBeforeSync;
          saveState();
          refreshActiveViews();
        }
        const message = `Backup failed. The master Excel workbook was not reported as updated: ${error.message}`;
        setExcelBackupStatus(message, true);
        showToast('Excel backup failed. Check the backup status for details.', 'error');
      } finally {
        excelSyncInProgress = false;
      }
    }

    async function restoreFromExcel(event) {
      const file = event.target.files?.[0];
      event.target.value = '';
      if (!file) return;
      if (!window.ExcelJS) {
        showToast('Excel workbook support could not load. Check your internet connection and reload the app.', 'error');
        return;
      }

      try {
        const workbook = new ExcelJS.Workbook();
        await workbook.xlsx.load(await file.arrayBuffer());
        const rows = validateExcelRecordsSheet(workbook.getWorksheet('Payment Records'));
        const duplicateSafeRows = rows.filter(record => record.recordStatus === 'ACTIVE');
        const invalidIds = duplicateSafeRows.filter(record => !record.id);
        if (invalidIds.length) throw new Error('Some active workbook rows do not have a Record ID.');
        const restoredRecords = duplicateSafeRows.map(appRecordFromExcelRecord);
        if (!restoredRecords.length) throw new Error('The workbook contains no active payment records to restore.');
        const backupMetadata = getWorkbookMetadata(workbook.getWorksheet('Backup Information'));
        let restoredPaymentMethods = state.settings.paymentMethods;
        if (backupMetadata['Payment Methods (JSON)']) {
          try {
            const methods = JSON.parse(backupMetadata['Payment Methods (JSON)']);
            if (Array.isArray(methods) && methods.every(method => typeof method === 'string')) restoredPaymentMethods = methods;
          } catch (error) {
            throw new Error('The workbook contains invalid payment-method settings.');
          }
        }
        const restoredRate = Number(backupMetadata['Default Rate']);
        const restoredPrefix = String(backupMetadata['Receipt Number Prefix'] || state.settings.receiptPrefix);

        const message = `Restore ${restoredRecords.length} active records from "${file.name}"? This replaces the application's current ${state.records.length} records. A downloadable snapshot of the current application data will be created first. Archived DELETED rows will remain in the workbook and will not be restored.`;
        showModal('Confirm Excel restore', message, () => {
          try {
            downloadRestoreSnapshot();
            state.records = restoredRecords;
            state.deletedRecordIds = rows.filter(record => record.recordStatus === 'DELETED').map(record => record.id);
            if (Number.isFinite(restoredRate) && restoredRate >= 0) state.settings.rate = restoredRate;
            state.settings.receiptPrefix = restoredPrefix;
            state.settings.paymentMethods = restoredPaymentMethods;
            rebuildLedger();
            showToast(`${restoredRecords.length} records restored from Excel.`);
            setExcelBackupStatus(`${restoredRecords.length} records restored from ${file.name}. Choose Backup Now to synchronize the selected workbook.`);
          } catch (error) {
            console.error('Excel restore failed:', error);
            showToast(`Excel restore failed: ${error.message}`, 'error');
          }
        });
      } catch (error) {
        console.error('Failed reading Excel restore workbook:', error);
        showToast(`Restore failed. ${error.message}`, 'error');
      }
    }

    function downloadRestoreSnapshot() {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `ElectroPay_PreRestore_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function importDataJSON(e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (evt) => {
        try {
          const imported = JSON.parse(evt.target.result);
          if (imported && Array.isArray(imported.records)) {
            state = { ...state, ...imported };
            rebuildLedger();
            showToast("System restored successfully!");
            switchTab('dashboard');
          } else {
            showToast("Invalid backup file format.", "error");
          }
        } catch (err) {
          showToast("Failed to parse JSON file.", "error");
        }
      };
      reader.readAsText(file);
    }

    function confirmResetSystem() {
      showModal("Reset System State", "Are you sure you want to reset all records and settings? This action cannot be undone.", () => {
        state.records = [];
        state.settings = { rate: 10, receiptPrefix: "EPR-", paymentMethods: ["Cash", "eSewa", "Khalti", "Bank Transfer"] };
        rebuildLedger();
        showToast("System state reset to defaults.");
        switchTab('dashboard');
      });
    }

    /* ==========================================================================
       12. RECEIPT VIEW & PRINT ENGINE
       ========================================================================== */
    function viewReceipt(id) {
      const rec = state.records.find(r => r.id === id);
      if (!rec) return;

      activeReceiptType = 'single';
      document.getElementById('combined-receipt-card').classList.add('hidden');
      document.getElementById('receipt-card').classList.remove('hidden');
      document.getElementById('receipt-print-label').textContent = 'Print Receipt';
      document.getElementById('rcpt-no').textContent = rec.receiptNo;
      document.getElementById('rcpt-date').textContent = formatDateForDisplay(rec.date);
      document.getElementById('rcpt-prev-reading').textContent = rec.previousReading;
      document.getElementById('rcpt-curr-reading').textContent = rec.currentReading;
      document.getElementById('rcpt-units').textContent = rec.units;
      document.getElementById('rcpt-rate').textContent = `Rs. ${rec.rate}`;
      document.getElementById('rcpt-cost').textContent = `Rs. ${rec.billCost.toLocaleString()}`;

      document.getElementById('rcpt-prev-advance').textContent = `Rs. ${rec.previousAdvance.toLocaleString()}`;
      document.getElementById('rcpt-advance-applied').textContent = `Rs. ${rec.advanceApplied.toLocaleString()}`;
      document.getElementById('rcpt-prev-due').textContent = `Rs. ${rec.previousDue.toLocaleString()}`;
      document.getElementById('rcpt-amount-paid').textContent = `Rs. ${rec.amountPaid.toLocaleString()}`;
      document.getElementById('rcpt-method').textContent = rec.paymentMethod;
      document.getElementById('rcpt-new-advance').textContent = `Rs. ${rec.newAdvance.toLocaleString()}`;
      document.getElementById('rcpt-new-due').textContent = `Rs. ${rec.newDue.toLocaleString()}`;

      const badge = document.getElementById('rcpt-status-badge');
      const statusStyles = {
        PAID: ['circle-check', 'bg-emerald-100 text-emerald-800'],
        ADVANCE: ['wallet', 'bg-blue-100 text-blue-800'],
        PARTIAL: ['circle-alert', 'bg-amber-100 text-amber-800'],
        DUE: ['circle-x', 'bg-red-100 text-red-800']
      };
      const [statusIcon, statusColor] = statusStyles[rec.status] || statusStyles.DUE;
      badge.className = `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${statusColor}`;
      badge.innerHTML = `<i data-lucide="${statusIcon}" class="w-3.5 h-3.5" aria-hidden="true"></i>${rec.status}`;

      switchTab('receipt');
      lucide.createIcons();
    }

    function printReceipt() {
      if (activeReceiptType === 'combined' && selectedPaymentIds.size === 0) {
        showToast('Select payment records again before printing the combined receipt.', 'error');
        return;
      }
      document.body.classList.add('printing-receipt');
      document.body.classList.toggle('printing-combined-receipt', activeReceiptType === 'combined');
      window.print();
    }

    /* ==========================================================================
       13. HELPERS: BADGES, TOASTS & MODALS
       ========================================================================== */
    function getStatusBadge(status, id = '') {
      const idAttr = id ? `id="${id}"` : '';
      switch (status) {
        case 'PAID':
          return `<span ${idAttr} class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-400">PAID</span>`;
        case 'ADVANCE':
          return `<span ${idAttr} class="px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-400">ADVANCE</span>`;
        case 'PARTIAL':
          return `<span ${idAttr} class="px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-400">PARTIAL</span>`;
        default:
          return `<span ${idAttr} class="px-2 py-0.5 rounded text-xs font-semibold bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-400">DUE</span>`;
      }
    }

    function showToast(msg, type = "success") {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = `pointer-events-auto px-4 py-2.5 rounded-lg text-xs font-medium text-white shadow-lg flex items-center gap-2 transition-all duration-300 transform translate-y-2 opacity-0 ${
        type === 'error' ? 'bg-red-600' : 'bg-emerald-600'
      }`;
      toast.innerHTML = `<i data-lucide="${type === 'error' ? 'alert-circle' : 'check-circle'}" class="w-4 h-4"></i><span>${msg}</span>`;
      container.appendChild(toast);
      lucide.createIcons();

      setTimeout(() => {
        toast.classList.remove('translate-y-2', 'opacity-0');
      }, 10);

      setTimeout(() => {
        toast.classList.add('opacity-0');
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    function showModal(title, msg, onConfirm) {
      document.getElementById('modal-title').textContent = title;
      document.getElementById('modal-msg').textContent = msg;
      const confirmBtn = document.getElementById('modal-btn-confirm');

      confirmBtn.onclick = () => {
        closeModal();
        if (onConfirm) onConfirm();
      };

      document.getElementById('custom-modal').classList.remove('hidden');
    }

    function closeModal() {
      document.getElementById('custom-modal').classList.add('hidden');
    }
