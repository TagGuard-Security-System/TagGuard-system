// User roles for the entire system
export type UserRole = 'registry_admin' | 'company_admin' | 'client' | 'guard';

// Navigation item structure
export interface NavItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
}

// Base user interface
export interface BaseUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Registry Admin - Government officials
export interface RegistryAdmin extends BaseUser {
  role: 'registry_admin';
  permissions: string[];
  department: string;
}

// Company Admin - Security company managers
export interface CompanyAdmin extends BaseUser {
  role: 'company_admin';
  companyId: string;
  companyName: string;
  position: string;
}

// Individual Client - Property owners
export interface Client extends BaseUser {
  role: 'client';
  properties: Property[];
  billingInfo: BillingInfo;
}

// Security Guard
export interface Guard extends BaseUser {
  role: 'guard';
  licenseNumber: string;
  companyId: string;
  status: 'active' | 'inactive' | 'on_duty' | 'off_duty' | 'training';
  certifications: Certification[];
  currentAssignment?: Assignment;
}

// Property information
export interface Property {
  id: string;
  name: string;
  address: string;
  clientId: string;
  propertyType: 'residential' | 'commercial' | 'industrial';
  isActive: boolean;
  securityLevel: 'basic' | 'standard' | 'premium';
}

// Guard assignment
export interface Assignment {
  id: string;
  guardId: string;
  propertyId: string;
  clientId: string;
  startTime: string;
  endTime: string;
  status: 'scheduled' | 'active' | 'completed' | 'cancelled';
  notes?: string;
}

// Certification information
export interface Certification {
  id: string;
  name: string;
  issueDate: string;
  expiryDate: string;
  isValid: boolean;
}

// Billing information
export interface BillingInfo {
  paymentMethod: 'credit_card' | 'bank_transfer' | 'invoice';
  billingAddress: string;
  isActive: boolean;
}

// Incident report
export interface Incident {
  id: string;
  guardId: string;
  propertyId: string;
  timestamp: string;
  type: 'security_breach' | 'equipment_failure' | 'medical_emergency' | 'other';
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  status: 'reported' | 'investigating' | 'resolved' | 'closed';
  reportedBy: string;
}

// Dashboard statistics
export interface DashboardStats {
  totalGuards?: number;
  activeGuards?: number;
  totalIncidents?: number;
  totalProperties?: number;
  totalClients?: number;
  totalCompanies?: number;
  revenue?: number;
  [key: string]: any;
}

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}