export interface NavLink {
  name: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  id: string;
  name: string;
  level: string;
  progress: number;
  description?: string;
  tags?: string[];
  icon?: string;
}

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

export interface Testimonial {
  name: string;
  title: string;
  company: string;
  quote: string;
  image: string;
}

export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  type: 'milestone' | 'achievement' | 'future';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  startYear: number;
  endYear: number;
  description: string;
  current?: boolean;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
  };
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  timezone: string;
  bio: string;
  tagline: string;
  roles: string[];
}
