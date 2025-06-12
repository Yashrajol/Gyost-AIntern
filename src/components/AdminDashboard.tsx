import React, { useState, useEffect } from 'react';
import { Plus, Users, Briefcase, Clock, CheckCircle, XCircle, AlertCircle, Edit, Trash2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../contexts/AuthContext';

interface Internship {
  id: string;
  title: string;
  company: string;
  description: string;
  requirements: string;
  duration: string;
  location: string;
  type: 'remote' | 'onsite' | 'hybrid';
  deadline: string;
  status: 'active' | 'closed';
  created_at: string;
}

interface Application {
  id: string;
  status: 'pending' | 'accepted' | 'rejected';
  applied_at: string;
  cover_letter: string;
  student: {
    id: string;
    full_name: string;
    email: string;
  };
  internship: {
    id: string;
    title: string;
    company: string;
  };
}

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [internships, setInternships] = useState<Internship[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [stats, setStats] = useState({
    totalInternships: 0,
    activeInternships: 0,
    totalApplications: 0,
    pendingApplications: 0
  });

  const [newInternship, setNewInternship] = useState({
    title: '',
    company: '',
    description: '',
    requirements: '',
    duration: '',
    location: '',
    type: 'onsite' as 'remote' | 'onsite' | 'hybrid',
    deadline: ''
  });

  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    try {
      // Fetch internships
      const { data: internshipsData, error: internshipsError } = await supabase
        .from('internships')
        .select('*')
        .order('created_at', { ascending: false });

      if (internshipsError) throw internshipsError;

      // Fetch applications with student and internship details
      const { data: applicationsData, error: applicationsError } = await supabase
        .from('applications')
        .select(`
          *,
          student:profiles!applications_student_id_fkey(
            id,
            full_name,
            email
          ),
          internship:internships(
            id,
            title,
            company
          )
        `)
        .order('applied_at', { ascending: false });

      if (applicationsError) throw applicationsError;

      setInternships(internshipsData || []);
      setApplications(applicationsData || []);

      // Calculate stats
      const totalInternships = internshipsData?.length || 0;
      const activeInternships = internshipsData?.filter(i => i.status === 'active').length || 0;
      const totalApplications = applicationsData?.length || 0;
      const pendingApplications = applicationsData?.filter(a => a.status === 'pending').length || 0;

      setStats({
        totalInternships,
        activeInternships,
        totalApplications,
        pendingApplications
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateInternship = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { error } = await supabase
        .from('internships')
        .insert([{
          ...newInternship,
          created_by: user?.id
        }]);

      if (error) throw error;

      setShowCreateForm(false);
      setNewInternship({
        title: '',
        company: '',
        description: '',
        requirements: '',
        duration: '',
        location: '',
        type: 'onsite',
        deadline: ''
      });
      fetchData();
      alert('Internship created successfully!');
    } catch (error) {
      console.error('Error creating internship:', error);
      alert('Failed to create internship');
    }
  };

  const updateApplicationStatus = async (applicationId: string, newStatus: 'accepted' | 'rejected') => {
    try {
      const { error } = await supabase
        .from('applications')
        .update({ status: newStatus })
        .eq('id', applicationId);

      if (error) throw error;

      fetchData();
      alert(`Application ${newStatus} successfully!`);
    } catch (error) {
      console.error('Error updating application:', error);
      alert('Failed to update application status');
    }
  };

  const toggleInternshipStatus = async (internshipId: string, currentStatus: string) => {
    const newStatus = currentStatus === 'active' ? 'closed' : 'active';
    try {
      const { error } = await supabase
        .from('internships')
        .update({ status: newStatus })
        .eq('id', internshipId);

      if (error) throw error;

      fetchData();
    } catch (error) {
      console.error('Error updating internship status:', error);
      alert('Failed to update internship status');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage internships and applications</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Internships</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalInternships}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Internships</p>
                <p className="text-2xl font-bold text-green-600">{stats.activeInternships}</p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Applications</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalApplications}</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending Reviews</p>
                <p className="text-2xl font-bold text-yellow-600">{stats.pendingApplications}</p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'overview'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('internships')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'internships'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Manage Internships
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'applications'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Review Applications
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Applications</h3>
                    <div className="space-y-3">
                      {applications.slice(0, 5).map((application) => (
                        <div key={application.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium text-gray-900">{application.student.full_name}</p>
                            <p className="text-sm text-gray-600">{application.internship.title}</p>
                          </div>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {application.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Internships</h3>
                    <div className="space-y-3">
                      {internships.filter(i => i.status === 'active').slice(0, 5).map((internship) => (
                        <div key={internship.id} className="p-3 bg-gray-50 rounded-lg">
                          <p className="font-medium text-gray-900">{internship.title}</p>
                          <p className="text-sm text-gray-600">{internship.company}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'internships' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">Manage Internships</h3>
                  <button
                    onClick={() => setShowCreateForm(true)}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Create Internship
                  </button>
                </div>

                {showCreateForm && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Create New Internship</h4>
                    <form onSubmit={handleCreateInternship} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Internship Title"
                          value={newInternship.title}
                          onChange={(e) => setNewInternship({...newInternship, title: e.target.value})}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={newInternship.company}
                          onChange={(e) => setNewInternship({...newInternship, company: e.target.value})}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <textarea
                        placeholder="Description"
                        value={newInternship.description}
                        onChange={(e) => setNewInternship({...newInternship, description: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <textarea
                        placeholder="Requirements"
                        value={newInternship.requirements}
                        onChange={(e) => setNewInternship({...newInternship, requirements: e.target.value})}
                        rows={3}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="Duration (e.g., 3 months)"
                          value={newInternship.duration}
                          onChange={(e) => setNewInternship({...newInternship, duration: e.target.value})}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Location"
                          value={newInternship.location}
                          onChange={(e) => setNewInternship({...newInternship, location: e.target.value})}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                        <select
                          value={newInternship.type}
                          onChange={(e) => setNewInternship({...newInternship, type: e.target.value as 'remote' | 'onsite' | 'hybrid'})}
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="onsite">On-site</option>
                          <option value="remote">Remote</option>
                          <option value="hybrid">Hybrid</option>
                        </select>
                      </div>
                      <input
                        type="date"
                        value={newInternship.deadline}
                        onChange={(e) => setNewInternship({...newInternship, deadline: e.target.value})}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                        >
                          Create Internship
                        </button>
                        <button
                          type="button"
                          onClick={() => setShowCreateForm(false)}
                          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-medium transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                )}

                <div className="space-y-4">
                  {internships.map((internship) => (
                    <div key={internship.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900">{internship.title}</h4>
                          <p className="text-gray-600">{internship.company}</p>
                          <p className="text-sm text-gray-500 mt-2">{internship.description.substring(0, 150)}...</p>
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                            <span>{internship.duration}</span>
                            <span>•</span>
                            <span>{internship.location}</span>
                            <span>•</span>
                            <span className="capitalize">{internship.type}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            internship.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {internship.status}
                          </span>
                          <button
                            onClick={() => toggleInternshipStatus(internship.id, internship.status)}
                            className="px-3 py-1 text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition-colors"
                          >
                            {internship.status === 'active' ? 'Close' : 'Activate'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Review Applications</h3>
                <div className="space-y-4">
                  {applications.map((application) => (
                    <div key={application.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{application.student.full_name}</h4>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              application.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {application.status}
                            </span>
                          </div>
                          <p className="text-gray-600">{application.student.email}</p>
                          <p className="text-sm text-gray-500 mt-1">Applied for: {application.internship.title} at {application.internship.company}</p>
                          {application.cover_letter && (
                            <div className="mt-3">
                              <p className="text-sm text-gray-500 mb-1">Cover Letter:</p>
                              <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
                                {application.cover_letter}
                              </p>
                            </div>
                          )}
                          <p className="text-xs text-gray-400 mt-2">
                            Applied on: {new Date(application.applied_at).toLocaleDateString()}
                          </p>
                        </div>
                        {application.status === 'pending' && (
                          <div className="flex space-x-2 ml-4">
                            <button
                              onClick={() => updateApplicationStatus(application.id, 'accepted')}
                              className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg transition-colors"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => updateApplicationStatus(application.id, 'rejected')}
                              className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                            >
                              Reject
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;