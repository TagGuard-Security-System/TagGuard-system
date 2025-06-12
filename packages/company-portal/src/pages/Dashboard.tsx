import React, { useState, useEffect } from 'react';
import {
  Users, Shield, Building, DollarSign, UserCheck, FileText, AlertTriangle, TrendingUp,
  MapPin, Activity, Clock, Star, Phone, BookOpen, AlertCircle, Loader2, Database, Wifi, WifiOff
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
//import React, { useState, useEffect } from 'react'; import { Users, Shield, Building, DollarSign, UserCheck, FileText, AlertTriangle, TrendingUp, MapPin, Activity, Clock, Star, Phone, BookOpen, AlertCircle, Loader2, Database, Wifi, WifiOff } from 'lucide-react'; import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'; // Firebase imports: db instance from config, and Firestore methods import { collection, getDocs, onSnapshot, Firestore } from 'firebase/firestore'; import { db } from '../config/firebase';
// Firebase imports: db instance from config, and Firestore methods
import { collection, getDocs, onSnapshot, Firestore } from 'firebase/firestore';
import { db } from '../config/firebase'; // Import the initialized db from your config file
// --- START OF INTERFACE DEFINITIONS ---
interface Guard {
  id: string;
  full_name: string;
  force_number: string;
  photo_url?: string;
  phone_number: string;
  email: string;
  national_id: string;
  status: 'active' | 'inactive' | 'suspended';
  assigned_posts?: string[];
  certified: boolean;
  registered_by: string;
  created_at: string; // Should ideally be Firestore Timestamp or Date, but string for consistency with seed
  updated_at: string; // Same as above
  seed_id?: string;
}

interface Company {
  id: string;
  client_type: string;
  name: string;
  contact_info: {
    email: string;
    phone: string;
    person?: string; // Added for consistency with new client form
  };
  address: string;
  requested_guards?: string[];
  active_posts?: string[];
  admin_id: string;
  seed_id?: string;
  // Added from new client form for potential display
  status?: string;
  contract_type?: string;
  monthly_value_str?: string;
  industry?: string;
  rating?: number;
  start_date_str?: string;
  created_at?: any; // serverTimestamp or string
  updated_at?: any; // serverTimestamp or string
}

interface CheckinLog {
  id: string;
  tag_id: string;
  guard_id: string;
  timestamp: string; // ISO String
  location_name: string;
  force_number: string;
  photo_url?: string;
  assigned_post: string;
  status: 'on_time' | 'late' | 'missed';
  shift_id: string;
  seed_id?: string;
}

interface PatrolAssignment {
  id: string;
  guard_id: string;
  post_id: string;
  start_time: string; // ISO String
  end_time: string; // ISO String
  assigned_by: string;
  status: 'scheduled' | 'active' | 'completed' | 'cancelled';
  notes?: string;
  seed_id?: string;
}

interface AlertLog {
  id: string;
  triggered_by: string;
  location: string;
  timestamp: string; // ISO String
  type: 'panic' | 'emergency' | 'maintenance' | 'security';
  status: 'pending' | 'resolved' | 'investigating';
  notified_admin_id: string;
  seed_id?: string;
}

interface Checkpoint {
  id: string;
  location_name: string;
  geo_coordinates: { lat: number; long: number; };
  post_id: string;
  installed_by: string;
  installation_date: string; // ISO String
  seed_id?: string;
}

interface Post {
  id: string;
  client_id: string;
  location_name: string;
  geo_coordinates: { lat: number; long: number; };
  rfid_tags: string[];
  notes?: string;
  seed_id?: string;
}

interface User { // Assuming this is for system users/admins
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  registered_guards?: string[]; // If this user type registers guards
  seed_id?: string;
}

interface DashboardData {
  guards: Guard[];
  companies: Company[];
  checkinLogs: CheckinLog[];
  patrolAssignments: PatrolAssignment[];
  alertLogs: AlertLog[];
  checkpoints: Checkpoint[];
  posts: Post[];
  users: User[];
}

interface MetricData {
  value: number | string;
  trend: number[];
  change: string;
}

interface OperationalAlert {
  id: string | number;
  type: 'high' | 'medium' | 'low';
  title: string;
  message: string;
  time: string;
  icon: React.ComponentType<any>;
}

interface RecentActivity {
  id: string;
  guard: string;
  action: string;
  location: string;
  time: string;
  status: 'active' | 'completed' | 'reported';
}
// --- END OF INTERFACE DEFINITIONS ---

// --- START OF DEMO DATA ---
const demoData: DashboardData = {
  guards: [
    { id: 'demo_guard_1', full_name: 'John Doe (Demo)', force_number: 'GF-D-001', photo_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150', phone_number: '+1-DEMO-001', email: 'johndoe.demo@secure.com', national_id: 'DEMO123456', status: 'active', assigned_posts: ['post_D001'], certified: true, registered_by: 'admin_D001', created_at: new Date().toISOString(), updated_at: new Date().toISOString(), seed_id: 'guard_D001' },
    { id: 'demo_guard_2', full_name: 'Jane Smith (Demo)', force_number: 'GF-D-002', phone_number: '+1-DEMO-002', email: 'janesmith.demo@secure.com', national_id: 'DEMO123457', status: 'active', assigned_posts: ['post_D002'], certified: true, registered_by: 'admin_D001', created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
  ],
  companies: [
    { id: 'demo_co_1', client_type: 'company', name: 'Demo Corp Ltd.', contact_info: { email: 'contact@democorp.com', phone: '+1-DEMO-CORP' }, address: '123 Demo Street', admin_id: 'admin_D001', active_posts: ['post_D001'], seed_id: 'co_D001' }
  ],
  checkinLogs: [
    { id: 'demo_chk_1', tag_id: 'tag_D001', guard_id: 'guard_D001', timestamp: new Date(Date.now() - 30 * 60 * 1000).toISOString(), location_name: 'Demo Gate A', force_number: 'GF-D-001', assigned_post: 'post_D001', status: 'on_time', shift_id: 'shift_D001' }
  ],
  patrolAssignments: [
    { id: 'demo_pa_1', guard_id: 'guard_D001', post_id: 'post_D001', start_time: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), end_time: new Date(Date.now() + 6 * 60 * 60 * 1000).toISOString(), assigned_by: 'admin_D001', status: 'active' }
  ],
  alertLogs: [
    { id: 'demo_al_1', triggered_by: 'guard_D001', location: 'Demo Area 51', timestamp: new Date(Date.now() - 15 * 60 * 1000).toISOString(), type: 'panic', status: 'pending', notified_admin_id: 'admin_D001' }
  ],
  checkpoints: [
    { id: 'demo_cp_1', location_name: 'Demo Checkpoint Alpha', geo_coordinates: { lat: -1.28, long: 36.82 }, post_id: 'post_D001', installed_by: 'admin_D001', installation_date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() }
  ],
  posts: [
    { id: 'demo_post_1', client_id: 'co_D001', location_name: 'Demo Main Site', geo_coordinates: { lat: -1.28, long: 36.82 }, rfid_tags: ['tag_D001', 'tag_D002'], notes: 'Primary demo post' }
  ],
  users: [
    { id: 'demo_user_1', full_name: 'Demo Admin User', email: 'admin.demo@example.com', phone_number: '+1-DEMO-ADMIN' }
  ]
};
// --- END OF DEMO DATA ---

const Dashboard: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true); // For initial demo data load
  const [error, setError] = useState<string | null>(null);
  const [dashboardData, setDashboardData] = useState<DashboardData>(demoData); // UI driven by this, updated by Firebase if connected

  // Firebase specific state
  const [firebaseConnected, setFirebaseConnected] = useState<boolean>(false);
  const [firebaseData, setFirebaseData] = useState<DashboardData>({
    guards: [], companies: [], checkinLogs: [], patrolAssignments: [],
    alertLogs: [], checkpoints: [], posts: [], users: []
  });
  const [firebaseLoading, setFirebaseLoading] = useState<boolean>(true); // For Firebase connection attempt

  // Initialize with demo data quickly for UI responsiveness
  useEffect(() => {
    setLoading(true);
    console.log('Loading TagGuard dashboard with demo data initially...');
    setDashboardData(demoData);
    setLoading(false);
    console.log('Demo data set for initial display.');
  }, []);

  // Effect for Firebase data fetching and real-time updates
  useEffect(() => {
    let unsubscribeAlerts = () => {};
    let unsubscribeCheckins = () => {};
    let unsubscribeGuards = () => {};
    let unsubscribeCompanies = () => {};
    // Add more unsubscribe functions if you add more listeners

    const initializeFirebase = async () => {
      setFirebaseLoading(true); // Explicitly set loading for Firebase attempt
      console.log('Attempting to connect to Firebase and fetch data...');
      try {
        // Validity check for db
        let isFirestoreInstanceValid = false;
        if (db && typeof db === 'object') {
            // Check for properties common to a modular Firestore client instance
            if (db.app && db.app.options && db.app.options.projectId && typeof (db as any).INTERNAL === 'object') {
                isFirestoreInstanceValid = true;
                console.log('[DEBUG] db appears to be a VALID Firestore instance from getFirestore().');
                console.log('[DEBUG] Project ID from db.app.options:', db.app.options.projectId);
            } else {
                console.warn('[DEBUG] Imported db object does not appear to be a valid modular Firestore instance. Details:');
                if (db && typeof db === 'object') console.warn('[DEBUG] db object keys:', Object.keys(db)); else console.warn('[DEBUG] db object is not a typical object or is null/undefined.');
                if (!db?.app?.options?.projectId) console.warn('[DEBUG] - db.app.options.projectId is missing.');
                if (typeof (db as any)?.INTERNAL !== 'object') console.warn('[DEBUG] - db.INTERNAL property, typical for modular SDK instances, is missing or not an object.');
            }
        } else {
            console.error('[DEBUG] Imported db object is null, undefined, or not an object.');
        }

        if (!isFirestoreInstanceValid) {
          throw new Error("Firebase 'db' instance is invalid or not correctly initialized. Ensure 'config/firebase.js' exports a valid Firestore instance.");
        }

        const firestoreDb = db as Firestore; // Cast to Firestore
        
        const [
          guardsSnap, companiesSnap, checkinLogsSnap, patrolAssignmentsSnap,
          alertLogsSnap, checkpointsSnap, postsSnap, usersSnap
        ] = await Promise.all([
          getDocs(collection(firestoreDb, 'Guards')),
          getDocs(collection(firestoreDb, 'Companies')),
          getDocs(collection(firestoreDb, 'Checkin_Logs')),
          getDocs(collection(firestoreDb, 'Patrol_Assignments')),
          getDocs(collection(firestoreDb, 'Alert_Logs')),
          getDocs(collection(firestoreDb, 'Checkpoints')),
          getDocs(collection(firestoreDb, 'Posts')),
          getDocs(collection(firestoreDb, 'Users'))
        ]);

        const fetchedData: DashboardData = {
          guards: guardsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Guard)),
          companies: companiesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Company)),
          checkinLogs: checkinLogsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as CheckinLog)),
          patrolAssignments: patrolAssignmentsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as PatrolAssignment)),
          alertLogs: alertLogsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as AlertLog)),
          checkpoints: checkpointsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Checkpoint)),
          posts: postsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post)),
          users: usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() } as User))
        };

        setFirebaseData(fetchedData); // Store raw Firebase data
        setDashboardData(fetchedData); // Update main UI driving data with live data
        setFirebaseConnected(true);
        setError(null); // Clear previous errors on successful fetch
        console.log('Firebase data loaded successfully:', fetchedData);

        // Example real-time listeners (add more as needed)
        unsubscribeGuards = onSnapshot(collection(firestoreDb, 'Guards'), (snapshot) => {
          const updatedGuards = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Guard));
          setFirebaseData(prev => ({ ...prev, guards: updatedGuards }));
          setDashboardData(prev => ({ ...prev, guards: updatedGuards })); // Also update main data
          console.log('Real-time Guards update:', updatedGuards.length);
        });

        unsubscribeCompanies = onSnapshot(collection(firestoreDb, 'Companies'), (snapshot) => {
            const updatedCompanies = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Company));
            setFirebaseData(prev => ({ ...prev, companies: updatedCompanies }));
            setDashboardData(prev => ({ ...prev, companies: updatedCompanies }));
            console.log('Real-time Companies update:', updatedCompanies.length);
          });

        unsubscribeAlerts = onSnapshot(collection(firestoreDb, 'Alert_Logs'), (snapshot) => {
          const updatedAlerts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AlertLog));
          setFirebaseData(prev => ({ ...prev, alertLogs: updatedAlerts }));
          setDashboardData(prev => ({ ...prev, alertLogs: updatedAlerts }));
          console.log('Real-time Alert Logs update:', updatedAlerts.length);
        });

        unsubscribeCheckins = onSnapshot(collection(firestoreDb, 'Checkin_Logs'), (snapshot) => {
          const updatedCheckins = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CheckinLog));
          setFirebaseData(prev => ({ ...prev, checkinLogs: updatedCheckins }));
          setDashboardData(prev => ({ ...prev, checkinLogs: updatedCheckins }));
          console.log('Real-time Checkin Logs update:', updatedCheckins.length);
        });

      } catch (err: any) {
        console.error('Firebase connection or data fetch failed:', err);
        const errorMessage = err.message || 'Unknown Firebase error.';
        setError(`Firebase operation failed: ${errorMessage}. Displaying demo data. Check console, ensure Firebase is set up, collections exist, and Firestore rules allow access.`);
        setFirebaseConnected(false); // Keep displaying demo data if Firebase fails
        setDashboardData(demoData);
      } finally {
        setFirebaseLoading(false);
        setLoading(false); // Ensure overall loading is false
      }
    };

    initializeFirebase();

    return () => {
      // Cleanup function
      console.log('Cleaning up Firebase listeners.');
      unsubscribeGuards();
      unsubscribeCompanies();
      unsubscribeAlerts();
      unsubscribeCheckins();
      // Call other unsubscribe functions here
    };
  }, []); // Empty dependency array means this runs once on mount

  // --- HELPER FUNCTIONS & CALCULATIONS ---
  const calculateMetrics = (): Record<string, MetricData> => {
    // Uses `dashboardData` which is either demo or live Firebase data
    const { guards, companies, patrolAssignments, alertLogs } = dashboardData;

    const totalGuards = guards.length;
    const activeGuards = guards.filter(g => g.status === 'active').length;
    const onDutyGuards = patrolAssignments.filter(p => {
        if (!p.start_time || !p.end_time) return false;
        const now = new Date();
        try {
            return p.status === 'active' && new Date(p.start_time) <= now && new Date(p.end_time) >= now;
        } catch (e) {
            console.warn("Invalid date in patrolAssignments for onDutyGuards calc:", p);
            return false;
        }
    }).length;
    const availableGuards = Math.max(0, activeGuards - onDutyGuards);

    const totalClients = companies.length;
    const activeContracts = companies.filter(c => c.active_posts && c.active_posts.length > 0).length;
    // A more dynamic revenue calculation might be needed if values differ
    const monthlyRevenue = companies.reduce((sum, company) => {
        if (company.status === 'Active' || (company.active_posts && company.active_posts.length > 0)) {
            // Attempt to parse monthly_value_str, default to an example if not present/parsable
            const valueStr = company.monthly_value_str || '1250'; // Default if not present
            const numericValue = parseInt(valueStr.replace(/[^\d.-]/g, ''), 10);
            return sum + (isNaN(numericValue) ? 1250 : numericValue); // Fallback to 1250 if parsing fails
        }
        return sum;
    },0);

    const today = new Date().toISOString().split('T')[0];
    const todayIncidents = alertLogs.filter(al => al.timestamp && al.timestamp.startsWith(today)).length;
    
    // Calculate average rating from companies if available
    const ratings = companies.map(c => c.rating).filter(r => typeof r === 'number' && !isNaN(r)) as number[];
    const averageRating = ratings.length > 0 ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length) : 4.7; // Default if no ratings

    const generateTrend = (value: number): number[] => {
      const base = Math.round(value * 0.85);
      return Array.from({ length: 7 }, (_, i) => Math.max(0, Math.round(base + (value - base) * (i / 6) + (Math.random() - 0.5) * value * 0.1)));
    };

    return {
      totalGuards: { value: totalGuards, trend: generateTrend(totalGuards), change: "+2%" },
      onDutyGuards: { value: onDutyGuards, trend: generateTrend(onDutyGuards), change: "+5%" },
      availableGuards: { value: availableGuards, trend: generateTrend(availableGuards), change: "-1%" },
      totalClients: { value: totalClients, trend: generateTrend(totalClients), change: "+1" },
      activeContracts: { value: activeContracts, trend: generateTrend(activeContracts), change: "+3%" },
      monthlyRevenue: { value: `KES ${(monthlyRevenue).toLocaleString()}`, trend: generateTrend(monthlyRevenue), change: "+1.5%" },
      todayIncidents: { value: todayIncidents, trend: generateTrend(Math.max(1, todayIncidents)), change: todayIncidents > 2 ? "+10%" : "-5%" },
      averageRating: { value: parseFloat(averageRating.toFixed(1)), trend: [4.2, 4.4, 4.5, 4.6, 4.7, 4.6, 4.8].map(v => parseFloat(v.toFixed(1))), change: "+0.1" }
    };
  };

  const getOperationalAlerts = (): OperationalAlert[] => {
    const { alertLogs, guards, checkinLogs } = dashboardData;
    const alerts: OperationalAlert[] = [];

    const recentCheckins = checkinLogs.filter(log => {
      if(!log.timestamp) return false;
      try {
        return new Date().getTime() - new Date(log.timestamp).getTime() < 4 * 60 * 60 * 1000; // 4 hours
      } catch(e) {
        console.warn("Invalid date in checkinLogs for recentCheckins:", log);
        return false;
      }
    });

    if (guards.length > 0 && recentCheckins.length < guards.length / 2 && guards.length > 2) { // Avoid for very few guards
      alerts.push({
        id: 'missed_checkins',
        type: "high",
        title: "Missed Check-ins",
        message: `${guards.length - recentCheckins.length} guards may have missed check-ins.`,
        time: "Recent",
        icon: AlertCircle
      });
    }

    const pendingAlerts = alertLogs.filter(alert => alert.status === 'pending');
    pendingAlerts.slice(0, 2).forEach((alert) => { // Limit to 2 pending alerts
      alerts.push({
        id: alert.id,
        type: alert.type === 'panic' ? 'high' : 'medium',
        title: `${alert.type.charAt(0).toUpperCase() + alert.type.slice(1)} Alert`,
        message: `Alert @ ${alert.location || 'Unknown'} by ${alert.triggered_by || 'System'}`,
        time: formatTimeAgo(alert.timestamp),
        icon: AlertTriangle
      });
    });
    
    // Demo alerts if needed for UI fullness
    if(alerts.length < 4) alerts.push({ id: 'training_due_demo', type: "low", title: "Training Due (Demo)", message: "Security cert renewal for 3 guards", time: "Next Week", icon: BookOpen });
    if(alerts.length < 4) alerts.push({ id: 'client_req_demo', type: "medium", title: "Client Request (Demo)", message: "Proposal for 'New Biz Park'", time: "Yesterday", icon: Phone });

    return alerts.slice(0, 4); // Ensure max 4 alerts
  };

  const getRecentActivity = (): RecentActivity[] => {
    const { checkinLogs, guards } = dashboardData;
    return checkinLogs
      .filter(log => log.timestamp) // Ensure timestamp exists
      .sort((a, b) => {
        try {
            return new Date(b.timestamp!).getTime() - new Date(a.timestamp!).getTime();
        } catch(e) {
            console.warn("Invalid date in checkinLogs for sorting:", a, b);
            return 0;
        }
    })
      .slice(0, 5) // Get latest 5
      .map(log => {
        const guard = guards.find(g => g.id === log.guard_id || g.seed_id === log.guard_id);
        return {
          id: log.id,
          guard: guard?.full_name || log.force_number || 'Unknown Guard',
          action: log.status === 'on_time' ? 'Checked-in' : (log.status === 'late' ? 'Late Check-in' : 'Missed Check-in'),
          location: log.location_name || 'Unknown Location',
          time: formatTimeAgo(log.timestamp),
          status: log.status === 'on_time' ? 'completed' : 'reported' // Map CheckinLog status to RecentActivity status
        };
      });
  };

  const formatTimeAgo = (timestamp?: string): string => {
    if (!timestamp) return 'Unknown time';
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

      if (isNaN(diffInSeconds)) return 'Invalid date'; // Check if date parsing failed

      if (diffInSeconds < 5) return 'just now';
      if (diffInSeconds < 60) return `${diffInSeconds}s ago`;
      const diffInMinutes = Math.floor(diffInSeconds / 60);
      if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
      const diffInHours = Math.floor(diffInMinutes / 60);
      if (diffInHours < 24) return `${diffInHours}h ago`;
      const diffInDays = Math.floor(diffInHours / 24);
      if (diffInDays < 7) return `${diffInDays}d ago`;
      return date.toLocaleDateString();
    } catch (e) {
      console.warn("Error formatting time ago for timestamp:", timestamp, e);
      return 'Invalid date';
    }
  };


  const getAlertClass = (type: string): string => {
    const baseClass = "border-l-4 rounded-lg p-4 transition-all duration-200 hover:shadow-md cursor-pointer";
    switch (type) {
      case 'high': return `${baseClass} bg-red-50 border-red-500`;
      case 'medium': return `${baseClass} bg-yellow-50 border-yellow-500`;
      case 'low': return `${baseClass} bg-blue-50 border-blue-500`;
      default: return `${baseClass} bg-gray-50 border-gray-300`;
    }
  };

  const getActivityStatusColor = (status: string): string => {
    switch (status) {
      case 'active': return 'text-emerald-600 bg-emerald-100'; // If you add active status for activity
      case 'completed': return 'text-blue-600 bg-blue-100';
      case 'reported': return 'text-amber-600 bg-amber-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // --- RENDER LOGIC ---
  // Show initial loading screen until first Firebase attempt completes OR demo data is ready (which is instant)
  if (loading && firebaseLoading) { 
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-slate-900 mb-2">Loading TagGuard Dashboard</h2>
          <p className="text-slate-600">Initializing security management system...</p>
        </div>
      </div>
    );
  }

  const metrics = calculateMetrics();
  const operationalAlerts = getOperationalAlerts();
  const recentActivity = getRecentActivity();

  const mainMetricsConfig = [
    { id: 'totalGuards', label: 'Total Guards', icon: Users, color: 'from-blue-500 to-blue-600', textColor: 'text-blue-600' },
    { id: 'onDutyGuards', label: 'On Duty Now', icon: Shield, color: 'from-emerald-500 to-emerald-600', textColor: 'text-emerald-600' },
    { id: 'totalClients', label: 'Active Clients', icon: Building, color: 'from-purple-500 to-purple-600', textColor: 'text-purple-600' },
    { id: 'monthlyRevenue', label: 'Monthly Revenue', icon: DollarSign, color: 'from-green-500 to-green-600', textColor: 'text-green-600' }
  ];

  const secondaryMetricsConfig = [
    { id: 'availableGuards', label: 'Available Guards', icon: UserCheck, color: 'text-blue-600' },
    { id: 'activeContracts', label: 'Active Contracts', icon: FileText, color: 'text-emerald-600' },
    { id: 'todayIncidents', label: "Today's Incidents", icon: AlertTriangle, color: 'text-amber-600' },
    { id: 'averageRating', label: 'Avg Client Rating', icon: Star, color: 'text-yellow-600' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">

        {/* Status/Error Banner */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-5 h-5 text-red-600" />
              <div>
                <h3 className="font-medium text-red-800">Connection Issue</h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        <div className={`rounded-lg p-4 border ${firebaseConnected ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                {firebaseConnected ? <Wifi className="w-5 h-5 text-green-600" /> : <Activity className="w-5 h-5 text-blue-600" />}
                <div>
                    <h3 className={`font-medium ${firebaseConnected ? 'text-green-800' : 'text-blue-800'}`}>
                    {firebaseConnected ? 'Live Data Mode (Firebase Connected)' : 'TagGuard Demo Dashboard'}
                    </h3>
                    <p className={`text-sm ${firebaseConnected ? 'text-green-700' : 'text-blue-700'}`}>
                    {firebaseConnected ? 'Displaying real-time data from Firestore.' : firebaseLoading ? 'Attempting to connect to Firebase...' : 'Displaying sample data.'}
                    </p>
                </div>
                </div>
                <div className={`text-sm font-medium ${firebaseConnected ? 'text-green-600' : 'text-blue-600'}`}>
                    {firebaseLoading && !firebaseConnected ? <Loader2 className="w-4 h-4 animate-spin"/> : firebaseConnected ? 'Live' : 'Demo Mode'}
                </div>
            </div>
        </div>


        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TagGuard Security Dashboard
            </h1>
            <p className="text-slate-600 mt-1 text-sm lg:text-base">Real-time operational overview and key metrics</p>
          </div>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mainMetricsConfig.map((metricConf) => {
            const metric = metrics[metricConf.id];
            if (!metric) return null;
            const IconComponent = metricConf.icon;
            return (
              <div key={metricConf.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-5 hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${metricConf.color} rounded-lg flex items-center justify-center shadow-md`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-xs font-semibold ${metricConf.textColor} flex items-center`}>
                    <TrendingUp className="w-3.5 h-3.5 mr-1" />
                    <span>{metric.change}</span>
                  </div>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-bold text-slate-800">{String(metric.value)}</p>
                  <p className="text-sm text-slate-500 mb-2">{metricConf.label}</p>
                </div>
                <div className="h-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={metric.trend.map((val, index) => ({ value: val, index }))}>
                      <XAxis dataKey="index" hide />
                      <YAxis hide domain={['dataMin', 'dataMax']} />
                      <Line type="monotone" dataKey="value" stroke={(metricConf.textColor.match(/#(?:[0-9a-fA-F]{3}){1,2}|(?:rgb|hsl)a?\([^)]+\)|[a-zA-Z]+/) || ['#8884d8'])[0]} strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {secondaryMetricsConfig.map((metricConf) => {
            const metric = metrics[metricConf.id];
            if (!metric) return null;
            const IconComponent = metricConf.icon;
            return (
              <div key={metricConf.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-3 md:p-4 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between">
                <div className="flex items-center justify-between mb-1">
                  <IconComponent className={`w-5 h-5 ${metricConf.color}`} />
                  <span className={`text-xs font-medium ${metricConf.color}`}>{metric.change}</span>
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold text-slate-800">{String(metric.value)}</p>
                  <p className="text-xs text-slate-500 mb-1.5">{metricConf.label}</p>
                </div>
                <div className="h-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={metric.trend.map((val, index) => ({ value: val, index }))}>
                      <XAxis dataKey="index" hide />
                      <YAxis hide domain={['dataMin', 'dataMax']} />
                      <Line type="monotone" dataKey="value" stroke={(metricConf.color.match(/#(?:[0-9a-fA-F]{3}){1,2}|(?:rgb|hsl)a?\([^)]+\)|[a-zA-Z]+/) || ['#8884d8'])[0]} strokeWidth={1.5} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            );
          })}
        </div>

        {/* Alerts and Activity Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Operational Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Operational Alerts</h3>
                <p className="text-sm text-slate-600">Urgent system notifications</p>
              </div>
              {operationalAlerts.length > 0 && (
                <span className="bg-red-100 text-red-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  {operationalAlerts.length} Active
                </span>
              )}
            </div>
            <div className="space-y-4">
              {operationalAlerts.length > 0 ? operationalAlerts.map((alert) => {
                const IconComponent = alert.icon;
                return (
                  <div key={alert.id} className={getAlertClass(alert.type)}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <IconComponent className={`w-5 h-5 mt-0.5 ${alert.type === 'high' ? 'text-red-600' : alert.type === 'medium' ? 'text-yellow-600' : 'text-blue-600'}`} />
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-slate-800 mb-0.5">{alert.title}</p>
                          <p className="text-sm text-slate-600">{alert.message}</p>
                        </div>
                      </div>
                      <span className="text-xs text-slate-500 whitespace-nowrap pt-0.5">{alert.time}</span>
                    </div>
                  </div>
                );
              }) : (
                <div className="text-center text-slate-500 py-8">
                  <Shield className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                  <p className="text-sm">No operational alerts at this time.</p>
                </div>
              )}
            </div>
          </div>

          {/* Recent Guard Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Recent Guard Activity</h3>
                <p className="text-sm text-slate-600">Latest check-ins and updates</p>
              </div>
              {recentActivity.length > 0 && <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">View All</button>}
            </div>
            <div className="space-y-3">
              {recentActivity.length > 0 ? recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors duration-150">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {(activity.guard.split(' ').map(n => n[0]).join('') || 'N/A').substring(0,2)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">{activity.guard}</p>
                      <div className="flex items-center space-x-2 mt-0.5">
                        <p className="text-xs text-slate-600">{activity.action}</p>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${getActivityStatusColor(activity.status)}`}>
                          {activity.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{activity.location}</p>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 whitespace-nowrap">{activity.time}</span>
                </div>
              )) : (
                <div className="text-center text-slate-500 py-8">
                  <Activity className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                  <p className="text-sm">No recent guard activity.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Guard Map Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Guard Location Map</h3>
              <p className="text-sm text-slate-600">Real-time tracking overview</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-slate-500">Live Tracking</span>
            </div>
          </div>
          <div className="h-80 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl flex items-center justify-center border border-slate-200">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Interactive Guard Map</h3>
              <p className="text-sm text-slate-600 mb-4 max-w-md mx-auto">Real-time GPS tracking and location monitoring of deployed personnel (Map Integration Placeholder).</p>
              <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto mb-5">
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-200">
                  <div className="text-xl font-bold text-emerald-600">{String(metrics.onDutyGuards?.value ?? 0)}</div>
                  <div className="text-xs text-slate-500">On Duty</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-slate-200">
                  <div className="text-xl font-bold text-blue-600">{String(metrics.totalClients?.value ?? 0)}</div>
                  <div className="text-xs text-slate-500">Active Sites</div>
                </div>
              </div>
              <button className="btn-primary py-2.5 px-5 text-sm">
                <Activity className="w-4 h-4 mr-2" />
                Launch Interactive Map
              </button>
            </div>
          </div>
        </div>

        {/* Firebase Data Section (for diagnostics and overview) */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 md:p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 flex items-center space-x-2">
                <Database className="w-5 h-5 text-slate-700" />
                <span>Live Firebase Data Overview</span>
              </h3>
              <p className="text-sm text-slate-600">Record counts from Firestore collections.</p>
            </div>
            <div className="flex items-center space-x-2">
              {firebaseConnected ? (
                <>
                  <Wifi className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs text-emerald-600 font-medium">Connected</span>
                </>
              ) : (
                <>
                  <WifiOff className="w-4 h-4 text-red-500" />
                  <span className="text-xs text-red-600 font-medium">
                    {firebaseLoading ? 'Connecting...' : 'Offline'}
                  </span>
                </>
              )}
            </div>
          </div>

          {firebaseLoading && !firebaseConnected && !error ? ( // Show loading only if actively trying and no error yet
            <div className="text-center py-10">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600 mx-auto mb-3" />
              <p className="text-sm text-slate-600">Connecting to Firebase...</p>
            </div>
          ) : firebaseConnected ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                { name: 'Guards', count: firebaseData.guards.length, icon: Users, color: 'blue' },
                { name: 'Companies', count: firebaseData.companies.length, icon: Building, color: 'purple' },
                { name: 'Check-in Logs', count: firebaseData.checkinLogs.length, icon: Shield, color: 'emerald' },
                { name: 'Patrol Assign.', count: firebaseData.patrolAssignments.length, icon: Clock, color: 'yellow' },
                { name: 'Alert Logs', count: firebaseData.alertLogs.length, icon: AlertTriangle, color: 'red' },
                { name: 'Checkpoints', count: firebaseData.checkpoints.length, icon: MapPin, color: 'indigo' },
                { name: 'Posts', count: firebaseData.posts.length, icon: FileText, color: 'teal' },
                { name: 'Users', count: firebaseData.users.length, icon: UserCheck, color: 'pink' },
              ].map(item => {
                const IconComp = item.icon;
                return (
                  <div key={item.name} className={`bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-4 rounded-lg border border-${item.color}-200 shadow-sm`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className={`font-semibold text-sm text-${item.color}-800`}>{item.name}</h4>
                      <IconComp className={`w-5 h-5 text-${item.color}-600`} />
                    </div>
                    <div className={`text-2xl font-bold text-${item.color}-700`}>{item.count}</div>
                    <p className={`text-xs text-${item.color}-600`}>Total records</p>
                  </div>
                );
              })}
            </div>
          ) : ( // Not connected and not loading (implies error or initial demo state)
             <div className="text-center py-10 bg-slate-50 rounded-lg">
                <Database className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h4 className="text-md font-medium text-slate-800 mb-1">
                    {error ? "Firebase Connection Failed" : "Firebase Not Connected"}
                </h4>
                <p className="text-sm text-slate-600 mb-3">
                    {error ? "Unable to fetch live data due to an error." : "Displaying demo information."}
                </p>
                {error && ( // Show troubleshooting only if there was an explicit error
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 max-w-md mx-auto text-left">
                    <h5 className="font-medium text-blue-800 text-xs mb-1">Troubleshooting Tips:</h5>
                    <ul className="text-xs text-blue-700 list-disc list-inside space-y-0.5">
                        <li>Ensure Firebase config in <code className="bg-blue-100 text-blue-900 px-1 rounded text-xs">src/config/firebase.js</code> is correct.</li>
                        <li>Verify Firestore rules allow read access.</li>
                        <li>Check browser console for specific errors detailed in the red banner above.</li>
                    </ul>
                    </div>
                )}
            </div>
          )}
        </div>
      </div> {/* End max-w-7xl */}
    </div> /* End min-h-screen */
  );
};

export default Dashboard;