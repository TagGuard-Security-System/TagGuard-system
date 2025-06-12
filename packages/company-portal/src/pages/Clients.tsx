import React, { useState, useEffect } from 'react';
import { Card, Button } from '@security-guard/shared';
import { db } from '../config/firebase'; // Firebase db instance
import { collection, addDoc, serverTimestamp, getDocs, onSnapshot, doc, updateDoc, deleteDoc, query, where, orderBy } from 'firebase/firestore';
import { Trash2, Edit3, Eye, PlusCircle, XCircle, Search, Filter as FilterIcon, ChevronDown, ChevronUp, Briefcase, User, Mail, Phone as PhoneIcon, MapPin as MapPinIcon, DollarSign, CalendarDays, Star as StarIcon, Users as UsersIcon, FileText as FileTextIcon } from 'lucide-react';

// Interface matching Firestore Company structure (and some UI additions)
interface Client {
  id: string; // Firestore document ID
  name: string;
  client_type?: string; // e.g., 'retail', 'corporate' - maps to industry
  contact_info: {
    email: string;
    phone: string;
    person?: string; // Contact person's name
  };
  address: string;
  requested_guards_count?: number; // derived or stored
  active_posts_count?: number;    // derived or stored
  admin_id?: string; // User who created/manages this client

  // Fields from mock/UI that can be stored
  status: 'Active' | 'Pending Renewal' | 'Expired' | 'Suspended' | 'New';
  contract_type?: string;
  monthly_value_str?: string; // e.g., "$15,200/month"
  industry?: string;
  rating?: number;
  start_date_str?: string; // e.g., "2023-06-15"
  avatar_initials?: string; // e.g., "MSM"

  created_at?: any; // Firestore Timestamp
  updated_at?: any; // Firestore Timestamp
}

