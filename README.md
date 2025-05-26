# Complete Multi-Domain Security Guard Management System

## 🏗️ Architecture Overview

### Domain Structure
- **yourdomain.com** - Marketing landing page
- **registry.yourdomain.com** - National Registry Dashboard (Admin-controlled access)
- **companies.yourdomain.com** - Client Company Dashboard (Admin-controlled access)
- **app.yourdomain.com** - Individual Client Dashboard (Self-registration)
- **demo.yourdomain.com** - Demo portal for sales
- **api.yourdomain.com** - Backend API services

### User Registration Flow
1. **National Registry**: Registered by us → Send access link
2. **Client Companies**: Registered by us → Send access link + customer support contact
3. **Individual Clients**: Self-registration on app.yourdomain.com

---

## 📁 Complete Project Structure

```
security-guard-management-system/
├── README.md
├── .gitignore
├── package.json                     # Root workspace management
├── yarn.lock
├── .github/
│   └── workflows/
│       ├── deploy-landing.yml
│       ├── deploy-registry.yml      # National Registry CI/CD
│       ├── deploy-companies.yml     # Company Portal CI/CD
│       ├── deploy-app.yml           # Individual Client CI/CD
│       ├── deploy-demo.yml
│       └── deploy-api.yml
│
├── packages/                        # Monorepo structure
│   ├── shared/                      # Shared utilities and components
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── components/          # Reusable UI components
│   │   │   │   ├── ui/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Input.tsx
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── Modal.tsx
│   │   │   │   │   ├── Table.tsx
│   │   │   │   │   ├── SearchBox.tsx
│   │   │   │   │   ├── FilterDropdown.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── charts/
│   │   │   │   │   ├── LineChart.tsx
│   │   │   │   │   ├── BarChart.tsx
│   │   │   │   │   ├── PieChart.tsx
│   │   │   │   │   ├── MapChart.tsx
│   │   │   │   │   └── GuardLocationMap.tsx
│   │   │   │   ├── layout/
│   │   │   │   │   ├── Header.tsx
│   │   │   │   │   ├── Sidebar.tsx
│   │   │   │   │   ├── Footer.tsx
│   │   │   │   │   └── DashboardLayout.tsx
│   │   │   │   └── guards/          # Guard-related shared components
│   │   │   │       ├── GuardCard.tsx
│   │   │   │       ├── GuardStatus.tsx
│   │   │   │       └── GuardProfile.tsx
│   │   │   ├── utils/               # Shared utilities
│   │   │   │   ├── api.ts           # API client utilities
│   │   │   │   ├── auth.ts          # Authentication helpers
│   │   │   │   ├── constants.ts     # App constants
│   │   │   │   ├── formatters.ts    # Data formatting
│   │   │   │   ├── validators.ts    # Form validation
│   │   │   │   ├── websocket.ts     # WebSocket utilities
│   │   │   │   ├── permissions.ts   # Role-based permissions
│   │   │   │   └── notifications.ts # Notification utilities
│   │   │   ├── types/               # TypeScript type definitions
│   │   │   │   ├── api.ts           # API response types
│   │   │   │   ├── auth.ts          # Authentication types
│   │   │   │   ├── guard.ts         # Guard-related types
│   │   │   │   ├── client.ts        # Client-related types
│   │   │   │   ├── company.ts       # Company-related types
│   │   │   │   ├── registry.ts      # Registry-related types
│   │   │   │   ├── rfid.ts          # RFID data types
│   │   │   │   ├── incident.ts      # Incident types
│   │   │   │   └── dashboard.ts     # Dashboard types
│   │   │   ├── hooks/               # Shared React hooks
│   │   │   │   ├── useAuth.ts
│   │   │   │   ├── useWebSocket.ts
│   │   │   │   ├── useRealTimeData.ts
│   │   │   │   ├── useLocalStorage.ts
│   │   │   │   ├── usePermissions.ts
│   │   │   │   └── useGuardTracking.ts
│   │   │   └── styles/              # Shared styles
│   │   │       ├── globals.css
│   │   │       └── tailwind.config.js
│   │   └── dist/                    # Built shared package
│   │
│   ├── landing-page/                # yourdomain.com - Marketing Site
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   │   ├── favicon.ico
│   │   │   ├── logo.svg
│   │   │   ├── images/
│   │   │   │   ├── hero-bg.jpg
│   │   │   │   ├── features/
│   │   │   │   ├── testimonials/
│   │   │   │   └── partners/
│   │   │   └── robots.txt
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   ├── components/
│   │   │   │   ├── Hero.tsx
│   │   │   │   ├── Features.tsx
│   │   │   │   ├── Pricing.tsx
│   │   │   │   ├── Testimonials.tsx
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── LoginModal.tsx
│   │   │   │   ├── RegisterModal.tsx
│   │   │   │   └── PartnersSection.tsx
│   │   │   ├── pages/
│   │   │   │   ├── Home.tsx
│   │   │   │   ├── About.tsx
│   │   │   │   ├── Contact.tsx
│   │   │   │   ├── Privacy.tsx
│   │   │   │   ├── Terms.tsx
│   │   │   │   └── Solutions.tsx
│   │   │   ├── styles/
│   │   │   │   └── landing.css
│   │   │   └── utils/
│   │   │       ├── seo.ts
│   │   │       └── analytics.ts
│   │   ├── firebase.json
│   │   └── .firebaserc
│   │
│   ├── registry-portal/             # registry.yourdomain.com - National Registry
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   │   ├── favicon.ico
│   │   │   └── registry-logo.svg
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   ├── components/
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── RegistryOverview.tsx     # Total guards, stats
│   │   │   │   │   ├── NationalStatistics.tsx   # Country-wide insights
│   │   │   │   │   ├── ComplianceMonitor.tsx    # Compliance tracking
│   │   │   │   │   └── AlertsPanel.tsx          # System alerts
│   │   │   │   ├── guards/
│   │   │   │   │   ├── AllGuardsList.tsx        # All registered guards
│   │   │   │   │   ├── GuardVerification.tsx    # Approve/reject guards
│   │   │   │   │   ├── GuardProfile.tsx         # Detailed guard view
│   │   │   │   │   ├── CertificationTracker.tsx # Cert expiry tracking
│   │   │   │   │   └── GuardFlagging.tsx        # Flag guards for review
│   │   │   │   ├── companies/
│   │   │   │   │   ├── RegisteredCompanies.tsx  # All client companies
│   │   │   │   │   ├── CompanyProfile.tsx       # Company details
│   │   │   │   │   ├── CompanyGuards.tsx        # Guards per company
│   │   │   │   │   └── CompanyCompliance.tsx    # Company compliance
│   │   │   │   ├── audit/
│   │   │   │   │   ├── AuditLogs.tsx            # All system activities
│   │   │   │   │   ├── ComplianceReports.tsx    # Regulatory reports
│   │   │   │   │   ├── IncidentSummary.tsx      # National incident stats
│   │   │   │   │   └── DataExports.tsx          # CSV/PDF exports
│   │   │   │   ├── regulations/
│   │   │   │   │   ├── PolicyManagement.tsx     # Manage regulations
│   │   │   │   │   ├── CertificationRules.tsx   # Cert requirements
│   │   │   │   │   └── BroadcastNotices.tsx     # Send notices to companies
│   │   │   │   └── admin/
│   │   │   │       ├── RegistryStaff.tsx        # Staff management
│   │   │   │       ├── SystemSettings.tsx       # System configuration
│   │   │   │       └── AccessControl.tsx        # Role permissions
│   │   │   ├── pages/
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── Guards.tsx
│   │   │   │   ├── Companies.tsx
│   │   │   │   ├── Audit.tsx
│   │   │   │   ├── Regulations.tsx
│   │   │   │   └── Admin.tsx
│   │   │   ├── store/
│   │   │   │   ├── registryStore.ts
│   │   │   │   ├── guardsStore.ts
│   │   │   │   ├── companiesStore.ts
│   │   │   │   └── auditStore.ts
│   │   │   ├── services/
│   │   │   │   ├── registryApi.ts
│   │   │   │   └── complianceService.ts
│   │   │   └── utils/
│   │   │       ├── permissions.ts
│   │   │       └── exports.ts
│   │   ├── firebase.json
│   │   └── .firebaserc
│   │
│   ├── company-portal/              # companies.yourdomain.com - Client Companies
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   │   ├── favicon.ico
│   │   │   └── company-logo.svg
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   ├── components/
│   │   │   │   ├── dashboard/
│   │   │   │   │   ├── CompanyOverview.tsx       # Company stats
│   │   │   │   │   ├── OperationalSummary.tsx    # Active guards, shifts
│   │   │   │   │   ├── LiveGuardMap.tsx          # Real-time guard locations
│   │   │   │   │   ├── MissedCheckIns.tsx        # Alert dashboard
│   │   │   │   │   └── QuickActions.tsx          # Common actions
│   │   │   │   ├── guards/
│   │   │   │   │   ├── CompanyGuardsList.tsx     # All company guards
│   │   │   │   │   ├── GuardAssignment.tsx       # Assign guards to sites
│   │   │   │   │   ├── GuardPerformance.tsx      # Performance reviews
│   │   │   │   │   ├── GuardTraining.tsx         # Training records
│   │   │   │   │   └── GuardRecruitment.tsx      # Add new guards
│   │   │   │   ├── scheduling/
│   │   │   │   │   ├── ShiftManager.tsx          # Create/edit shifts
│   │   │   │   │   ├── ShiftCalendar.tsx         # Calendar view
│   │   │   │   │   ├── GuardAvailability.tsx     # Guard availability
│   │   │   │   │   └── ShiftExports.tsx          # Export schedules
│   │   │   │   ├── operations/
│   │   │   │   │   ├── PatrolRoutes.tsx          # Manage patrol routes
│   │   │   │   │   ├── IncidentManager.tsx       # View/manage incidents
│   │   │   │   │   ├── EmergencyProtocols.tsx    # Emergency procedures
│   │   │   │   │   └── SiteManagement.tsx        # Client sites
│   │   │   │   ├── clients/
│   │   │   │   │   ├── ClientContracts.tsx       # Individual client contracts
│   │   │   │   │   ├── ClientBilling.tsx         # Billing management
│   │   │   │   │   ├── ClientSatisfaction.tsx    # Ratings/feedback
│   │   │   │   │   └── ServiceDelivery.tsx       # Service metrics
│   │   │   │   ├── reports/
│   │   │   │   │   ├── OperationalReports.tsx    # Daily/weekly reports
│   │   │   │   │   ├── PerformanceAnalytics.tsx  # Guard performance
│   │   │   │   │   ├── FinancialReports.tsx      # Revenue reports
│   │   │   │   │   └── ComplianceReports.tsx     # Regulatory compliance
│   │   │   │   └── settings/
│   │   │   │       ├── CompanyProfile.tsx        # Company information
│   │   │   │       ├── TeamManagement.tsx        # Staff access control
│   │   │   │       ├── IntegrationSettings.tsx   # API integrations
│   │   │   │       └── NotificationPrefs.tsx     # Notification settings
│   │   │   ├── pages/
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── Guards.tsx
│   │   │   │   ├── Scheduling.tsx
│   │   │   │   ├── Operations.tsx
│   │   │   │   ├── Clients.tsx
│   │   │   │   ├── Reports.tsx
│   │   │   │   └── Settings.tsx
│   │   │   ├── store/
│   │   │   │   ├── companyStore.ts
│   │   │   │   ├── guardsStore.ts
│   │   │   │   ├── schedulingStore.ts
│   │   │   │   ├── clientsStore.ts
│   │   │   │   └── operationsStore.ts
│   │   │   ├── services/
│   │   │   │   ├── companyApi.ts
│   │   │   │   ├── billingService.ts
│   │   │   │   └── schedulingService.ts
│   │   │   └── utils/
│   │   │       ├── scheduling.ts
│   │   │       └── billing.ts
│   │   ├── firebase.json
│   │   └── .firebaserc
│   │
│   ├── client-app/                  # app.yourdomain.com - Individual Clients
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   │   ├── favicon.ico
│   │   │   ├── manifest.json        # PWA manifest
│   │   │   └── client-logo.svg
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   ├── components/
│   │   │   │   ├── onboarding/
│   │   │   │   │   ├── Registration.tsx          # Self-registration form
│   │   │   │   │   ├── PropertySetup.tsx         # Property details
│   │   │   │   │   ├── PaymentSetup.tsx          # Payment information
│   │   │   │   │   └── WelcomeTour.tsx           # App walkthrough
│   │   │   │   ├── booking/
│   │   │   │   │   ├── GuardRequest.tsx          # Request guards form
│   │   │   │   │   ├── ServiceOptions.tsx        # Service types
│   │   │   │   │   ├── PricingCalculator.tsx     # Auto pricing
│   │   │   │   │   ├── BookingHistory.tsx        # Past bookings
│   │   │   │   │   └── RequestStatus.tsx         # Current request status
│   │   │   │   ├── monitoring/
│   │   │   │   │   ├── PropertyDashboard.tsx     # Property overview
│   │   │   │   │   ├── AssignedGuards.tsx        # Current guards
│   │   │   │   │   ├── LiveMonitoring.tsx        # Real-time tracking
│   │   │   │   │   ├── PropertyMap.tsx           # Guard locations
│   │   │   │   │   └── EmergencyButton.tsx       # Emergency contact
│   │   │   │   ├── incidents/
│   │   │   │   │   ├── IncidentReports.tsx       # Property incidents
│   │   │   │   │   ├── IncidentDetails.tsx       # Detailed incident view
│   │   │   │   │   ├── IncidentHistory.tsx       # Past incidents
│   │   │   │   │   └── ResolutionTracker.tsx     # Follow-up status
│   │   │   │   ├── billing/
│   │   │   │   │   ├── PaymentDashboard.tsx      # Payment overview
│   │   │   │   │   ├── InvoiceHistory.tsx        # Past invoices
│   │   │   │   │   ├── PaymentMethods.tsx        # Manage payment methods
│   │   │   │   │   ├── BillingDisputes.tsx       # Dispute management
│   │   │   │   │   └── SubscriptionPlan.tsx      # Plan management
│   │   │   │   ├── feedback/
│   │   │   │   │   ├── GuardRatings.tsx          # Rate guard services
│   │   │   │   │   ├── ServiceFeedback.tsx       # Service reviews
│   │   │   │   │   ├── SuggestionBox.tsx         # Improvement suggestions
│   │   │   │   │   └── FeedbackHistory.tsx       # Past feedback
│   │   │   │   └── account/
│   │   │   │       ├── ProfileSettings.tsx       # Account settings
│   │   │   │       ├── PropertyManagement.tsx    # Multiple properties
│   │   │   │       ├── ContactPreferences.tsx    # Communication prefs
│   │   │   │       └── SecuritySettings.tsx      # Account security
│   │   │   ├── pages/
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── Booking.tsx
│   │   │   │   ├── Monitoring.tsx
│   │   │   │   ├── Incidents.tsx
│   │   │   │   ├── Billing.tsx
│   │   │   │   ├── Feedback.tsx
│   │   │   │   └── Account.tsx
│   │   │   ├── store/
│   │   │   │   ├── clientStore.ts
│   │   │   │   ├── bookingStore.ts
│   │   │   │   ├── propertyStore.ts
│   │   │   │   ├── billingStore.ts
│   │   │   │   └── feedbackStore.ts
│   │   │   ├── services/
│   │   │   │   ├── clientApi.ts
│   │   │   │   ├── bookingService.ts
│   │   │   │   ├── paymentService.ts
│   │   │   │   └── notificationService.ts
│   │   │   └── utils/
│   │   │       ├── booking.ts
│   │   │       ├── pricing.ts
│   │   │       └── validation.ts
│   │   ├── firebase.json
│   │   └── .firebaserc
│   │
│   ├── demo-portal/                 # demo.yourdomain.com - Sales Demo
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   ├── index.html
│   │   ├── public/
│   │   │   ├── favicon.ico
│   │   │   └── demo-data/
│   │   │       ├── sample-guards.json
│   │   │       ├── sample-patrols.json
│   │   │       ├── sample-analytics.json
│   │   │       └── sample-incidents.json
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   ├── App.tsx
│   │   │   ├── components/
│   │   │   │   ├── demo/
│   │   │   │   │   ├── DemoSelector.tsx          # Choose demo type
│   │   │   │   │   ├── RegistryDemo.tsx          # Registry demo
│   │   │   │   │   ├── CompanyDemo.tsx           # Company demo
│   │   │   │   │   ├── ClientDemo.tsx            # Individual client demo
│   │   │   │   │   └── FeatureHighlight.tsx      # Highlight features
│   │   │   │   ├── sales/
│   │   │   │   │   ├── ContactCTA.tsx            # Contact sales
│   │   │   │   │   ├── PricingComparison.tsx     # Pricing tables
│   │   │   │   │   ├── FeatureBenefits.tsx       # ROI calculator
│   │   │   │   │   └── CaseStudies.tsx           # Success stories
│   │   │   │   └── mock/
│   │   │   │       ├── MockDashboard.tsx         # Sample dashboards
│   │   │   │       ├── MockCharts.tsx            # Sample analytics
│   │   │   │       ├── MockAlerts.tsx            # Sample alerts
│   │   │   │       └── MockReports.tsx           # Sample reports
│   │   │   ├── pages/
│   │   │   │   ├── DemoHome.tsx
│   │   │   │   ├── RegistryDemo.tsx
│   │   │   │   ├── CompanyDemo.tsx
│   │   │   │   ├── ClientDemo.tsx
│   │   │   │   └── GetStarted.tsx
│   │   │   ├── data/                 # Mock data
│   │   │   │   ├── mockRegistry.ts
│   │   │   │   ├── mockCompanies.ts
│   │   │   │   ├── mockGuards.ts
│   │   │   │   ├── mockClients.ts
│   │   │   │   └── mockAnalytics.ts
│   │   │   └── utils/
│   │   │       ├── demoHelpers.ts
│   │   │       └── mockWebSocket.ts
│   │   ├── firebase.json
│   │   └── .firebaserc
│   │
│   └── api/                         # api.yourdomain.com - Backend Services
│       ├── package.json
│       ├── tsconfig.json
│       ├── nodemon.json
│       ├── src/
│       │   ├── index.ts             # Main entry point
│       │   ├── app.ts               # Express app setup
│       │   ├── server.ts            # Server configuration
│       │   ├── controllers/
│       │   │   ├── auth.controller.ts           # Authentication
│       │   │   ├── registry.controller.ts       # National registry operations
│       │   │   ├── companies.controller.ts      # Company operations
│       │   │   ├── clients.controller.ts        # Individual client operations
│       │   │   ├── guards.controller.ts         # Guard management
│       │   │   ├── patrols.controller.ts        # Patrol management
│       │   │   ├── incidents.controller.ts      # Incident management
│       │   │   ├── rfid.controller.ts           # RFID hardware
│       │   │   ├── analytics.controller.ts      # Analytics and reports
│       │   │   ├── billing.controller.ts        # Billing and payments
│       │   │   ├── notifications.controller.ts  # Notifications
│       │   │   └── webhooks.controller.ts       # External webhooks
│       │   ├── middleware/
│       │   │   ├── auth.middleware.ts           # JWT authentication
│       │   │   ├── roleAuth.middleware.ts       # Role-based authorization
│       │   │   ├── validation.middleware.ts     # Request validation
│       │   │   ├── rateLimiting.middleware.ts   # Rate limiting
│       │   │   ├── cors.middleware.ts           # CORS handling
│       │   │   ├── logging.middleware.ts        # Request logging
│       │   │   └── error.middleware.ts          # Error handling
│       │   ├── routes/
│       │   │   ├── auth.routes.ts               # Authentication routes
│       │   │   ├── registry.routes.ts           # Registry-specific routes
│       │   │   ├── companies.routes.ts          # Company-specific routes
│       │   │   ├── clients.routes.ts            # Client-specific routes
│       │   │   ├── guards.routes.ts             # Guard management
│       │   │   ├── patrols.routes.ts            # Patrol management
│       │   │   ├── incidents.routes.ts          # Incident management
│       │   │   ├── rfid.routes.ts               # RFID operations
│       │   │   ├── analytics.routes.ts          # Analytics endpoints
│       │   │   ├── billing.routes.ts            # Billing operations
│       │   │   ├── notifications.routes.ts      # Notification management
│       │   │   └── index.ts                     # Route aggregation
│       │   ├── services/
│       │   │   ├── auth.service.ts              # Authentication logic
│       │   │   ├── firebase.service.ts          # Firebase integration
│       │   │   ├── registry.service.ts          # Registry business logic
│       │   │   ├── companies.service.ts         # Company business logic
│       │   │   ├── clients.service.ts           # Client business logic
│       │   │   ├── guards.service.ts            # Guard management logic
│       │   │   ├── rfid.service.ts              # RFID hardware integration
│       │   │   ├── websocket.service.ts         # Real-time communications
│       │   │   ├── notification.service.ts      # Notification delivery
│       │   │   ├── analytics.service.ts         # Analytics processing
│       │   │   ├── billing.service.ts           # Billing calculations
│       │   │   ├── email.service.ts             # Email notifications
│       │   │   ├── sms.service.ts               # SMS notifications
│       │   │   └── audit.service.ts             # Audit logging
│       │   ├── models/               # Database models
│       │   │   ├── User.model.ts                # Base user model
│       │   │   ├── Registry.model.ts            # Registry staff
│       │   │   ├── Company.model.ts             # Client companies
│       │   │   ├── Client.model.ts              # Individual clients
│       │   │   ├── Guard.model.ts               # Guard profiles
│       │   │   ├── Patrol.model.ts              # Patrol records
│       │   │   ├── Checkpoint.model.ts          # Patrol checkpoints
│       │   │   ├── Incident.model.ts            # Incident reports
│       │   │   ├── Assignment.model.ts          # Guard assignments
│       │   │   ├── Billing.model.ts             # Billing records
│       │   │   ├── RFIDEvent.model.ts           # RFID scan events
│       │   │   └── AuditLog.model.ts            # System audit logs
│       │   ├── utils/
│       │   │   ├── logger.ts                    # Application logging
│       │   │   ├── validators.ts                # Data validation
│       │   │   ├── helpers.ts                   # Utility functions
│       │   │   ├── constants.ts                 # Application constants
│       │   │   ├── encryption.ts                # Data encryption
│       │   │   ├── permissions.ts               # Permission utilities
│       │   │   └── dateUtils.ts                 # Date/time utilities
│       │   ├── config/
│       │   │   ├── database.ts                  # Database configuration
│       │   │   ├── firebase.ts                  # Firebase configuration
│       │   │   ├── environment.ts               # Environment variables
│       │   │   ├── websocket.ts                 # WebSocket configuration
│       │   │   ├── email.ts                     # Email service config
│       │   │   └── payment.ts                   # Payment gateway config
│       │   ├── hardware/             # RFID integration
│       │   │   ├── rfidReader.ts                # Main RFID interface
│       │   │   ├── serialPort.ts                # Hardware communication
│       │   │   ├── mqttClient.ts                # IoT messaging
│       │   │   ├── deviceManager.ts             # Device management
│       │   │   └── protocols/
│       │   │       ├── iso14443.ts              # ISO 14443 standard
│       │   │       ├── iso15693.ts              # ISO 15693 standard
│       │   │       └── customProtocol.ts        # Custom RFID protocol
│       │   └── types/
│       │       ├── express.d.ts                 # Express type extensions
│       │       ├── api.types.ts                 # API request/response types
│       │       ├── hardware.types.ts            # Hardware interface types
│       │       ├── websocket.types.ts           # WebSocket message types
│       │       └── database.types.ts            # Database schema types
│       ├── functions/               # Firebase Cloud Functions
│       │   ├── src/
│       │   │   ├── index.ts                     # Function exports
│       │   │   ├── auth-triggers.ts             # Authentication triggers
│       │   │   ├── guard-triggers.ts            # Guard status triggers
│       │   │   ├── patrol-triggers.ts           # Patrol event triggers
│       │   │   ├── rfid-processors.ts           # RFID event processing
│       │   │   ├── notification-triggers.ts     # Notification triggers
│       │   │   ├── billing-triggers.ts          # Billing automation
│       │   │   ├── scheduled-jobs.ts            # Cron job functions
│       │   │   └── webhooks.ts                  # External webhook handlers
│       │   ├── package.json
│       │   └── tsconfig.json
│       ├── scripts/                 # Utility scripts
│       │   ├── seed-data.ts                     # Database seeding
│       │   ├── migrate-db.ts                    # Database migrations
│       │   ├── cleanup-logs.ts                  # Log cleanup
│       │   └── generate-reports.ts              # Report generation
│       ├── firebase.json
│       └── .firebaserc
│
├── docs/                            # Documentation
│   ├── README.md                               # Main documentation
│   ├── ARCHITECTURE.md                         # System architecture
│   ├── api/
│   │   ├── README.md                           # API documentation overview
│   │   ├── authentication.md                   # Auth endpoints
│   │   ├── registry-endpoints.md               # Registry API
│   │   ├── company-endpoints.md                # Company API
│   │   ├── client-endpoints.md                 # Client API
│   │   ├── guard-endpoints.md                  # Guard management API
│   │   ├── rfid-endpoints.md                   # RFID API
│   │   ├── billing-endpoints.md                # Billing API
│   │   ├── websockets.md                       # WebSocket documentation
│   │   └── error-codes.md                      # Error code reference
│   ├── deployment/
│   │   ├── firebase-setup.md                   # Firebase project setup
│   │   ├── domain-configuration.md             # Custom domain setup
│   │   ├── ssl-certificates.md                 # SSL configuration
│   │   ├── ci-cd-setup.md                      # CI/CD pipeline setup
│   │   ├── environment-variables.md            # Environment configuration
│   │   └── monitoring-setup.md                 # Monitoring and logging
│   ├── development/
│   │   ├── getting-started.md                  # Development setup
│   │   ├── coding-standards.md                 # Code style guide
│   │   ├── testing-guide.md                    # Testing procedures
│   │   ├── database-schema.md                  # Database design
│   │   ├── component-library.md                # Shared components
│   │   └── troubleshooting.md                  # Common issues
│   ├── hardware/
│   │   ├── rfid-integration.md                 # RFID setup guide
│   │   ├── supported-devices.md                # Compatible hardware
│   │   ├── installation-guide.md               # Hardware installation
│   │   ├── protocols.md                        # RFID protocols
│   │   └── troubleshooting.md                  # Hardware issues
│   ├── user-guides/
│   │   ├── registry-admin.md                   # Registry user guide
│   │   ├── company-admin.md                    # Company user guide
│   │   ├── individual-client.md                # Client user guide
│   │   └── guard-mobile-app.md                 # Mobile app guide
│   └── business/
│       ├── user-roles.md                       # Role definitions
│       ├── workflow-diagrams.md                # Business processes
│       ├── compliance-requirements.md          # Regulatory compliance
│       └── pricing-strategy.md                 # Pricing documentation
│
├── scripts/                         # Build and deployment scripts
│   ├── setup/
│   │   ├── install-dependencies.sh             # Initial setup
│   │   ├── setup-firebase.sh                   # Firebase initialization
│   │   ├── configure-domains.sh                # Domain configuration
│   │   └── setup-ssl.sh                        # SSL certificate setup
│   ├── build/
│   │   ├── build-all.sh                        # Build all packages
│   │   ├── build-shared.sh                     # Build shared package
│   │   ├── build-frontend.sh                   # Build all frontends
│   │   └── build-api.sh                        # Build API
│   ├── deploy/
│   │   ├── deploy-staging.sh                   # Deploy to staging
│   │   ├── deploy-production.sh                # Deploy to production
│   │   ├── deploy-landing.sh                   # Deploy landing page
│   │   ├── deploy-registry.sh                  # Deploy registry portal
│   │   ├── deploy-companies.sh                 # Deploy company portal
│   │   ├── deploy-client-app.sh                # Deploy client app
│   │   ├── deploy-demo.sh                      # Deploy demo portal
│   │   └── deploy-api.sh                       # Deploy API
│   ├── database/
│   │   ├── backup-db.sh                        # Database backup
│   │   ├── restore-db.sh                       # Database restore
│   │   ├── migrate-db.sh                       # Run migrations
│   │   └── seed-data.sh                        # Seed development data
│   ├── monitoring/
│   │   ├── health-check.sh                     # System health check
│   │   ├── log-analysis.sh                     # Log analysis
│   │   └── performance-test.sh                 # Performance testing
│   └── utils/
│       ├── generate-types.sh                   # Generate TypeScript types
│       ├── lint-all.sh                         # Lint all code
│       ├── test-all.sh                         # Run all tests
│       └── cleanup.sh                          # Clean build artifacts
│
├── config/                          # Configuration files
│   ├── firebase/
│   │   ├── staging/
│   │   │   ├── hosting.json                    # Staging hosting config
│   │   │   ├── firestore.rules                 # Staging Firestore rules
│   │   │   ├── storage.rules                   # Staging Storage rules
│   │   │   └── functions.json                  # Staging Functions config
│   │   ├── production/
│   │   │   ├── hosting.json                    # Production hosting config
│   │   │   ├── firestore.rules                 # Production Firestore rules
│   │   │   ├── storage.rules                   # Production Storage rules
│   │   │   └── functions.json                  # Production Functions config
│   │   └── development/
│   │       ├── firestore.rules                 # Development Firestore rules
│   │       └── emulator.json                   # Emulator configuration
│   ├── nginx/                       # Nginx configuration (if needed)
│   │   ├── api.conf                            # API reverse proxy
│   │   ├── ssl.conf                            # SSL configuration
│   │   └── rate-limiting.conf                  # Rate limiting rules
│   ├── docker/                      # Docker configuration (optional)
│   │   ├── Dockerfile.api                      # API container
│   │   ├── Dockerfile.shared                   # Shared package container
│   │   ├── docker-compose.yml                  # Development compose
│   │   └── docker-compose.prod.yml             # Production compose
│   ├── monitoring/
│   │   ├── prometheus.yml                      # Prometheus configuration
│   │   ├── grafana-dashboard.json              # Grafana dashboards
│   │   └── alerting-rules.yml                  # Alert rules
│   └── security/
│       ├── cors-policy.json                    # CORS configuration
│       ├── rate-limits.json                    # Rate limiting rules
│       └── security-headers.json               # Security headers
│
├── mobile-app/                      # Mobile app for guards (optional)
│   ├── android/                                # Android-specific files
│   ├── ios/                                    # iOS-specific files
│   ├── src/
│   │   ├── components/
│   │   │   ├── PatrolScreen.tsx                # Patrol interface
│   │   │   ├── CheckInScreen.tsx               # Check-in interface
│   │   │   ├── IncidentReporting.tsx           # Report incidents
│   │   │   └── EmergencyButton.tsx             # Emergency features
│   │   ├── services/
│   │   │   ├── rfidService.ts                  # RFID scanning
│   │   │   ├── locationService.ts              # GPS tracking
│   │   │   └── apiService.ts                   # API communication
│   │   └── utils/
│   │       ├── permissions.ts                  # Device permissions
│   │       └── offline.ts                      # Offline functionality
│   ├── package.json
│   └── app.json                                # Expo/React Native config
│
└── tests/                           # Testing files
    ├── e2e/                         # End-to-end tests
    │   ├── registry-portal.spec.ts             # Registry portal tests
    │   ├── company-portal.spec.ts              # Company portal tests
    │   ├── client-app.spec.ts                  # Client app tests
    │   ├── demo-portal.spec.ts                 # Demo portal tests
    │   ├── landing-page.spec.ts                # Landing page tests
    │   └── api.spec.ts                         # API tests
    ├── integration/
    │   ├── auth.test.ts                        # Authentication tests
    │   ├── rfid.test.ts                        # RFID integration tests
    │   ├── websocket.test.ts                   # WebSocket tests
    │   ├── billing.test.ts                     # Billing system tests
    │   ├── notifications.test.ts               # Notification tests
    │   └── database.test.ts                    # Database tests
    ├── unit/
    │   ├── shared/
    │   │   ├── components.test.tsx             # Shared component tests
    │   │   ├── utils.test.ts                   # Utility function tests
    │   │   └── hooks.test.ts                   # Custom hook tests
    │   ├── api/
    │   │   ├── controllers.test.ts             # Controller tests
    │   │   ├── services.test.ts                # Service tests
    │   │   ├── middleware.test.ts              # Middleware tests
    │   │   └── models.test.ts                  # Model tests
    │   └── frontend/
    │       ├── registry.test.tsx               # Registry portal tests
    │       ├── company.test.tsx                # Company portal tests
    │       └── client.test.tsx                 # Client app tests
    ├── fixtures/
    │   ├── sample-data.json                    # Test data
    │   ├── mock-responses.json                 # API mock responses
    │   ├── test-configs.json                   # Test configurations
    │   └── hardware-mocks.json                 # Hardware simulation data
    ├── performance/
    │   ├── load-testing.js                     # Load tests
    │   ├── stress-testing.js                   # Stress tests
    │   └── api-benchmarks.js                   # API performance tests
    └── security/
        ├── penetration-tests.js                # Security tests
        ├── auth-security.test.ts               # Authentication security
        └── data-validation.test.ts             # Input validation tests

## 🚀 Updated Package.json Scripts

```json
{
  "name": "security-guard-management-system",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "dev:landing": "yarn workspace landing-page dev",
    "dev:registry": "yarn workspace registry-portal dev",
    "dev:companies": "yarn workspace company-portal dev", 
    "dev:client": "yarn workspace client-app dev",
    "dev:demo": "yarn workspace demo-portal dev",
    "dev:api": "yarn workspace api dev",
    "dev:all": "concurrently \"yarn dev:api\" \"yarn dev:landing\" \"yarn dev:registry\" \"yarn dev:companies\" \"yarn dev:client\" \"yarn dev:demo\"",
    "build:shared": "yarn workspace @security-guard/shared build",
    "build:frontend": "yarn workspace landing-page build && yarn workspace registry-portal build && yarn workspace company-portal build && yarn workspace client-app build && yarn workspace demo-portal build",
    "build:api": "yarn workspace api build",
    "build:all": "yarn build:shared && yarn build:frontend && yarn build:api",
    "deploy:staging": "./scripts/deploy/deploy-staging.sh",
    "deploy:production": "./scripts/deploy/deploy-production.sh",
    "deploy:landing": "./scripts/deploy/deploy-landing.sh",
    "deploy:registry": "./scripts/deploy/deploy-registry.sh",
    "deploy:companies": "./scripts/deploy/deploy-companies.sh",
    "deploy:client": "./scripts/deploy/deploy-client-app.sh",
    "deploy:demo": "./scripts/deploy/deploy-demo.sh",
    "deploy:api": "./scripts/deploy/deploy-api.sh",
    "test:unit": "jest --testPathPattern=tests/unit",
    "test:integration": "jest --testPathPattern=tests/integration",
    "test:e2e": "playwright test tests/e2e",
    "test:all": "yarn test:unit && yarn test:integration && yarn test:e2e",
    "lint:all": "./scripts/utils/lint-all.sh",
    "setup:firebase": "./scripts/setup/setup-firebase.sh",
    "setup:domains": "./scripts/setup/configure-domains.sh",
    "db:migrate": "./scripts/database/migrate-db.sh",
    "db:seed": "./scripts/database/seed-data.sh",
    "db:backup": "./scripts/database/backup-db.sh",
    "health:check": "./scripts/monitoring/health-check.sh",
    "install:all": "yarn install"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/node": "^20.0.0",
    "concurrently": "^8.0.0",
    "nodemon": "^3.0.0",
    "jest": "^29.0.0",
    "@playwright/test": "^1.40.0",
    "eslint": "^8.50.0",
    "prettier": "^3.0.0"
  }
}
```

## 🔐 Role-Based Access Summary

### **National Registry**
- **URL**: registry.yourdomain.com
- **Access**: Admin-controlled registration
- **Users**: Government officials, regulatory staff
- **Permissions**: View all guards, approve/reject registrations, audit all activities

### **Client Companies** 
- **URL**: companies.yourdomain.com
- **Access**: Admin-controlled registration
- **Users**: G4S, other security companies
- **Permissions**: Manage their guards, assign to clients, view company analytics

### **Individual Clients**
- **URL**: app.yourdomain.com  
- **Access**: Self-registration
- **Users**: Property owners, businesses
- **Permissions**: Request guards, monitor their property, rate services

### **Demo Portal**
- **URL**: demo.yourdomain.com
- **Access**: Public (no registration)
- **Users**: Prospects, sales demonstrations
- **Permissions**: View mock data, explore features

## 💰 Updated Cost Estimation

### **Monthly Operational Costs**
- **Firebase Hosting**: $25-50/month (5 domains)
- **Cloud Functions**: $30-100/month (based on usage)
- **Firestore Database**: $20-80/month (based on reads/writes)
- **Cloud Storage**: $10-30/month (documents, images)
- **Custom Domains**: $12-60/month (SSL certificates)
- **Email Service**: $10-30/month (transactional emails)
- **SMS Service**: $20-50/month (notifications)
- **Monitoring/Analytics**: $15-40/month

**Total Estimated Range**: $142-440/month

### **Development Timeline**
1. **Weeks 1-2**: Shared package + Landing page
2. **Weeks 3-4**: Registry portal (National)
3. **Weeks 5-6**: Company portal 
4. **Weeks 7-8**: Individual client app
5. **Weeks 9-10**: Demo portal + API integration
6. **Weeks 11-12**: RFID integration + testing
7. **Weeks 13-14**: Mobile app (optional)
8. **Weeks 15-16**: Deployment + documentation

This comprehensive structure provides a solid foundation for your multi-domain security guard management system with clear separation of concerns, role-based access control, and scalable architecture. Each domain serves its specific purpose while sharing common utilities and maintaining consistent design patterns.
│       