/* ═══════════════════════════════════════════════════════════
   USMAN.SYS — Projects Database
   Detailed Case Studies for Multi-Paged Experience
   ═══════════════════════════════════════════════════════════ */

const PROJECTS_DATA = {
  'clinicflo-ai': {
    title: 'ClinicFlo AI',
    subtitle: 'AI-POWERED HEALTHCARE MANAGEMENT SAAS PLATFORM',
    tagline: 'An enterprise-grade SaaS solution automating patient management, clinical workflows, and smart scheduling with AI diagnostics.',
    type: 'SAAS WEB APPLICATION',
    badge: 'FLAGSHIP PROJECT',
    category: 'AI Automation & Full-Stack SaaS',
    heroBg: 'dark',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB', 'AI / ML', 'Tailwind CSS', 'REST APIs', 'JWT Auth'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Usman22Siddiqui',
    isPrivate: true,
    overview: `ClinicFlo AI is a modern SaaS platform designed to transform how medical clinics and healthcare practitioners manage their daily operations. By bridging clinical management with artificial intelligence, ClinicFlo AI eliminates repetitive administrative overhead, reduces scheduling conflicts, and assists doctors with diagnostic symptom analysis.`,
    architecture: [
      { layer: 'Client Frontend', desc: 'Next.js 14 App Router, React Server Components, Tailwind CSS, Responsive Doctor & Patient Portals' },
      { layer: 'Backend & API', desc: 'Node.js & Express REST API, JWT Authentication, Role-Based Access Control (Admin, Doctor, Staff, Patient)' },
      { layer: 'AI Inference Engine', desc: 'LLM & NLP integration for patient intake symptom categorization, automated medical notes generation, and predictive scheduling' },
      { layer: 'Data & Security Layer', desc: 'MongoDB Atlas, Redis caching for fast session & appointment lookups, HIPAA-compliant encryption standards' }
    ],
    features: [
      { title: 'Intelligent Patient Intake & Triage', desc: 'AI-guided intake forms that extract key symptoms and provide pre-consultation summaries for practitioners.' },
      { title: 'Smart Appointment Engine', desc: 'Predictive slot optimization minimizing wait times and managing multi-doctor clinic schedules seamlessly.' },
      { title: 'Electronic Health Records (EHR)', desc: 'Secure, organized patient histories with instant search, automated transcription, and lab attachment records.' },
      { title: 'Automated Billing & Invoice Generation', desc: 'Multi-tiered billing management with automated receipts, payment tracking, and financial analytics.' },
      { title: 'Real-time Clinic Analytics', desc: 'Doctor productivity metrics, patient volume forecasting, and operational revenue reporting dashboards.' }
    ],
    challenges: [
      { title: 'HIPAA & Data Privacy Compliance', desc: 'Implemented end-to-end data encryption at rest and in transit with strict role-based access policies.' },
      { title: 'Low-latency AI Response Times', desc: 'Integrated background asynchronous processing for AI note summaries to ensure zero UI freezing for clinical staff.' },
      { title: 'Complex Scheduling Conflict Resolution', desc: 'Developed custom interval tree scheduling algorithms preventing double booking across rooms and specialists.' }
    ]
  },

  'smart-energy': {
    title: 'Smart Energy Consumption Analyzer',
    subtitle: 'DEVOPS & DISTRIBUTED SYSTEM CASE STUDY',
    tagline: 'An engineered telemetry system tracking, analyzing, and forecasting power consumption metrics with automated CI/CD and Kubernetes orchestration.',
    type: 'DEVOPS & BACKEND SYSTEM',
    badge: 'DEVOPS FLAGSHIP',
    category: 'DevOps & Systems Engineering',
    heroBg: 'forest',
    tags: ['PHP', 'MySQL', 'Docker', 'GitHub Actions', 'Kubernetes', 'Prometheus', 'Grafana'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Usman22Siddiqui',
    isPrivate: false,
    overview: `The Smart Energy Consumption Analyzer started as a dynamic web application and was deliberately evolved into a fully containerized, orchestrated, and monitored distributed system. It proves how modern software engineering extends beyond writing code into deployment, scalability, and observability.`,
    architecture: [
      { layer: 'Ingestion & Web App', desc: 'PHP backend processing incoming energy readings with MySQL relational storage and optimization' },
      { layer: 'Containerization', desc: 'Multi-stage Docker builds separating application runtime and web server layers' },
      { layer: 'CI/CD Automation', desc: 'Automated GitHub Actions pipelines executing linting, unit testing, and Docker image registry pushes' },
      { layer: 'Orchestration', desc: 'Kubernetes deployment manifests with replica sets, service routing, and persistent volume claims' },
      { layer: 'Observability', desc: 'Prometheus metrics scraping coupled with interactive Grafana visualization dashboards' }
    ],
    features: [
      { title: 'Real-Time Energy Telemetry', desc: 'Live monitoring of kilowatt-hour consumption across multiple monitored circuits and zones.' },
      { title: 'Peak Usage Forecasting', desc: 'Historical data analysis identifying peak load periods to optimize tariff costs.' },
      { title: 'Containerized Deployment', desc: 'Standardized container runtime ensuring 100% environment parity from development to production.' },
      { title: 'Automated Health Checks & Self-Healing', desc: 'Kubernetes liveness and readiness probes automatically recovering failing pods.' },
      { title: 'Grafana Telemetry Dashboards', desc: 'Visual alerting thresholds notifying engineers of unexpected power surges.' }
    ],
    challenges: [
      { title: 'High Volume Time-Series Data Handling', desc: 'Optimized MySQL query indexing and aggregation routines to handle continuous meter readings.' },
      { title: 'Kubernetes Pod Resource Tuning', desc: 'Benchmarked CPU/memory limits to guarantee zero pod thrashing during peak analysis runs.' }
    ]
  },

  'california-fish-grill': {
    title: 'California Fish Grill',
    subtitle: 'FULL-STACK RESTAURANT PLATFORM',
    tagline: 'An end-to-end modern restaurant ordering web application with dietary customization, real-time tracking, and email OTP verification.',
    type: 'FULL STACK WEB APPLICATION',
    badge: 'LIVE DEMO AVAILABLE',
    category: 'Full Stack Web Development',
    heroBg: 'olive',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Vercel', 'OTP Auth'],
    liveUrl: 'https://california-fish-grill-3vb2.vercel.app',
    githubUrl: 'https://github.com/Usman22Siddiqui',
    isPrivate: false,
    overview: `California Fish Grill is a responsive full-stack restaurant platform built to deliver a seamless dining and takeout experience. It features interactive menus, dietary allergy filtering, multistep cart checkout, table reservations, and secure email-OTP customer authentication.`,
    architecture: [
      { layer: 'Frontend Client', desc: 'React SPA built with reusable modular components and responsive Tailwind CSS layout' },
      { layer: 'API & Business Logic', desc: 'Node.js & Express RESTful API with automated order state lifecycle management' },
      { layer: 'Database', desc: 'MongoDB document models for menus, users, order history, and reservations' }
    ],
    features: [
      { title: 'Interactive Menu & Dietary Filtering', desc: 'Instant filtering by vegetarian, gluten-free, calorie counts, and seafood preferences.' },
      { title: 'Multistep Checkout with Custom Orders', desc: 'Customizable meal sides, sauces, and cooking preferences with real-time price updates.' },
      { title: 'Email-OTP Authentication', desc: 'Passwordless, high-conversion login experience ensuring user account security.' },
      { title: 'Live Order Status Tracker', desc: 'Real-time order stage feedback from kitchen preparation to delivery dispatched.' }
    ],
    challenges: [
      { title: 'State Persistence Across Sessions', desc: 'Implemented synchronized Redux/Context state with local storage to prevent cart abandonment on reload.' }
    ]
  },

  'jarvis': {
    title: 'Jarvis — AI Assistant',
    subtitle: 'AI AUTOMATION & INTELLIGENT WORKFLOWS',
    tagline: 'An intelligent desktop voice and text automation assistant executing system routines, web searches, and AI-assisted task workflows.',
    type: 'AI & AUTOMATION APPLICATION',
    badge: 'AI SHOWCASE',
    category: 'Artificial Intelligence',
    heroBg: 'forest',
    tags: ['Python', 'AI / ML', 'Speech Recognition', 'APIs', 'Automation'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Usman22Siddiqui',
    isPrivate: false,
    overview: `Jarvis is an automated AI desktop assistant built in Python. It handles voice command recognition, automated document summary, smart calendar scheduling, system controls, and interactive queries using modern LLM APIs.`,
    architecture: [
      { layer: 'Audio & NLP Engine', desc: 'Voice recognition parser with intent extraction and command classification' },
      { layer: 'Execution Module', desc: 'Operating system hooks, file automation scripts, and application launchers' },
      { layer: 'AI API Bridge', desc: 'Integrated OpenAI/Claude endpoints for natural conversational contextual responses' }
    ],
    features: [
      { title: 'Voice-Driven Workflow Automation', desc: 'Executes complex terminal and system commands from natural voice input.' },
      { title: 'Context-Aware Task Summaries', desc: 'Summarizes daily agenda, unread notifications, and developer news feeds.' },
      { title: 'Modular Plugin Architecture', desc: 'Easily extendable with custom python modules for new workflow actions.' }
    ],
    challenges: [
      { title: 'Background Noise & Command Accuracy', desc: 'Applied audio threshold filters to drastically reduce false voice activations.' }
    ]
  },

  'ai-email-responder': {
    title: 'AI Email Responder',
    subtitle: 'INTELLIGENT EMAIL TRIAGE & RESPONSE AGENT',
    tagline: 'Automated email triage and drafting engine that categorizes incoming business communications and generates context-aware replies.',
    type: 'AI AUTOMATION SYSTEM',
    badge: 'AUTOMATION AGENT',
    category: 'AI & Workflow Automation',
    heroBg: 'olive',
    tags: ['Python', 'AI', 'NLP', 'IMAP/SMTP', 'REST APIs'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Usman22Siddiqui',
    isPrivate: false,
    overview: `Designed to eliminate email inbox fatigue, this automation agent hooks into email providers via secure APIs, classifies incoming messages by urgency and topic, and drafts human-like contextual responses for human review or auto-send.`,
    architecture: [
      { layer: 'Email Webhook / IMAP Listener', desc: 'Listens for incoming messages in real-time and triggers webhook workers' },
      { layer: 'Classification & Sentiment Engine', desc: 'Analyzes intent, tone, urgency, and extracts key action items' },
      { layer: 'Draft Generation & Memory', desc: 'Leverages few-shot prompting and context memory to write on-brand replies' }
    ],
    features: [
      { title: 'Intelligent Intent Tagging', desc: 'Automatically marks emails as Lead, Support, Billing, or Personal.' },
      { title: 'One-Click AI Draft Approval', desc: 'Presents prepared drafts ready for instant send or quick refinement.' },
      { title: 'Spam & Phishing Filter Defense', desc: 'Pre-screens incoming attachments and suspicious URLs with NLP safety models.' }
    ],
    challenges: [
      { title: 'Tone Calibration', desc: 'Engineered specialized prompt constraints to match professional corporate communication etiquette.' }
    ]
  },

  'gui-hospital': {
    title: 'GUI Hospital Management System',
    subtitle: 'DESKTOP ENTERPRISE HEALTHCARE APPLICATION',
    tagline: 'A JavaFX-based desktop application providing patient registration, doctor appointment routing, and billing management.',
    type: 'DESKTOP APPLICATION',
    badge: 'DESKTOP SYSTEM',
    category: 'Software Engineering',
    heroBg: 'forest',
    tags: ['Java', 'JavaFX', 'CSS', 'OOP', 'File I/O'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Usman22Siddiqui',
    isPrivate: false,
    overview: `A robust desktop application engineered with Java and JavaFX designed for clinical administration. It implements strict object-oriented design patterns, MVC architecture, custom CSS styling, and persistent record storage.`,
    architecture: [
      { layer: 'UI View Layer', desc: 'JavaFX Scene Builder interfaces styled with customized CSS stylesheets' },
      { layer: 'Controller & Business Logic', desc: 'MVC controller handlers managing appointment validations and patient admission logic' },
      { layer: 'Model & Storage', desc: 'Encapsulated Java models with serialization and structured file storage' }
    ],
    features: [
      { title: 'Patient Registration & Medical History', desc: 'Comprehensive admission records with searchable identifiers.' },
      { title: 'Doctor Department Allocation', desc: 'Assigns specialized doctors to incoming cases based on symptom categories.' },
      { title: 'Automated Invoice Generation', desc: 'Calculates room charges, medicines, and consultation fees with printable slips.' }
    ],
    challenges: [
      { title: 'Clean Separation of UI and Data Logic', desc: 'Strictly adhered to the MVC pattern to keep JavaFX views modular and testable.' }
    ]
  },

  'advanced-hospital': {
    title: 'Advanced Hospital Management (CLI & DSA)',
    subtitle: 'ALGORITHMS & DATA STRUCTURES BENCHMARK',
    tagline: 'High-performance C++ hospital queuing and patient record management system utilizing custom linked lists, priority queues, and BSTs.',
    type: 'ALGORITHMIC C++ SYSTEM',
    badge: 'CORE DSA',
    category: 'Computer Science & DSA',
    heroBg: 'olive',
    tags: ['C++', 'Data Structures', 'Linked Lists', 'Binary Search Tree', 'Priority Queues'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Usman22Siddiqui',
    isPrivate: false,
    overview: `A high-efficiency command-line patient management system built from scratch in C++. Rather than relying on external databases, it implements raw memory management and custom data structures (Singly/Doubly Linked Lists, Priority Queues for Emergency Triage, and Binary Search Trees for O(log n) patient search).`,
    architecture: [
      { layer: 'CLI Terminal Interface', desc: 'Menu-driven interactive control room with formatted outputs' },
      { layer: 'DSA Core Engine', desc: 'Custom template-based data structures optimized for memory efficiency' },
      { layer: 'Persistence Module', desc: 'C++ File streams for loading and saving system state on exit' }
    ],
    features: [
      { title: 'O(log n) Patient Record Lookup', desc: 'Binary Search Tree indexing patient ID keys for sub-millisecond retrieval.' },
      { title: 'Emergency Triage Priority Queuing', desc: 'Heap-based priority queue prioritizing critical emergency patients automatically.' },
      { title: 'Zero Memory Leak Architecture', desc: 'Thoroughly sanitized dynamic pointers and custom destructor cleanup.' }
    ],
    challenges: [
      { title: 'Manual Memory Safety in C++', desc: 'Avoided dangling pointers and memory fragmentation across hundreds of patient node insertions and deletions.' }
    ]
  },

  'ecommerce': {
    title: 'E-Commerce Storefront Interfaces',
    subtitle: 'MODERN RESPONSIVE COMMERCE EXPERIENCES',
    tagline: 'High-converting responsive storefronts for Shoe & Gaming retail with interactive product galleries, cart states, and checkout flows.',
    type: 'FRONTEND WEB PLATFORM',
    badge: 'UI / UX SHOWCASE',
    category: 'Frontend Engineering',
    heroBg: 'cream',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
    liveUrl: '#',
    githubUrl: 'https://github.com/Usman22Siddiqui',
    isPrivate: false,
    overview: `A collection of pixel-perfect, responsive e-commerce web interfaces focusing on gaming accessories and athletic footwear. Engineered with responsive CSS grid/flexbox layouts, dynamic cart calculations, filter tabs, and fluid mobile animations.`,
    architecture: [
      { layer: 'Semantic Markup', desc: 'HTML5 semantic tags with complete accessibility (ARIA) attributes' },
      { layer: 'Styling & Theming', desc: 'Tailwind CSS utility tokens and bespoke micro-interaction styles' },
      { layer: 'Client Logic', desc: 'Vanilla JavaScript event listeners for cart calculations, modals, and product sliders' }
    ],
    features: [
      { title: 'Dynamic Cart & Pricing Engine', desc: 'Instant recalculation of discount promo codes, tax, and shipping totals.' },
      { title: 'Product Color & Size Switcher', desc: 'Interactive variant selector with visual thumbnail transitions.' },
      { title: '100% Mobile Optimized', desc: 'Touch-friendly swipe galleries and sticky mobile checkout triggers.' }
    ],
    challenges: [
      { title: 'Cross-Browser Layout Consistency', desc: 'Rigorous cross-browser testing ensuring uniform appearance across Chrome, Safari, Firefox, and mobile viewports.' }
    ]
  }
};
