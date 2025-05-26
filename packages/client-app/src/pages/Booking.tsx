import React, { useState } from 'react';
import { Card, Button, Input } from '@security-guard/shared';

const Booking: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');

  const myProperties = [
    { id: 1, name: "Downtown Apartment", address: "123 Main St, Apt 15B", type: "Residential" },
    { id: 2, name: "Office Building", address: "456 Business Ave, Suite 200", type: "Commercial" }
  ];

  const serviceTypes = [
    { 
      id: 'basic', 
      name: 'Basic Security', 
      description: 'Standard patrol and monitoring', 
      price: 25, 
      features: ['Regular patrols', 'Basic monitoring', 'Incident reporting']
    },
    { 
      id: 'premium', 
      name: 'Premium Security', 
      description: 'Enhanced security with additional features', 
      price: 40, 
      features: ['Frequent patrols', 'Real-time monitoring', 'Incident reporting', 'Emergency response']
    },
    { 
      id: 'armed', 
      name: 'Armed Security', 
      description: 'Armed guard for high-risk situations', 
      price: 60, 
      features: ['Armed protection', 'Continuous monitoring', 'Rapid response', 'Threat assessment']
    },
    { 
      id: 'event', 
      name: 'Event Security', 
      description: 'Specialized security for events', 
      price: 35, 
      features: ['Crowd control', 'Access management', 'Event monitoring', 'VIP protection']
    }
  ];

  const durationOptions = [
    { id: '2h', label: '2 Hours', multiplier: 2 },
    { id: '4h', label: '4 Hours', multiplier: 4 },
    { id: '8h', label: '8 Hours', multiplier: 8 },
    { id: '12h', label: '12 Hours', multiplier: 12 },
    { id: '24h', label: '24 Hours', multiplier: 24 },
    { id: 'custom', label: 'Custom Duration', multiplier: 1 }
  ];

  const availableGuards = [
    { 
      id: 1, 
      name: "John Smith", 
      rating: 4.9, 
      experience: "5 years", 
      specialties: ["Residential", "Armed"], 
      availability: "Available",
      hourlyRate: 25
    },
    { 
      id: 2, 
      name: "Maria Garcia", 
      rating: 4.8, 
      experience: "4 years", 
      specialties: ["Commercial", "Event"], 
      availability: "Available",
      hourlyRate: 30
    },
    { 
      id: 3, 
      name: "Ahmed Hassan", 
      rating: 4.7, 
      experience: "6 years", 
      specialties: ["Premium", "Armed"], 
      availability: "Busy until 6 PM",
      hourlyRate: 35
    }
  ];

  const calculatePrice = () => {
    const service = serviceTypes.find(s => s.id === selectedService);
    const duration = durationOptions.find(d => d.id === selectedDuration);
    
    if (service && duration) {
      return service.price * duration.multiplier;
    }
    return 0;
  };

  const selectedServiceType = serviceTypes.find(s => s.id === selectedService);
  const selectedPropertyData = myProperties.find(p => p.id.toString() === selectedProperty);

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Book Security Service</h2>
        <p className="text-gray-600">Schedule professional security guards for your property</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Booking Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Step 1: Select Property */}
          <Card title="Step 1: Select Property" subtitle="Choose which property needs security">
            <div className="space-y-3">
              {myProperties.map((property) => (
                <label key={property.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="property"
                    value={property.id}
                    checked={selectedProperty === property.id.toString()}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{property.name}</p>
                    <p className="text-sm text-gray-600">{property.address}</p>
                    <p className="text-xs text-gray-500">{property.type} Property</p>
                  </div>
                </label>
              ))}
              <Button variant="outline" className="w-full">Add New Property</Button>
            </div>
          </Card>

          {/* Step 2: Select Service Type */}
          <Card title="Step 2: Choose Service Type" subtitle="Select the level of security you need">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceTypes.map((service) => (
                <label key={service.id} className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedService === service.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:bg-gray-50'
                }`}>
                  <input
                    type="radio"
                    name="service"
                    value={service.id}
                    checked={selectedService === service.id}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="sr-only"
                  />
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{service.name}</h4>
                      <span className="text-lg font-bold text-purple-600">${service.price}/hr</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-green-500 mr-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </label>
              ))}
            </div>
          </Card>

          {/* Step 3: Select Date & Time */}
          <Card title="Step 3: Schedule Service" subtitle="When do you need security coverage?">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <Input
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                label="Start Time"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <select 
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="">Select duration</option>
                  {durationOptions.map((duration) => (
                    <option key={duration.id} value={duration.id}>{duration.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {selectedDuration === 'custom' && (
              <div className="grid grid-cols-2 gap-4">
                <Input label="Custom Hours" type="number" placeholder="Enter hours" />
                <Input label="End Time" type="time" />
              </div>
            )}
          </Card>

          {/* Step 4: Select Guard (Optional) */}
          <Card title="Step 4: Choose Guard (Optional)" subtitle="Select a specific guard or let us assign the best available">
            <div className="space-y-3">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="guard"
                  value="auto"
                  defaultChecked
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                />
                <div className="ml-3">
                  <p className="font-medium text-gray-900">Auto-assign best available guard</p>
                  <p className="text-sm text-gray-600">We'll assign the best guard based on your needs and availability</p>
                </div>
              </label>

              {availableGuards.map((guard) => (
                <label key={guard.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="guard"
                    value={guard.id}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  />
                  <div className="ml-3 flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-gray-900">{guard.name}</p>
                        <p className="text-sm text-gray-600">{guard.experience} experience</p>
                        <p className="text-xs text-gray-500">
                          Specialties: {guard.specialties.join(', ')}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center">
                          <span className="text-yellow-400 mr-1">★</span>
                          <span className="text-sm font-medium">{guard.rating}</span>
                        </div>
                        <p className="text-sm text-purple-600 font-medium">${guard.hourlyRate}/hr</p>
                        <p className={`text-xs ${guard.availability === 'Available' ? 'text-green-600' : 'text-yellow-600'}`}>
                          {guard.availability}
                        </p>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </Card>
        </div>

        {/* Booking Summary */}
        <div className="lg:col-span-1">
          <Card title="Booking Summary" className="sticky top-6">
            <div className="space-y-4">
              {selectedPropertyData && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Property</h4>
                  <p className="text-sm text-gray-600">{selectedPropertyData.name}</p>
                  <p className="text-xs text-gray-500">{selectedPropertyData.address}</p>
                </div>
              )}

              {selectedServiceType && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Service</h4>
                  <p className="text-sm text-gray-600">{selectedServiceType.name}</p>
                  <p className="text-xs text-gray-500">${selectedServiceType.price}/hour</p>
                </div>
              )}

              {startDate && startTime && (
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Schedule</h4>
                  <p className="text-sm text-gray-600">{startDate} at {startTime}</p>
                  {selectedDuration && (
                    <p className="text-xs text-gray-500">
                      Duration: {durationOptions.find(d => d.id === selectedDuration)?.label}
                    </p>
                  )}
                </div>
              )}

              {calculatePrice() > 0 && (
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-medium">${calculatePrice()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Service Fee:</span>
                    <span className="font-medium">${(calculatePrice() * 0.1).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-lg font-bold border-t pt-2">
                    <span>Total:</span>
                    <span className="text-purple-600">${(calculatePrice() * 1.1).toFixed(2)}</span>
                  </div>
                </div>
              )}

              <Button 
                variant="primary" 
                className="w-full"
                disabled={!selectedProperty || !selectedService || !startDate || !startTime || !selectedDuration}
              >
                Book Security Service
              </Button>

              <div className="text-xs text-gray-500 text-center">
                <p>🔒 Secure payment processing</p>
                <p>✅ 24/7 customer support</p>
                <p>💯 100% satisfaction guarantee</p>
              </div>
            </div>
          </Card>

          {/* Recent Bookings */}
          <Card title="Recent Bookings" className="mt-6">
            <div className="space-y-3">
              {[
                { date: "Jan 20", service: "Premium Security", property: "Downtown Apartment", status: "Completed" },
                { date: "Jan 18", service: "Basic Security", property: "Office Building", status: "Completed" },
                { date: "Jan 15", service: "Event Security", property: "Downtown Apartment", status: "Completed" }
              ].map((booking, index) => (
                <div key={index} className="text-sm border-b border-gray-100 pb-2 last:border-b-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium text-gray-900">{booking.service}</p>
                      <p className="text-gray-600">{booking.property}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500">{booking.date}</p>
                      <span className="status-badge status-completed">{booking.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Booking;