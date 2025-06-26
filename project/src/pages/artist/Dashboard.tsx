import React from 'react';
import { 
  Music, 
  TrendingUp, 
  Download, 
  DollarSign, 
  Bell,
  Calendar,
  Users,
  Play
} from 'lucide-react';
import Card, { CardHeader, CardContent } from '../../components/ui/Card';
import { mockAnalytics, mockNotifications, mockTracks } from '../../data/mockData';

const Dashboard: React.FC = () => {
  const { totalStreams, totalDownloads, totalRoyalties, monthlyData } = mockAnalytics;
  const recentTracks = mockTracks.slice(0, 3);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Artist Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your music performance overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card hover>
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Streams</p>
                <p className="text-3xl font-bold text-gray-900">{totalStreams.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12% from last month
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <Play className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Downloads</p>
                <p className="text-3xl font-bold text-gray-900">{totalDownloads.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8% from last month
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Download className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Royalties</p>
                <p className="text-3xl font-bold text-gray-900">${totalRoyalties.toFixed(2)}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15% from last month
                </p>
              </div>
              <div className="bg-green-100 p-3 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Monthly Performance Chart */}
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900">Monthly Performance</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((month, index) => (
                <div key={month.month} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span className="text-sm font-medium text-gray-700">{month.month}</span>
                  </div>
                  <div className="flex items-center space-x-6 text-sm">
                    <span className="text-gray-600">{month.streams.toLocaleString()} streams</span>
                    <span className="text-green-600 font-medium">${month.royalties.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Notifications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <Bell className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockNotifications.map((notification) => (
                <div key={notification.id} className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="text-sm text-gray-900">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(notification.timestamp).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Releases */}
      <Card className="mt-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">Recent Releases</h2>
          <Music className="h-5 w-5 text-gray-400" />
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentTracks.map((track) => (
              <div key={track.id} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <img 
                  src={track.coverArt} 
                  alt={track.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{track.title}</h3>
                  <p className="text-sm text-gray-600">{track.artist} • {track.genre}</p>
                </div>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    track.status === 'live' ? 'bg-green-100 text-green-800' :
                    track.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                    track.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {track.status}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">{track.streams.toLocaleString()} streams</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;