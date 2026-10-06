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
        navCustomers: "Customers",
        navPaymentRecords: "Payment Records",
        navDeletedRecords: "Deleted Records",
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
        viewAllPayments: "View All Payments",
        serialNumber: "S.N.",
        customerNumber: "Customer No.",
        paymentNumber: "Payment No.",
        receiptNumber: "Receipt No.",
        tblDate: "Date",
        tblCustomer: "Customer",
        tblReceipt: "Payment Ref.",
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
        firstReadingBadge: "FIRST READING",
        firstReadingNotice: "No previous meter reading is available for this customer. This is their initial reading; consumption will be billed after the next reading.",
        firstReadingUnavailable: "Not Available (First Reading)",
        readingType: "Reading Type",
        readingTypeFirst: "First Reading",
        readingTypeNormal: "Normal Billing",
        readingLowerError: "Current reading cannot be lower than the previous reading.",
        missingPreviousReadingError: "A previous reading is required for an existing customer.",
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
        rcptFooterMsg: "Thank you for your prompt payment. Keep this receipt for future reference.",
        customerDirectory: "Customer Directory",
        customerDirectoryDesc: "Manage customer identity and optional contact details.",
        customerName: "Customer Name",
        customerContact: "Contact Number",
        customerLocation: "Location",
        optional: "Optional",
        addCustomer: "Add Customer",
        saveCustomer: "Save Customer",
        cancel: "Cancel",
        notProvided: "Not provided",
        editCustomer: "Edit Customer"
      },
      ne: {
        appName: "इलेक्ट्रो-पे",
        appSubTitle: "लेजर र बिलिङ",
        navMain: "मुख्य",
        navDashboard: "ड्यासबोर्ड",
        navNewPayment: "नयाँ भुक्तानी",
        navCustomers: "ग्राहकहरू",
        navPaymentRecords: "भुक्तानी रेकर्डहरू",
        navDeletedRecords: "मेटाइएका रेकर्डहरू",
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
        viewAllPayments: "सबै भुक्तानी हेर्नुहोस्",
        serialNumber: "क्र.सं.",
        customerNumber: "ग्राहक नं.",
        paymentNumber: "भुक्तानी नं.",
        receiptNumber: "रसिद नं.",
        tblDate: "मिति",
        tblCustomer: "ग्राहक",
        tblReceipt: "भुक्तानी सन्दर्भ",
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
        firstReadingBadge: "पहिलो रिडिङ",
        firstReadingNotice: "यस ग्राहकको अघिल्लो मिटर रिडिङ उपलब्ध छैन। यो प्रारम्भिक रिडिङ हो; अर्को रिडिङपछि खपतको बिल लाग्नेछ।",
        firstReadingUnavailable: "उपलब्ध छैन (पहिलो रिडिङ)",
        readingType: "रिडिङको प्रकार",
        readingTypeFirst: "पहिलो रिडिङ",
        readingTypeNormal: "सामान्य बिलिङ",
        readingLowerError: "हालको रिडिङ अघिल्लो रिडिङभन्दा कम हुन सक्दैन।",
        missingPreviousReadingError: "पहिलेबाट रहेका ग्राहकका लागि अघिल्लो रिडिङ आवश्यक छ।",
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
        rcptFooterMsg: "समयमै भुक्तानी गर्नुभएकोमा धन्यवाद।",
        customerDirectory: "ग्राहक सूची",
        customerDirectoryDesc: "ग्राहकको पहिचान र वैकल्पिक सम्पर्क विवरण व्यवस्थापन गर्नुहोस्।",
        customerName: "ग्राहकको नाम",
        customerContact: "सम्पर्क नम्बर",
        customerLocation: "स्थान",
        optional: "वैकल्पिक",
        addCustomer: "ग्राहक थप्नुहोस्",
        saveCustomer: "ग्राहक सुरक्षित गर्नुहोस्",
        cancel: "रद्द गर्नुहोस्",
        notProvided: "उपलब्ध छैन",
        editCustomer: "ग्राहक सम्पादन"
      }
    };

    /* ==========================================================================
       2. SINGLE AUTHORITATIVE APP STATE
       ========================================================================== */
    const STORAGE_KEY = 'ELECTROPAY_AUTHORITATIVE_STATE_V2';
    let stateRevision = 0;
    let stateSaveQueue = Promise.resolve();
    let pendingStateSaves = 0;

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
      customers: [],
      records: [],
      numberSequences: { customer: 0, payment: 0 },
      deletedRecordIds: [],
      trashAudit: []
    };

    let paymentHelperHovered = false;
    let excelSyncInProgress = false;
    let pendingExcelConflicts = null;
    const selectedPaymentIds = new Set();
    const selectedTrashIds = new Set();
    let activeReceiptType = 'single';
    let editingRecordId = null;
    let activeCustomerId = '';
    let paymentSaveInProgress = false;
    let viewedCustomerId = '';
    let recordsCurrentPage = 1;
    let recordsSearchDebounceTimer = null;
    const RECORDS_PAGE_SIZE = 25;

    function makeId(prefix) {
      return `${prefix}-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
    }

    function ensureStableRecordNumbers() {
      if (!state.numberSequences || typeof state.numberSequences !== 'object') {
        state.numberSequences = { customer: 0, payment: 0 };
      }
      [
        { key: 'customer', field: 'customerNo', prefix: 'CUS', entities: state.customers },
        { key: 'payment', field: 'paymentNo', prefix: 'PAY', entities: state.records }
      ].forEach(({ key, field, prefix, entities }) => {
        const numberPattern = new RegExp(`^${prefix}-(\\d+)$`, 'i');
        const highestExisting = entities.reduce((highest, entity) => {
          const referenceMatch = numberPattern.exec(String(entity[field] ?? '').trim());
          const idMatch = numberPattern.exec(String(entity.id ?? '').trim());
          return Math.max(highest, Number(referenceMatch?.[1]) || 0, Number(idMatch?.[1]) || 0);
        }, 0);
        const usedNumbers = new Set(entities
          .map(entity => String(entity[field] ?? '').trim().toUpperCase())
          .filter(Boolean));
        let sequence = Math.max(Number(state.numberSequences[key]) || 0, highestExisting);
        entities.forEach(entity => {
          if (String(entity[field] ?? '').trim()) return;
          const existingId = String(entity.id ?? '').trim();
          if (numberPattern.test(existingId) && !usedNumbers.has(existingId.toUpperCase())) {
            entity[field] = existingId;
            usedNumbers.add(existingId.toUpperCase());
            return;
          }
          let nextNumber;
          do {
            sequence += 1;
            nextNumber = `${prefix}-${String(sequence).padStart(6, '0')}`;
          } while (usedNumbers.has(nextNumber.toUpperCase()));
          entity[field] = nextNumber;
          usedNumbers.add(nextNumber.toUpperCase());
        });
        state.numberSequences[key] = sequence;
      });
    }

    function ensureCustomerData() {
      if (!Array.isArray(state.customers)) state.customers = [];
      if (!Array.isArray(state.records)) state.records = [];
      if (!Array.isArray(state.trashAudit)) state.trashAudit = [];
      state.records.forEach(record => {
        if (record.customerId) record.customerId = String(record.customerId);
        record.isDeleted = record.isDeleted === true;
      });
      state.customers = state.customers
        .filter(customer => customer && typeof customer === 'object')
        .map(customer => ({
          ...customer,
          id: String(customer.id || makeId('CUSTOMER')),
          customerName: String(customer.customerName ?? ''),
          contactNumber: String(customer.contactNumber ?? ''),
          location: String(customer.location ?? ''),
          isDeleted: customer.isDeleted === true
        }));

      const unlinkedRecords = state.records.filter(record => !record.customerId);
      if (unlinkedRecords.length) {
        let legacyCustomer = state.customers.find(customer => customer.id === 'legacy-customer');
        if (!legacyCustomer) {
          legacyCustomer = {
            id: 'legacy-customer',
            customerName: '',
            contactNumber: '',
            location: '',
            createdAt: new Date().toISOString()
          };
          state.customers.push(legacyCustomer);
        }
        unlinkedRecords.forEach(record => { record.customerId = legacyCustomer.id; });
      }
      state.records.forEach(record => {
        if (record.customerId && !state.customers.some(customer => customer.id === record.customerId)) {
          state.customers.push({
            id: String(record.customerId),
            customerName: '',
            contactNumber: '',
            location: ''
          });
        }
      });
      ensureStableRecordNumbers();
      if (!activeCustomerId || !state.customers.some(customer => customer.id === activeCustomerId)) {
        activeCustomerId = state.customers.find(customer => !customer.isDeleted)?.id || '';
      }
    }

    function isDeletedRecord(record) {
      return record?.isDeleted === true;
    }

    function getActiveCustomers() {
      return state.customers.filter(customer => !isDeletedRecord(customer));
    }

    function getActivePaymentRecords() {
      return state.records.filter(record => !isDeletedRecord(record));
    }

    function getCustomer(customerId) {
      return state.customers.find(customer => customer.id === customerId) || null;
    }

    function getCustomerForRecord(record) {
      return getCustomer(record.customerId);
    }

    function customerDisplayName(customer) {
      return customer?.customerName?.trim() || 'Name not provided';
    }

    function escapeHtml(value) {
      return String(value ?? '').replace(/[&<>"']/g, character => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
      })[character]);
    }

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

    function formatNepaliDate(dateValue = new Date()) {
      try {
        const NepaliDateCtor = typeof window !== 'undefined' && (
          (typeof window.NepaliDate === 'function' ? window.NepaliDate : window.NepaliDate?.default)
        );

        if (!NepaliDateCtor) {
          return new Date(dateValue).toLocaleDateString('en-GB');
        }

        const adDate = new Date(dateValue);
        return `${new NepaliDateCtor(adDate).format('YYYY-MM-DD')} BS`;
      } catch (error) {
        console.warn('Could not format Nepali date:', error);
        return new Date(dateValue).toLocaleDateString('en-GB');
      }
    }

    function convertNepaliDateToISO(dateValue) {
      const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateValue ?? '').trim());
      const NepaliDateCtor = typeof window !== 'undefined' && (
        (typeof window.NepaliDate === 'function' ? window.NepaliDate : window.NepaliDate?.default)
      );

      if (!match || !NepaliDateCtor) return null;

      const [, yearText, monthText, dayText] = match;
      const year = Number(yearText);
      const month = Number(monthText);
      const day = Number(dayText);

      try {
        const nepaliDate = new NepaliDateCtor(year, month - 1, day);
        const bs = nepaliDate.getBS();
        if (bs.year !== year || bs.month !== month - 1 || bs.date !== day) return null;

        const ad = nepaliDate.getAD();
        return `${String(ad.year).padStart(4, '0')}-${String(ad.month + 1).padStart(2, '0')}-${String(ad.date).padStart(2, '0')}`;
      } catch (error) {
        console.warn('Could not convert payment date from Nepali BS:', error);
        return null;
      }
    }

    function formatNepaliTime(dateValue = new Date()) {
      try {
        return new Date(dateValue).toLocaleTimeString('en-GB', { hour12: false });
      } catch (error) {
        console.warn('Could not format time:', error);
        return '00:00:00';
      }
    }

    function updateHeaderNepaliDateTime() {
      const dateElement = document.getElementById('header-nepali-date');
      const timeElement = document.getElementById('header-nepali-time');

      if (dateElement) {
        const dateText = dateElement.querySelector('span');
        if (dateText) dateText.textContent = formatNepaliDate(new Date());
      }

      if (timeElement) {
        const timeText = timeElement.querySelector('span');
        if (timeText) timeText.textContent = formatNepaliTime(new Date());
      }
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
    let authenticatedAppStarted = false;
    document.addEventListener('electropay:authenticated', () => {
      void startAuthenticatedApp();
    });
    document.addEventListener('electropay:role-changed', () => {
      applyRoleAccess();
      if (!window.ElectroPayAuth.isAdmin() &&
          ['trash', 'backup', 'settings'].includes(
            Array.from(document.querySelectorAll('.tab-content'))
              .find(section => !section.classList.contains('hidden'))?.id?.replace('tab-', '')
          )) {
        switchTab('dashboard');
      }
    });
    window.addEventListener('DOMContentLoaded', async () => {
      const authenticated = await window.ElectroPayAuth.initialize();
      if (authenticated) await startAuthenticatedApp();
    });

    async function startAuthenticatedApp() {
      if (authenticatedAppStarted) return;
      authenticatedAppStarted = true;
      try {
        await loadStateFromStorage();
        const loadedState = JSON.stringify(state);
        ensureCustomerData();
        applyThemeUI();
        applyLanguageUI();
        await rebuildLedger(false);
        if (JSON.stringify(state) !== loadedState) {
          if (!window.ElectroPayAuth.isAdmin()) {
            throw new Error('An administrator must review and normalize this ledger before staff can use it.');
          }
          if (!await saveState()) throw new Error('The ledger could not be normalized and saved.');
        }
        if (window.ElectroPayAuth.isAdmin()) await cleanupExpiredTrash();
        applyRoleAccess();
        switchTab('dashboard');
        lucide.createIcons();
        updateHeaderNepaliDateTime();
        window.setInterval(updateHeaderNepaliDateTime, 1000);
        void updateExcelBackupLocationStatus();
        window.ElectroPayAuth.showWorkspace();

        window.onafterprint = () => {
          document.body.classList.remove('printing-receipt');
          document.body.classList.remove('printing-combined-receipt');
        };
      } catch (error) {
        console.error('ElectroPay could not load protected data:', error);
        authenticatedAppStarted = false;
        window.ElectroPayAuth.showLogin(`ElectroPay could not load its protected data: ${error.message}`);
      }
    }

    async function loadStateFromStorage() {
      const { data, error } = await window.ElectroPayAuth.client.rpc('get_electropay_state');
      if (error) throw error;
      if (!data || !data.state || !Number.isInteger(Number(data.revision))) {
        throw new Error('Supabase returned an invalid ElectroPay state.');
      }

      stateRevision = Number(data.revision);
      if (!data.initialized) {
        if (!window.ElectroPayAuth.isAdmin()) {
          throw new Error('An administrator must initialize ElectroPay before staff can use it.');
        }
        let initialState = { ...state };
        const legacyData = localStorage.getItem(STORAGE_KEY);
        let importedLocalData = false;
        if (legacyData) {
          const shouldImport = await window.ElectroPayModal.show({
            type: 'confirm',
            title: 'Import Existing Ledger?',
            message: 'This ElectroPay workspace has not been initialized. Import the data saved in this browser to initialize the shared ledger. Cancel to stop setup and leave the local ledger unchanged.',
            confirmText: 'Import Local Ledger',
            cancelText: 'Keep Local Data'
          });
          if (!shouldImport) {
            throw new Error('Initial setup was canceled. The existing local ledger was left unchanged; sign in again to import it.');
          }
          if (shouldImport) {
            const parsed = JSON.parse(legacyData);
            if (!parsed || !Array.isArray(parsed.customers) || !Array.isArray(parsed.records)) {
              throw new Error('The browser contains an invalid legacy ledger. Export or repair it before migration.');
            }
            initialState = {
              ...initialState,
              ...parsed,
              settings: { ...initialState.settings, ...(parsed.settings || {}) },
              uiPreferences: { ...initialState.uiPreferences, ...(parsed.uiPreferences || {}) }
            };
            importedLocalData = true;
          }
        }
        state = initialState;
        ensureCustomerData();
        await rebuildLedger(false);
        if (!await saveState()) throw new Error('Initial ledger setup could not be saved to Supabase.');
        if (importedLocalData) localStorage.removeItem(STORAGE_KEY);
        return;
      }

      state = {
        ...state,
        ...data.state,
        settings: { ...state.settings, ...(data.state.settings || {}) },
        uiPreferences: { ...state.uiPreferences, ...(data.state.uiPreferences || {}) },
        deletedRecordIds: Array.isArray(data.state.deletedRecordIds) ? data.state.deletedRecordIds : []
      };
    }

    async function saveState() {
      const snapshot = JSON.parse(JSON.stringify(state));
      const operation = stateSaveQueue.then(async () => {
        const { data, error } = await window.ElectroPayAuth.client.rpc('save_electropay_state', {
          p_state: snapshot,
          p_expected_revision: stateRevision
        });
        if (error) throw error;
        stateRevision = Number(data.revision);
        return true;
      });
      stateSaveQueue = operation.catch(() => undefined);
      pendingStateSaves += 1;
      const appShell = document.getElementById('app-shell');
      appShell.classList.add('app-saving');
      appShell.setAttribute('aria-busy', 'true');
      try {
        return await operation;
      } catch (error) {
        console.error('Failed saving protected ElectroPay data:', error);
        if (error.code === '40001') {
          showToast('Another user changed the ledger. This unsaved change was discarded; reloading the latest data.', 'error');
          window.setTimeout(() => window.location.reload(), 700);
        } else {
          showToast(`Your change was not saved to the server. ${error.message}`, 'error');
        }
        return false;
      } finally {
        pendingStateSaves -= 1;
        if (pendingStateSaves === 0) {
          appShell.classList.remove('app-saving');
          appShell.removeAttribute('aria-busy');
        }
      }
    }

    /* ==========================================================================
       4. FINANCIAL LEDGER REBUILD & CALCULATION ENGINE
       ========================================================================== */
    async function rebuildLedger(persist = true) {
      ensureCustomerData();
      // Sort records chronologically ascending to recalculate carry-overs
      state.records.sort((a, b) => new Date(a.date) - new Date(b.date));

      const balances = new Map();

      state.records = state.records.map((rec, idx) => {
        if (isDeletedRecord(rec)) return rec;
        const customerId = rec.customerId || state.customers[0]?.id || '';
        const balance = balances.get(customerId) || { advance: 0, due: 0 };
        const hasPreviousReading = rec.previousReading !== null &&
          rec.previousReading !== undefined && rec.previousReading !== '';
        const previousReading = hasPreviousReading ? Number(rec.previousReading) : null;
        const units = hasPreviousReading
          ? Math.max(0, Number(rec.currentReading) - previousReading)
          : 0;
        const openingBillAmount = hasPreviousReading ? 0 : Math.max(0, Number(rec.openingBillAmount) || 0);
        const billCost = hasPreviousReading ? units * rec.rate : openingBillAmount;

        const prevAdvance = balance.advance;
        const prevDue = balance.due;

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

        balances.set(customerId, { advance: newAdvance, due: newDue });

        let status = 'PAID';
        if (newDue > 0) {
          status = !hasPreviousReading && openingBillAmount > 0
            ? 'DUE'
            : (paid > 0 ? 'PARTIAL' : 'DUE');
        } else if (newAdvance > 0) {
          status = 'ADVANCE';
        }

        return {
          ...rec,
          customerId,
          previousReading,
          readingType: hasPreviousReading ? 'NORMAL' : 'FIRST',
          openingBillAmount,
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

      const saved = persist ? await saveState() : true;
      refreshActiveViews();
      return saved;
    }

    function getLatestLedgerState(customerId = activeCustomerId) {
      const customerRecords = customerId
        ? state.records.filter(record => record.customerId === customerId && !isDeletedRecord(record))
        : getActivePaymentRecords();
      if (customerRecords.length === 0) {
        return {
          lastReading: null,
          hasPreviousReading: false,
          currentAdvance: 0,
          currentDue: 0,
          lastDate: 'N/A'
        };
      }
      const last = customerRecords[customerRecords.length - 1];
      return {
        lastReading: last.currentReading,
        hasPreviousReading: last.currentReading !== null &&
          last.currentReading !== undefined && last.currentReading !== '',
        currentAdvance: last.newAdvance,
        currentDue: last.newDue,
        lastDate: last.date
      };
    }

    /* ==========================================================================
       5. UI TAB ROUTING & NAVIGATION
       ========================================================================== */
    function switchTab(tabId) {
      if (!window.ElectroPayAuth.hasBusinessDataAccess()) {
        window.ElectroPayAuth.showRestrictedAccessScreen('PENDING');
        return;
      }

      const adminTabs = new Set(['trash', 'backup', 'settings', 'staff-management']);
      if (adminTabs.has(tabId) && !window.ElectroPayAuth.isAdmin()) {
        showToast('This page requires an administrator role.', 'error');
        return;
      }

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
        'customers': [translations[lang].navCustomers, translations[lang].customerDirectoryDesc],
        'records': [translations[lang].navPaymentRecords, "Audit and manage past transactions"],
        'trash': [translations[lang].navDeletedRecords, 'Review, restore, or permanently remove deleted records'],
        'analytics': [translations[lang].navAnalytics, "Visual analysis of consumption and payments"],
        'snapshot': [translations[lang].navAdvancesDue, "Current advance credit and pending balances"],
        'backup': [translations[lang].navBackupRestore, "Export JSON or reset application state"],
        'settings': [translations[lang].navSettings, "Configure default tariff and receipt options"],
        'staff-management': ['User & Staff Management', 'Review roles, access requests, and user status'],
        'receipt': [translations[lang].receiptTitle, "Printable customer voucher"]
      };
      const pageIcons = {
        'dashboard': 'layout-dashboard',
        'new-payment': 'file-plus-2',
        'customers': 'users',
        'records': 'receipt-text',
        'trash': 'trash',
        'analytics': 'chart-no-axes-combined',
        'snapshot': 'scale',
        'backup': 'database',
        'settings': 'settings-2',
        'staff-management': 'users-round',
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
      if (tabId === 'customers') renderCustomers();
      if (tabId === 'records') renderRecordsTable();
      if (tabId === 'trash') renderDeletedRecords();
      if (tabId === 'analytics') renderAnalytics();
      if (tabId === 'snapshot') renderSnapshotView();
      if (tabId === 'settings') loadSettingsForm();
      if (tabId === 'staff-management') renderStaffManagement();
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

    function applyRoleAccess() {
      const isAdmin = window.ElectroPayAuth.isAdmin();
      const hasBusinessAccess = window.ElectroPayAuth.hasBusinessDataAccess();
      document.querySelectorAll('[data-admin-only]').forEach(element => {
        element.classList.toggle('role-hidden', !isAdmin);
      });
      const paymentForm = document.getElementById('payment-form');
      if (paymentForm) {
        const submitButton = document.getElementById('payment-submit-button');
        submitButton?.classList.toggle('hidden', !isAdmin && Boolean(editingRecordId));
      }
      const paymentRate = document.getElementById('input-rate');
      if (paymentRate) paymentRate.readOnly = !isAdmin;
      const staffManagementCard = document.getElementById('tab-staff-management');
      if (staffManagementCard) staffManagementCard.classList.toggle('hidden', !isAdmin);
      if (!hasBusinessAccess && !isAdmin) {
        window.ElectroPayAuth.showRestrictedAccessScreen(window.ElectroPayAuth.profile?.access_status || 'PENDING');
      }
    }

    async function renderStaffManagement() {
      const tbody = document.getElementById('staff-management-tbody');
      if (!tbody) return;
      tbody.innerHTML = '<tr><td colspan="6" class="px-3 py-6 text-center text-xs text-gray-500">Loading staff…</td></tr>';

      try {
        const { data, error } = await window.ElectroPayAuth.client.rpc('electropay_list_staff');
        if (error) throw error;
        const rows = Array.isArray(data) ? data : [];
        tbody.innerHTML = rows.length ? rows.map(member => {
          const name = member.full_name?.trim() || 'Unnamed staff';
          const initials = name.split(/\s+/).map(part => part[0]).slice(0, 2).join('').toUpperCase();
          const status = member.active ? 'Active' : 'Suspended';
          const access = member.has_business_data_access ? 'APPROVED' : member.access_status;
          const accessLabel = access || 'PENDING';
          const accessClass = accessLabel === 'APPROVED'
            ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
            : accessLabel === 'PENDING'
              ? 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
              : 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300';
          const action = member.has_business_data_access ? 'revoke' : 'approve';
          const actionLabel = member.has_business_data_access ? 'Revoke' : 'Approve';
          const actionClass = member.has_business_data_access
            ? 'border-red-200 bg-red-50 text-red-700 hover:bg-red-100 dark:border-red-800 dark:bg-red-950/40 dark:text-red-300'
            : 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300';
          const joined = member.created_at ? new Date(member.created_at).toLocaleDateString() : '—';

          return `
            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
              <td class="px-3 py-3">
                <div class="flex items-center gap-3">
                  <div class="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">${escapeHtml(initials || '?')}</div>
                  <div>
                    <p class="font-semibold text-gray-900 dark:text-white">${escapeHtml(name)}</p>
                    <p class="text-[11px] text-gray-500 dark:text-gray-400">${escapeHtml(member.email || '')}</p>
                  </div>
                </div>
              </td>
              <td class="px-3 py-3"><span class="inline-flex rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-700 dark:bg-slate-700 dark:text-slate-200">STAFF</span></td>
              <td class="px-3 py-3"><span class="inline-flex rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${member.active ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' : 'bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300'}">${status}</span></td>
              <td class="px-3 py-3"><span class="inline-flex rounded-full px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${accessClass}">${escapeHtml(accessLabel)}</span></td>
              <td class="px-3 py-3 text-xs text-gray-500 dark:text-gray-400">${escapeHtml(joined)}</td>
              <td class="px-3 py-3">
                <div class="flex items-center justify-end gap-1.5">
                  <button type="button" data-staff-action="${action}" data-user-id="${escapeHtml(member.user_id)}" class="rounded-lg border px-2 py-1 text-[10px] font-semibold ${actionClass}">${actionLabel}</button>
                </div>
              </td>
            </tr>
          `;
        }).join('') : '<tr><td colspan="6" class="px-3 py-6 text-center text-xs text-gray-500">No staff accounts found.</td></tr>';

        document.getElementById('staff-total-count').textContent = rows.length;
        document.getElementById('staff-active-count').textContent = rows.filter(member => member.active).length;
        document.getElementById('staff-pending-access-count').textContent =
          rows.filter(member => !member.has_business_data_access && member.access_status === 'PENDING').length;
        document.getElementById('staff-verified-count').textContent =
          rows.filter(member => member.has_business_data_access).length;
      } catch (error) {
        console.error('Could not load staff management data:', error);
        tbody.innerHTML = `<tr><td colspan="6" class="px-3 py-6 text-center text-xs text-red-600">Could not load staff: ${escapeHtml(error.message)}</td></tr>`;
        showToast('Staff management could not be loaded.', 'error');
      }
    }

    document.getElementById('staff-management-tbody')?.addEventListener('click', async event => {
      const button = event.target instanceof Element
        ? event.target.closest('button[data-staff-action]')
        : null;
      if (!button || button.disabled) return;

      const action = button.dataset.staffAction;
      const userId = button.dataset.userId;
      if (!userId || !['approve', 'revoke'].includes(action)) return;
      if (action === 'revoke') {
        const confirmed = await window.ElectroPayModal.show({
          type: 'confirm',
          title: 'Revoke staff access?',
          message: 'This staff member will immediately lose access to existing business records.',
          confirmText: 'Revoke Access',
          cancelText: 'Cancel'
        });
        if (!confirmed) return;
      }

      button.disabled = true;
      try {
        const functionName = action === 'approve' ? 'approve_staff_access' : 'revoke_staff_access';
        const { error } = await window.ElectroPayAuth.client.rpc(functionName, { p_user_id: userId });
        if (error) throw error;
        showToast(action === 'approve' ? 'Staff access approved.' : 'Staff access revoked.', 'success');
        await renderStaffManagement();
      } catch (error) {
        console.error(`Could not ${action} staff access:`, error);
        showToast(`Staff access could not be ${action === 'approve' ? 'approved' : 'revoked'}.`, 'error');
        button.disabled = false;
      }
    });

    function currentActorLabel() {
      const profile = window.ElectroPayAuth.profile;
      return profile?.full_name?.trim() || window.ElectroPayAuth.user?.email || 'Authenticated user';
    }

    /* ==========================================================================
       6. THEME & I18N TOGGLES
       ========================================================================== */
    async function toggleTheme() {
      const previousTheme = state.uiPreferences.theme;
      state.uiPreferences.theme = state.uiPreferences.theme === 'light' ? 'dark' : 'light';
      if (!await saveState()) {
        state.uiPreferences.theme = previousTheme;
        return;
      }
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

    async function toggleLanguage() {
      const previousLanguage = state.uiPreferences.lang;
      state.uiPreferences.lang = state.uiPreferences.lang === 'en' ? 'ne' : 'en';
      if (!await saveState()) {
        state.uiPreferences.lang = previousLanguage;
        return;
      }
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
      renderCustomers();
      if (viewedCustomerId && getCustomer(viewedCustomerId)) viewCustomer(viewedCustomerId);
      renderSnapshotView();
      if (!document.getElementById('tab-analytics').classList.contains('hidden')) {
        renderAnalytics();
      }
    }

    /* ==========================================================================
       7. DASHBOARD VIEW
       ========================================================================== */
    function renderDashboard() {
      const records = getActivePaymentRecords();
      const totalBilled = records.reduce((acc, r) => acc + r.billCost, 0);
      const totalPaid = records.reduce((acc, r) => acc + r.amountPaid, 0);
      const balances = getActiveCustomers().reduce((totals, customer) => {
        const latest = getLatestLedgerState(customer.id);
        totals.due += latest.currentDue;
        totals.advance += latest.currentAdvance;
        return totals;
      }, { due: 0, advance: 0 });

      document.getElementById('dash-total-billed').textContent = `Rs. ${totalBilled.toLocaleString()}`;
      document.getElementById('dash-total-paid').textContent = `Rs. ${totalPaid.toLocaleString()}`;
      document.getElementById('dash-current-due').textContent = `Rs. ${balances.due.toLocaleString()}`;
      document.getElementById('dash-current-advance').textContent = `Rs. ${balances.advance.toLocaleString()}`;

      const tbody = document.getElementById('dash-recent-tbody');
      tbody.innerHTML = '';

      const recent = [...records].reverse().slice(0, 5);
      if (recent.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" class="px-5 py-6 text-center text-xs text-gray-400">No payment records found.</td></tr>`;
        return;
      }

      recent.forEach((r, index) => {
        const customer = getCustomerForRecord(r);
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors';
        tr.innerHTML = `
          <td class="px-5 py-3 text-xs text-gray-500">${index + 1}</td>
          <td class="px-5 py-3 font-medium">${formatDateForDisplay(r.date)}</td>
          <td class="px-5 py-3 font-mono text-xs font-semibold">${escapeHtml(r.paymentNo || '')}<span class="block text-[10px] font-normal text-gray-400">Receipt: ${escapeHtml(r.receiptNo || '—')}</span></td>
          <td class="px-5 py-3"><span class="font-semibold">${escapeHtml(customerDisplayName(customer))}</span><span class="block text-[10px] font-mono text-gray-400">${escapeHtml(customer?.customerNo || '')}</span></td>
          <td class="px-5 py-3 text-right">${r.previousReading === null || r.previousReading === undefined ? '—' : r.units}</td>
          <td class="px-5 py-3 text-right">Rs. ${r.billCost.toLocaleString()}</td>
          <td class="px-5 py-3 text-right font-bold text-emerald-600 dark:text-emerald-400">Rs. ${r.amountPaid.toLocaleString()}</td>
          <td class="px-5 py-3">${getStatusBadge(r.status)}</td>
        `;
        tbody.appendChild(tr);
      });
    }

    function renderCustomers() {
      const tbody = document.getElementById('customers-tbody');
      if (!tbody) return;
      const query = (document.getElementById('customers-search')?.value || '').trim().toLocaleLowerCase();
      const filtered = getActiveCustomers().filter(customer =>
        `${customer.customerNo} ${customer.customerName} ${customer.contactNumber} ${customer.location}`.toLocaleLowerCase().includes(query)
      );
      tbody.replaceChildren();
      if (!filtered.length) {
        const row = document.createElement('tr');
        row.innerHTML = `<td colspan="6" class="px-4 py-8 text-center text-xs text-gray-400">${query ? 'No matching customers found.' : 'No customers yet. Add a customer to start recording payments.'}</td>`;
        tbody.appendChild(row);
        lucide.createIcons();
        return;
      }

      filtered.forEach((customer, index) => {
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors';
        const serial = document.createElement('td');
        serial.className = 'px-4 py-3 text-xs text-gray-500';
        serial.textContent = String(index + 1);
        const customerNumber = document.createElement('td');
        customerNumber.className = 'px-4 py-3 font-mono text-xs font-semibold';
        customerNumber.textContent = customer.customerNo || '';
        const name = document.createElement('td');
        name.className = 'px-4 py-3 font-semibold';
        name.textContent = customerDisplayName(customer);
        if (!customer.customerName.trim()) name.classList.add('text-amber-600', 'dark:text-amber-400');
        const contact = document.createElement('td');
        contact.className = 'px-4 py-3 text-xs';
        contact.textContent = customer.contactNumber.trim() || '—';
        const location = document.createElement('td');
        location.className = 'px-4 py-3 text-xs';
        location.textContent = customer.location.trim() || '—';
        const actions = document.createElement('td');
        actions.className = 'px-4 py-3 text-center';
        actions.className += ' whitespace-nowrap';
        const actionGroup = document.createElement('div');
        actionGroup.className = 'flex items-center justify-center gap-1';
        [
          ['eye', 'View customer', () => viewCustomer(customer.id), 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/40'],
          ['pencil', 'Edit customer', () => editCustomer(customer.id), 'text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/40'],
          ...(window.ElectroPayAuth.isAdmin()
            ? [['trash-2', 'Delete customer', () => deleteCustomer(customer.id), 'text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40']]
            : [])
        ].forEach(([icon, label, action, color]) => {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = `p-1.5 rounded-lg ${color}`;
          button.title = label;
          button.setAttribute('aria-label', label);
          button.innerHTML = `<i data-lucide="${icon}" class="w-4 h-4"></i>`;
          button.addEventListener('click', action);
          actionGroup.appendChild(button);
        });
        actions.appendChild(actionGroup);
        row.append(serial, customerNumber, name, contact, location, actions);
        tbody.appendChild(row);
      });
      lucide.createIcons();
    }

    async function saveCustomer(event) {
      event.preventDefault();
      const previousState = JSON.parse(JSON.stringify(state));
      const previousActiveCustomerId = activeCustomerId;
      const id = document.getElementById('customer-id').value;
      const customerName = document.getElementById('customer-name').value.trim();
      if (!customerName) {
        showToast('Customer name is required.', 'error');
        return;
      }
      const customerData = {
        customerName,
        contactNumber: document.getElementById('customer-contact').value.trim(),
        location: document.getElementById('customer-location').value.trim()
      };
      if (id) {
        const customer = getCustomer(id);
        if (!customer || isDeletedRecord(customer)) {
          showToast('Customer could not be found. Refresh the customer list and try again.', 'error');
          return;
        }
        Object.assign(customer, customerData, { updatedAt: new Date().toISOString() });
      } else {
        const customer = { id: makeId('CUSTOMER'), ...customerData, createdAt: new Date().toISOString() };
        state.customers.push(customer);
        ensureStableRecordNumbers();
        activeCustomerId = customer.id;
      }
      if (!await saveState()) {
        state = previousState;
        activeCustomerId = previousActiveCustomerId;
        refreshActiveViews();
        return;
      }
      resetCustomerForm();
      renderCustomers();
      refreshActiveViews();
      const detailsCustomer = id ? getCustomer(id) : state.customers[state.customers.length - 1];
      if (detailsCustomer) viewCustomer(detailsCustomer.id);
      showToast(id ? 'Customer information updated.' : 'Customer added successfully.');
      if (state.settings.autoExcelBackup !== false) void syncExcelBackup(true);
    }

    function editCustomer(id) {
      const customer = getCustomer(id);
      if (!customer) return;
      document.getElementById('customer-id').value = customer.id;
      document.getElementById('customer-name').value = customer.customerName;
      document.getElementById('customer-contact').value = customer.contactNumber;
      document.getElementById('customer-location').value = customer.location;
      document.getElementById('customer-form-title').querySelector('span').textContent = translations[state.uiPreferences.lang].editCustomer;
      document.getElementById('customer-save-label').textContent = translations[state.uiPreferences.lang].saveCustomer;
      document.getElementById('cancel-customer-edit').classList.remove('hidden');
      document.getElementById('customer-name').focus();
    }

    function resetCustomerForm() {
      document.getElementById('customer-form').reset();
      document.getElementById('customer-id').value = '';
      document.getElementById('customer-form-title').querySelector('span').textContent = translations[state.uiPreferences.lang].addCustomer;
      document.getElementById('customer-save-label').textContent = translations[state.uiPreferences.lang].saveCustomer;
      document.getElementById('cancel-customer-edit').classList.add('hidden');
    }

    function viewCustomer(id) {
      const customer = getCustomer(id);
      if (!customer || isDeletedRecord(customer)) return;
      viewedCustomerId = id;
      const details = document.getElementById('customer-details');
      const records = getActivePaymentRecords().filter(record => record.customerId === id).slice().reverse();
      const latest = getLatestLedgerState(id);
      const optionalFields = [
        customer.contactNumber.trim() ? `<div><span class="block text-xs text-gray-500 dark:text-gray-400">Contact Number</span><span class="font-medium">${escapeHtml(customer.contactNumber)}</span></div>` : '',
        customer.location.trim() ? `<div><span class="block text-xs text-gray-500 dark:text-gray-400">Location</span><span class="font-medium">${escapeHtml(customer.location)}</span></div>` : ''
      ].filter(Boolean).join('');
      const history = records.length ? records.map((record, index) => `
        <tr class="border-t border-gray-100 dark:border-gray-700">
          <td class="px-2 py-2 text-gray-500">${index + 1}</td>
          <td class="px-2 py-2 font-mono text-[10px] font-semibold">${escapeHtml(record.paymentNo || '')}</td>
          <td class="px-2 py-2">${escapeHtml(formatDateForDisplay(record.date))}</td>
          <td class="px-2 py-2 font-mono text-[10px]">${escapeHtml(record.receiptNo || '')}</td>
          <td class="px-2 py-2">${escapeHtml(record.paymentMethod || '—')}</td>
          <td class="px-2 py-2 text-right">Rs. ${Number(record.billCost).toLocaleString()}</td>
          <td class="px-2 py-2 text-right font-semibold">Rs. ${Number(record.amountPaid).toLocaleString()}</td>
          <td class="px-2 py-2 text-right">${Number(record.newDue).toLocaleString()}</td>
          <td class="px-2 py-2">${escapeHtml(record.status || '—')}</td>
        </tr>`).join('')         : '<tr><td colspan="9" class="px-2 py-5 text-center text-xs text-gray-400">No meter readings or payments recorded.</td></tr>';
      details.innerHTML = `
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0"><p class="text-[10px] uppercase tracking-widest text-emerald-600 dark:text-emerald-400">Customer Information</p>
            <h3 class="mt-1 text-lg font-bold text-gray-900 dark:text-white break-words">${escapeHtml(customerDisplayName(customer))}</h3>
            <p class="mt-1 text-[10px] font-mono text-gray-500 dark:text-gray-400">Customer No. ${escapeHtml(customer.customerNo || '')}</p></div>
          <button type="button" data-edit-customer class="shrink-0 p-2 rounded-lg text-amber-600 hover:bg-amber-50 dark:text-amber-400 dark:hover:bg-amber-950/40" title="Edit customer"><i data-lucide="pencil" class="w-4 h-4"></i></button>
        </div>
        <div class="mt-4 grid grid-cols-2 gap-3 text-sm">
          ${optionalFields || '<p class="col-span-2 text-xs text-gray-500 dark:text-gray-400">No optional contact details provided.</p>'}
          <div><span class="block text-xs text-gray-500 dark:text-gray-400">Current Due</span><span class="font-semibold text-amber-600">Rs. ${latest.currentDue.toLocaleString()}</span></div>
          <div><span class="block text-xs text-gray-500 dark:text-gray-400">Advance</span><span class="font-semibold text-emerald-600">Rs. ${latest.currentAdvance.toLocaleString()}</span></div>
          <div><span class="block text-xs text-gray-500 dark:text-gray-400">Last Meter Reading</span><span class="font-medium">${latest.hasPreviousReading ? escapeHtml(latest.lastReading) : '—'}</span></div>
          <div><span class="block text-xs text-gray-500 dark:text-gray-400">Payments</span><span class="font-medium">${records.length}</span></div>
        </div>
        <div class="mt-5 flex items-center justify-between gap-2">
          <h4 class="font-semibold text-sm text-gray-900 dark:text-white">Meter & Payment History</h4>
          <button type="button" data-record-payment class="text-xs font-semibold text-emerald-700 dark:text-emerald-300">Record payment</button>
        </div>
        <div class="mt-2 overflow-x-auto"><table class="w-full min-w-[460px] text-left text-[11px]">
          <thead class="text-[10px] uppercase text-gray-500"><tr><th class="px-2 py-2">S.N.</th><th class="px-2 py-2">Payment No.</th><th class="px-2 py-2">Date</th><th class="px-2 py-2">Receipt No.</th><th class="px-2 py-2">Method</th><th class="px-2 py-2 text-right">Billed</th><th class="px-2 py-2 text-right">Paid</th><th class="px-2 py-2 text-right">Due</th><th class="px-2 py-2">Status</th></tr></thead>
          <tbody>${history}</tbody></table></div>`;
      details.classList.remove('hidden');
      details.querySelector('[data-edit-customer]').addEventListener('click', () => editCustomer(id));
      details.querySelector('[data-record-payment]').addEventListener('click', () => {
        activeCustomerId = id;
        switchTab('new-payment');
      });
      lucide.createIcons();
    }

    function deleteCustomer(id) {
      if (!window.ElectroPayAuth.requireAdmin()) return;
      const customer = getCustomer(id);
      if (!customer || isDeletedRecord(customer)) return;
      const linkedRecords = getActivePaymentRecords().filter(record => record.customerId === id);
      const alreadyDeletedPayments = state.records.filter(record =>
        record.customerId === id && isDeletedRecord(record)
      ).length;
      const details = [
        `Customer: ${customerDisplayName(customer)}`,
        `Contact: ${customer.contactNumber.trim() || 'Not provided'}`,
        `Location: ${customer.location.trim() || 'Not provided'}`,
        `Active related payments: ${linkedRecords.length}`,
        `Already deleted payments: ${alreadyDeletedPayments}`,
        'The customer and active payments will move to Deleted Records together.'
      ];
      void openTrashConfirmation({
        title: 'Delete Customer?',
        description: 'The customer will be hidden from active lists but remain recoverable for one calendar month. Related payment records, readings, and billing calculations are preserved and restored together.',
        details,
        confirmLabel: 'Move to Trash',
        type: 'warning',
        onConfirm: () => softDeleteCustomer(id)
      });
    }

    /* ==========================================================================
       8. NEW PAYMENT FORM & LIVE RECKONING
       ========================================================================== */
    function setPaymentFormMode(recordId = null) {
      if (recordId && !window.ElectroPayAuth.isAdmin()) {
        window.ElectroPayAuth.requireAdmin();
        return;
      }
      const submitLabel = document.getElementById('payment-submit-label');
      const cancelButton = document.getElementById('cancel-edit-payment');
      editingRecordId = recordId;

      if (submitLabel) {
        submitLabel.textContent = recordId ? 'Update Payment Record' : translations[state.uiPreferences.lang].btnSavePayment;
      }

      if (cancelButton) {
        cancelButton.classList.toggle('hidden', !recordId);
      }
    }

    function cancelEditPaymentRecord() {
      setPaymentFormMode();
      setupNewPaymentForm();
    }

    function addCalendarMonth(dateValue) {
      const date = new Date(dateValue);
      const targetMonth = date.getMonth() + 1;
      const targetYear = date.getFullYear() + Math.floor(targetMonth / 12);
      const normalizedMonth = targetMonth % 12;
      const day = date.getDate();
      const lastDay = new Date(targetYear, normalizedMonth + 1, 0).getDate();
      date.setFullYear(targetYear, normalizedMonth, Math.min(day, lastDay));
      return date.toISOString();
    }

    function getTrashEntry(type, id) {
      const collection = type === 'Customer' ? state.customers : state.records;
      const entity = collection.find(item => item.id === id);
      return entity && isDeletedRecord(entity) ? { type, id, entity } : null;
    }

    function getTrashEntryKey(type, id) {
      return `${type}:${id}`;
    }

    function getTrashEntries() {
      return [
        ...state.customers.filter(isDeletedRecord).map(entity => ({ type: 'Customer', id: entity.id, entity })),
        ...state.records.filter(isDeletedRecord).map(entity => ({ type: 'Payment', id: entity.id, entity }))
      ];
    }

    function getTrashEntryCustomer(entry) {
      return entry.type === 'Customer' ? entry.entity : getCustomer(entry.entity.customerId);
    }

    function getTrashEntryDisplayName(entry) {
      return customerDisplayName(getTrashEntryCustomer(entry));
    }

    function getTrashDaysRemaining(entity) {
      return Math.max(0, Math.ceil((new Date(entity.permanentDeletionAt).getTime() - Date.now()) / 86400000));
    }

    function pushTrashAudit(action, type, entity, timestamp = new Date().toISOString()) {
      state.trashAudit.push({
        action,
        actionBy: currentActorLabel(),
        recordType: type,
        recordId: String(entity.id),
        recordNumber: String(type === 'Payment' ? entity.paymentNo || '' : entity.customerNo || ''),
        reference: String(entity.receiptNo || entity.id),
        deletedAt: entity.deletedAt || '',
        deletedBy: entity.deletedBy || currentActorLabel(),
        permanentDeletionAt: entity.permanentDeletionAt || '',
        occurredAt: timestamp
      });
    }

    async function persistTrashMutation(rollback, failureMessage) {
      let saved = false;
      try {
        saved = await rebuildLedger();
      } catch (error) {
        console.error('Failed applying deleted-record change:', error);
      }
      if (saved) return true;
      rollback();
      try {
        await rebuildLedger(false);
      } catch (error) {
        console.error('Failed restoring state after deleted-record change failed:', error);
      }
      showToast(failureMessage, 'error');
      return false;
    }

    async function softDeletePayment(id, reason = '') {
      if (!window.ElectroPayAuth.requireAdmin()) return false;
      const record = state.records.find(item => item.id === id);
      if (!record || isDeletedRecord(record)) return false;
      const recordsBefore = state.records.map(item => ({ ...item }));
      const deletedIdsBefore = [...state.deletedRecordIds];
      const auditBefore = [...state.trashAudit];
      const paymentSelectionBefore = [...selectedPaymentIds];
      const groupId = makeId('TRASH');
      const deletedAt = new Date().toISOString();
      Object.assign(record, {
        isDeleted: true,
        deletedAt,
        deletedBy: currentActorLabel(),
        deletionReason: reason.trim(),
        permanentDeletionAt: addCalendarMonth(deletedAt),
        deletionGroupId: groupId
      });
      pushTrashAudit('soft-deleted', 'Payment', record, deletedAt);
      if (!state.deletedRecordIds.includes(id)) state.deletedRecordIds.push(id);
      const saved = await persistTrashMutation(() => {
        state.records = recordsBefore;
        state.deletedRecordIds = deletedIdsBefore;
        state.trashAudit = auditBefore;
        selectedPaymentIds.clear();
        paymentSelectionBefore.forEach(recordId => selectedPaymentIds.add(recordId));
      }, 'Payment could not be moved to Deleted Records. No changes were saved.');
      if (!saved) return false;
      selectedPaymentIds.delete(id);
      showToast('Payment moved to Deleted Records. Balances were recalculated.');
      if (state.settings.autoExcelBackup !== false) void syncExcelBackup(true);
      return true;
    }

    async function softDeleteCustomer(id, reason = '') {
      if (!window.ElectroPayAuth.requireAdmin()) return false;
      const customer = getCustomer(id);
      if (!customer || isDeletedRecord(customer)) return false;
      const customersBefore = state.customers.map(item => ({ ...item }));
      const recordsBefore = state.records.map(item => ({ ...item }));
      const deletedIdsBefore = [...state.deletedRecordIds];
      const auditBefore = [...state.trashAudit];
      const activeCustomerBefore = activeCustomerId;
      const viewedCustomerBefore = viewedCustomerId;
      const paymentSelectionBefore = [...selectedPaymentIds];
      const deletedAt = new Date().toISOString();
      const permanentDeletionAt = addCalendarMonth(deletedAt);
      const groupId = makeId('TRASH');
      Object.assign(customer, {
        isDeleted: true,
        deletedAt,
        deletedBy: currentActorLabel(),
        deletionReason: reason.trim(),
        permanentDeletionAt,
        deletionGroupId: groupId
      });
      pushTrashAudit('soft-deleted', 'Customer', customer, deletedAt);
      state.records.forEach(record => {
        if (record.customerId !== id || isDeletedRecord(record)) return;
        Object.assign(record, {
          isDeleted: true,
          deletedAt,
          deletedBy: currentActorLabel(),
          deletionReason: reason.trim(),
          permanentDeletionAt,
          deletionGroupId: groupId
        });
        pushTrashAudit('soft-deleted', 'Payment', record, deletedAt);
        if (!state.deletedRecordIds.includes(record.id)) state.deletedRecordIds.push(record.id);
      });
      if (activeCustomerId === id) activeCustomerId = '';
      if (viewedCustomerId === id) {
        viewedCustomerId = '';
        document.getElementById('customer-details').classList.add('hidden');
      }
      const saved = await persistTrashMutation(() => {
        state.customers = customersBefore;
        state.records = recordsBefore;
        state.deletedRecordIds = deletedIdsBefore;
        state.trashAudit = auditBefore;
        activeCustomerId = activeCustomerBefore;
        viewedCustomerId = viewedCustomerBefore;
        selectedPaymentIds.clear();
        paymentSelectionBefore.forEach(recordId => selectedPaymentIds.add(recordId));
      }, 'Customer could not be moved to Deleted Records. No changes were saved.');
      if (!saved) return false;
      selectedPaymentIds.forEach(recordId => {
        if (state.records.some(record => record.id === recordId && record.customerId === id)) selectedPaymentIds.delete(recordId);
      });
      if (document.getElementById('customer-id').value === id) resetCustomerForm();
      showToast('Customer and related payments moved to Deleted Records.');
      if (state.settings.autoExcelBackup !== false) void syncExcelBackup(true);
      return true;
    }

    function getTrashRestoreEntries(entry) {
      const groupId = entry.entity.deletionGroupId;
      const entries = getTrashEntries().filter(candidate =>
        candidate.type === entry.type && candidate.id === entry.id ||
        groupId && candidate.entity.deletionGroupId === groupId
      );
      if (entry.type === 'Payment') {
        const customer = getCustomer(entry.entity.customerId);
        if (customer && isDeletedRecord(customer)) {
          entries.push({ type: 'Customer', id: customer.id, entity: customer });
          if (customer.deletionGroupId) {
            entries.push(...getTrashEntries().filter(candidate => candidate.entity.deletionGroupId === customer.deletionGroupId));
          }
        }
      }
      return [...new Map(entries.map(candidate => [getTrashEntryKey(candidate.type, candidate.id), candidate])).values()];
    }

    async function restoreTrashRecords(entries) {
      if (!window.ElectroPayAuth.requireAdmin()) return false;
      const restoreEntries = [...new Map(entries.flatMap(entry => getTrashRestoreEntries(entry))
        .map(entry => [getTrashEntryKey(entry.type, entry.id), entry])).values()];
      if (!restoreEntries.length) return false;
      const customersBefore = state.customers.map(item => ({ ...item }));
      const recordsBefore = state.records.map(item => ({ ...item }));
      const deletedIdsBefore = [...state.deletedRecordIds];
      const auditBefore = [...state.trashAudit];
      const restoredAt = new Date().toISOString();
      restoreEntries.forEach(candidate => {
        pushTrashAudit('restored', candidate.type, candidate.entity, restoredAt);
        candidate.entity.isDeleted = false;
        candidate.entity.deletedAt = null;
        candidate.entity.deletedBy = null;
        candidate.entity.permanentDeletionAt = null;
        candidate.entity.restoredAt = restoredAt;
        candidate.entity.restoredBy = currentActorLabel();
        candidate.entity.deletionGroupId = null;
        if (candidate.type === 'Payment') {
          state.deletedRecordIds = state.deletedRecordIds.filter(recordId => recordId !== candidate.id);
        }
      });
      const saved = await persistTrashMutation(() => {
        state.customers = customersBefore;
        state.records = recordsBefore;
        state.deletedRecordIds = deletedIdsBefore;
        state.trashAudit = auditBefore;
      }, 'Record could not be restored. No changes were saved.');
      if (!saved) return false;
      restoreEntries.forEach(entry => selectedTrashIds.delete(getTrashEntryKey(entry.type, entry.id)));
      showToast(restoreEntries.length > 1 ? 'Customer and related payment history restored.' : 'Record restored.');
      renderDeletedRecords();
      if (state.settings.autoExcelBackup !== false) void syncExcelBackup(true);
      return true;
    }

    async function restoreTrashRecord(type, id) {
      const entry = getTrashEntry(type, id);
      if (!entry || !window.ElectroPayAuth.requireAdmin()) return false;
      const targets = getTrashRestoreEntries(entry);
      const confirmed = await window.ElectroPayModal.show({
        type: 'confirm',
        title: targets.length > 1 ? 'Restore Records?' : 'Restore Record?',
        message: targets.length > 1
          ? `Restore this customer and ${targets.length - 1} related payment records to the active ledger?`
          : 'Restore this record to the active ElectroPay ledger?',
        details: targets.slice(0, 8).map(item =>
          `${item.type}: ${getTrashEntryDisplayName(item)} · ${item.type === 'Payment' ? item.entity.paymentNo || '' : item.entity.customerNo || ''}`
        ),
        confirmText: 'Restore',
        onConfirm: () => restoreTrashRecords([entry])
      });
      return confirmed;
    }

    function expandPermanentDeleteEntries(entries) {
      const expanded = [...entries];
      entries.filter(entry => entry.type === 'Customer').forEach(customerEntry => {
        expanded.push(...getTrashEntries().filter(entry =>
          entry.type === 'Payment' && entry.entity.customerId === customerEntry.id
        ));
      });
      return [...new Map(expanded.map(entry => [getTrashEntryKey(entry.type, entry.id), entry])).values()];
    }

    async function permanentlyDeleteTrashEntries(entries) {
      if (!window.ElectroPayAuth.requireAdmin()) return false;
      const targets = expandPermanentDeleteEntries(entries);
      if (!targets.length) return false;
      const customersBefore = state.customers.map(item => ({ ...item }));
      const recordsBefore = state.records.map(item => ({ ...item }));
      const deletedIdsBefore = [...state.deletedRecordIds];
      const auditBefore = [...state.trashAudit];
      const trashSelectionBefore = [...selectedTrashIds];
      const paymentSelectionBefore = [...selectedPaymentIds];
      const purgedAt = new Date().toISOString();
      targets.forEach(entry => {
        pushTrashAudit('permanently-deleted', entry.type, entry.entity, purgedAt);
        selectedTrashIds.delete(getTrashEntryKey(entry.type, entry.id));
        if (entry.type === 'Customer') {
          state.customers = state.customers.filter(customer => customer.id !== entry.id);
        } else {
          state.records = state.records.filter(record => record.id !== entry.id);
          if (!state.deletedRecordIds.includes(entry.id)) state.deletedRecordIds.push(entry.id);
          selectedPaymentIds.delete(entry.id);
        }
      });
      const saved = await persistTrashMutation(() => {
        state.customers = customersBefore;
        state.records = recordsBefore;
        state.deletedRecordIds = deletedIdsBefore;
        state.trashAudit = auditBefore;
        selectedTrashIds.clear();
        trashSelectionBefore.forEach(key => selectedTrashIds.add(key));
        selectedPaymentIds.clear();
        paymentSelectionBefore.forEach(recordId => selectedPaymentIds.add(recordId));
      }, 'Permanent deletion failed. The records remain in Deleted Records.');
      if (!saved) return false;
      showToast(targets.length > 1 ? `${targets.length} records permanently deleted.` : 'Record permanently deleted.');
      renderDeletedRecords();
      if (state.settings.autoExcelBackup !== false) void syncExcelBackup(true);
      return true;
    }

    async function cleanupExpiredTrash() {
      if (!window.ElectroPayAuth.requireAdmin()) return 0;
      const now = Date.now();
      const entries = getTrashEntries();
      const expiredCustomerGroups = new Set(entries
        .filter(entry => entry.type === 'Customer' && new Date(entry.entity.permanentDeletionAt).getTime() <= now)
        .map(entry => entry.entity.deletionGroupId)
        .filter(Boolean));
      const expired = entries.filter(entry =>
        new Date(entry.entity.permanentDeletionAt).getTime() <= now ||
        entry.type === 'Payment' && expiredCustomerGroups.has(entry.entity.deletionGroupId)
      );
      if (!expired.length) return 0;
      const auditBefore = [...state.trashAudit];
      const recordsBefore = state.records.map(item => ({ ...item }));
      const customersBefore = state.customers.map(item => ({ ...item }));
      const deletedIdsBefore = [...state.deletedRecordIds];
      const purgeAt = new Date().toISOString();
      const targets = expandPermanentDeleteEntries(expired);
      targets.forEach(entry => {
        pushTrashAudit('automatically-purged', entry.type, entry.entity, purgeAt);
        if (entry.type === 'Customer') {
          state.customers = state.customers.filter(customer => customer.id !== entry.id);
        } else {
          state.records = state.records.filter(record => record.id !== entry.id);
          if (!state.deletedRecordIds.includes(entry.id)) state.deletedRecordIds.push(entry.id);
        }
      });
      if (!await saveState()) {
        state.trashAudit = auditBefore;
        state.records = recordsBefore;
        state.customers = customersBefore;
        state.deletedRecordIds = deletedIdsBefore;
        console.error('Automatic expired-record cleanup was not persisted; expired records remain available.');
        return 0;
      }
      return targets.length;
    }

    function renderDeletedRecords() {
      const tbody = document.getElementById('trash-tbody');
      if (!tbody) return;
      const entries = getTrashEntries();
      const typeFilter = document.getElementById('trash-type-filter');
      const byFilter = document.getElementById('trash-by-filter');
      const selectedType = typeFilter.value;
      const selectedBy = byFilter.value;
      const setOptions = (select, values, firstLabel) => {
        select.replaceChildren(new Option(firstLabel, ''));
        values.forEach(value => select.appendChild(new Option(value, value)));
        select.value = values.includes(select === typeFilter ? selectedType : selectedBy)
          ? select === typeFilter ? selectedType : selectedBy
          : '';
      };
      setOptions(typeFilter, [...new Set(entries.map(entry => entry.type))].sort(), 'All types');
      setOptions(byFilter, [...new Set(entries.map(entry => entry.entity.deletedBy || 'Local user'))].sort(), 'Anyone');

      const query = document.getElementById('trash-search').value.trim().toLocaleLowerCase();
      const dateFilter = document.getElementById('trash-date-filter').value;
      const remainingFilter = Number(document.getElementById('trash-remaining-filter').value) || 0;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      let filtered = entries.filter(entry => {
        const customer = getTrashEntryCustomer(entry);
        if (typeFilter.value && entry.type !== typeFilter.value) return false;
        if (byFilter.value && (entry.entity.deletedBy || 'Local user') !== byFilter.value) return false;
        const deletedDate = new Date(entry.entity.deletedAt);
        if (dateFilter === 'today' && toLocalDateISO(deletedDate) !== toLocalDateISO(today)) return false;
        if (dateFilter === 'week' && deletedDate.getTime() < today.getTime() - 7 * 86400000) return false;
        if (dateFilter === 'month' && deletedDate.getTime() < today.getTime() - 30 * 86400000) return false;
        if (remainingFilter && getTrashDaysRemaining(entry.entity) > remainingFilter) return false;
        const text = [
          entry.type, customer?.customerName, customer?.contactNumber, customer?.location,
          entry.entity.paymentNo, entry.entity.customerNo, entry.entity.receiptNo, entry.entity.id,
          entry.entity.date, formatDateForDisplay(entry.entity.date)
        ].join(' ').toLocaleLowerCase();
        return !query || text.includes(query);
      });
      switch (document.getElementById('trash-sort').value) {
        case 'oldest':
          filtered.sort((a, b) => new Date(a.entity.deletedAt) - new Date(b.entity.deletedAt));
          break;
        case 'expiring':
          filtered.sort((a, b) => new Date(a.entity.permanentDeletionAt) - new Date(b.entity.permanentDeletionAt));
          break;
        case 'customer-az':
          filtered.sort((a, b) => getTrashEntryDisplayName(a).localeCompare(getTrashEntryDisplayName(b)));
          break;
        default:
          filtered.sort((a, b) => new Date(b.entity.deletedAt) - new Date(a.entity.deletedAt));
      }

      const filteredKeys = new Set(filtered.map(entry => getTrashEntryKey(entry.type, entry.id)));
      selectedTrashIds.forEach(key => { if (!filteredKeys.has(key)) selectedTrashIds.delete(key); });
      document.getElementById('trash-count').textContent =
        `${filtered.length.toLocaleString()} deleted ${filtered.length === 1 ? 'record' : 'records'} found`;
      const selectedEntries = filtered.filter(entry => selectedTrashIds.has(getTrashEntryKey(entry.type, entry.id)));
      const selectionSummary = document.getElementById('trash-selection-summary');
      const restoreSelected = document.getElementById('trash-restore-selected');
      const deleteSelected = document.getElementById('trash-delete-selected');
      selectionSummary.textContent = `${selectedEntries.length} selected`;
      selectionSummary.classList.toggle('hidden', !selectedEntries.length);
      restoreSelected.classList.toggle('hidden', !selectedEntries.length);
      deleteSelected.classList.toggle('hidden', !selectedEntries.length);
      const selectAll = document.getElementById('trash-select-all');
      selectAll.checked = filtered.length > 0 && selectedEntries.length === filtered.length;
      selectAll.indeterminate = selectedEntries.length > 0 && selectedEntries.length < filtered.length;
      selectAll.disabled = !filtered.length;

      tbody.replaceChildren();
      if (!filtered.length) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 11;
        cell.className = 'px-4 py-12 text-center text-sm text-gray-500 dark:text-gray-400';
        cell.innerHTML = `<p class="font-semibold text-gray-700 dark:text-gray-200">No deleted records found</p>
          <p class="mt-1 text-xs">Deleted items will appear here for one calendar month.</p>
          <button type="button" onclick="clearTrashFilters()" class="mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">Clear Filters</button>`;
        row.appendChild(cell);
        tbody.appendChild(row);
        return;
      }

      filtered.forEach((entry, index) => {
        const { entity, type } = entry;
        const customer = getTrashEntryCustomer(entry);
        const remaining = getTrashDaysRemaining(entity);
        const row = document.createElement('tr');
        row.className = 'hover:bg-gray-50 dark:hover:bg-gray-700/30';
        row.dataset.trashKey = getTrashEntryKey(type, entry.id);
        const checkboxCell = document.createElement('td');
        checkboxCell.className = 'px-3 py-3';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = selectedTrashIds.has(getTrashEntryKey(type, entry.id));
        checkbox.setAttribute('aria-label', `Select deleted ${type.toLowerCase()} ${getTrashEntryDisplayName(entry)}`);
        checkbox.className = 'rounded border-gray-300 text-amber-600 focus:ring-amber-500';
        checkbox.addEventListener('change', () => {
          const key = getTrashEntryKey(type, entry.id);
          if (checkbox.checked) selectedTrashIds.add(key);
          else selectedTrashIds.delete(key);
          renderDeletedRecords();
        });
        checkboxCell.appendChild(checkbox);
        row.appendChild(checkboxCell);
        const serialCell = document.createElement('td');
        serialCell.className = 'px-3 py-3 text-xs text-gray-500';
        serialCell.textContent = String(index + 1);
        row.appendChild(serialCell);
        const values = [
          type,
          type === 'Payment' ? entity.paymentNo || '' : entity.customerNo || '',
          getTrashEntryDisplayName(entry),
          `${customer?.contactNumber?.trim() || '—'}${customer?.location?.trim() ? `\n${customer.location}` : ''}`,
          type === 'Payment'
            ? `Receipt: ${entity.receiptNo || '—'}\n${formatDateForDisplay(entity.date)}`
            : `Created: ${formatDateForDisplay(String(entity.createdAt || '').slice(0, 10))}`,
          type === 'Payment' ? `Rs. ${formatReceiptAmount(entity.amountPaid)}` : '—',
          `${formatDateForDisplay(String(entity.deletedAt || '').slice(0, 10))}\n${entity.deletedBy || 'Local user'}`,
          remaining === 0 ? 'Permanent deletion today' : `In ${remaining} ${remaining === 1 ? 'day' : 'days'}\n${formatDateForDisplay(String(entity.permanentDeletionAt || '').slice(0, 10))}`
        ];
        values.forEach((value, index) => {
          const cell = document.createElement('td');
          cell.className = `px-3 py-3 text-xs whitespace-pre-line ${index === 5 ? 'text-right font-semibold' : ''}`;
          cell.textContent = value;
          if (index === 0) {
            cell.innerHTML = `<span class="inline-flex rounded-full bg-amber-100 dark:bg-amber-950/50 px-2 py-1 text-[10px] font-bold text-amber-800 dark:text-amber-300">${escapeHtml(value)}</span>`;
          }
          if (index === 1) cell.classList.add('font-mono', 'font-semibold');
          if (index === 7 && remaining <= 3) cell.classList.add('font-semibold', 'text-amber-700', 'dark:text-amber-300');
          row.appendChild(cell);
        });
        const actions = document.createElement('td');
        actions.className = 'px-3 py-3 text-right whitespace-nowrap';
        const restore = document.createElement('button');
        restore.type = 'button';
        restore.className = 'mr-2 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-emerald-700 hover:bg-emerald-50 dark:text-emerald-300 dark:hover:bg-emerald-950/40';
        restore.textContent = 'Restore';
        restore.addEventListener('click', () => restoreTrashRecord(type, entry.id));
        const permanentlyDelete = document.createElement('button');
        permanentlyDelete.type = 'button';
        permanentlyDelete.className = 'rounded-lg px-2.5 py-1.5 text-xs font-semibold text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-950/40';
        permanentlyDelete.textContent = 'Delete Permanently';
        permanentlyDelete.addEventListener('click', () => confirmPermanentDelete([entry]));
        actions.append(restore, permanentlyDelete);
        row.appendChild(actions);
        tbody.appendChild(row);
      });
    }

    function clearTrashFilters() {
      ['trash-search', 'trash-type-filter', 'trash-by-filter', 'trash-date-filter', 'trash-remaining-filter'].forEach(id => {
        document.getElementById(id).value = '';
      });
      document.getElementById('trash-sort').value = 'recent';
      renderDeletedRecords();
    }

    function toggleSelectAllTrash(checked) {
      const entries = getFilteredTrashEntries();
      entries.forEach(entry => {
        const key = getTrashEntryKey(entry.type, entry.id);
        if (checked) selectedTrashIds.add(key);
        else selectedTrashIds.delete(key);
      });
      renderDeletedRecords();
    }

    function getFilteredTrashEntries() {
      const keys = new Set(Array.from(document.querySelectorAll('#trash-tbody input[type="checkbox"]'))
        .map(input => {
          const row = input.closest('tr');
          return row?.dataset.trashKey;
        }).filter(Boolean));
      return getTrashEntries().filter(entry => keys.has(getTrashEntryKey(entry.type, entry.id)));
    }

    function getSelectedTrashEntries() {
      return getTrashEntries().filter(entry => selectedTrashIds.has(getTrashEntryKey(entry.type, entry.id)));
    }

    async function restoreSelectedTrashRecords() {
      const selected = getSelectedTrashEntries();
      if (!selected.length || !window.ElectroPayAuth.requireAdmin()) return;
      const restoreEntries = [...new Map(selected.flatMap(entry => getTrashRestoreEntries(entry))
        .map(entry => [getTrashEntryKey(entry.type, entry.id), entry])).values()];
      await window.ElectroPayModal.show({
        type: 'confirm',
        title: `Restore ${restoreEntries.length} Records?`,
        message: 'Restore the selected records to the active ElectroPay ledger?',
        details: restoreEntries.slice(0, 8).map(entry =>
          `${entry.type}: ${getTrashEntryDisplayName(entry)} · ${entry.type === 'Payment' ? entry.entity.paymentNo || '' : entry.entity.customerNo || ''}`
        ),
        confirmText: `Restore ${restoreEntries.length}`,
        onConfirm: () => restoreTrashRecords(selected)
      });
      renderDeletedRecords();
    }

    function permanentlyDeleteSelectedTrashRecords() {
      const selected = getSelectedTrashEntries();
      if (selected.length) confirmPermanentDelete(selected);
    }

    function confirmPermanentDelete(entries) {
      if (!window.ElectroPayAuth.requireAdmin()) return;
      const targets = expandPermanentDeleteEntries(entries);
      const phrase = targets.length === 1 ? 'PERMANENT DELETE' : `PERMANENT DELETE ${targets.length}`;
      const describeEntry = entry => entry.type === 'Payment'
        ? `Payment: ${getTrashEntryDisplayName(entry)} · ${entry.entity.paymentNo || ''} · ${entry.entity.receiptNo || 'No receipt'} · Rs. ${formatReceiptAmount(entry.entity.amountPaid)} · ${formatDateForDisplay(entry.entity.date)}`
        : `Customer: ${getTrashEntryDisplayName(entry)} · ${entry.entity.customerNo || ''} · ${entry.entity.contactNumber?.trim() || 'No contact'}`;
      const details = targets.length > 10
        ? [`Selected records: ${targets.length}`, ...targets.slice(0, 8).map(describeEntry), `…and ${targets.length - 8} more`]
        : targets.map(describeEntry);
      void openTrashConfirmation({
        title: targets.length === 1 ? 'Permanently Delete Record' : `Permanently Delete ${targets.length} Records`,
        description: 'This action permanently removes the selected deleted data from the shared ElectroPay workspace and cannot be undone. Ensure you have a trusted backup if you may need this history again.',
        details,
        phrase,
        confirmLabel: 'Delete Permanently',
        type: 'danger',
        onConfirm: () => permanentlyDeleteTrashEntries(targets)
      });
    }

    function setupNewPaymentForm(recordToEdit = null, clearCustomer = false) {
      const record = recordToEdit || (editingRecordId ? state.records.find(r => r.id === editingRecordId && !isDeletedRecord(r)) : null);
      const customerSelect = document.getElementById('input-customer');
      const activeCustomers = getActiveCustomers();
      const preferredCustomerId = record?.customerId || (clearCustomer ? '' : activeCustomerId || customerSelect.value || activeCustomers[0]?.id || '');
      customerSelect.replaceChildren();
      const prompt = document.createElement('option');
      prompt.value = '';
      prompt.textContent = activeCustomers.length ? 'Select a customer' : 'Add a customer first';
      prompt.disabled = true;
      prompt.selected = !preferredCustomerId;
      customerSelect.appendChild(prompt);
      activeCustomers.forEach(customer => {
        const option = document.createElement('option');
        option.value = customer.id;
        option.textContent = customerDisplayName(customer);
        customerSelect.appendChild(option);
      });
      customerSelect.value = preferredCustomerId;
      customerSelect.disabled = Boolean(record);
      activeCustomerId = customerSelect.value || '';
      const latest = activeCustomerId
        ? getLatestLedgerState(activeCustomerId)
        : { lastReading: null, hasPreviousReading: false, currentAdvance: 0, currentDue: 0 };
      const firstReading = record
        ? record.previousReading === null || record.previousReading === undefined || record.previousReading === ''
        : !activeCustomerId || !latest.hasPreviousReading;

      if (record) {
        setPaymentFormMode(record.id);
        document.getElementById('input-date').value = formatDateForDisplay(record.date).replace(/ BS$/, '');
      } else {
        setPaymentFormMode();
        document.getElementById('input-date').value = formatNepaliDate().replace(/ BS$/, '');
      }
      updatePaymentCustomerSummary();

      document.getElementById('reading-type-first').checked = firstReading;
      document.getElementById('reading-type-normal').checked = !firstReading;
      const previousInput = document.getElementById('input-prev-reading');
      previousInput.value = firstReading ? '' : (record ? record.previousReading : latest.lastReading);
      previousInput.placeholder = firstReading
        ? translations[state.uiPreferences.lang].firstReadingUnavailable
        : '';
      previousInput.readOnly = firstReading;
      previousInput.required = !firstReading;
      document.getElementById('opening-bill-container').classList.toggle('hidden', !firstReading || !activeCustomerId);
      document.getElementById('first-reading-notice').classList.toggle('hidden', !firstReading || !activeCustomerId);
      document.getElementById('input-curr-reading').value = record ? (record.currentReading ?? '') : (latest.hasPreviousReading ? latest.lastReading : '');
      document.getElementById('input-rate').value = record ? record.rate : state.settings.rate;
      document.getElementById('input-opening-bill').value = record ? (record.openingBillAmount ?? 0) : 0;
      document.getElementById('input-method').value = record ? record.paymentMethod || 'Cash' : 'Cash';
      document.getElementById('input-amount-paid').value = record ? record.amountPaid : '';
      calculateLivePaymentSummary();
    }

    function updatePaymentCustomerSummary() {
      const summary = document.getElementById('payment-customer-summary');
      const customer = getCustomer(document.getElementById('input-customer').value);
      if (!customer) {
        summary.classList.add('hidden');
        summary.replaceChildren();
        return;
      }
      const fields = [
        ['Customer', customerDisplayName(customer)],
        ...(customer.contactNumber.trim() ? [['Contact', customer.contactNumber]] : []),
        ...(customer.location.trim() ? [['Location', customer.location]] : [])
      ];
      summary.replaceChildren();
      fields.forEach(([label, value]) => {
        const item = document.createElement('div');
        const caption = document.createElement('span');
        caption.className = 'block text-[10px] uppercase tracking-wide text-emerald-700 dark:text-emerald-300';
        caption.textContent = label;
        const content = document.createElement('span');
        content.className = 'font-semibold text-gray-800 dark:text-gray-100';
        content.textContent = value;
        item.append(caption, content);
        summary.appendChild(item);
      });
      summary.classList.remove('hidden');
    }

    function handlePaymentCustomerChange() {
      activeCustomerId = document.getElementById('input-customer').value;
      updatePaymentCustomerSummary();
      setupNewPaymentForm();
    }

    function handleReadingTypeChange() {
      const firstReading = document.getElementById('reading-type-first').checked;
      const previousInput = document.getElementById('input-prev-reading');
      const customerId = document.getElementById('input-customer').value || activeCustomerId;
      const latest = customerId
        ? getLatestLedgerState(customerId)
        : { lastReading: null, hasPreviousReading: false };

      if (firstReading) {
        previousInput.value = '';
        previousInput.readOnly = true;
        previousInput.required = false;
        document.getElementById('opening-bill-container').classList.remove('hidden');
        document.getElementById('first-reading-notice').classList.remove('hidden');
      } else {
        if (!previousInput.value && latest.hasPreviousReading) {
          previousInput.value = latest.lastReading;
        }
        previousInput.readOnly = false;
        previousInput.required = true;
        document.getElementById('opening-bill-container').classList.add('hidden');
        document.getElementById('first-reading-notice').classList.add('hidden');
      }
      calculateLivePaymentSummary();
    }

    function calculateLivePaymentSummary() {
      const customerId = document.getElementById('input-customer').value || activeCustomerId;
      const latest = customerId
        ? getLatestLedgerState(customerId)
        : { currentAdvance: 0, currentDue: 0 };
      const isFirstReading = document.getElementById('reading-type-first').checked;
      const previousInputValue = document.getElementById('input-prev-reading').value;
      const prevReading = isFirstReading || previousInputValue === '' ? null : Number(previousInputValue);
      const currentInputValue = document.getElementById('input-curr-reading').value;
      const currReading = currentInputValue === '' ? 0 : Number(currentInputValue);
      document.getElementById('input-prev-reading').placeholder = isFirstReading
        ? translations[state.uiPreferences.lang].firstReadingUnavailable
        : '';
      const rate = parseFloat(document.getElementById('input-rate').value) || 0;
      const openingBillAmount = isFirstReading
        ? Math.max(0, parseFloat(document.getElementById('input-opening-bill').value) || 0)
        : 0;
      const amountPaid = parseFloat(document.getElementById('input-amount-paid').value) || 0;

      const invalidPrevious = !isFirstReading && (prevReading === null || !Number.isFinite(prevReading));
      const decreasingReading = !isFirstReading && !invalidPrevious &&
        currentInputValue !== '' && currReading < prevReading;
      const readingError = document.getElementById('reading-validation-error');
      readingError.classList.toggle('hidden', !invalidPrevious && !decreasingReading);
      readingError.textContent = invalidPrevious
        ? translations[state.uiPreferences.lang].missingPreviousReadingError
        : translations[state.uiPreferences.lang].readingLowerError;
      const units = isFirstReading || invalidPrevious || decreasingReading
        ? 0
        : Math.max(0, currReading - prevReading);
      const billCost = isFirstReading ? openingBillAmount : units * rate;

      const prevAdvance = latest.currentAdvance;
      const prevDue = latest.currentDue;

      const advanceApplied = Math.min(prevAdvance, billCost);
      const netPayable = (billCost - advanceApplied) + prevDue;
      updatePaymentHelper(prevAdvance, prevDue, billCost, netPayable);

      document.getElementById('live-reading-type').textContent = isFirstReading
        ? translations[state.uiPreferences.lang].readingTypeFirst
        : translations[state.uiPreferences.lang].readingTypeNormal;
      document.getElementById('live-units').textContent = isFirstReading ? '—' : units;
      document.getElementById('live-cost-label').textContent = isFirstReading ? 'Opening Bill' : translations[state.uiPreferences.lang].billCost;
      document.getElementById('live-cost').textContent = `Rs. ${billCost.toLocaleString()}`;
      document.getElementById('live-amount-paid').textContent = `Rs. ${amountPaid.toLocaleString()}`;
      document.getElementById('live-advance-applied').textContent = `Rs. ${advanceApplied.toLocaleString()}`;
      const remainingDue = Math.max(0, netPayable - amountPaid);
      document.getElementById('live-due').textContent = `Rs. ${remainingDue.toLocaleString()}`;
      document.getElementById('live-net-payable').textContent = `Rs. ${remainingDue.toLocaleString()}`;

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
        newStatus = isFirstReading && openingBillAmount > 0
          ? 'DUE'
          : (amountPaid > 0 ? 'PARTIAL' : 'DUE');
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

    async function handleNewPayment(e) {
      e.preventDefault();
      if (paymentSaveInProgress) return;

      paymentSaveInProgress = true;
      const submitButton = document.getElementById('payment-submit-button');
      const submitLabel = document.getElementById('payment-submit-label');
      const paymentControls = Array.from(document.getElementById('payment-form').elements);
      const previouslyDisabled = paymentControls.map(control => control.disabled);
      paymentControls.forEach(control => { control.disabled = true; });
      submitLabel.textContent = 'Saving...';

      try {
        await new Promise(resolve => setTimeout(resolve, 0));
        if (editingRecordId && !window.ElectroPayAuth.requireAdmin()) return;
        const customerId = document.getElementById('input-customer').value;
        const customer = getCustomer(customerId);
        if (!customer) {
          showToast('Select a customer before recording a payment.', 'error');
          return;
        }
        if (!customer.customerName.trim()) {
          showToast('Add this customer’s name before recording a payment. Use the Customers page to update their information.', 'error');
          return;
        }
        const isFirstReading = document.getElementById('reading-type-first').checked;
        const previousInputValue = document.getElementById('input-prev-reading').value;
        const prevReading = isFirstReading
          ? null
          : (previousInputValue === '' ? null : Number(previousInputValue));
        const currReading = parseFloat(document.getElementById('input-curr-reading').value);
        const paymentDate = convertNepaliDateToISO(document.getElementById('input-date').value);
        if (!window.ElectroPayAuth.isAdmin()) {
          const latestDate = state.records
            .filter(record => !isDeletedRecord(record))
            .reduce((latest, record) => record.date > latest ? record.date : latest, '');
          if (latestDate && paymentDate < latestDate) {
            showToast('Staff can only add payments dated on or after the latest ledger entry. Ask an administrator to correct older entries.', 'error');
            return;
          }
        }

        if (!Number.isFinite(currReading) || currReading < 0) {
          showToast("Enter a valid non-negative current meter reading.", "error");
          return;
        }

        if (!isFirstReading && (prevReading === null || !Number.isFinite(prevReading) || prevReading < 0)) {
          showToast(translations[state.uiPreferences.lang].missingPreviousReadingError, "error");
          return;
        }

        if (!isFirstReading && currReading < prevReading) {
          showToast(translations[state.uiPreferences.lang].readingLowerError, "error");
          return;
        }

        if (!paymentDate) {
          showToast("Enter a valid Nepali BS date in YYYY-MM-DD format.", "error");
          return;
        }

        const openingBillValue = document.getElementById('input-opening-bill').value;
        const openingBillAmount = isFirstReading && openingBillValue !== '' ? Number(openingBillValue) : 0;
        if (!Number.isFinite(openingBillAmount) || openingBillAmount < 0) {
          showToast("Enter a valid non-negative opening bill amount.", "error");
          return;
        }

        const recordData = {
          customerId,
          date: paymentDate,
          readingType: isFirstReading ? 'FIRST' : 'NORMAL',
          paymentMethod: document.getElementById('input-method').value,
          previousReading: prevReading,
          currentReading: currReading,
          openingBillAmount,
          rate: parseFloat(document.getElementById('input-rate').value),
          amountPaid: parseFloat(document.getElementById('input-amount-paid').value)
        };
        const stateBeforeSave = JSON.parse(JSON.stringify(state));
        const wasEditing = Boolean(editingRecordId);

        if (wasEditing) {
          const recordIndex = state.records.findIndex(record => record.id === editingRecordId);
          if (recordIndex >= 0) {
            state.records[recordIndex] = {
              ...state.records[recordIndex],
              ...recordData,
              updatedAt: new Date().toISOString()
            };
          }
        } else {
          state.records.push({
            id: `ELEC-${crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`}`,
            createdAt: new Date().toISOString(),
            ...recordData
          });
        }

        let saved = false;
        try {
          saved = await rebuildLedger();
        } catch (error) {
          console.error('Failed rebuilding the payment ledger:', error);
        }
        if (!saved) {
          state = stateBeforeSave;
          try {
            await rebuildLedger(false);
          } catch (error) {
            console.error('Failed restoring the payment ledger after an unsuccessful save:', error);
          }
          showToast('Payment could not be saved. Your entries are still here; please try again.', 'error');
          return;
        }

        if (wasEditing) {
          showToast("Payment record updated successfully!");
          setPaymentFormMode();
          switchTab('records');
        } else {
          showToast("Payment record saved successfully!");
          activeCustomerId = '';
          document.getElementById('payment-form').reset();
          setPaymentFormMode();
          setupNewPaymentForm(null, true);
        }
        if (state.settings.autoExcelBackup !== false) {
          void syncExcelBackup(true);
        }
      } finally {
        paymentSaveInProgress = false;
        paymentControls.forEach((control, index) => {
          control.disabled = previouslyDisabled[index];
        });
        submitLabel.textContent = translations[state.uiPreferences.lang].btnSavePayment;
      }
    }

    /* ==========================================================================
       9. PAYMENT RECORDS TABLE & ACTIONS
       ========================================================================== */
    function setDynamicSelectOptions(select, allLabel, values, selectedValue) {
      select.replaceChildren();
      const allOption = document.createElement('option');
      allOption.value = '';
      allOption.textContent = allLabel;
      select.appendChild(allOption);
      values.forEach(({ value, label }) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        select.appendChild(option);
      });
      select.value = values.some(item => item.value === selectedValue) ? selectedValue : '';
    }

    function updateRecordsFilterOptions() {
      const customerSelect = document.getElementById('records-customer-filter');
      const statusSelect = document.getElementById('records-status-filter');
      const methodSelect = document.getElementById('records-method-filter');
      const locationSelect = document.getElementById('records-location-filter');
      const customerValue = customerSelect.value;
      const statusValue = statusSelect.value;
      const methodValue = methodSelect.value;
      const locationValue = locationSelect.value;
      const customerQuery = document.getElementById('records-customer-search').value.trim().toLocaleLowerCase();

      setDynamicSelectOptions(customerSelect, 'All customers', getActiveCustomers()
        .filter(customer => !customerQuery ||
          `${customer.customerName} ${customer.contactNumber} ${customer.location}`.toLocaleLowerCase().includes(customerQuery))
        .map(customer => ({ value: customer.id, label: customerDisplayName(customer) }))
        .sort((a, b) => a.label.localeCompare(b.label)), customerValue);

      const activeRecords = getActivePaymentRecords();
      const statuses = [...new Set(activeRecords.map(record => record.status).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));
      setDynamicSelectOptions(statusSelect, 'All statuses', statuses.map(value => ({
        value,
        label: value.charAt(0) + value.slice(1).toLowerCase()
      })), statusValue);

      const methods = [...new Set([
        ...(Array.isArray(state.settings.paymentMethods) ? state.settings.paymentMethods : []),
        ...activeRecords.map(record => record.paymentMethod).filter(Boolean)
      ])].sort((a, b) => a.localeCompare(b));
      setDynamicSelectOptions(methodSelect, 'All methods', methods.map(value => ({ value, label: value })), methodValue);

      const locations = [...new Set(getActiveCustomers().map(customer => customer.location?.trim()).filter(Boolean))]
        .sort((a, b) => a.localeCompare(b));
      setDynamicSelectOptions(locationSelect, 'All locations', locations.map(value => ({ value, label: value })), locationValue);
    }

    function getRecordDateISO(record) {
      const value = String(record.date ?? '').trim();
      if (/^\d{4}-\d{2}-\d{2}/.test(value)) return value.slice(0, 10);
      const parsed = new Date(value);
      return Number.isNaN(parsed.getTime()) ? '' : toLocalDateISO(parsed);
    }

    function toLocalDateISO(date) {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }

    function getDatePresetRange(preset) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const start = new Date(today);
      const end = new Date(today);
      const day = today.getDay();
      const mondayOffset = (day + 6) % 7;

      switch (preset) {
        case 'today':
          break;
        case 'yesterday':
          start.setDate(start.getDate() - 1);
          end.setDate(end.getDate() - 1);
          break;
        case 'this-week':
          start.setDate(start.getDate() - mondayOffset);
          break;
        case 'last-week':
          start.setDate(start.getDate() - mondayOffset - 7);
          end.setDate(end.getDate() - mondayOffset - 1);
          break;
        case 'this-month':
          start.setDate(1);
          break;
        case 'last-month':
          start.setDate(1);
          start.setMonth(start.getMonth() - 1);
          end.setDate(0);
          break;
        case 'this-year':
          start.setMonth(0, 1);
          break;
        case 'last-year':
          start.setFullYear(start.getFullYear() - 1, 0, 1);
          end.setFullYear(end.getFullYear() - 1, 11, 31);
          break;
        default:
          return null;
      }
      return { from: toLocalDateISO(start), to: toLocalDateISO(end) };
    }

    function getRecordsFilterRange(key) {
      const minValue = document.getElementById(`records-${key}-min`)?.value;
      const maxValue = document.getElementById(`records-${key}-max`)?.value;
      return {
        min: minValue === '' || minValue === undefined ? null : Number(minValue),
        max: maxValue === '' || maxValue === undefined ? null : Number(maxValue)
      };
    }

    function getRecordsRangeFilterKeys() {
      return Array.from(document.querySelectorAll('.records-range-filter')).map(element => element.dataset.rangeKey);
    }

    function initializeRecordsRangeInputs() {
      document.querySelectorAll('.records-range-filter').forEach(container => {
        if (container.childElementCount) return;
        const label = document.createElement('span');
        label.textContent = container.dataset.rangeLabel;
        const inputs = document.createElement('div');
        inputs.className = 'mt-1 flex gap-2';
        ['min', 'max'].forEach(bound => {
          const input = document.createElement('input');
          input.id = `records-${container.dataset.rangeKey}-${bound}`;
          input.type = 'number';
          input.min = '0';
          input.step = 'any';
          input.placeholder = bound === 'min' ? 'Min' : 'Max';
          input.setAttribute('aria-label', `${bound === 'min' ? 'Minimum' : 'Maximum'} ${container.dataset.rangeLabel}`);
          input.className = 'min-w-0 w-1/2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-sm';
          input.addEventListener('input', handleRecordsFilterChange);
          inputs.appendChild(input);
        });
        container.append(label, inputs);
      });
    }

    function matchesRecordsRange(value, range) {
      if (range.min !== null && (!Number.isFinite(range.min) || value < range.min)) return false;
      if (range.max !== null && (!Number.isFinite(range.max) || value > range.max)) return false;
      return true;
    }

    function getFilteredPaymentRecords() {
      const query = document.getElementById('records-search')?.value.trim().toLocaleLowerCase() || '';
      const customerId = document.getElementById('records-customer-filter')?.value || '';
      const status = document.getElementById('records-status-filter')?.value || '';
      const method = document.getElementById('records-method-filter')?.value || '';
      const location = document.getElementById('records-location-filter')?.value || '';
      const datePreset = document.getElementById('records-date-preset')?.value || '';
      const presetRange = getDatePresetRange(datePreset);
      const dateFrom = datePreset === 'custom'
        ? document.getElementById('records-date-from').value
        : presetRange?.from || '';
      const dateTo = datePreset === 'custom'
        ? document.getElementById('records-date-to').value
        : presetRange?.to || '';
      const amountRange = getRecordsFilterRange('amount-paid');
      const rangeKeys = getRecordsRangeFilterKeys();

      const filtered = getActivePaymentRecords().filter(record => {
        const customer = getCustomerForRecord(record);
        if (customerId && record.customerId !== customerId) return false;
        if (status && record.status !== status) return false;
        if (method && (record.paymentMethod || '') !== method) return false;
        if (location && (customer?.location?.trim() || '') !== location) return false;

        const recordDate = getRecordDateISO(record);
        if (dateFrom && (!recordDate || recordDate < dateFrom)) return false;
        if (dateTo && (!recordDate || recordDate > dateTo)) return false;
        if (!matchesRecordsRange(Number(record.amountPaid || 0), amountRange)) return false;

        for (const key of rangeKeys) {
          const range = getRecordsFilterRange(key);
          if (range.min === null && range.max === null) continue;
          const rawValue = record[key];
          if (rawValue === null || rawValue === undefined || rawValue === '') return false;
          if (!matchesRecordsRange(Number(rawValue), range)) return false;
        }

        if (query) {
          const searchableValues = [
            ...Object.values(customer || {}),
            ...Object.entries(record)
              .filter(([key]) => key !== 'customerId')
              .map(([, value]) => value)
          ];
          const searchable = `${searchableValues.filter(value =>
            value === null || ['string', 'number'].includes(typeof value)
          ).join(' ')} ${formatDateForDisplay(record.date)}`.toLocaleLowerCase();
          if (!searchable.includes(query)) return false;
        }
        return true;
      });

      const sort = document.getElementById('records-sort')?.value || 'newest';
      filtered.sort((a, b) => {
        switch (sort) {
          case 'oldest':
            return getRecordDateISO(a).localeCompare(getRecordDateISO(b));
          case 'amount-high':
            return Number(b.amountPaid || 0) - Number(a.amountPaid || 0);
          case 'amount-low':
            return Number(a.amountPaid || 0) - Number(b.amountPaid || 0);
          case 'customer-az':
            return customerDisplayName(getCustomerForRecord(a)).localeCompare(customerDisplayName(getCustomerForRecord(b)));
          case 'customer-za':
            return customerDisplayName(getCustomerForRecord(b)).localeCompare(customerDisplayName(getCustomerForRecord(a)));
          default:
            return getRecordDateISO(b).localeCompare(getRecordDateISO(a));
        }
      });
      return filtered;
    }

    function handleRecordsSearchInput() {
      recordsCurrentPage = 1;
      window.clearTimeout(recordsSearchDebounceTimer);
      recordsSearchDebounceTimer = window.setTimeout(renderRecordsTable, 180);
    }

    function handleRecordsCustomerSearchInput() {
      recordsCurrentPage = 1;
      renderRecordsTable();
    }

    function handleRecordsFilterChange() {
      recordsCurrentPage = 1;
      renderRecordsTable();
    }

    function handleRecordsDatePresetChange() {
      const isCustom = document.getElementById('records-date-preset').value === 'custom';
      document.querySelectorAll('.records-custom-date').forEach(input => input.classList.toggle('hidden', !isCustom));
      handleRecordsFilterChange();
    }

    function toggleRecordsFilters() {
      const panel = document.getElementById('records-filter-panel');
      const button = document.getElementById('records-filter-toggle');
      const opening = panel.classList.contains('hidden');
      panel.classList.toggle('hidden', !opening);
      button.setAttribute('aria-expanded', String(opening));
    }

    function clearRecordsSearch() {
      document.getElementById('records-search').value = '';
      handleRecordsSearchInput();
    }

    function clearRecordFilter(key) {
      if (key === 'search') {
        document.getElementById('records-search').value = '';
      } else if (key === 'amount-paid') {
        document.getElementById('records-amount-paid-min').value = '';
        document.getElementById('records-amount-paid-max').value = '';
      } else if (key === 'date') {
        document.getElementById('records-date-preset').value = '';
        document.getElementById('records-date-from').value = '';
        document.getElementById('records-date-to').value = '';
      } else if (key === 'customer') {
        document.getElementById('records-customer-search').value = '';
        document.getElementById('records-customer-filter').value = '';
      } else if (key.startsWith('range:')) {
        const rangeKey = key.slice('range:'.length);
        document.getElementById(`records-${rangeKey}-min`).value = '';
        document.getElementById(`records-${rangeKey}-max`).value = '';
      } else {
        const control = document.getElementById(`records-${key}-filter`);
        if (control) control.value = '';
      }
      if (key === 'date') handleRecordsDatePresetChange();
      else handleRecordsFilterChange();
    }

    function clearAllRecordFilters() {
      document.getElementById('records-search').value = '';
      ['customer', 'status', 'method', 'location'].forEach(key => {
        document.getElementById(`records-${key}-filter`).value = '';
      });
      document.getElementById('records-customer-search').value = '';
      document.getElementById('records-date-preset').value = '';
      document.getElementById('records-date-from').value = '';
      document.getElementById('records-date-to').value = '';
      document.getElementById('records-amount-paid-min').value = '';
      document.getElementById('records-amount-paid-max').value = '';
      document.getElementById('records-sort').value = 'newest';
      getRecordsRangeFilterKeys().forEach(key => {
        document.getElementById(`records-${key}-min`).value = '';
        document.getElementById(`records-${key}-max`).value = '';
      });
      document.querySelectorAll('.records-custom-date').forEach(input => input.classList.add('hidden'));
      handleRecordsFilterChange();
    }

    function renderActiveRecordFilters() {
      const container = document.getElementById('records-active-filters');
      const chips = [];
      const search = document.getElementById('records-search').value.trim();
      if (search) chips.push({ key: 'search', label: `Search: ${search}` });

      const customerId = document.getElementById('records-customer-filter').value;
      if (customerId) chips.push({ key: 'customer', label: `Customer: ${customerDisplayName(getCustomer(customerId))}` });
      const status = document.getElementById('records-status-filter').value;
      if (status) chips.push({ key: 'status', label: `Status: ${status}` });
      const method = document.getElementById('records-method-filter').value;
      if (method) chips.push({ key: 'method', label: `Method: ${method}` });
      const location = document.getElementById('records-location-filter').value;
      if (location) chips.push({ key: 'location', label: `Location: ${location}` });

      const preset = document.getElementById('records-date-preset').value;
      if (preset) {
        const select = document.getElementById('records-date-preset');
        const dateLabel = preset === 'custom'
          ? `Date: ${document.getElementById('records-date-from').value || '…'} – ${document.getElementById('records-date-to').value || '…'}`
          : `Date: ${select.options[select.selectedIndex].text}`;
        chips.push({ key: 'date', label: dateLabel });
      }

      const amountRange = getRecordsFilterRange('amount-paid');
      if (amountRange.min !== null || amountRange.max !== null) {
        chips.push({ key: 'amount-paid', label: `Paid: ${amountRange.min ?? 'Any'} – ${amountRange.max ?? 'Any'}` });
      }
      getRecordsRangeFilterKeys().forEach(key => {
        const range = getRecordsFilterRange(key);
        if (range.min === null && range.max === null) return;
        const label = document.querySelector(`[data-range-key="${key}"]`).dataset.rangeLabel;
        chips.push({ key: `range:${key}`, label: `${label}: ${range.min ?? 'Any'} – ${range.max ?? 'Any'}` });
      });

      container.replaceChildren();
      container.classList.toggle('hidden', chips.length === 0);
      chips.forEach(chip => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 px-3 py-1 text-xs font-medium text-emerald-800 dark:text-emerald-200';
        button.setAttribute('aria-label', `Remove ${chip.label} filter`);
        const text = document.createElement('span');
        text.textContent = chip.label;
        const icon = document.createElement('i');
        icon.dataset.lucide = 'x';
        icon.className = 'h-3 w-3';
        button.append(text, icon);
        button.addEventListener('click', () => clearRecordFilter(chip.key));
        container.appendChild(button);
      });
      if (chips.length) {
        const clearButton = document.createElement('button');
        clearButton.type = 'button';
        clearButton.className = 'px-2 py-1 text-xs font-semibold text-gray-500 hover:text-gray-800 dark:hover:text-white';
        clearButton.textContent = 'Clear All Filters';
        clearButton.addEventListener('click', clearAllRecordFilters);
        container.appendChild(clearButton);
      }
    }

    function changeRecordsPage(offset) {
      recordsCurrentPage += offset;
      renderRecordsTable();
    }

    function renderRecordsTable() {
      const tbody = document.getElementById('records-tbody');
      tbody.replaceChildren();
      initializeRecordsRangeInputs();
      updateRecordsFilterOptions();
      const searchInput = document.getElementById('records-search');
      const clearSearch = document.getElementById('clear-records-search');
      clearSearch.classList.toggle('hidden', !searchInput.value);
      const filtered = getFilteredPaymentRecords();

      const filteredRecordIds = new Set(filtered.map(record => record.id));
      selectedPaymentIds.forEach(id => {
        if (!filteredRecordIds.has(id)) selectedPaymentIds.delete(id);
      });

      const pageCount = Math.max(1, Math.ceil(filtered.length / RECORDS_PAGE_SIZE));
      recordsCurrentPage = Math.min(Math.max(recordsCurrentPage, 1), pageCount);
      const startIndex = (recordsCurrentPage - 1) * RECORDS_PAGE_SIZE;
      const visibleRecords = filtered.slice(startIndex, startIndex + RECORDS_PAGE_SIZE);
      const totalPaid = filtered.reduce((sum, record) => sum + Number(record.amountPaid || 0), 0);

      document.getElementById('records-count').textContent =
        `${filtered.length.toLocaleString()} ${filtered.length === 1 ? 'payment record' : 'payment records'} found`;
      document.getElementById('records-financial-summary').textContent =
        `Total paid: Rs. ${formatReceiptAmount(totalPaid)}`;
      renderActiveRecordFilters();
      updatePaymentSelectionSummary(filtered);

      const pagination = document.getElementById('records-pagination');
      pagination.classList.toggle('hidden', filtered.length <= RECORDS_PAGE_SIZE);
      pagination.classList.toggle('flex', filtered.length > RECORDS_PAGE_SIZE);
      document.getElementById('records-page-summary').textContent = filtered.length
        ? `Showing ${startIndex + 1}–${Math.min(startIndex + visibleRecords.length, filtered.length)} of ${filtered.length.toLocaleString()} payments`
        : 'Showing 0 payments';
      document.getElementById('records-page-number').textContent = `Page ${recordsCurrentPage} of ${pageCount}`;
      document.getElementById('records-previous-page').disabled = recordsCurrentPage <= 1;
      document.getElementById('records-next-page').disabled = recordsCurrentPage >= pageCount;

      if (filtered.length === 0) {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 14;
        cell.className = 'px-4 py-12 text-center';
        cell.innerHTML = `<i data-lucide="search-x" class="mx-auto h-8 w-8 text-gray-300 dark:text-gray-600"></i>
          <p class="mt-3 text-sm font-semibold text-gray-700 dark:text-gray-200">No payment records found</p>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">Try changing your search or clearing one or more filters.</p>
          <button type="button" onclick="clearAllRecordFilters()" class="mt-3 text-xs font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">Clear Filters</button>`;
        row.appendChild(cell);
        tbody.appendChild(row);
        lucide.createIcons();
        return;
      }

      visibleRecords.forEach((r, rowIndex) => {
        const customer = getCustomerForRecord(r);
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors';
        tr.innerHTML = `
          <td class="px-4 py-3 text-center"></td>
          <td class="px-4 py-3 text-center text-xs text-gray-500">${startIndex + rowIndex + 1}</td>
          <td class="px-4 py-3">
            <span class="font-semibold">${escapeHtml(customerDisplayName(customer))}</span>
            ${customer?.customerNo ? `<span class="block text-[10px] font-mono text-gray-400">${escapeHtml(customer.customerNo)}</span>` : ''}
            ${customer?.contactNumber?.trim() ? `<span class="block text-xs text-gray-500 dark:text-gray-400">${escapeHtml(customer.contactNumber)}</span>` : ''}
            ${customer?.location?.trim() ? `<span class="block text-xs text-gray-500 dark:text-gray-400">${escapeHtml(customer.location)}</span>` : ''}
          </td>
          <td class="px-4 py-3 font-mono text-[10px] font-semibold">${escapeHtml(r.paymentNo || '')}</td>
          <td class="px-4 py-3 font-mono text-[10px]">${escapeHtml(r.receiptNo || '')}</td>
          <td class="px-4 py-3 font-medium">${formatDateForDisplay(r.date)}</td>
          <td class="px-4 py-3 text-xs">${escapeHtml(r.paymentMethod || '—')}</td>
          <td class="px-4 py-3 text-right">${r.previousReading === null || r.previousReading === undefined ? '—' : r.units}</td>
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
              ${window.ElectroPayAuth.isAdmin() ? `
                <button onclick="startEditRecord('${r.id}')" class="p-1.5 hover:bg-amber-100 dark:hover:bg-amber-950/50 rounded text-amber-600 dark:text-amber-400" title="Edit Record">
                  <i data-lucide="pencil" class="w-4 h-4"></i>
                </button>
                <button onclick="deleteRecord('${r.id}')" class="p-1.5 hover:bg-red-100 dark:hover:bg-red-950/50 rounded text-red-600 dark:text-red-400" title="Delete Record">
                  <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>` : ''}
            </div>
          </td>
        `;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = selectedPaymentIds.has(r.id);
        checkbox.setAttribute('aria-label', `Select payment for ${customerDisplayName(customer)} (${r.receiptNo})`);
        checkbox.className = 'rounded border-gray-300 text-emerald-600 focus:ring-emerald-500';
        checkbox.addEventListener('change', () => togglePaymentSelection(r.id, checkbox.checked));
        tr.cells[0].appendChild(checkbox);
        tbody.appendChild(tr);
      });
      lucide.createIcons();
    }

    function formatReceiptAmount(amount) {
      return Number(amount || 0).toLocaleString(undefined, { maximumFractionDigits: 2 });
    }

    function updatePaymentSelectionSummary(filtered = getFilteredPaymentRecords()) {
      const selectedRecords = getActivePaymentRecords().filter(record => selectedPaymentIds.has(record.id));
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
      if (selected) {
        const record = getActivePaymentRecords().find(item => item.id === id);
        const selectedCustomerId = getActivePaymentRecords().find(item => selectedPaymentIds.has(item.id))?.customerId;
        if (selectedCustomerId && record?.customerId !== selectedCustomerId) {
          showToast('Combined receipts can include payments for one customer only.', 'error');
          renderRecordsTable();
          return;
        }
        selectedPaymentIds.add(id);
      }
      else selectedPaymentIds.delete(id);
      updatePaymentSelectionSummary();
    }

    function toggleSelectAllPayments(select) {
      const filtered = getFilteredPaymentRecords();
      const filteredCustomerIds = new Set(filtered.map(record => record.customerId));
      const alreadySelectedCustomerId = getActivePaymentRecords().find(record => selectedPaymentIds.has(record.id))?.customerId;
      if (select && (filteredCustomerIds.size > 1 ||
          (alreadySelectedCustomerId && [...filteredCustomerIds].some(id => id !== alreadySelectedCustomerId)))) {
        showToast('Search for one customer before selecting all payments for a combined receipt.', 'error');
        renderRecordsTable();
        return;
      }
      filtered.forEach(record => select ? selectedPaymentIds.add(record.id) : selectedPaymentIds.delete(record.id));
      renderRecordsTable();
    }

    function clearPaymentSelection() {
      selectedPaymentIds.clear();
      renderRecordsTable();
    }

    function generateCombinedReceipt() {
      const selectedRecords = getActivePaymentRecords().filter(record => selectedPaymentIds.has(record.id));
      if (selectedRecords.length === 0) {
        showToast('Select at least one payment record to generate a combined receipt.', 'error');
        return;
      }
      const customerIds = new Set(selectedRecords.map(record => record.customerId));
      if (customerIds.size !== 1) {
        showToast('Select payment records for one customer at a time to create a combined receipt.', 'error');
        return;
      }
      const customer = getCustomerForRecord(selectedRecords[0]);

      const rows = document.getElementById('combined-receipt-rows');
      rows.replaceChildren();
      selectedRecords.forEach((record, index) => {
        const row = document.createElement('tr');
        [
          { value: formatDateForDisplay(record.date) },
          { value: String(index + 1) },
          { value: record.paymentNo || '', className: 'font-mono font-semibold' },
          { value: record.receiptNo || '', className: 'font-mono' },
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
      document.getElementById('combined-receipt-customer').textContent = customerDisplayName(customer);
      const combinedContactContainer = document.getElementById('combined-receipt-contact-container');
      combinedContactContainer.classList.toggle('hidden', !customer?.contactNumber.trim());
      document.getElementById('combined-receipt-contact').textContent = customer?.contactNumber.trim() || '';
      const combinedLocationContainer = document.getElementById('combined-receipt-location-container');
      combinedLocationContainer.classList.toggle('hidden', !customer?.location.trim());
      document.getElementById('combined-receipt-location').textContent = customer?.location.trim() || '';
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

    function startEditRecord(id) {
      if (!window.ElectroPayAuth.requireAdmin()) return;
      const record = state.records.find(item => item.id === id);
      if (!record || isDeletedRecord(record)) return;
      setPaymentFormMode(id);
      setupNewPaymentForm(record);
      switchTab('new-payment');
    }

    function deleteRecord(id) {
      if (!window.ElectroPayAuth.requireAdmin()) return;
      const record = state.records.find(item => item.id === id);
      if (!record || isDeletedRecord(record)) return;
      const customer = getCustomerForRecord(record);
      void openTrashConfirmation({
        title: 'Delete Payment?',
        description: 'This financial record affects payment history, receipts, due and advance balances. Moving it to Deleted Records will recalculate active balances. It remains recoverable for one calendar month.',
        details: [
          `Customer: ${customerDisplayName(customer)}`,
          `Payment date: ${formatDateForDisplay(record.date)}`,
          `Amount paid: Rs. ${formatReceiptAmount(record.amountPaid)}`,
          `Payment method: ${record.paymentMethod || '—'}`,
          `Payment No.: ${record.paymentNo || ''}`,
          `Receipt No.: ${record.receiptNo || record.id}`,
          `Status: ${record.status || '—'}`,
          `Billed amount: Rs. ${formatReceiptAmount(record.billCost)}`
        ],
        confirmLabel: 'Move to Trash',
        type: 'warning',
        onConfirm: () => softDeletePayment(id)
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
      const activeRecords = getActivePaymentRecords();
      // 1. Calculate KPIs
      const totalUnits = activeRecords.reduce((acc, r) => acc + r.units, 0);
      const totalBilled = activeRecords.reduce((acc, r) => acc + r.billCost, 0);
      const avgBill = activeRecords.length > 0 ? Math.round(totalBilled / activeRecords.length) : 0;
      const maxBill = activeRecords.length > 0 ? Math.max(...activeRecords.map(r => r.billCost)) : 0;

      document.getElementById('analytics-total-units').textContent = `${totalUnits.toLocaleString()} kWh`;
      document.getElementById('analytics-avg-bill').textContent = `Rs. ${avgBill.toLocaleString()}`;
      document.getElementById('analytics-max-bill').textContent = `Rs. ${maxBill.toLocaleString()}`;
      document.getElementById('analytics-total-records').textContent = activeRecords.length;

      // 2. Destroy existing charts to prevent canvas loop and memory leak
      destroyCharts();

      const isDark = state.uiPreferences.theme === 'dark';
      const textColor = isDark ? '#9ca3af' : '#4b5563';
      const gridColor = isDark ? '#374151' : '#e5e7eb';

      const labels = activeRecords.map(r => formatDateForDisplay(r.date));
      const unitsData = activeRecords.map(r => r.units);
      const billedData = activeRecords.map(r => r.billCost);
      const paidData = activeRecords.map(r => r.amountPaid);

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
        activeRecords.forEach(r => {
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
      const customer = getCustomer(activeCustomerId);
      const activeCustomer = customer && !isDeletedRecord(customer) ? customer : null;
      document.getElementById('snap-customer-name').textContent = activeCustomer ? customerDisplayName(activeCustomer) : '—';
      document.getElementById('snap-advance').textContent = `Rs. ${latest.currentAdvance.toLocaleString()}`;
      document.getElementById('snap-due').textContent = `Rs. ${latest.currentDue.toLocaleString()}`;
      document.getElementById('snap-last-reading').textContent = latest.hasPreviousReading
        ? latest.lastReading
        : translations[state.uiPreferences.lang].firstReadingUnavailable;
      document.getElementById('snap-rate').textContent = `Rs. ${state.settings.rate} / Unit`;
      document.getElementById('snap-last-date').textContent = formatDateForDisplay(latest.lastDate);
    }

    function loadSettingsForm() {
      document.getElementById('setting-rate').value = state.settings.rate;
      document.getElementById('setting-prefix').value = state.settings.receiptPrefix;
    }

    async function saveSettings(e) {
      if (!window.ElectroPayAuth.requireAdmin()) return;
      e.preventDefault();
      const previousState = JSON.parse(JSON.stringify(state));
      state.settings.rate = parseFloat(document.getElementById('setting-rate').value) || 10;
      state.settings.receiptPrefix = document.getElementById('setting-prefix').value || "EPR-";
      if (!await saveState()) {
        state = previousState;
        loadSettingsForm();
        return;
      }
      showToast("Configuration saved successfully.");
      refreshActiveViews();
    }

    function exportDataJSON() {
      if (!window.ElectroPayAuth.requireAdmin()) return;
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ElectroPay_Backup_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      void logAuditEvent('BACKUP_CREATED');
      showToast("Backup file downloaded.");
    }

    async function logAuditEvent(action) {
      const { error } = await window.ElectroPayAuth.client.rpc('log_electropay_event', { p_action: action });
      if (error) {
        console.error(`Could not record ${action} audit event:`, error);
        showToast(`The operation completed, but its audit event could not be recorded: ${error.message}`, 'error');
        return false;
      }
      return true;
    }

    const EXCEL_BACKUP_FILE = 'Electricity_Payment_Backup.xlsx';
    const EXCEL_BACKUP_DB = 'ElectroPayBackupHandles';
    const EXCEL_BACKUP_STORE = 'handles';
    const EXCEL_RECORD_HEADERS = [
      'Record ID', 'Customer Name', 'Customer ID', 'Payment Date (as stored)', 'Internal Date', 'Receipt Number',
      'Previous Reading', 'Current Reading', 'Opening Bill Amount', 'Units', 'Rate', 'Electricity Cost',
      'Previous Advance', 'Advance Applied', 'Previous Due', 'Amount Required',
      'Amount Paid', 'Remaining Advance', 'Remaining Due', 'Status',
      'Payment Method', 'Remarks', 'Record Status', 'Last Updated', 'Payment Number'
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
      if (!window.ElectroPayAuth.requireAdmin()) return;
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

    async function setExcelAutoBackup(enabled) {
      if (!window.ElectroPayAuth.requireAdmin()) return;
      const previous = state.settings.autoExcelBackup;
      state.settings.autoExcelBackup = enabled;
      if (!await saveState()) {
        state.settings.autoExcelBackup = previous;
        document.getElementById('excel-auto-backup').checked = previous !== false;
        return;
      }
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

        const previousReadingValue = get('Previous Reading');
        const hasPreviousReading = previousReadingValue !== null &&
          previousReadingValue !== undefined && previousReadingValue !== '';
        const previousReading = hasPreviousReading ? Number(previousReadingValue) : null;
        const currentReading = Number(get('Current Reading'));
        const rate = Number(get('Rate'));
        const amountPaid = Number(get('Amount Paid'));
        const openingBillValue = get('Opening Bill Amount');
        const openingBillAmount = openingBillValue === '' ? 0 : Number(openingBillValue);
        const date = excelDateValue(get('Payment Date (as stored)'));
        if (!date || ![currentReading, rate, amountPaid, openingBillAmount].every(Number.isFinite) ||
            (hasPreviousReading && (!Number.isFinite(previousReading) || previousReading < 0 || currentReading < previousReading)) ||
            currentReading < 0 || rate < 0 || amountPaid < 0 || openingBillAmount < 0) {
          throw new Error(`Invalid date, reading, rate, or amount in workbook row ${rowNumber}. The existing workbook was not changed.`);
        }
        const unitsValue = get('Units');
        records.push({
          id,
          customerName: String(get('Customer Name') ?? ''),
          customerId: String(get('Customer ID') ?? '').trim() || 'legacy-customer',
          date,
          receiptNo: String(get('Receipt Number') ?? ''),
          paymentNo: String(get('Payment Number') ?? ''),
          previousReading,
          currentReading,
          openingBillAmount,
          units: unitsValue !== null && unitsValue !== undefined && unitsValue !== ''
            ? Number(unitsValue)
            : (hasPreviousReading ? Math.max(0, currentReading - previousReading) : 0),
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

    function validateExcelCustomerSheet(sheet) {
      if (!sheet) return [];
      const headers = sheet.getRow(1).values.slice(1).map(value => String(value ?? '').trim());
      const required = ['Customer ID', 'Customer Name', 'Contact Number', 'Location'];
      if (required.some(header => !headers.includes(header))) {
        throw new Error('The Customer Directory sheet does not match the ElectroPay backup format.');
      }
      const indexes = Object.fromEntries(headers.map((header, index) => [header, index + 1]));
      const customers = [];
      const ids = new Set();
      for (let rowNumber = 2; rowNumber <= sheet.rowCount; rowNumber++) {
        const row = sheet.getRow(rowNumber);
        if (row.values.slice(1).every(value => value === null || value === undefined || value === '')) continue;
        const id = String(row.getCell(indexes['Customer ID']).value ?? '').trim();
        if (!id || ids.has(id)) throw new Error(`Missing or duplicate customer ID in Customer Directory row ${rowNumber}.`);
        ids.add(id);
        customers.push({
          id,
          customerNo: String(indexes['Customer Number'] ? row.getCell(indexes['Customer Number']).value ?? '' : ''),
          customerName: String(row.getCell(indexes['Customer Name']).value ?? ''),
          contactNumber: String(row.getCell(indexes['Contact Number']).value ?? ''),
          location: String(row.getCell(indexes.Location).value ?? '')
        });
      }
      return customers;
    }

    function sameExcelRecord(appRecord, excelRecord) {
      const numericFields = [
        'currentReading', 'openingBillAmount', 'units', 'rate', 'billCost',
        'previousAdvance', 'advanceApplied', 'previousDue', 'netPayable',
        'amountPaid', 'newAdvance', 'newDue'
      ];
      return appRecord.date === excelRecord.date &&
        String(appRecord.customerId || '') === String(excelRecord.customerId || '') &&
        appRecord.receiptNo === excelRecord.receiptNo &&
        String(appRecord.paymentNo || '') === String(excelRecord.paymentNo || '') &&
        ((appRecord.previousReading === null || appRecord.previousReading === undefined) &&
          (excelRecord.previousReading === null || excelRecord.previousReading === undefined) ||
          (appRecord.previousReading !== null && appRecord.previousReading !== undefined &&
            excelRecord.previousReading !== null && excelRecord.previousReading !== undefined &&
            Number(appRecord.previousReading) === Number(excelRecord.previousReading))) &&
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
        customerName: getCustomerForRecord(record)?.customerName || '',
        customerId: record.customerId || '',
        date: record.date,
        receiptNo: record.receiptNo,
        previousReading: record.previousReading === null || record.previousReading === undefined
          ? null
          : Number(record.previousReading),
        currentReading: Number(record.currentReading),
        openingBillAmount: Number(record.openingBillAmount) || 0,
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
        updatedAt: record.updatedAt || record.createdAt || '',
        paymentNo: record.paymentNo || ''
      };
    }

    function appRecordFromExcelRecord(record) {
      return {
        id: record.id,
        customerId: record.customerId || 'legacy-customer',
        date: record.date,
        receiptNo: record.receiptNo,
        paymentNo: record.paymentNo || '',
        previousReading: record.previousReading,
        currentReading: record.currentReading,
        openingBillAmount: record.openingBillAmount || 0,
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
      target.customerId = source.customerId || 'legacy-customer';
      target.receiptNo = source.receiptNo;
      if (source.paymentNo) target.paymentNo = source.paymentNo;
      target.previousReading = source.previousReading;
      target.currentReading = source.currentReading;
      target.openingBillAmount = source.openingBillAmount || 0;
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
      ['Customer Directory', 'Payment Records', 'Monthly Summary', 'Statistics', 'Backup Information', 'Calculation Method'].forEach(name => {
        const existing = workbook.getWorksheet(name);
        if (existing) workbook.removeWorksheet(existing.id);
      });

      const customersSheet = workbook.addWorksheet('Customer Directory', { views: [{ state: 'frozen', ySplit: 1 }] });
      const customerRows = state.customers.map(customer => [
        customer.id, customer.customerName, customer.contactNumber, customer.location, customer.customerNo
      ]);
      customersSheet.addTable({
        name: 'ElectroPayCustomerDirectory',
        ref: 'A1',
        headerRow: true,
        totalsRow: false,
        style: { theme: 'TableStyleMedium4', showRowStripes: true },
        columns: ['Customer ID', 'Customer Name', 'Contact Number', 'Location', 'Customer Number'].map(name => ({ name })),
        rows: customerRows
      });
      customersSheet.columns = [{ width: 28 }, { width: 32 }, { width: 24 }, { width: 32 }, { width: 20 }];

      const allRecords = [
        ...activeRecords.map(record => excelRowFromAppRecord(record, 'ACTIVE')),
        ...archivedRecords.map(record => ({ ...record, recordStatus: 'DELETED' }))
      ];
      allRecords.sort((a, b) => String(a.date).localeCompare(String(b.date)) || a.id.localeCompare(b.id));

      const recordsSheet = workbook.addWorksheet('Payment Records', { views: [{ state: 'frozen', ySplit: 1 }] });
      const rowValues = allRecords.map(record => [
        record.id, record.customerName || '', record.customerId, record.date, record.date, record.receiptNo, record.previousReading,
        record.currentReading, record.openingBillAmount, record.units, record.rate, record.billCost,
        record.previousAdvance, record.advanceApplied, record.previousDue,
        record.netPayable, record.amountPaid, record.newAdvance, record.newDue,
        record.status, record.paymentMethod, record.remarks, record.recordStatus, record.updatedAt, record.paymentNo
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
        { width: 24 }, { width: 32 }, { width: 28 }, { width: 22 }, { width: 16 }, { width: 20 },
        { width: 18, style: { numFmt: '#,##0.00' } }, { width: 18, style: { numFmt: '#,##0.00' } },
        { width: 20, style: { numFmt: '"Rs. " #,##0.00' } },
        { width: 12, style: { numFmt: '#,##0.00' } }, { width: 14, style: { numFmt: '#,##0.00' } },
        { width: 18, style: { numFmt: '"Rs. " #,##0.00' } }, { width: 18, style: { numFmt: '"Rs. " #,##0.00' } },
        { width: 16, style: { numFmt: '"Rs. " #,##0.00' } }, { width: 16, style: { numFmt: '"Rs. " #,##0.00' } },
        { width: 18, style: { numFmt: '"Rs. " #,##0.00' } }, { width: 18, style: { numFmt: '"Rs. " #,##0.00' } },
        { width: 18, style: { numFmt: '"Rs. " #,##0.00' } }, { width: 16, style: { numFmt: '"Rs. " #,##0.00' } },
        { width: 16 }, { width: 20 }, { width: 36 }, { width: 16 }, { width: 28 }, { width: 20 }
      ];
      recordsSheet.getRow(1).height = 30;
      recordsSheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      recordsSheet.autoFilter = { from: 'A1', to: `Y${Math.max(1, allRecords.length + 1)}` };
      if (allRecords.length) {
        recordsSheet.addConditionalFormatting({
          ref: `T2:T${allRecords.length + 1}`,
          rules: [
            { type: 'containsText', text: 'PAID', style: { font: { color: { argb: 'FF15803D' }, bold: true }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFDCFCE7' } } } },
            { type: 'containsText', text: 'PARTIAL', style: { font: { color: { argb: 'FFB45309' }, bold: true }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEF3C7' } } } },
            { type: 'containsText', text: 'DUE', style: { font: { color: { argb: 'FFB91C1C' }, bold: true }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFFEE2E2' } } } }
          ]
        });
        recordsSheet.addConditionalFormatting({
          ref: `W2:W${allRecords.length + 1}`,
          rules: [
            { type: 'containsText', text: 'DELETED', style: { font: { color: { argb: 'FF6B7280' }, italic: true }, fill: { type: 'pattern', pattern: 'solid', bgColor: { argb: 'FFF3F4F6' } } } }
          ]
        });
      }

      const monthly = new Map();
      activeRecords.forEach(record => {
        const month = String(record.date).slice(0, 7) || 'Unknown';
        const current = monthly.get(month) || { count: 0, units: 0, billed: 0, paid: 0, balances: new Map() };
        current.count++;
        current.units += Number(record.units);
        current.billed += Number(record.billCost);
        current.paid += Number(record.amountPaid);
        current.balances.set(record.customerId, {
          due: Number(record.newDue),
          advance: Number(record.newAdvance)
        });
        monthly.set(month, current);
      });
      const monthlySheet = workbook.addWorksheet('Monthly Summary', { views: [{ state: 'frozen', ySplit: 1 }] });
      monthlySheet.addTable({
        name: 'ElectroPayMonthlySummary', ref: 'A1', headerRow: true, totalsRow: false,
        style: { theme: 'TableStyleMedium4', showRowStripes: true },
        columns: ['Month (as stored by app)', 'Records', 'Units', 'Billed (Rs.)', 'Paid (Rs.)', 'Ending Due (Rs.)', 'Ending Advance (Rs.)'].map(name => ({ name })),
        rows: [...monthly.entries()].sort(([a], [b]) => a.localeCompare(b)).map(([month, values]) => {
          const endingBalances = [...values.balances.values()].reduce((totals, balance) => {
            totals.due += balance.due;
            totals.advance += balance.advance;
            return totals;
          }, { due: 0, advance: 0 });
          return [month, values.count, values.units, values.billed, values.paid, endingBalances.due, endingBalances.advance];
        })
      });
      monthlySheet.columns = [{ width: 24 }, { width: 12 }, { width: 14 }, { width: 18 }, { width: 18 }, { width: 20 }, { width: 22 }];
      monthlySheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
      for (let col = 4; col <= 7; col++) monthlySheet.getColumn(col).numFmt = '"Rs. " #,##0.00';

      const activeBilled = activeRecords.reduce((sum, record) => sum + Number(record.billCost), 0);
      const activePaid = activeRecords.reduce((sum, record) => sum + Number(record.amountPaid), 0);
      const currentBalances = getActiveCustomers().reduce((totals, customer) => {
        const latest = getLatestLedgerState(customer.id);
        totals.due += latest.currentDue;
        totals.advance += latest.currentAdvance;
        return totals;
      }, { due: 0, advance: 0 });
      const statistics = workbook.addWorksheet('Statistics');
      statistics.addRows([
        ['Metric', 'Value'],
        ['Active records', activeRecords.length],
        ['Archived deleted records', archivedRecords.length],
        ['Total units consumed', activeRecords.reduce((sum, record) => sum + Number(record.units), 0)],
        ['Total electricity cost (Rs.)', activeBilled],
        ['Total amount paid (Rs.)', activePaid],
        ['Current due (Rs.)', currentBalances.due],
        ['Current advance (Rs.)', currentBalances.advance]
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
        ['Customer Number Sequence', state.numberSequences.customer],
        ['Payment Number Sequence', state.numberSequences.payment],
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
        ['Units', 'If Previous Reading is blank (first reading), 0; otherwise max(0, Current Reading - Previous Reading). A blank reading is distinct from an actual zero reading.'],
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
      if (!window.ElectroPayAuth.isAdmin()) {
        if (!automatic) window.ElectroPayAuth.requireAdmin();
        return false;
      }
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
            showToast('Changes were saved, but Excel backup is not connected. Choose a backup folder to enable automatic backups.', 'error');
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
        const appRecords = getActivePaymentRecords().map(record => ({ ...record }));
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
          void showModal('Backup paused to protect your data', message, null);
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
        for (const record of appRecords) {
          const previous = knownRows.get(record.id);
          if (!previous) added++;
          else if (!sameExcelRecord(record, previous) || previous.recordStatus === 'DELETED') updated++;
        }
        if (!await rebuildLedger()) throw new Error('Workbook data could not be saved to Supabase.');
        const activeRecordsForBackup = getActivePaymentRecords();
        const activeRows = activeRecordsForBackup.map(record => excelRowFromAppRecord(record, 'ACTIVE'));
        const activeIds = new Set(activeRows.map(record => record.id));
        const archivedRowsById = new Map(existingRows
          .filter(record => !activeIds.has(record.id))
          .map(record => [record.id, { ...record, recordStatus: 'DELETED' }]));
        state.records.filter(isDeletedRecord).forEach(record => {
          if (!archivedRowsById.has(record.id)) {
            archivedRowsById.set(record.id, excelRowFromAppRecord(record, 'DELETED'));
          }
        });
        const archivedRows = [...archivedRowsById.values()];

        const syncResult = { added, updated, deleted, restored };
        buildExcelBackupWorkbook(workbook, activeRecordsForBackup, archivedRows, metadata, syncResult);
        const expectedRecords = [
          ...activeRecordsForBackup,
          ...archivedRows
        ];
        const verifiedTotal = await writeExcelBackup(fileHandle, workbook, oldBytes, expectedRecords);
        await updateExcelBackupLocationStatus();
        const completedAt = new Date().toLocaleString();
        const message = `Backup completed: ${added} new, ${updated} updated, ${deleted} archived, ${restored} recovered from Excel. ${verifiedTotal} total records verified. Last backup: ${completedAt}.`;
        setExcelBackupStatus(message);
        if (!automatic) showToast(`Excel backup completed. ${verifiedTotal} records verified.`);
        if (!await saveState()) throw new Error('Backup status could not be saved to Supabase.');
        await logAuditEvent('BACKUP_CREATED');
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
          await saveState();
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
      if (!window.ElectroPayAuth.requireAdmin()) return;
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
        const restoredCustomers = validateExcelCustomerSheet(workbook.getWorksheet('Customer Directory'));
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
        void window.ElectroPayModal.show({
          type: 'danger',
          title: 'Restore from Excel?',
          message,
          confirmText: 'Restore Records',
          cancelText: 'Cancel',
          loadingText: 'Restoring…',
          onConfirm: async () => {
          const stateBeforeRestore = JSON.parse(JSON.stringify(state));
          try {
            downloadRestoreSnapshot();
            state.records = restoredRecords;
            state.customers = restoredCustomers;
            state.numberSequences = {
              customer: Math.max(Number(state.numberSequences?.customer) || 0, Number(backupMetadata['Customer Number Sequence']) || 0),
              payment: Math.max(Number(state.numberSequences?.payment) || 0, Number(backupMetadata['Payment Number Sequence']) || 0)
            };
            state.deletedRecordIds = rows.filter(record => record.recordStatus === 'DELETED').map(record => record.id);
            if (Number.isFinite(restoredRate) && restoredRate >= 0) state.settings.rate = restoredRate;
            state.settings.receiptPrefix = restoredPrefix;
            state.settings.paymentMethods = restoredPaymentMethods;
            if (!await rebuildLedger()) throw new Error('Restored records could not be saved to Supabase.');
            await logAuditEvent('BACKUP_RESTORED');
            refreshActiveViews();
            renderCustomers();
            showToast(`${restoredRecords.length} records restored from Excel.`);
            setExcelBackupStatus(`${restoredRecords.length} records restored from ${file.name}. Choose Backup Now to synchronize the selected workbook.`);
            return true;
          } catch (error) {
            state = stateBeforeRestore;
            await rebuildLedger(false);
            console.error('Excel restore failed:', error);
            throw new Error(`Excel restore failed: ${error.message}`);
          }
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
      if (!window.ElectroPayAuth.requireAdmin()) return;
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = async (evt) => {
        const stateBeforeImport = JSON.parse(JSON.stringify(state));
        try {
          const imported = JSON.parse(evt.target.result);
          if (imported && Array.isArray(imported.customers) && Array.isArray(imported.records)) {
            const confirmed = await window.ElectroPayModal.show({
              type: 'danger',
              title: 'Restore Application Data?',
              message: `Restore ${imported.records.length} payment records and ${imported.customers.length} customers from this backup? This replaces the current shared ledger.`,
              confirmText: 'Restore Data',
              cancelText: 'Cancel'
            });
            if (!confirmed) return;
            const existingSequences = state.numberSequences || {};
            state = { ...state, ...imported };
            state.numberSequences = {
              customer: Math.max(Number(existingSequences.customer) || 0, Number(state.numberSequences?.customer) || 0),
              payment: Math.max(Number(existingSequences.payment) || 0, Number(state.numberSequences?.payment) || 0)
            };
            if (!await rebuildLedger()) throw new Error('Restored records could not be saved to Supabase.');
            await logAuditEvent('BACKUP_RESTORED');
            showToast("System restored successfully!");
            switchTab('dashboard');
          } else {
            showToast("Invalid backup file format.", "error");
          }
        } catch (err) {
          state = stateBeforeImport;
          await rebuildLedger(false);
          showToast(`Failed to restore JSON backup: ${err.message}`, "error");
        }
      };
      reader.readAsText(file);
    }

    function confirmResetSystem() {
      if (!window.ElectroPayAuth.requireAdmin()) return;
      void window.ElectroPayModal.show({
        type: 'danger',
        title: 'Reset Application Data?',
        message: 'This action permanently removes all ledger records and resets the configured values to their defaults. This cannot be undone.',
        confirmText: 'Reset Data',
        cancelText: 'Cancel',
        requiredText: 'RESET',
        inputLabel: 'Type RESET to confirm',
        loadingText: 'Resetting…',
        onConfirm: async () => {
          const stateBeforeReset = JSON.parse(JSON.stringify(state));
          state.records = [];
          state.customers = [];
          state.deletedRecordIds = [];
          state.trashAudit = [];
          selectedTrashIds.clear();
          selectedPaymentIds.clear();
          activeCustomerId = '';
          state.settings = { rate: 10, receiptPrefix: "EPR-", paymentMethods: ["Cash", "eSewa", "Khalti", "Bank Transfer"] };
          if (!await rebuildLedger()) {
            state = stateBeforeReset;
            await rebuildLedger(false);
            return false;
          }
          showToast("System state reset to defaults.");
          switchTab('dashboard');
          return true;
        }
      });
    }

    /* ==========================================================================
       12. RECEIPT VIEW & PRINT ENGINE
       ========================================================================== */
    function viewReceipt(id) {
      const rec = state.records.find(r => r.id === id);
      if (!rec || isDeletedRecord(rec)) return;

      activeReceiptType = 'single';
      document.getElementById('combined-receipt-card').classList.add('hidden');
      document.getElementById('receipt-card').classList.remove('hidden');
      document.getElementById('receipt-print-label').textContent = 'Print Receipt';
      document.getElementById('rcpt-no').textContent = rec.receiptNo;
      document.getElementById('rcpt-payment-no').textContent = rec.paymentNo || '';
      const customer = getCustomerForRecord(rec);
      document.getElementById('rcpt-customer-name').textContent = customerDisplayName(customer);
      document.getElementById('rcpt-customer-no').textContent = customer?.customerNo || '';
      const receiptContact = customer?.contactNumber?.trim() || '';
      document.getElementById('rcpt-contact-container').classList.toggle('hidden', !receiptContact);
      document.getElementById('rcpt-contact').textContent = receiptContact;
      const receiptLocation = customer?.location?.trim() || '';
      document.getElementById('rcpt-location-container').classList.toggle('hidden', !receiptLocation);
      document.getElementById('rcpt-location').textContent = receiptLocation;
      document.getElementById('rcpt-date').textContent = formatDateForDisplay(rec.date);
      const isFirstReading = rec.previousReading === null || rec.previousReading === undefined || rec.previousReading === '';
      document.getElementById('rcpt-prev-reading').textContent = isFirstReading
        ? translations[state.uiPreferences.lang].firstReadingUnavailable
        : rec.previousReading;
      document.getElementById('rcpt-reading-type').textContent = isFirstReading
        ? translations[state.uiPreferences.lang].readingTypeFirst
        : translations[state.uiPreferences.lang].readingTypeNormal;
      document.getElementById('rcpt-curr-reading').textContent = rec.currentReading;
      document.getElementById('rcpt-units').textContent = isFirstReading ? '—' : rec.units;
      document.getElementById('rcpt-rate').textContent = `Rs. ${rec.rate}`;
      document.getElementById('rcpt-cost-label').textContent = isFirstReading ? 'Opening / Initial Bill' : translations[state.uiPreferences.lang].billCost;
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
      return window.ElectroPayModal.show({
        type: onConfirm ? 'confirm' : 'info',
        title,
        message: msg,
        confirmText: onConfirm ? 'Continue' : 'Done',
        onConfirm
      });
    }

    function openTrashConfirmation({ title, description, details = [], phrase = '', confirmLabel, onConfirm, type = 'danger' }) {
      return window.ElectroPayModal.show({
        type,
        title,
        message: description,
        details,
        requiredText: phrase,
        inputLabel: `Type exactly: ${phrase}`,
        confirmText: confirmLabel,
        cancelText: 'Cancel',
        loadingText: 'Processing…',
        onConfirm
      });
    }

    function closeModal() {
      window.ElectroPayModal.close();
    }
