/* ╔══════════════════════════════════════════════════════════════╗
   ║  THIS IS THE ONLY FILE YOU NEED TO EDIT.                     ║
   ║                                                              ║
   ║  Everything on the site is generated from the data below.    ║
   ║  Replace the example content with yours, save, and the page  ║
   ║  updates. You never have to touch the React components.      ║
   ║                                                              ║
   ║  Rules of thumb:                                             ║
   ║   · Keep the quotes and the commas exactly where they are.   ║
   ║   · To delete something, delete the whole { ... } block.     ║
   ║   · To add something, copy a { ... } block and change it.    ║
   ║   · A link you don't have yet: delete that line entirely.    ║
   ╚══════════════════════════════════════════════════════════════╝ */

/* ───────────────────────────────────────────────────────────────
   1. WHO YOU ARE  —  shows in the header and the footer
   ─────────────────────────────────────────────────────────────── */
export const profile = {
  name: 'James P J',
  role: 'Data & Business Intelligence Analyst',

  // One or two sentences. Say what you do and who you do it for.
  // Avoid "passionate about data" — say what you actually build.
  intro:
    'I build reporting that people actually open. I model data in Microsoft Fabric, turn it into Power BI dashboards that answer a specific question, and automate the dull parts in Python. I also ship full-stack web apps when the answer needs to be an application rather than a report.',

  location: 'Kerala, India',
  availability: 'Open to analyst and BI engineer roles',

  // ← REPLACE these four. Delete any line you don't want shown.
  email: 'jamespjose40@gmail.com',
  github: 'https://github.com/JamesDataworks',
  linkedin: 'https://www.linkedin.com/in/james-p-j-825273157/',

  // The "Download CV" button is hidden while this is empty, so the
  // site never shows a dead link. To switch it on: put your CV in the
  // public/ folder as resume.pdf, then change this to 'resume.pdf'.
  resume: '',
}

/* ───────────────────────────────────────────────────────────────
   2. SKILLS  —  grouped chips under the intro
   ─────────────────────────────────────────────────────────────── */
export const skills = [
  {
    group: 'Business intelligence',
    items: ['Power BI', 'DAX', 'Power Query / M', 'Semantic models', 'RLS', 'Paginated reports'],
  },
  {
    group: 'Data platform',
    items: ['Microsoft Fabric', 'Lakehouse', 'Data Factory pipelines', 'Dataflows Gen2', 'OneLake', 'Delta tables'],
  },
  {
    group: 'Programming',
    items: ['Python', 'pandas', 'SQL', 'PySpark', 'JavaScript', 'React'],
  },
  {
    group: 'Engineering',
    items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Git'],
  },
]

/* ───────────────────────────────────────────────────────────────
   3. PROJECTS  —  the four sections, in the order they appear
   ───────────────────────────────────────────────────────────────

   Each project block can use these fields. All are optional
   except  title  and  summary.

     title      Name of the project.
     summary    2–3 sentences. What was the question, what did you
                build, what changed because of it.
     featured   true  → tile spans the full width of the row.
                Use it for your single best project per section.
     metrics    Up to three real numbers. These are the first thing
                a recruiter's eye lands on, so make them concrete:
                "14 → 2 hrs", "38 KPIs", "1.2M rows". Skip the
                block entirely rather than inventing numbers.
     work       Bullet list of what you actually did.
     tools      Tech chips shown at the bottom of the tile.
     links      Any of: live, repo, report, video, writeup.
                Delete the ones you don't have.
   ─────────────────────────────────────────────────────────────── */
