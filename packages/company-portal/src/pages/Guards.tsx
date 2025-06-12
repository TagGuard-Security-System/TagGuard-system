import React, { useState, useEffect } from 'react';
import { Card, Button } from '@security-guard/shared';
import { db } from '../config/firebase'; // Firebase db instance
import { collection, addDoc, serverTimestamp, getDocs, onSnapshot, doc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';import { UserPlus, Edit3, Trash2, Search, Filter as FilterIcon, ChevronDown, ChevronUp, User as UserIcon, ShieldCheck, Phone, Mail, CalendarDays, Activity, ListChecks, Briefcase, PlusCircle, XCircle, UsersIcon, StarIcon } from 'lucide-react';

// Interface matching Firestore Guard structure (and some UI additions)
interface Guard {
  id: string; // Firestore document ID
  full_name: string;
  force_number: string;
  photo_url?: string;
  phone_number: string;
  email?: string;
  national_id?: string;
  status: 'active' | 'inactive' | 'suspended' | 'on_leave' | 'training'; // Matches Firestore schema
  assigned_posts?: string[]; // Array of Post IDs
  certified: boolean;
  registered_by?: string; // User ID
  // UI specific fields that can be derived or part of a sub-collection (e.g., assignments)
  current_assignment_name?: string; // e.g., "Downtown Mall"
  current_shift?: string; // e.g., "Day Shift (8AM-4PM)"
  rating?: number; // e.g., 4.8
  experience_years?: number; // e.g., 3
  certifications_list?: string[]; // e.g., ["Basic Security", "First Aid"]
  last_check_in_time?: string; // e.g., "2 hours ago" or ISO string
  avatar_initials?: string; // e.g., "JS"

  created_at?: any; // Firestore Timestamp
  updated_at?: any; // Firestore Timestamp
}


const Guards: React.FC = () => {
  const [guards, setGuards] = useState<Guard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [selectedTab, setSelectedTab] = useState('all'); // 'all', 'active', 'inactive', 'training', etc.
  const [searchTerm, setSearchTerm] = useState('');
  const [assignmentFilter, setAssignmentFilter] = useState(''); // Example filter
  const [sortBy, setSortBy] = useState('full_name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const [showAddGuardModal, setShowAddGuardModal] = useState(false);
  const [editingGuard, setEditingGuard] = useState<Guard | null>(null);

  const initialNewGuardState: Omit<Guard, 'id' | 'created_at' | 'updated_at' | 'avatar_initials' | 'assigned_posts' | 'current_assignment_name' | 'current_shift' | 'last_check_in_time' | 'certifications_list'> = {
    full_name: "",
    force_number: "",
    phone_number: "",
    email: "",
    national_id: "",
    status: 'active',
    certified: false,
    rating: 4.0,
    experience_years: 1,
    // photo_url is optional
    // registered_by would come from auth context
  };
  const [newGuardData, setNewGuardData] = useState(initialNewGuardState);

  // Fetch guards from Firestore
  useEffect(() => {
    setIsLoading(true);
    const guardsCollectionRef = collection(db, "Guards");
    let q = query(guardsCollectionRef, orderBy(sortBy, sortOrder));

    // Apply tab filter if not 'all'
    if (selectedTab !== 'all') {
      q = query(q, where("status", "==", selectedTab));
    }

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedGuards: Guard[] = snapshot.docs.map(doc => {
        const data = doc.data();
        // Map Firestore data to Guard interface
        // This is where you might fetch related data for assignment_name, shift, etc. if they are in different collections
        // For now, assuming they might be directly on the guard doc or derived later
        return {
          id: doc.id,
          full_name: data.full_name || "Unknown Name",
          force_number: data.force_number || "N/A",
          photo_url: data.photo_url,
          phone_number: data.phone_number || "N/A",
          email: data.email,
          national_id: data.national_id,
          status: data.status || 'inactive',
          assigned_posts: data.assigned_posts || [],
          certified: data.certified || false,
          registered_by: data.registered_by,
          current_assignment_name: data.current_assignment_name || "Unassigned", // Placeholder
          current_shift: data.current_shift || "N/A", // Placeholder
          rating: data.rating,
          experience_years: data.experience_years,
          certifications_list: data.certifications_list || [], // Placeholder
          last_check_in_time: data.last_check_in_time ? new Date(data.last_check_in_time.seconds * 1000).toLocaleString() : "N/A", // Example if timestamp
          avatar_initials: data.full_name ? data.full_name.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase() : 'N/A',
          created_at: data.created_at,
          updated_at: data.updated_at,
        } as Guard;
      });
      setGuards(fetchedGuards);
      setIsLoading(false);
      setError(null);
    }, (err) => {
      console.error("Error fetching guards: ", err);
      setError("Failed to fetch guards. Please try again.");
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [sortBy, sortOrder, selectedTab]);

  const tabs = [
    { id: 'all', label: 'All Guards', icon: <UsersIcon className="w-4 h-4" /> },
    { id: 'active', label: 'Active', icon: <ShieldCheck className="w-4 h-4 text-emerald-500" /> },
    { id: 'training', label: 'In Training', icon: <Briefcase className="w-4 h-4 text-blue-500" /> },
    { id: 'inactive', label: 'Inactive', icon: <UserIcon className="w-4 h-4 text-slate-500" /> },
    { id: 'on_leave', label: 'On Leave', icon: <CalendarDays className="w-4 h-4 text-purple-500" /> },
  ];

  const getStatusColor = (status: Guard['status']) => {
    switch (status) {
      case 'active': return 'status-on-duty'; // Tailwind component class
      case 'inactive': return 'status-off-duty';
      case 'suspended': return 'badge-danger'; // Tailwind component class
      case 'on_leave': return 'badge-info';
      case 'training': return 'status-training';
      default: return 'status-off-duty';
    }
  };

  const getStatusIcon = (status: Guard['status']) => {
    switch (status) {
      case 'active': return '🟢';
      case 'inactive': return '⚫';
      case 'suspended': return '🔴';
      case 'on_leave': return '🟣';
      case 'training': return '🔵';
      default: return '⚫';
    }
  };

  const getRatingStars = (rating?: number) => {
    if (typeof rating !== 'number' || isNaN(rating)) return 'N/A';
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setNewGuardData(prev => ({ ...prev, [name]: checked }));
    } else {
      setNewGuardData(prev => ({ ...prev, [name]: name === 'rating' || name === 'experience_years' ? parseFloat(value) : value }));
    }
  };

  const handleSubmitGuard = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGuardData.full_name || !newGuardData.force_number) {
      alert("Guard full name and force number are required.");
      return;
    }

    const guardPayload: Omit<Guard, 'id' | 'avatar_initials' | 'assigned_posts' | 'current_assignment_name' | 'current_shift' | 'last_check_in_time' | 'certifications_list'> & { created_at?: any, updated_at?: any } = {
        ...newGuardData,
        // Ensure numeric fields are numbers
        rating: typeof newGuardData.rating === 'string' ? parseFloat(newGuardData.rating) : newGuardData.rating,
        experience_years: typeof newGuardData.experience_years === 'string' ? parseInt(newGuardData.experience_years) : newGuardData.experience_years,
    };
     // Remove photo_url if empty string as it's optional
     if (!guardPayload.photo_url) delete (guardPayload as any).photo_url;


    try {
      if (editingGuard) {
        const guardDocRef = doc(db, "Guards", editingGuard.id);
        await updateDoc(guardDocRef, { ...guardPayload, updated_at: serverTimestamp() });
        alert("Guard updated successfully!");
        setEditingGuard(null);
      } else {
        await addDoc(collection(db, "Guards"), { ...guardPayload, created_at: serverTimestamp(), updated_at: serverTimestamp() });
        alert("Guard added successfully!");
      }
      setShowAddGuardModal(false);
      setNewGuardData(initialNewGuardState);
    } catch (err) {
      console.error("Error saving guard: ", err);
      alert(`Failed to save guard. Error: ${(err as Error).message}`);
    }
  };

  const handleEditGuard = (guard: Guard) => {
    setEditingGuard(guard);
    setNewGuardData({ // Pre-fill form
        full_name: guard.full_name,
        force_number: guard.force_number,
        phone_number: guard.phone_number,
        email: guard.email || "",
        national_id: guard.national_id || "",
        status: guard.status,
        certified: guard.certified,
        rating: guard.rating || 4.0,
        experience_years: guard.experience_years || 1,
        photo_url: guard.photo_url || "",
        registered_by: guard.registered_by
    });
    setShowAddGuardModal(true);
  };

  const handleDeleteGuard = async (guardId: string) => {
    if (window.confirm("Are you sure you want to delete this guard? This action cannot be undone.")) {
      try {
        await deleteDoc(doc(db, "Guards", guardId));
        alert("Guard deleted successfully.");
      } catch (err) {
        console.error("Error deleting guard: ", err);
        alert("Failed to delete guard.");
      }
    }
  };

  const openAddModal = () => {
    setEditingGuard(null);
    setNewGuardData(initialNewGuardState);
    setShowAddGuardModal(true);
  };

  const filteredGuards = guards.filter(guard => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = guard.full_name.toLowerCase().includes(searchLower) ||
                          guard.force_number.toLowerCase().includes(searchLower) ||
                          (guard.current_assignment_name && guard.current_assignment_name.toLowerCase().includes(searchLower)) ||
                          (guard.email && guard.email.toLowerCase().includes(searchLower));
    
    // Assignment filter (example, can be more complex)
    const matchesAssignment = !assignmentFilter || (guard.current_assignment_name && guard.current_assignment_name.toLowerCase().includes(assignmentFilter.toLowerCase()));
    
    return matchesSearch && matchesAssignment;
  });

  // Summary Stats
  const guardsOnDuty = guards.filter(g => g.status === 'active' && g.current_assignment_name !== 'Unassigned').length; // Approximation
  const availableForAssignment = guards.filter(g => g.status === 'active' && g.current_assignment_name === 'Unassigned').length;
  const inTrainingCount = guards.filter(g => g.status === 'training').length;
  const averageGuardRating = guards.length > 0 ? (guards.reduce((sum, g) => sum + (g.rating || 0), 0) / guards.filter(g => g.rating).length) : 0;
  
  // Create a list of unique assignment names for the filter dropdown
  const uniqueAssignments = Array.from(new Set(guards.map(g => g.current_assignment_name).filter(Boolean)));


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-2 text-slate-600">Loading guards...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-600 bg-red-100 border border-red-300 rounded-md">{error}</div>;
  }

  return (
    <div className="space-y-8 p-4 md:p-6">
      <div className="section-header">
        <div>
          <h2 className="heading-primary text-gradient">Guard Management</h2>
          <p className="text-muted">Manage your security personnel and assignments</p>
        </div>
        <div className="flex gap-3">
          {/* <button className="btn-secondary">
            <ListChecks className="w-4 h-4 mr-2" /> Import Guards
          </button> */}
          <button className="btn-primary" onClick={openAddModal}>
            <UserPlus className="w-5 h-5 mr-2" /> Add New Guard
          </button>
        </div>
      </div>

      <div className="card-professional !p-0">
        <div className="border-b border-slate-200">
          <nav className="flex space-x-2 sm:space-x-4 px-3 sm:px-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`tab-professional ${selectedTab === tab.id ? 'active' : ''}`}
              >
                <span className="flex items-center space-x-2">
                  {tab.icon}
                  <span>{tab.label}</span>
                  {tab.id !== 'all' && (
                     <span className={`badge-professional text-xs ${selectedTab === tab.id ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
                        {guards.filter(g => g.status === tab.id).length}
                     </span>
                  )}
                   {tab.id === 'all' && (
                     <span className={`badge-professional text-xs ${selectedTab === tab.id ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-700'}`}>
                        {guards.length}
                     </span>
                  )}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="filter-bar">
        <div className="filter-controls flex-wrap">
          <div className="flex-grow search-professional">
            <input
              type="text"
              placeholder="Search guards by name, force #, email, assignment..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-professional !pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            <select 
                className="select-professional" 
                value={assignmentFilter} 
                onChange={(e) => setAssignmentFilter(e.target.value)}
            >
                <option value="">All Assignments</option>
                {uniqueAssignments.map(assignment => (
                    <option key={assignment} value={assignment}>{assignment}</option>
                ))}
                <option value="Unassigned">Unassigned</option>
            </select>
            <select 
                className="select-professional" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="full_name">Sort by Name</option>
                <option value="status">Sort by Status</option>
                <option value="rating">Sort by Rating</option>
                <option value="experience_years">Sort by Experience</option>
            </select>
            <button 
                onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
                className="btn-secondary px-3"
                title={`Sort ${sortOrder === 'asc' ? 'Descending' : 'Ascending'}`}
            >
                {sortOrder === 'asc' ? <ChevronUp className="w-5 h-5"/> : <ChevronDown className="w-5 h-5"/>}
            </button>
          </div>
        </div>
      </div>

      {filteredGuards.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredGuards.map((guard) => (
            <div key={guard.id} className="card-professional hover-lift">
              <div className="card-spacing">
                <div className="flex items-start space-x-4">
                  <div className={`avatar-professional w-16 h-16 text-xl ${guard.photo_url ? 'p-0 overflow-hidden' : ''}`}>
                    {guard.photo_url ? <img src={guard.photo_url} alt={guard.full_name} className="w-full h-full object-cover"/> : guard.avatar_initials}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">{guard.full_name}</h3>
                        <p className="text-sm text-slate-500">{guard.force_number}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-lg" title={guard.status}>{getStatusIcon(guard.status)}</span>
                        <span className={`badge-professional ${getStatusColor(guard.status)}`}>
                          {guard.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm">
                      <div className="data-item !bg-transparent !px-0 !py-1">
                        <span className="data-label flex items-center"><Briefcase className="w-3.5 h-3.5 mr-1.5 text-slate-400"/>Assignment:</span>
                        <span className="data-value">{guard.current_assignment_name || 'N/A'}</span>
                      </div>
                      <div className="data-item !bg-transparent !px-0 !py-1">
                        <span className="data-label flex items-center"><CalendarDays className="w-3.5 h-3.5 mr-1.5 text-slate-400"/>Shift:</span>
                        <span className="text-slate-700">{guard.current_shift || 'N/A'}</span>
                      </div>
                       <div className="data-item !bg-transparent !px-0 !py-1">
                        <span className="data-label flex items-center"><Activity className="w-3.5 h-3.5 mr-1.5 text-slate-400"/>Experience:</span>
                        <span className="text-slate-700">{guard.experience_years || 0} years</span>
                      </div>
                      <div className="data-item !bg-transparent !px-0 !py-1">
                        <span className="data-label flex items-center"><StarIcon className="w-3.5 h-3.5 mr-1.5 text-slate-400"/>Rating:</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-amber-400">{getRatingStars(guard.rating)}</span>
                          <span className="font-medium text-slate-700">{guard.rating?.toFixed(1) || 'N/A'}/5.0</span>
                        </div>
                      </div>
                      {/* <div className="data-item !bg-transparent !px-0 !py-1">
                        <span className="data-label flex items-center"><Activity className="w-3.5 h-3.5 mr-1.5 text-slate-400"/>Last Check-in:</span>
                        <span className="text-slate-700">{guard.last_check_in_time || 'N/A'}</span>
                      </div> */}
                    </div>

                    {guard.certifications_list && guard.certifications_list.length > 0 && (
                        <div className="mb-4">
                            <p className="text-xs font-medium text-slate-600 mb-1.5 flex items-center"><ListChecks className="w-3.5 h-3.5 mr-1 text-slate-400"/>Certifications:</p>
                            <div className="flex flex-wrap gap-1.5">
                            {guard.certifications_list.map((cert, index) => (
                                <span key={index} className="badge-primary text-xs">
                                {cert}
                                </span>
                            ))}
                            </div>
                        </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
                      <button onClick={() => handleEditGuard(guard)} className="btn-secondary text-xs">
                        <Edit3 className="w-3 h-3 mr-1" /> Edit Profile
                      </button>
                      <a href={`tel:${guard.phone_number}`} className="btn-secondary text-xs">
                        <Phone className="w-3 h-3 mr-1" /> Contact
                      </a>
                      {/* {guard.status === 'active' && guard.current_assignment_name === 'Unassigned' && (
                        <button className="btn-primary text-xs">
                          <Briefcase className="w-3 h-3 mr-1" /> Assign
                        </button>
                      )} */}
                      <button onClick={() => handleDeleteGuard(guard.id)} className="btn-danger text-xs ml-auto">
                        <Trash2 className="w-3 h-3 mr-1" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
         <div className="text-center py-12 text-slate-500">
            <UsersIcon className="w-16 h-16 mx-auto mb-4 text-slate-300"/>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No Guards Found</h3>
            <p className="mb-4">
                {searchTerm || assignmentFilter || selectedTab !== 'all' ? "Try adjusting your search or filter criteria." : "Get started by adding your first guard."}
            </p>
            {!searchTerm && !assignmentFilter && selectedTab === 'all' && (
                <button className="btn-primary" onClick={openAddModal}>
                    <UserPlus className="w-5 h-5 mr-2" />
                    Add New Guard
                </button>
            )}
        </div>
      )}

      {/* Summary Footer */}
      <div className="summary-card bg-gradient-to-br from-blue-50 to-emerald-50 border-blue-200">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-slate-900">Guard Force Summary</h3>
          <p className="text-slate-600">Current operational status and performance metrics</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="stat-item">
            <div className="stat-value success">{guardsOnDuty}</div>
            <div className="stat-label">Currently On Duty</div>
          </div>
          <div className="stat-item">
            <div className="stat-value primary">{availableForAssignment}</div>
            <div className="stat-label">Available for Assignment</div>
          </div>
          <div className="stat-item">
            <div className="stat-value warning">{inTrainingCount}</div>
            <div className="stat-label">In Training</div>
          </div>
          <div className="stat-item">
            <div className="stat-value info">{averageGuardRating > 0 ? averageGuardRating.toFixed(1) : 'N/A'}</div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Add/Edit Guard Modal */}
      {showAddGuardModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                 <h3 className="text-2xl font-semibold text-slate-800">{editingGuard ? "Edit Guard" : "Add New Guard"}</h3>
                <button onClick={() => setShowAddGuardModal(false)} className="text-slate-400 hover:text-slate-600">
                    <XCircle className="w-7 h-7" />
                </button>
            </div>
            <form onSubmit={handleSubmitGuard} className="space-y-4">
              <div>
                <label htmlFor="full_name" className="block text-sm font-medium text-slate-700 mb-1">Full Name*</label>
                <input type="text" name="full_name" id="full_name" value={newGuardData.full_name} onChange={handleInputChange} required className="input-professional" />
              </div>
              <div>
                <label htmlFor="force_number" className="block text-sm font-medium text-slate-700 mb-1">Force Number*</label>
                <input type="text" name="force_number" id="force_number" value={newGuardData.force_number} onChange={handleInputChange} required className="input-professional" />
              </div>
              <div>
                <label htmlFor="phone_number" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input type="tel" name="phone_number" id="phone_number" value={newGuardData.phone_number} onChange={handleInputChange} className="input-professional" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                <input type="email" name="email" id="email" value={newGuardData.email} onChange={handleInputChange} className="input-professional" />
              </div>
               <div>
                <label htmlFor="national_id" className="block text-sm font-medium text-slate-700 mb-1">National ID</label>
                <input type="text" name="national_id" id="national_id" value={newGuardData.national_id} onChange={handleInputChange} className="input-professional" />
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select name="status" id="status" value={newGuardData.status} onChange={handleInputChange} className="select-professional">
                  {(['active', 'inactive', 'suspended', 'on_leave', 'training'] as Guard['status'][]).map(s => <option key={s} value={s}>{s.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="photo_url" className="block text-sm font-medium text-slate-700 mb-1">Photo URL (Optional)</label>
                <input type="url" name="photo_url" id="photo_url" value={newGuardData.photo_url} onChange={handleInputChange} className="input-professional" placeholder="https://example.com/photo.jpg"/>
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-slate-700 mb-1">Rating (1-5)</label>
                <input type="number" name="rating" id="rating" value={newGuardData.rating} onChange={handleInputChange} className="input-professional" min="1" max="5" step="0.1"/>
              </div>
              <div>
                <label htmlFor="experience_years" className="block text-sm font-medium text-slate-700 mb-1">Experience (Years)</label>
                <input type="number" name="experience_years" id="experience_years" value={newGuardData.experience_years} onChange={handleInputChange} className="input-professional" min="0" step="1"/>
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" name="certified" id="certified" checked={newGuardData.certified} onChange={handleInputChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded" />
                <label htmlFor="certified" className="ml-2 block text-sm text-slate-700">Certified</label>
              </div>
              
              <div className="flex justify-end space-x-3 pt-6">
                <button type="button" onClick={() => setShowAddGuardModal(false)} className="btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingGuard ? "Save Changes" : "Add Guard"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guards;