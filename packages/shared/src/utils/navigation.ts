import { NavItem } from '../types';

// National Registry Navigation
export const registryNavigation: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'All Guards', href: '/guards' },
  { label: 'Companies', href: '/companies' },
  { label: 'Audit Logs', href: '/audit' },
  { label: 'Regulations', href: '/regulations' },
  { label: 'Reports', href: '/reports' },
  { label: 'Admin Settings', href: '/admin' }
];

// Company Portal Navigation
export const companyNavigation: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'My Guards', href: '/guards' },
  { label: 'Scheduling', href: '/scheduling' },
  { label: 'Operations', href: '/operations' },
  { label: 'Clients', href: '/clients' },
  { label: 'Reports', href: '/reports' },
  { label: 'Settings', href: '/settings' }
];

// Individual Client Navigation
export const clientNavigation: NavItem[] = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Book Guards', href: '/booking' },
  { label: 'My Guards', href: '/guards' },
  { label: 'Property Monitor', href: '/monitoring' },
  { label: 'Incidents', href: '/incidents' },
  { label: 'Billing', href: '/billing' },
  { label: 'Feedback', href: '/feedback' },
  { label: 'Account', href: '/account' }
];

// Demo Portal Navigation
export const demoNavigation: NavItem[] = [
  { label: 'Registry Demo', href: '/registry-demo' },
  { label: 'Company Demo', href: '/company-demo' },
  { label: 'Client Demo', href: '/client-demo' },
  { label: 'Features', href: '/features' },
  { label: 'Get Started', href: '/get-started' }
];