export const sections = [
  /* ══ POWER BI ════════════════════════════════════════════════ */
  {
    id: 'power-bi',
    tab: 'Power BI',
    title: 'Power BI',
    accent: '#f2b134',
    blurb:
      'Dashboards built around one decision each, with a documented model behind them rather than a pile of visuals.',
    projects: [
      {
        title: 'Retail Sales & Margin Dashboard',
        featured: true,
        summary:
          'Regional managers were each keeping their own sales spreadsheet and none of the numbers agreed. I built a single star-schema model over three years of transactions and a four-page report that tracks revenue, margin and target attainment down to store and SKU level.',
        metrics: [
          { value: '1.2M', label: 'rows modelled' },
          { value: '6 hrs → 5 min', label: 'monthly reporting cycle' },
          { value: '42', label: 'stores covered' },
        ],
        work: [
          'Designed a star schema with conformed date, store and product dimensions',
          'Wrote time-intelligence DAX for YoY, YTD and rolling 12-month margin',
          'Added row-level security so each manager sees only their region',
          'Set up incremental refresh to keep the dataset under the capacity limit',
        ],
        tools: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'RLS'],
        links: {
          report: 'https://app.powerbi.com/view?r=your-publish-to-web-link',
          repo: 'https://github.com/your-username/retail-sales-dashboard',
        },
      },
      {
        title: 'HR Attrition Analytics',
        summary:
          'An exit-interview dataset nobody had looked at properly. The report segments attrition by tenure band, department and manager, and flags the combinations where leaving rates run well above the company average.',
        metrics: [
          { value: '18%', label: 'attrition explained' },
          { value: '9', label: 'departments' },
        ],
        work: [
          'Cleaned and conformed five years of HR exports in Power Query',
          'Built tenure-band and cohort measures in DAX',
          'Used decomposition tree and key influencers for root-cause analysis',
        ],
        tools: ['Power BI', 'DAX', 'Excel'],
        links: { repo: 'https://github.com/your-username/hr-attrition-powerbi' },
      },
      {
        title: 'Financial Statement Reporting Pack',
        summary:
          'A P&L, balance sheet and cash-flow report pack that replaced a hand-assembled monthly deck. Figures reconcile to the general ledger and the pack refreshes itself the morning after close.',
        metrics: [
          { value: '3', label: 'statements automated' },
          { value: '0', label: 'manual copy-paste steps' },
        ],
        work: [
          'Modelled a GL account hierarchy with parent-child DAX',
          'Built variance-to-budget and prior-period comparison measures',
          'Formatted to finance conventions — negatives in brackets, thousands scaling',
        ],
        tools: ['Power BI', 'DAX', 'Power Query'],
        links: { repo: 'https://github.com/your-username/finance-reporting-pack' },
      },
    ],
  },

  /* ══ MICROSOFT FABRIC ════════════════════════════════════════ */
  {
    id: 'fabric',
    tab: 'Microsoft Fabric',
    title: 'Microsoft Fabric',
    accent: '#2ec4b6',
    blurb:
      'End-to-end work in Fabric: ingestion, a medallion lakehouse, and a semantic model the reports sit directly on top of.',
    projects: [
      {
        title: 'Medallion Lakehouse for Sales Analytics',
        featured: true,
        summary:
          'A complete bronze–silver–gold lakehouse in Fabric. Raw CSV and API extracts land in bronze, get cleaned and conformed in silver with PySpark notebooks, and are served to Power BI from a gold layer via Direct Lake.',
        metrics: [
          { value: '3', label: 'medallion layers' },
          { value: '12', label: 'source tables' },
          { value: 'Direct Lake', label: 'no import refresh' },
        ],
        work: [
          'Built Data Factory pipelines for scheduled and event-driven ingestion',
          'Wrote PySpark notebooks for deduplication, type casting and SCD Type 2 dimensions',
          'Published a gold-layer semantic model consumed by Power BI in Direct Lake mode',
          'Added pipeline failure alerts and a data-quality check notebook',
        ],
        tools: ['Microsoft Fabric', 'Lakehouse', 'PySpark', 'Data Factory', 'Delta Lake', 'Direct Lake'],
        links: { repo: 'https://github.com/your-username/fabric-medallion-lakehouse' },
      },
      {
        title: 'Real-Time Operations Monitor',
        summary:
          'Streaming event data into a Fabric eventhouse and surfacing it on a dashboard that updates continuously, so the operations desk stops refreshing a spreadsheet to find out whether something broke.',
        metrics: [
          { value: '< 10s', label: 'event to dashboard' },
        ],
        work: [
          'Configured an eventstream to ingest telemetry into an eventhouse',
          'Wrote KQL queries for rolling throughput and error-rate windows',
          'Built a real-time dashboard with threshold alerting',
        ],
        tools: ['Microsoft Fabric', 'Eventstream', 'KQL', 'Real-Time Analytics'],
        links: { repo: 'https://github.com/your-username/fabric-realtime-ops' },
      },
    ],
  },

  /* ══ PYTHON ══════════════════════════════════════════════════ */
  {
    id: 'python',
    tab: 'Python',
    title: 'Python',
    accent: '#5b8cff',
    blurb:
      'Analysis and automation — the work that happens before a dashboard exists, or instead of one.',
    projects: [
      {
        title: 'Customer Churn Prediction',
        featured: true,
        summary:
          'A classification model over subscription data that scores customers on likelihood to churn in the next 90 days. The output feeds a retention list the customer-success team works through weekly.',
        metrics: [
          { value: '0.87', label: 'ROC-AUC' },
          { value: '24', label: 'engineered features' },
        ],
        work: [
          'Exploratory analysis and feature engineering in pandas',
          'Compared logistic regression, random forest and gradient boosting',
          'Handled class imbalance with SMOTE and tuned via cross-validated grid search',
          'Explained predictions with SHAP so the team trusts the scores',
        ],
        tools: ['Python', 'pandas', 'scikit-learn', 'SHAP', 'Matplotlib'],
        links: { repo: 'https://github.com/your-username/churn-prediction' },
      },
      {
        title: 'ETL Automation Scripts',
        summary:
          'A scheduled Python job that pulls from three REST APIs, validates and reshapes the responses, and loads them into SQL Server. It replaced a daily manual download-and-import routine.',
        metrics: [
          { value: 'Daily', label: 'unattended runs' },
        ],
        work: [
          'Built an API client layer with retry, backoff and pagination handling',
          'Added schema validation that quarantines bad rows instead of failing the load',
          'Logged run outcomes and emailed a failure digest',
        ],
        tools: ['Python', 'pandas', 'SQLAlchemy', 'Requests', 'Task Scheduler'],
        links: { repo: 'https://github.com/your-username/etl-automation' },
      },
      {
        title: 'Sales Forecasting Study',
        summary:
          'Time-series forecasting on 36 months of sales history, comparing a seasonal-naive baseline against SARIMA and Prophet to work out which was actually worth deploying.',
        metrics: [
          { value: '11.4%', label: 'MAPE, best model' },
          { value: '36', label: 'months of history' },
        ],
        work: [
          'Decomposed trend and seasonality, tested for stationarity',
          'Backtested with rolling-origin cross-validation rather than a single split',
          'Wrote up why the simplest adequate model won',
        ],
        tools: ['Python', 'statsmodels', 'Prophet', 'pandas', 'Jupyter'],
        links: { repo: 'https://github.com/your-username/sales-forecasting' },
      },
    ],
  },

  /* ══ FULL STACK ══════════════════════════════════════════════ */
  {
    id: 'full-stack',
    tab: 'Full Stack',
    title: 'Full Stack',
    accent: '#a77bff',
    blurb:
      'Applications, not reports — where the user needs to put data in as well as read it out.',
    projects: [
      {
        title: 'Inventory Management System',
        featured: true,
        summary:
          'A stock-tracking web app with role-based access, low-stock alerting and a reporting view. Staff record movements; supervisors approve adjustments and see the analytics.',
        metrics: [
          { value: '3', label: 'user roles' },
          { value: 'JWT', label: 'auth' },
        ],
        work: [
          'React front end with protected routes and optimistic updates',
          'Express REST API with JWT auth and role-based middleware',
          'MongoDB schema design with indexed lookups on SKU and location',
          'Deployed the API on Render and the client on Netlify',
        ],
        tools: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
        links: {
          live: 'https://your-inventory-app.netlify.app',
          repo: 'https://github.com/your-username/inventory-management',
        },
      },
      {
        title: 'Analytics Dashboard Web App',
        summary:
          'A browser dashboard that reads from a Postgres warehouse and renders charts client-side, built for a case where a Power BI licence per user was not realistic.',
        metrics: [
          { value: '8', label: 'chart types' },
        ],
        work: [
          'Chart components built on Recharts with a shared colour and axis system',
          'Server-side aggregation endpoints so the browser never pulls raw rows',
          'CSV export and date-range filtering',
        ],
        tools: ['React', 'Node.js', 'PostgreSQL', 'Recharts', 'Express'],
        links: {
          live: 'https://your-dashboard-app.netlify.app',
          repo: 'https://github.com/your-username/analytics-dashboard',
        },
      },
    ],
  },
]