const Clients: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [industryFilter, setIndustryFilter] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);

  const initialNewClientState: Omit<Client, 'id' | 'created_at' | 'updated_at' | 'avatar_initials' | 'requested_guards_count' | 'active_posts_count' > = {
    name: '',
    contact_info: { person: '', email: '', phone: '' },
    address: '',
    contract_type: 'Standard Security Package',
    status: 'New',
    monthly_value_str: '$5000/month',
    industry: 'Other',
    rating: 4.0,
    start_date_str: new Date().toISOString().split('T')[0],
    admin_id: 'system_admin' // Placeholder
  };
  const [newClientData, setNewClientData] = useState(initialNewClientState);

  // Fetch clients from Firestore
  useEffect(() => {
    setIsLoading(true);
    const clientsCollectionRef = collection(db, "Companies");
    // Example: Order by name. Add more complex queries if needed.
    const q = query(clientsCollectionRef, orderBy(sortBy, sortOrder));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedClients: Client[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name || "Unknown Name",
          client_type: data.client_type,
          contact_info: data.contact_info || { email: '', phone: '', person: ''},
          address: data.address || "",
          status: data.status || 'Active',
          contract_type: data.contract_type,
          monthly_value_str: data.monthly_value_str,
          industry: data.industry,
          rating: data.rating,
          start_date_str: data.start_date_str,
          avatar_initials: data.name ? data.name.split(' ').map((n:string) => n[0]).join('').substring(0,3).toUpperCase() : 'N/A',
          created_at: data.created_at,
          updated_at: data.updated_at,
        } as Client;
      });
      setClients(fetchedClients);
      setIsLoading(false);
      setError(null);
    }, (err) => {
      console.error("Error fetching clients: ", err);
      setError("Failed to fetch clients. Please try again.");
      setIsLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener on component unmount
  }, [sortBy, sortOrder]);


  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'badge-success';
      case 'Pending Renewal': return 'badge-warning';
      case 'Expired': return 'badge-danger';
      case 'Suspended': return 'badge-professional'; // Assuming badge-professional is a neutral/greyish one
      case 'New': return 'badge-info';
      default: return 'badge-professional';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return '✅';
      case 'Pending Renewal': return '⏳';
      case 'Expired': return '❌';
      case 'Suspended': return '⏸️';
      case 'New': return '🌟';
      default: return '❓';
    }
  };

  const getIndustryIcon = (industry?: string) => {
    switch (industry?.toLowerCase()) {
      case 'retail': return '🏪';
      case 'technology': return '💻';
      case 'industrial': return '🏭';
      case 'corporate': return '🏢';
      default: return '🏢';
    }
  };
  
  const getRatingStars = (rating?: number) => {
    if (typeof rating !== 'number' || isNaN(rating)) return 'N/A';
    return '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "contact_person" || name === "contact_email" || name === "contact_phone") {
        const field = name.split('_')[1]; // person, email, or phone
        setNewClientData(prev => ({
            ...prev,
            contact_info: {
                ...prev.contact_info,
                [field]: value
            }
        }));
    } else {
        setNewClientData(prev => ({ ...prev, [name]: name === 'rating' ? parseFloat(value) : value }));
    }
  };

  const handleSubmitClient = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientData.name || !newClientData.contact_info.email) {
      alert("Client name and email are required.");
      return;
    }
    
    const clientPayload: Omit<Client, 'id' | 'avatar_initials'> & { created_at?: any, updated_at?: any } = {
        ...newClientData,
        client_type: newClientData.industry ? newClientData.industry.toLowerCase() : 'company',
        // Ensure rating is a number
        rating: typeof newClientData.rating === 'string' ? parseFloat(newClientData.rating) : newClientData.rating,
    };

    try {
      if (editingClient) {
        // Update existing client
        const clientDocRef = doc(db, "Companies", editingClient.id);
        await updateDoc(clientDocRef, { ...clientPayload, updated_at: serverTimestamp() });
        alert("Client updated successfully!");
        setEditingClient(null);
      } else {
        // Add new client
        await addDoc(collection(db, "Companies"), { ...clientPayload, created_at: serverTimestamp(), updated_at: serverTimestamp() });
        alert("Client added successfully!");
      }
      setShowAddClientModal(false);
      setNewClientData(initialNewClientState); // Reset form
    } catch (err) {
      console.error("Error saving client to Firestore: ", err);
      alert(`Failed to save client. See console for details. Error: ${(err as Error).message}`);
    }
  };

  const handleEditClient = (client: Client) => {
    setEditingClient(client);
    setNewClientData({ // Pre-fill form with client data
        name: client.name,
        contact_info: { 
            person: client.contact_info.person || '',
            email: client.contact_info.email || '',
            phone: client.contact_info.phone || '',
        },
        address: client.address || '',
        status: client.status || 'Active',
        contract_type: client.contract_type || '',
        monthly_value_str: client.monthly_value_str || '',
        industry: client.industry || '',
        rating: client.rating || 4.0,
        start_date_str: client.start_date_str || '',
        admin_id: client.admin_id || 'system_admin',
        client_type: client.client_type,
    });
    setShowAddClientModal(true);
  };

  const handleDeleteClient = async (clientId: string) => {
    if (window.confirm("Are you sure you want to delete this client? This action cannot be undone.")) {
      try {
        await deleteDoc(doc(db, "Companies", clientId));
        alert("Client deleted successfully.");
        // The onSnapshot listener will automatically update the UI.
      } catch (err) {
        console.error("Error deleting client: ", err);
        alert("Failed to delete client. See console for details.");
      }
    }
  };

  const openAddModal = () => {
    setEditingClient(null);
    setNewClientData(initialNewClientState);
    setShowAddClientModal(true);
  };

  const filteredClients = clients.filter(client => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = client.name.toLowerCase().includes(searchLower) ||
                          (client.contact_info.person && client.contact_info.person.toLowerCase().includes(searchLower)) ||
                          client.contact_info.email.toLowerCase().includes(searchLower) ||
                          (client.industry && client.industry.toLowerCase().includes(searchLower));
    const matchesStatus = !statusFilter || client.status === statusFilter;
    const matchesIndustry = !industryFilter || (client.industry && client.industry.toLowerCase() === industryFilter.toLowerCase());
    return matchesSearch && matchesStatus && matchesIndustry;
  });

  // Calculate summary stats
  const totalRevenue = clients.reduce((sum, client) => {
    const value = client.monthly_value_str ? parseInt(client.monthly_value_str.replace(/[$,\/month]/g, '')) : 0;
    return sum + (isNaN(value) ? 0 : value);
  }, 0);
  const activeClientsCount = clients.filter(c => c.status === 'Active').length;
  // const totalGuards = clients.reduce((sum, client) => sum + (client.requested_guards_count || 0), 0); // Need this data in Firestore
  const averageRating = clients.length > 0 ? (clients.reduce((sum, client) => sum + (client.rating || 0), 0) / clients.filter(c => c.rating).length) : 0;
  const uniqueIndustries = Array.from(new Set(clients.map(c => c.industry).filter(Boolean)));


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <p className="mt-2 text-slate-600">Loading clients...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-red-600 bg-red-100 border border-red-300 rounded-md">{error}</div>;
  }

  return (
    <div className="space-y-8 p-4 md:p-6">
      {/* Enhanced Header */}
      <div className="section-header">
        <div>
          <h2 className="heading-primary text-gradient">Client Management</h2>
          <p className="text-muted">Manage client relationships and security contracts</p>
        </div>
        <div className="flex gap-3">
          {/* <button className="btn-secondary">
            <FileTextIcon className="w-4 h-4 mr-2" />
            Export Clients
          </button> */}
          <button className="btn-primary" onClick={openAddModal}>
            <PlusCircle className="w-5 h-5 mr-2" />
            Add New Client
          </button>
        </div>
      </div>

      {/* Enhanced Summary Statistics */}
      <div className="stats-grid">
        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Total Clients</p>
              <p className="stat-value primary">{clients.length}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
              <Briefcase className="text-white text-xl" />
            </div>
          </div>
        </div>
        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Active Contracts</p>
              <p className="stat-value success">{activeClientsCount}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
              <FileTextIcon className="text-white text-xl" />
            </div>
          </div>
          {clients.length > 0 && 
            <div className="mt-2">
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${(activeClientsCount / clients.length) * 100}%` }}></div>
                </div>
                <p className="text-xs text-slate-500 mt-1">{Math.round((activeClientsCount / clients.length) * 100)}% active rate</p>
            </div>
          }
        </div>
        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Monthly Revenue</p>
              <p className="stat-value purple">${totalRevenue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <DollarSign className="text-white text-xl" />
            </div>
          </div>
        </div>
        <div className="metric-card hover-lift">
          <div className="flex items-center justify-between">
            <div>
              <p className="metric-label">Average Rating</p>
              <p className="stat-value warning">{averageRating > 0 ? averageRating.toFixed(1) : 'N/A'}</p>
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <StarIcon className="text-white text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Search and Filters */}
      <div className="filter-bar">
        <div className="filter-controls flex-wrap">
          <div className="flex-grow search-professional">
            <input
              type="text"
              placeholder="Search clients by name, contact, email, industry..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-professional !pl-10"
            />
             <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
          </div>
          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            <select
              className="select-professional"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Statuses</option>
              {['New', 'Active', 'Pending Renewal', 'Suspended', 'Expired'].map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <select
                className="select-professional"
                value={industryFilter}
                onChange={(e) => setIndustryFilter(e.target.value)}
            >
                <option value="">All Industries</option>
                {uniqueIndustries.map(industry => (
                    <option key={industry} value={industry}>{industry}</option>
                ))}
            </select>
            <select 
                className="select-professional" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option value="name">Sort by Name</option>
                <option value="status">Sort by Status</option>
                <option value="rating">Sort by Rating</option>
                <option value="created_at">Sort by Date Added</option>
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

      {/* Enhanced Clients Grid */}
      {filteredClients.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredClients.map((client) => (
            <div key={client.id} className="card-professional hover-lift">
              <div className="card-spacing">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="avatar-professional w-12 h-12 text-base">
                      <span>{client.avatar_initials}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{client.name}</h3>
                      <div className="flex items-center space-x-2">
                        <span>{getIndustryIcon(client.industry)}</span>
                        <p className="text-slate-600">{client.industry || 'N/A'}</p>
                      </div>
                      <p className="text-sm text-slate-500 flex items-center">
                        <MapPinIcon className="w-3 h-3 mr-1 text-slate-400"/>
                        {client.address || 'N/A'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm">{getStatusIcon(client.status)}</span>
                    <span className={`badge-professional ${getStatusColor(client.status)}`}>
                      {client.status}
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 mb-4">
                  <h4 className="font-medium text-slate-900 mb-3 flex items-center space-x-2">
                    <User className="w-4 h-4 text-slate-600"/>
                    <span>Contact Information</span>
                  </h4>
                  <div className="space-y-2">
                    {client.contact_info.person && 
                      <div className="data-item !bg-transparent !px-0 !py-1">
                        <span className="data-label">Contact:</span>
                        <span className="data-value">{client.contact_info.person}</span>
                      </div>
                    }
                    <div className="data-item !bg-transparent !px-0 !py-1">
                      <span className="data-label">Email:</span>
                      <a href={`mailto:${client.contact_info.email}`} className="data-value text-blue-600 hover:underline">{client.contact_info.email}</a>
                    </div>
                    <div className="data-item !bg-transparent !px-0 !py-1">
                      <span className="data-label">Phone:</span>
                      <span className="data-value">{client.contact_info.phone || 'N/A'}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4 text-sm">
                  <div className="data-item !bg-transparent !px-0 !py-1">
                    <span className="data-label">Contract:</span>
                    <span className="font-medium text-slate-800">{client.contract_type || 'N/A'}</span>
                  </div>
                  <div className="data-item !bg-transparent !px-0 !py-1">
                    <span className="data-label">Value:</span>
                    <span className="font-bold text-emerald-600">{client.monthly_value_str || 'N/A'}</span>
                  </div>
                  {/* <div className="data-item !bg-transparent !px-0 !py-1">
                    <span className="data-label">Guards:</span>
                    <span className="flex items-center space-x-1">
                      <span className="font-medium">{client.requested_guards_count || 0}</span>
                      <span className="badge-primary text-xs">guards</span>
                    </span>
                  </div> */}
                  <div className="data-item !bg-transparent !px-0 !py-1">
                    <span className="data-label">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-amber-400">{getRatingStars(client.rating)}</span>
                      <span className="font-medium">{client.rating?.toFixed(1) || 'N/A'}/5.0</span>
                    </div>
                  </div>
                  <div className="data-item !bg-transparent !px-0 !py-1">
                    <span className="data-label">Start Date:</span>
                    <span className="text-slate-700">{client.start_date_str || 'N/A'}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  {/* <button className="btn-secondary text-xs">
                    <Eye className="w-3 h-3 mr-1" /> View Details
                  </button> */}
                  <button onClick={() => handleEditClient(client)} className="btn-secondary text-xs">
                    <Edit3 className="w-3 h-3 mr-1" /> Edit Client
                  </button>
                  {/* <button className="btn-secondary text-xs">
                    <UsersIcon className="w-3 h-3 mr-1" /> View Guards
                  </button> */}
                  <a href={`mailto:${client.contact_info.email}`} className="btn-primary text-xs">
                     <Mail className="w-3 h-3 mr-1" /> Contact
                  </a>
                   <button onClick={() => handleDeleteClient(client.id)} className="btn-danger text-xs ml-auto">
                    <Trash2 className="w-3 h-3 mr-1" /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-slate-500">
            <UsersIcon className="w-16 h-16 mx-auto mb-4 text-slate-300"/>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No Clients Found</h3>
            <p className="mb-4">
                {searchTerm || statusFilter || industryFilter ? "Try adjusting your search or filter criteria." : "Get started by adding your first client."}
            </p>
            {!searchTerm && !statusFilter && !industryFilter && (
                <button className="btn-primary" onClick={openAddModal}>
                    <PlusCircle className="w-5 h-5 mr-2" />
                    Add New Client
                </button>
            )}
        </div>
      )}

      {/* Add/Edit Client Modal */}
      {showAddClientModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white p-6 rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-semibold text-slate-800">{editingClient ? "Edit Client" : "Add New Client"}</h3>
                <button onClick={() => setShowAddClientModal(false)} className="text-slate-400 hover:text-slate-600">
                    <XCircle className="w-7 h-7" />
                </button>
            </div>
            <form onSubmit={handleSubmitClient} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Client Name*</label>
                <input type="text" name="name" id="name" value={newClientData.name} onChange={handleInputChange} required className="input-professional" placeholder="e.g., Acme Corp"/>
              </div>
              <div>
                <label htmlFor="contact_person" className="block text-sm font-medium text-slate-700 mb-1">Contact Person</label>
                <input type="text" name="contact_person" id="contact_person" value={newClientData.contact_info.person} onChange={handleInputChange} className="input-professional" placeholder="e.g., Jane Doe"/>
              </div>
              <div>
                <label htmlFor="contact_email" className="block text-sm font-medium text-slate-700 mb-1">Contact Email*</label>
                <input type="email" name="contact_email" id="contact_email" value={newClientData.contact_info.email} onChange={handleInputChange} required className="input-professional" placeholder="e.g., contact@acme.com"/>
              </div>
              <div>
                <label htmlFor="contact_phone" className="block text-sm font-medium text-slate-700 mb-1">Contact Phone</label>
                <input type="tel" name="contact_phone" id="contact_phone" value={newClientData.contact_info.phone} onChange={handleInputChange} className="input-professional" placeholder="e.g., +1-555-1234"/>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Address</label>
                <input type="text" name="address" id="address" value={newClientData.address} onChange={handleInputChange} className="input-professional" placeholder="e.g., 123 Main St, Anytown"/>
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                <input type="text" name="industry" id="industry" value={newClientData.industry} onChange={handleInputChange} className="input-professional" placeholder="e.g., Retail, Technology"/>
              </div>
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select name="status" id="status" value={newClientData.status} onChange={handleInputChange} className="select-professional">
                    {['New', 'Active', 'Pending Renewal', 'Suspended', 'Expired'].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="contract_type" className="block text-sm font-medium text-slate-700 mb-1">Contract Type</label>
                <input type="text" name="contract_type" id="contract_type" value={newClientData.contract_type} onChange={handleInputChange} className="input-professional" placeholder="e.g., Premium Security Package"/>
              </div>
               <div>
                <label htmlFor="monthly_value_str" className="block text-sm font-medium text-slate-700 mb-1">Monthly Value</label>
                <input type="text" name="monthly_value_str" id="monthly_value_str" value={newClientData.monthly_value_str} onChange={handleInputChange} className="input-professional" placeholder="e.g., $10000/month"/>
              </div>
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-slate-700 mb-1">Rating (1-5)</label>
                <input type="number" name="rating" id="rating" value={newClientData.rating} onChange={handleInputChange} className="input-professional" min="1" max="5" step="0.1" />
              </div>
              <div>
                <label htmlFor="start_date_str" className="block text-sm font-medium text-slate-700 mb-1">Start Date</label>
                <input type="date" name="start_date_str" id="start_date_str" value={newClientData.start_date_str} onChange={handleInputChange} className="input-professional"/>
              </div>
              
              <div className="flex justify-end space-x-3 pt-6">
                <button type="button" onClick={() => setShowAddClientModal(false)} className="btn-secondary">
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  {editingClient ? "Save Changes" : "Add Client"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;