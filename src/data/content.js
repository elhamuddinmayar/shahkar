import {
  Globe, Smartphone, Monitor, Palette, Database, Cloud,
  ShieldCheck, LineChart, Layers, Server, Boxes, Code2,
} from 'lucide-react'

export const services = [
  {
    icon: Globe,
    title: 'Web Development',
    summary: 'Fast, accessible, SEO-ready web applications built on modern frameworks.',
    points: ['React / Next.js front-ends', 'Headless CMS integration', 'Progressive web apps', 'Performance & SEO tuning'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    summary: 'Native-feel iOS and Android apps from a single React Native codebase.',
    points: ['Cross-platform delivery', 'Offline-first architecture', 'Push notifications & analytics', 'App store release management'],
  },
  {
    icon: Monitor,
    title: 'Desktop Applications',
    summary: 'Reliable Windows, macOS and Linux software for internal and client-facing tools.',
    points: ['Electron & native builds', 'Hardware/peripheral integration', 'Auto-update pipelines', 'Offline data sync'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    summary: 'Research-driven interface design that shortens the distance between idea and click.',
    points: ['User research & flows', 'Design systems', 'Interactive prototyping', 'Usability testing'],
  },
  {
    icon: Layers,
    title: 'ERP Solutions',
    summary: 'Custom ERP and business-process software that replaces spreadsheets and guesswork.',
    points: ['Inventory & finance modules', 'HR & payroll workflows', 'Role-based access', 'Custom reporting'],
  },
  {
    icon: Cloud,
    title: 'Cloud Services',
    summary: 'Cloud infrastructure that scales with you, without the 3am pager duty.',
    points: ['AWS / Azure / GCP setup', 'CI/CD pipelines', 'Monitoring & alerting', 'Cost optimization'],
  },
  {
    icon: Database,
    title: 'Database Engineering',
    summary: 'Schema design and data pipelines that stay fast as your data grows.',
    points: ['PostgreSQL / MySQL / MongoDB', 'Data migration', 'Query optimization', 'Backup & disaster recovery'],
  },
  {
    icon: ShieldCheck,
    title: 'IT Consulting',
    summary: 'A technical second opinion before you commit budget to a build.',
    points: ['Architecture review', 'Security audits', 'Vendor evaluation', 'Roadmap planning'],
  },
]

export const techStack = [
   'Python','Django', 'Flutter', 'Node.js','React', 'TypeScript',
  'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GraphQL',,
]

export const projects = [
  {
    title: 'Meraj ERP',
    category: 'ERP Solutions',
    status: 'Available',
    description: 'A modular ERP covering inventory, invoicing, HR and reporting for mid-size distributors.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'PayFlow Wallet',
    category: 'Mobile Apps',
    status: 'Available',
    description: 'A mobile wallet for peer-to-peer transfers, bill pay, and merchant checkout.',
    tags: ['Flutter', 'Node.js', 'Stripe'],
  },
  {
    title: 'Rasad Analytics',
    category: 'Web Development',
    status: 'Beta',
    description: 'A real-time analytics dashboard that turns raw event streams into decisions.',
    tags: ['Next.js', 'ClickHouse', 'Recharts'],
  },
  {
    title: 'Karwan Logistics',
    category: 'Cloud Services',
    status: 'Available',
    description: 'Fleet tracking and route optimization platform with live map telemetry.',
    tags: ['AWS', 'PostGIS', 'React'],
  },
  {
    title: 'Ustad LMS',
    category: 'Web Development',
    status: 'Available',
    description: 'A learning management system for schools with attendance, grading and live classes.',
    tags: ['Next.js', 'WebRTC', 'MongoDB'],
  },
  {
    title: 'Bazaar POS',
    category: 'Desktop Applications',
    status: 'Beta',
    description: 'Offline-first point-of-sale software built for retail chains with patchy connectivity.',
    tags: ['Electron', 'SQLite', 'TypeScript'],
  },
]

export const products = [
  {
    name: 'Shahkar ERP Suite',
    tagline: 'Run finance, inventory and HR from one dashboard.',
    icon: Layers,
    features: ['Multi-branch inventory', 'Automated invoicing', 'Payroll & attendance', 'Custom report builder'],
  },
  {
    name: 'Shahkar POS',
    tagline: 'Point-of-sale software that keeps working when the internet does not.',
    icon: Monitor,
    features: ['Offline-first sync', 'Barcode & receipt printing', 'Multi-till support', 'Sales analytics'],
  },
  {
    name: 'Shahkar CRM',
    tagline: 'Track leads, deals and support tickets in one pipeline.',
    icon: LineChart,
    features: ['Pipeline & deal stages', 'Email & call logging', 'Team task assignment', 'Custom dashboards'],
  },
  {
    name: 'Shahkar Cloud Hosting',
    tagline: 'Managed hosting, backups and monitoring for your applications.',
    icon: Server,
    features: ['Daily automated backups', '24/7 uptime monitoring', 'Auto-scaling infrastructure', 'Dedicated support engineer'],
  },
  {
    name: 'Shahkar Booking Engine',
    tagline: 'Appointment and reservation scheduling, embeddable anywhere.',
    icon: Boxes,
    features: ['Calendar sync', 'SMS & email reminders', 'Staff & resource scheduling', 'Payment collection'],
  },
  {
    name: 'Shahkar DevKit',
    tagline: 'An internal component and API toolkit for faster client builds.',
    icon: Code2,
    features: ['Shared design system', 'Auth & billing boilerplate', 'CI/CD templates', 'Internal API gateway'],
  },
]

export const pricingPlans = [
  {
    name: 'Starter',
    price: '$299',
    period: '/month',
    description: 'Perfect for small businesses and startups.',
    popular: false,
    included: [
      'Basic web development',
      'Mobile app prototype',
      'UI/UX consultation',
      'Email support',
      '2 revision rounds',
      'Basic SEO setup',
    ],
    excluded: ['Advanced analytics', 'Priority support', 'Custom integrations', 'Dedicated account manager'],
  },
  {
    name: 'Professional',
    price: '$699',
    period: '/month',
    description: 'Ideal for growing businesses.',
    popular: true,
    included: [
      'Full-stack development',
      'Native mobile apps',
      'Advanced UI/UX design',
      'Priority email & phone support',
      'Unlimited revisions',
      'Advanced SEO & analytics',
      'Database integration',
      'API development',
      'Security implementation',
    ],
    excluded: ['24/7 phone support', 'Dedicated account manager'],
  },
  {
    name: 'Enterprise',
    price: '$1,499',
    period: '/month',
    description: 'For large organizations with complex needs.',
    popular: false,
    included: [
      'Everything in Professional',
      'Custom ERP solutions',
      'Advanced system integration',
      '24/7 priority support',
      'Dedicated account manager',
      'On-site consultation',
      'Scalable cloud infrastructure',
      'Advanced security audit',
      'Custom training programs',
      'White-label solutions',
    ],
    excluded: [],
  },
]

export const addOnServices = [
  { name: 'Emergency Support', price: '$150', period: '/hour', description: '24/7 emergency technical support for critical issues.' },
  { name: 'Custom Training', price: '$500', period: '/day', description: 'Personalized training sessions for your team.' },
  { name: 'System Migration', price: '$2,000', period: '/project', description: 'Complete system migration and data transfer services.' },
  { name: 'Security Audit', price: '$1,200', period: '/project', description: 'Comprehensive security assessment and recommendations.' },
]

export const pricingFaqs = [
  {
    q: 'Can I change my plan later?',
    a: 'Yes — you can upgrade or downgrade at any time. Changes apply from your next billing cycle.',
  },
  {
    q: 'Do you offer custom pricing for large projects?',
    a: 'For enterprise clients and large-scale builds, we put together custom pricing based on your scope.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'Major credit cards and bank transfers, plus monthly invoicing for enterprise clients.',
  },
  {
    q: 'Is there a setup fee?',
    a: 'No hidden setup fees — the price you see is what you pay.',
  },
  {
    q: 'Do you provide ongoing support?',
    a: 'Every plan includes ongoing support; the response time and coverage scale up with your plan.',
  },
]

export const teamMembers = [
  { name: 'Ahmad Zaki', role: 'Founder & CEO', bio: 'Sets product direction and leads client partnerships.' },
  { name: 'Sara Ahmadi', role: 'Head of Engineering', bio: 'Owns architecture decisions across every build.' },
  { name: 'Omid Rahimi', role: 'Lead Mobile Engineer', bio: 'Ships and maintains our React Native app portfolio.' },
  { name: 'Freshta Karimi', role: 'Product Designer', bio: 'Turns research into interfaces people enjoy using.' },
  { name: 'Javed Noori', role: 'Cloud & DevOps Lead', bio: 'Keeps infrastructure fast, secure and monitored.' },
  { name: 'Muska Sultani', role: 'QA Lead', bio: 'Builds the test coverage that lets us ship confidently.' },
  { name: 'Ehsan Popal', role: 'Backend Engineer', bio: 'Designs APIs and data models for scale.' },
  { name: 'Nilofar Sadat', role: 'Client Success Manager', bio: 'The first call when a client needs anything.' },
]

export const teamValues = [
  { icon: '🚀', title: 'Innovation', description: 'We constantly explore new technologies and approaches to deliver cutting-edge solutions.' },
  { icon: '⭐', title: 'Quality', description: 'We hold every project to the same bar, so what we ship is reliable and built to last.' },
  { icon: '🤝', title: 'Collaboration', description: 'We work closely with clients and each other to reach the best possible outcome.' },
]

export const blogPosts = [
  {
    title: 'Choosing Between Native and Cross-Platform Mobile Apps in 2026',
    excerpt: 'A practical framework for deciding where React Native still wins, and where it does not.',
    category: 'Mobile',
    date: 'Jul 28, 2026',
    readTime: '6 min read',
  },
  {
    title: 'Why Most ERP Rollouts Fail Before They Launch',
    excerpt: 'The three planning mistakes we see most often, and how to avoid each one.',
    category: 'ERP',
    date: 'Jul 12, 2026',
    readTime: '8 min read',
  },
  {
    title: 'A Practical Guide to Cutting Your Cloud Bill by 30%',
    excerpt: 'Concrete, low-risk changes to your AWS or Azure setup that add up fast.',
    category: 'Cloud',
    date: 'Jun 30, 2026',
    readTime: '5 min read',
  },
  {
    title: 'Designing Forms People Actually Finish',
    excerpt: 'Small UX decisions that measurably raise form completion rates.',
    category: 'Design',
    date: 'Jun 18, 2026',
    readTime: '4 min read',
  },
  {
    title: 'Database Indexing Mistakes That Quietly Slow You Down',
    excerpt: 'How to spot the queries that are costing you the most, before your users notice.',
    category: 'Engineering',
    date: 'Jun 3, 2026',
    readTime: '7 min read',
  },
  {
    title: 'A Founder\u2019s Checklist Before Commissioning Custom Software',
    excerpt: 'The questions to answer internally before your first call with a dev shop.',
    category: 'Strategy',
    date: 'May 22, 2026',
    readTime: '6 min read',
  },
]

export const testimonials = [
  {
    quote: 'Shahkar rebuilt our inventory system in ten weeks and it has not gone down once since launch.',
    name: 'Rahim Sultani',
    role: 'Operations Director, Kabul Traders',
  },
  {
    quote: 'They caught scaling problems in our architecture before we ever hit them in production.',
    name: 'Laila Faizi',
    role: 'CTO, Meraj Retail',
  },
  {
    quote: 'Communication was direct and honest the whole way through — no surprises at delivery.',
    name: 'Karim Yusufi',
    role: 'Founder, Karwan Logistics',
  },
]

export const galleryItems = [
  { title: 'Meraj ERP Dashboard', category: 'ERP' },
  { title: 'PayFlow Wallet App', category: 'Mobile' },
  { title: 'Rasad Analytics UI', category: 'Web' },
  { title: 'Karwan Fleet Map', category: 'Web' },
  { title: 'Ustad LMS Classroom', category: 'Web' },
  { title: 'Bazaar POS Terminal', category: 'Desktop' },
  { title: 'Brand Identity System', category: 'Branding' },
  { title: 'Onboarding Flow', category: 'UI/UX' },
  { title: 'Design System Kit', category: 'UI/UX' },
]
