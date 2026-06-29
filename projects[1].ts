export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'AI' | 'Web' | 'Automation' | 'Cloud' | 'Testing';
  image: string;
  status: 'Completed' | 'In Progress' | 'Archived';
  technologies: string[];
  features: string[];
  github?: string;
  link?: string;
  startDate: string;
  endDate?: string;
}

export const projects: Project[] = [
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description: 'Automated content creation system using Claude API',
    longDescription: 'Built a sophisticated content generation platform that leverages Claude API to create high-quality blog posts, social media content, and marketing copy. Integrated with Zapier for automated workflow triggers and MongoDB for content storage.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442d019cecf76a2ffd64a08db57a66a5a6e55?w=800&h=450&fit=crop',
    status: 'Completed',
    technologies: ['Next.js', 'Claude API', 'TypeScript', 'MongoDB', 'Zapier'],
    features: [
      'Multi-format content generation',
      'Customizable tone and style',
      'API integration with Zapier',
      'Real-time content preview',
      'Batch processing capabilities',
    ],
    link: 'https://ai-content-generator-demo.vercel.app',
    startDate: 'Jan 2024',
    endDate: 'Mar 2024',
  },
  {
    id: 'automation-dashboard',
    title: 'Workflow Automation Dashboard',
    description: 'Centralized automation management platform',
    longDescription: 'Developed a comprehensive dashboard for managing and monitoring automation workflows. Features real-time status tracking, error logging, and performance analytics for various automation processes running across different platforms.',
    category: 'Automation',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop',
    status: 'Completed',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Docker'],
    features: [
      'Real-time workflow monitoring',
      'Performance analytics dashboard',
      'Error detection and alerts',
      'Workflow history and logs',
      'Custom automation templates',
    ],
    github: 'https://github.com/abuzar/automation-dashboard',
    startDate: 'Nov 2023',
    endDate: 'Feb 2024',
  },
  {
    id: 'cloud-deployment-tool',
    title: 'Cloud Deployment Automation',
    description: 'One-click deployment solution for Next.js applications',
    longDescription: 'Created an automation tool that streamlines the deployment process for Next.js applications to various cloud platforms. Includes automated testing, environment configuration, and rollback capabilities with detailed deployment logs.',
    category: 'Cloud',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=450&fit=crop',
    status: 'Completed',
    technologies: ['Node.js', 'AWS CLI', 'GitHub Actions', 'TypeScript', 'Shell Scripting'],
    features: [
      'Automated CI/CD pipeline',
      'Multi-environment deployment',
      'Rollback functionality',
      'Deployment notifications',
      'Performance monitoring',
    ],
    startDate: 'Dec 2023',
    endDate: 'Jan 2024',
  },
  {
    id: 'portfolio-website',
    title: 'Premium Portfolio Platform',
    description: 'Modern SaaS for creating professional portfolios',
    longDescription: 'Building a SaaS platform that enables users to create stunning, SEO-optimized portfolio websites without coding. Includes drag-and-drop builder, analytics, and hosting. This portfolio website itself showcases the platform capabilities.',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1672309457690-ab232de50395?w=800&h=450&fit=crop',
    status: 'In Progress',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Stripe'],
    features: [
      'Drag-and-drop builder',
      'Pre-built templates',
      'Analytics dashboard',
      'SEO optimization',
      'Custom domain support',
      'Email subscriptions',
    ],
    startDate: 'Oct 2023',
  },
  {
    id: 'qa-testing-framework',
    title: 'QA Testing Framework',
    description: 'Automated testing framework for web applications',
    longDescription: 'Developed a comprehensive testing framework that automates quality assurance processes. Includes unit tests, integration tests, and end-to-end test scenarios with detailed reporting and CI/CD integration.',
    category: 'Testing',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f0?w=800&h=450&fit=crop',
    status: 'Completed',
    technologies: ['Jest', 'Cypress', 'Selenium', 'Node.js', 'GitHub Actions'],
    features: [
      'Unit testing suite',
      'E2E test automation',
      'Coverage reports',
      'Test parallelization',
      'Failure notifications',
      'Performance testing',
    ],
    github: 'https://github.com/abuzar/qa-testing-framework',
    startDate: 'Aug 2023',
    endDate: 'Oct 2023',
  },
  {
    id: 'llm-integration-toolkit',
    title: 'LLM Integration Toolkit',
    description: 'Developer toolkit for easy LLM API integration',
    longDescription: 'Created a developer-friendly toolkit that simplifies integration with various language models (Claude, GPT, Cohere). Includes authentication, error handling, rate limiting, and response formatting utilities.',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1662684611348-2af0c2b1cddb?w=800&h=450&fit=crop',
    status: 'Completed',
    technologies: ['TypeScript', 'Node.js', 'OpenAI API', 'Anthropic API', 'npm'],
    features: [
      'Multi-provider support',
      'Response streaming',
      'Token counting',
      'Error handling',
      'Rate limiting',
      'Response caching',
    ],
    github: 'https://github.com/abuzar/llm-toolkit',
    startDate: 'Sep 2023',
    endDate: 'Nov 2023',
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects', count: projects.length },
  { id: 'AI', label: 'AI Projects', count: projects.filter(p => p.category === 'AI').length },
  { id: 'Web', label: 'Web Apps', count: projects.filter(p => p.category === 'Web').length },
  { id: 'Automation', label: 'Automation', count: projects.filter(p => p.category === 'Automation').length },
  { id: 'Cloud', label: 'Cloud', count: projects.filter(p => p.category === 'Cloud').length },
  { id: 'Testing', label: 'Testing', count: projects.filter(p => p.category === 'Testing').length },
];

export const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Custom website and web application development using modern technologies.',
    features: ['Next.js & React', 'Responsive Design', 'Performance Optimization', 'SEO Friendly'],
    price: 'Starting $2,000',
    icon: '🌐',
  },
  {
    id: 'automation',
    title: 'Process Automation',
    description: 'Streamline your workflows with intelligent automation solutions.',
    features: ['Workflow Optimization', 'Integration Services', 'Cost Reduction', 'Error Elimination'],
    price: 'Starting $1,500',
    icon: '⚙️',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Leverage artificial intelligence to enhance your business operations.',
    features: ['LLM Integration', 'Custom AI Tools', 'Chatbots', 'Content Generation'],
    price: 'Starting $3,000',
    icon: '🤖',
  },
  {
    id: 'cloud-support',
    title: 'Cloud Infrastructure',
    description: 'Deploy, manage, and optimize your cloud infrastructure.',
    features: ['AWS Setup', 'DevOps', 'Monitoring', 'Security'],
    price: 'Starting $2,500',
    icon: '☁️',
  },
  {
    id: 'testing-qa',
    title: 'QA & Testing',
    description: 'Comprehensive testing services to ensure quality software.',
    features: ['Test Automation', 'QA Strategy', 'Performance Testing', 'Bug Reporting'],
    price: 'Starting $1,200',
    icon: '✅',
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Strategic technology consulting for your business growth.',
    features: ['Tech Strategy', 'Architecture Review', 'Tool Selection', 'Team Training'],
    price: 'Starting $200/hr',
    icon: '💼',
  },
];
