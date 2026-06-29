export const siteConfig = {
  name: 'Abuzar',
  title: 'Abuzar - Entrepreneur & Web Developer',
  description: 'Entrepreneur, AI enthusiast, and web developer building digital solutions. Exploring automation, cloud, and AI technologies.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://abuzar.vercel.app',
  ogImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop',
  links: {
    twitter: 'https://twitter.com',
    github: 'https://github.com/abuzar',
    linkedin: 'https://linkedin.com/in/abuzar',
  },
};

export const personalInfo = {
  name: 'Abuzar',
  title: 'Entrepreneur & Digital Builder',
  email: 'khanabuzar7070@gmail.com',
  phone: '+91 7348598924',
  location: 'Aligarh, Uttar Pradesh, India',
  timezone: 'IST (UTC+5:30)',
  bio: 'I build digital solutions by combining communication, language, and technology. Currently exploring AI, automation, and cloud technologies.',
  tagline: 'Building digital experiences | AI & Automation Explorer | Entrepreneur',
  roles: ['Entrepreneur', 'BA (Russian) Student', 'AI & Automation Explorer', 'Cloud Enthusiast'],
};

export const education = [
  {
    degree: 'Bachelor of Arts',
    field: 'Russian Language & Culture',
    institution: 'Aligarh Muslim University',
    startYear: 2022,
    endYear: 2025,
    description: 'Pursuing BA in Russian with focus on language and cultural studies.',
    current: true,
  },
];

export const experience = [
  {
    title: 'Founder',
    company: 'Digital Solutions Lab',
    period: '2023 - Present',
    description: 'Building automation and AI solutions for businesses. Exploring emerging technologies and their applications.',
    highlights: [
      'Launched multiple automation projects',
      'Integrated AI tools for business processes',
      'Built portfolio of web applications',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Freelance',
    period: '2022 - Present',
    description: 'Developing custom websites and web applications for clients.',
    highlights: [
      '10+ successful projects delivered',
      'Client satisfaction rate: 98%',
      'Specializing in Next.js and React',
    ],
  },
  {
    title: 'QA Tester',
    company: 'Various Projects',
    period: '2022 - 2023',
    description: 'Performed quality assurance testing and bug reporting for various applications.',
    highlights: [
      'Identified and documented 500+ bugs',
      'Improved test coverage by 60%',
      'Developed automated testing scripts',
    ],
  },
];

export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Journey', href: '/journey' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/abuzar',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/abuzar',
    icon: 'linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/abuzar',
    icon: 'twitter',
  },
  {
    name: 'Email',
    url: 'mailto:khanabuzar7070@gmail.com',
    icon: 'email',
  },
];

export const testimonials = [
  {
    name: 'Client Name',
    title: 'Project Manager',
    company: 'Tech Company',
    quote: 'Abuzar delivered exceptional work on our automation project. Professional, responsive, and highly skilled.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=felix',
  },
  {
    name: 'Another Client',
    title: 'Founder',
    company: 'Startup',
    quote: 'Great communication and technical skills. Abuzar understood our requirements perfectly and delivered beyond expectations.',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=sophia',
  },
];

export const timeline = [
  {
    year: 2022,
    title: 'Started Learning Web Development',
    description: 'Began journey into web development with HTML, CSS, and JavaScript.',
    type: 'milestone',
  },
  {
    year: 2022,
    title: 'First Project Launch',
    description: 'Built and deployed first website project. Started freelance work.',
    type: 'achievement',
  },
  {
    year: 2023,
    title: 'Explored AI & Automation',
    description: 'Started experimenting with AI APIs and workflow automation tools.',
    type: 'milestone',
  },
  {
    year: 2023,
    title: 'Founded Digital Solutions Lab',
    description: 'Launched own venture focusing on automation and AI solutions.',
    type: 'achievement',
  },
  {
    year: 2024,
    title: 'Portfolio & Services Expansion',
    description: 'Expanded service offerings and built comprehensive project portfolio.',
    type: 'milestone',
  },
  {
    year: 2025,
    title: 'Future Vision',
    description: 'Focusing on advanced AI integration and cloud infrastructure expertise.',
    type: 'future',
  },
];

export const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Projects', href: '/projects' },
      { name: 'Skills', href: '/skills' },
      { name: 'Journey', href: '/journey' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Web Development', href: '/services#web-dev' },
      { name: 'Automation', href: '/services#automation' },
      { name: 'AI Solutions', href: '/services#ai' },
      { name: 'Consulting', href: '/services#consulting' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Contact', href: '/contact' },
    ],
  },
];
