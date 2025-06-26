import React, { useState } from 'react';
import { 
  Users, 
  Music, 
  DollarSign, 
  TrendingUp, 
  CheckCircle, 
  XCircle,
  Clock,
  Search,
  Filter,
  Download,
  Eye,
  UserCheck,
  UserX
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Card, { CardHeader, CardContent } from '../../components/ui/Card';
import { mockTracks } from '../../data/mockData';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'submissions' | 'artists'>('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const stats = {
    totalArtists: 2840,
    totalTracks: 12650,
    pendingSubmissions: 23,
    totalRevenue: 485720,
    monthlyGrowth: 12.5
  };

  const mockArtists = [
    { id: '1', name: 'Luna Echo', email: 'luna@example.com', tracks: 3, status: 'active', joinDate: '2024-01-15' },
    { id: '2', name: 'City Vibes', email: 'city@example.com', tracks: 2, status: 'active', joinDate: '2024-01-20' },
    { id: '3', name: 'Serene Sound', email: 'serene@example.com', tracks: 1, status: 'pending', joinDate: '2024-01-25' }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'pending', label: 'Pending Review' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
    { value: 'live', label: 'Live' }
  ];

  const handleApprove = (trackId: string) => {
    console.log('Approved track:', trackId);
  };

  const handleReject = (trackId: string) => {
    console.log('Rejected track:', trackId);
  };

  const handleToggleArtist = (artistId: string, currentStatus: string) => {
    console.log('Toggle artist status:', artistId, currentStatus);
  };

  const filteredTracks = mockTracks.filter(track => {
    const matchesSearch = track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         track.artist.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || track.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live':
        return 'bg-green-100 text-green-800';
      case 'approved':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">Manage artists, submissions, and platform analytics.</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8">
        {[
          { id: 'overview', label: 'Overview', icon: TrendingUp },
          { id: 'submissions', label: 'Submissions', icon: Music },
          { id: 'artists', label: 'Artists', icon: Users }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-purple-600 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card hover>
              <CardContent className="py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Artists</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalArtists.toLocaleString()}</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Tracks</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.totalTracks.toLocaleString()}</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Music className="h-5 w-5 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
                    <p className="text-2xl font-bold text-gray-900">{stats.pendingSubmissions}</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <DollarSign className="h-5 w-5 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card hover>
              <CardContent className="py-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Monthly Growth</p>
                    <p className="text-2xl font-bold text-gray-900">+{stats.monthlyGrowth}%</p>
                  </div>
                  <div className="bg-pink-100 p-3 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-pink-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-gray-900">Recent Platform Activity</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { action: 'New artist registration', artist: 'Harmony Sound', time: '2 hours ago', type: 'user' },
                  { action: 'Track approved', artist: 'Luna Echo - Midnight Dreams', time: '4 hours ago', type: 'approval' },
                  { action: 'Royalty payment processed', artist: '$2,450 to 15 artists', time: '6 hours ago', type: 'payment' },
                  { action: 'New submission received', artist: 'City Vibes - Urban Sunset', time: '8 hours ago', type: 'submission' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 border border-gray-200 rounded-lg">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'user' ? 'bg-blue-100' :
                      activity.type === 'approval' ? 'bg-green-100' :
                      activity.type === 'payment' ? 'bg-yellow-100' : 'bg-purple-100'
                    }`}>
                      {activity.type === 'user' && <Users className="h-4 w-4 text-blue-600" />}
                      {activity.type === 'approval' && <CheckCircle className="h-4 w-4 text-green-600" />}
                      {activity.type === 'payment' && <DollarSign className="h-4 w-4 text-yellow-600" />}
                      {activity.type === 'submission' && <Music className="h-4 w-4 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.artist}</p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Submissions Tab */}
      {activeTab === 'submissions' && (
        <div className="space-y-6">
          {/* Filters */}
          <Card>
            <CardContent className="py-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search submissions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div className="md:w-48">
                  <Select
                    options={statusOptions}
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submissions List */}
          <div className="space-y-4">
            {filteredTracks.map((track) => (
              <Card key={track.id} hover>
                <CardContent className="py-6">
                  <div className="flex items-center space-x-4">
                    <img 
                      src={track.coverArt} 
                      alt={track.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{track.title}</h3>
                          <p className="text-gray-600">{track.artist}</p>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(track.status)}`}>
                          {track.status}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-sm text-gray-600">
                        <span>{track.genre}</span>
                        <span>{track.language}</span>
                        <span>Uploaded: {new Date(track.uploadDate).toLocaleDateString()}</span>
                      </div>

                      <div className="flex items-center space-x-2 mt-2">
                        {track.platforms.map((platform) => (
                          <span 
                            key={platform}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-100 text-gray-800"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        Review
                      </Button>
                      {track.status === 'pending' && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => handleApprove(track.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="h-4 w-4 mr-1" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleReject(track.id)}
                            className="border-red-300 text-red-600 hover:bg-red-50"
                          >
                            <XCircle className="h-4 w-4 mr-1" />
                            Reject
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Artists Tab */}
      {activeTab === 'artists' && (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h2 className="text-lg font-semibold text-gray-900">Artist Management</h2>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockArtists.map((artist) => (
                  <div key={artist.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">
                          {artist.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{artist.name}</h3>
                        <p className="text-sm text-gray-600">{artist.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <span>{artist.tracks} tracks</span>
                      <span>Joined: {new Date(artist.joinDate).toLocaleDateString()}</span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        artist.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {artist.status}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button
                        size="sm"
                        variant={artist.status === 'active' ? 'outline' : 'primary'}
                        onClick={() => handleToggleArtist(artist.id, artist.status)}
                        className={artist.status === 'active' ? 'border-red-300 text-red-600 hover:bg-red-50' : ''}
                      >
                        {artist.status === 'active' ? (
                          <>
                            <UserX className="h-4 w-4 mr-1" />
                            Deactivate
                          </>
                        ) : (
                          <>
                            <UserCheck className="h-4 w-4 mr-1" />
                            Activate
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;