/* ───────────────────────────────────────────────────────────────
   4. CERTIFICATIONS  —  shown as a table, newest first
   ───────────────────────────────────────────────────────────────
     url  is the verification link (Credly badge, Microsoft
     Learn transcript, Coursera certificate page). Delete the
     line if a certificate has no public link.
   ─────────────────────────────────────────────────────────────── */
export const certifications = [
  {
    name: 'Microsoft Certified: Fabric Analytics Engineer Associate',
    code: 'DP-600',
    issuer: 'Microsoft',
    issued: 'Mar 2026',
    url: 'https://learn.microsoft.com/en-us/users/your-profile/credentials/your-credential-id',
  },
  {
    name: 'Microsoft Certified: Power BI Data Analyst Associate',
    code: 'PL-300',
    issuer: 'Microsoft',
    issued: 'Nov 2025',
    url: 'https://learn.microsoft.com/en-us/users/your-profile/credentials/your-credential-id',
  },
  {
    name: 'Microsoft Certified: Azure Data Fundamentals',
    code: 'DP-900',
    issuer: 'Microsoft',
    issued: 'Jul 2025',
    url: 'https://learn.microsoft.com/en-us/users/your-profile/credentials/your-credential-id',
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google · Coursera',
    issued: 'Feb 2025',
    url: 'https://coursera.org/verify/professional-cert/your-credential-id',
  },
  {
    name: 'Full Stack Web Development (MERN)',
    issuer: 'Your training provider',
    issued: 'Sep 2024',
  },
]
