import React, { useState } from 'react';
import { 
  Music, 
  Filter, 
  Search, 
  Download, 
  Eye,
  Calendar,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import Select from '../../components/ui/Select';
import Card, { CardHeader, CardContent } from '../../components/ui/Card';
import { mockTracks } from '../../data/mockData';

const MyReleases: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null);

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'live', label: 'Live' },
    { value: 'rejected', label: 'Rejected' }
  ];

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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Releases</h1>
        <p className="text-gray-600">Track and manage all your music releases and their performance.</p>
      </div>

      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search tracks..."
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

      {/* Releases List */}
      <div className="space-y-4">
        {filteredTracks.map((track) => (
          <Card key={track.id} hover className="transition-all duration-200">
            <CardContent className="py-6">
              <div className="flex items-center space-x-4">
                <img 
                  src={track.coverArt} 
                  alt={track.title}
                  className="w-16 h-16 rounded-lg object-cover shadow-sm"
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
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(track.uploadDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Music className="h-4 w-4" />
                      <span>{track.genre}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="h-4 w-4" />
                      <span>{track.streams.toLocaleString()} streams</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>${track.royalties.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-3">
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
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedTrack(selectedTrack === track.id ? null : track.id)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Details
                  </Button>
                  {track.status === 'live' && (
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4 mr-1" />
                      Report
                    </Button>
                  )}
                </div>
              </div>

              {/* Expanded Details */}
              {selectedTrack === track.id && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Performance Stats</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Streams:</span>
                          <span className="font-medium">{track.streams.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Downloads:</span>
                          <span className="font-medium">{track.downloads.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Total Royalties:</span>
                          <span className="font-medium text-green-600">${track.royalties.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Track Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Genre:</span>
                          <span className="font-medium">{track.genre}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Language:</span>
                          <span className="font-medium">{track.language}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Upload Date:</span>
                          <span className="font-medium">{new Date(track.uploadDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Platforms</h4>
                      <div className="flex flex-wrap gap-1">
                        {track.platforms.map((platform) => (
                          <span 
                            key={platform}
                            className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-purple-100 text-purple-800"
                          >
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTracks.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Music className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No releases found</h3>
            <p className="text-gray-600 mb-4">
              {searchTerm || statusFilter !== 'all' 
                ? 'Try adjusting your search or filter criteria.' 
                : 'Upload your first track to get started.'}
            </p>
            <Button>
              Submit New Track
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MyReleases;