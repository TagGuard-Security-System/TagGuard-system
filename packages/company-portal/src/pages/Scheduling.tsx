import React, { useState } from 'react';
import { Card, Button } from '@security-guard/shared';

const Scheduling: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState('current');
  const [selectedDate, setSelectedDate] = useState('2024-01-22');

  const mockSchedule = [
    {
      date: 'Mon, Jan 22',
      dayOfWeek: 'Monday',
      shifts: [
        { id: 1, guard: 'John Smith', site: 'Downtown Mall', time: '8:00 AM - 4:00 PM', status: 'confirmed', client: 'Metro Shopping' },
        { id: 2, guard: 'Maria Garcia', site: 'Office Complex A', time: '10:00 PM - 6:00 AM', status: 'confirmed', client: 'TechCorp' },
        { id: 3, guard: 'Ahmed Hassan', site: 'Warehouse District', time: '6:00 PM - 2:00 AM', status: 'confirmed', client: 'Industrial Co' },
      ]
    },
    {
      date: 'Tue, Jan 23',
      dayOfWeek: 'Tuesday',
      shifts: [
        { id: 4, guard: 'Sarah Johnson', site: 'Shopping Center', time: '6:00 AM - 2:00 PM', status: 'pending', client: 'Retail Plaza' },
        { id: 5, guard: 'David Chen', site: 'Corporate Plaza', time: '2:00 PM - 10:00 PM', status: 'confirmed', client: 'Business Center' },
        { id: 6, guard: 'Lisa Rodriguez', site: 'Downtown Mall', time: '4:00 PM - 12:00 AM', status: 'confirmed', client: 'Metro Shopping' },
        { id: 7, guard: 'Unassigned', site: 'Night Watch - Office Complex', time: '11:00 PM - 7:00 AM', status: 'open', client: 'TechCorp' },
      ]
    },
    {
      date: 'Wed, Jan 24',
      dayOfWeek: 'Wednesday', 
      shifts: [
        { id: 8, guard: 'John Smith', site: 'Downtown Mall', time: '8:00 AM - 4:00 PM', status: 'confirmed', client: 'Metro Shopping' },
        { id: 9, guard: 'Ahmed Hassan', site: 'Warehouse District', time: '4:00 PM - 12:00 AM', status: 'confirmed', client: 'Industrial Co' },
        { id: 10, guard: 'Unassigned', site: 'Emergency Coverage - Shopping Center', time: '2:00 AM - 10:00 AM', status: 'urgent', client: 'Retail Plaza' },
      ]
    },
    {
      date: 'Thu, Jan 25',
      dayOfWeek: 'Thursday',
      shifts: [
        { id: 11, guard: 'Maria Garcia', site: 'Office Complex A', time: '9:00 AM - 5:00 PM', status: 'confirmed', client: 'TechCorp' },
        { id: 12, guard: 'David Chen', site: 'Corporate Plaza', time: '1:00 PM - 9:00 PM', status: 'confirmed', client: 'Business Center' },
        { id: 13, guard: 'Lisa Rodriguez', site: 'Shopping Center', time: '3:00 PM - 11:00 PM', status: 'pending', client: 'Retail Plaza' },
      ]
    },
    {
      date: 'Fri, Jan 26',
      dayOfWeek: 'Friday',
      shifts: [
        { id: 14, guard: 'John Smith', site: 'Downtown Mall', time: '7:00 AM - 3:00 PM', status: 'confirmed', client: 'Metro Shopping' },
        { id: 15, guard: 'Sarah Johnson', site: 'Warehouse District', time: '5:00 PM - 1:00 AM', status: 'confirmed', client: 'Industrial Co' },
        { id: 16, guard: 'Ahmed Hassan', site: 'Corporate Plaza', time: '10:00 PM - 6:00 AM', status: 'confirmed', client: 'Business Center' },
        { id: 17, guard: 'Unassigned', site: 'Weekend Security - Office Complex', time: '6:00 PM - 2:00 AM', status: 'open', client: 'TechCorp' },
      ]
    }
  ];

  const weekStats = {
    totalShifts: 32,
    confirmedShifts: 24,
    pendingShifts: 4,
    openShifts: 4,
    availableGuards: 12,
    onDutyNow: 5,
    trainingGuards: 2,
    onLeave: 1
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'status-badge bg-green-100 text-green-800';
      case 'pending': return 'status-badge bg-yellow-100 text-yellow-800';
      case 'open': return 'status-badge bg-red-100 text-red-800';
      case 'urgent': return 'status-badge bg-red-100 text-red-800 animate-pulse';
      default: return 'status-badge bg-gray-100 text-gray-800';
    }
  };

  const periods = [
    { id: 'previous', label: 'Previous Week' },
    { id: 'current', label: 'Current Week' },
    { id: 'next', label: 'Next Week' }
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Shift Scheduling</h2>
          <p className="text-gray-600">Manage guard schedules and assignments</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Import Schedule</Button>
          <Button variant="outline">Copy Previous Week</Button>
          <Button variant="primary">Create Shift</Button>
        </div>
      </div>

      {/* Week Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card title="This Week's Shifts">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Total:</span>
              <span className="font-medium">{weekStats.totalShifts}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-600">Confirmed:</span>
              <span className="font-medium text-green-600">{weekStats.confirmedShifts}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-yellow-600">Pending:</span>
              <span className="font-medium text-yellow-600">{weekStats.pendingShifts}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-600">Open:</span>
              <span className="font-medium text-red-600">{weekStats.openShifts}</span>
            </div>
          </div>
        </Card>

        <Card title="Guard Availability">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Available:</span>
              <span className="font-medium">{weekStats.availableGuards}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-600">On Duty:</span>
              <span className="font-medium text-green-600">{weekStats.onDutyNow}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-600">Training:</span>
              <span className="font-medium text-blue-600">{weekStats.trainingGuards}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">On Leave:</span>
              <span className="font-medium text-gray-600">{weekStats.onLeave}</span>
            </div>
          </div>
        </Card>

        <Card title="Coverage Status">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Sites:</span>
              <span className="font-medium">8 locations</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-600">Fully Covered:</span>
              <span className="font-medium text-green-600">6 sites</span>
            </div>
            <div className="flex justify-between">
              <span className="text-yellow-600">Partial:</span>
              <span className="font-medium text-yellow-600">1 site</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-600">Gaps:</span>
              <span className="font-medium text-red-600">1 site</span>
            </div>
          </div>
        </Card>

        <Card title="Weekly Performance">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Completion:</span>
              <span className="font-medium">94.2%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-green-600">On Time:</span>
              <span className="font-medium text-green-600">96.8%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-600">Client Rating:</span>
              <span className="font-medium text-blue-600">4.7/5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-purple-600">Revenue:</span>
              <span className="font-medium text-purple-600">$38.5k</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Week Selector and Actions */}
      <Card className="mb-6">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="flex gap-2">
            {periods.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedWeek(period.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedWeek === period.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {period.label}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <Button variant="outline">Auto-Fill Gaps</Button>
            <Button variant="outline">Export Schedule</Button>
            <Button variant="primary">Publish Schedule</Button>
          </div>
        </div>
      </Card>

      {/* Daily Schedule */}
      <div className="space-y-6">
        {mockSchedule.map((day, dayIndex) => (
          <Card key={dayIndex} title={day.date} subtitle={`${day.shifts.length} shifts scheduled`}>
            <div className="space-y-3">
              {day.shifts.map((shift) => (
                <div key={shift.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-sm font-medium text-green-700">
                        {shift.guard !== 'Unassigned' ? shift.guard.split(' ').map(n => n[0]).join('') : '?'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <p className="font-medium text-gray-900">{shift.guard}</p>
                        <span className={getStatusColor(shift.status)}>
                          {shift.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{shift.site}</p>
                      <p className="text-sm text-gray-500">Client: {shift.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{shift.time}</p>
                      <p className="text-xs text-gray-500">
                        {shift.status === 'urgent' ? 'URGENT COVERAGE NEEDED' : 
                         shift.status === 'open' ? 'Needs Assignment' : 
                         'Scheduled'}
                      </p>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <Button size="sm" variant="outline">Edit</Button>
                      {(shift.status === 'open' || shift.status === 'urgent') && (
                        <Button size="sm" variant="primary">Assign</Button>
                      )}
                      {shift.status === 'pending' && (
                        <Button size="sm" variant="outline">Confirm</Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Add Shift Button */}
              <button className="w-full p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-green-500 hover:text-green-600 transition-colors">
                + Add Shift for {day.dayOfWeek}
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions Footer */}
      <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="justify-center">
            🔄 Auto-Fill Open Shifts
          </Button>
          <Button variant="outline" className="justify-center">
            📱 Send Schedule to Guards
          </Button>
          <Button variant="outline" className="justify-center">
            📊 Generate Weekly Report
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;