import React, { useState } from 'react';
import { 
  TrendingUp, 
  Download, 
  DollarSign, 
  Users, 
  Calendar,
  BarChart3,
  PieChart,
  Globe
} from 'lucide-react';
import Button from '../../components/ui/Button';
import Card, { CardHeader, CardContent } from '../../components/ui/Card';
import { mockAnalytics } from '../../data/mockData';

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState('6months');
  const { totalStreams, totalDownloads, totalRoyalties, monthlyData } = mockAnalytics;

  const regionData = [
    { region: 'North America', streams: 68000, percentage: 40 },
    { region: 'Europe', streams: 51000, percentage: 30 },
    { region: 'Asia', streams: 34000, percentage: 20 },
    { region: 'South America', streams: 12750, percentage: 7.5 },
    { region: 'Others', streams: 4250, percentage: 2.5 }
  ];

  const platformData = [
    { platform: 'Spotify', streams: 85000, percentage: 50 },
    { platform: 'Apple Music', streams: 42500, percentage: 25 },
    { platform: 'YouTube Music', streams: 25500, percentage: 15 },
    { platform: 'Amazon Music', streams: 10200, percentage: 6 },
    { platform: 'Others', streams: 6800, percentage: 4 }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics & Royalties</h1>
          <p className="text-gray-600">Track your music performance and earnings across all platforms.</p>
        </div>
        <div className="flex items-center space-x-4">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="1month">Last Month</option>
            <option value="3months">Last 3 Months</option>
            <option value="6months">Last 6 Months</option>
            <option value="1year">Last Year</option>
          </select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card hover>
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Streams</p>
                <p className="text-2xl font-bold text-gray-900">{totalStreams.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +12.5%
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-lg">
                <BarChart3 className="h-5 w-5 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Downloads</p>
                <p className="text-2xl font-bold text-gray-900">{totalDownloads.toLocaleString()}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8.3%
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Download className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card hover>
          <CardContent className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Royalties</p>
                <p className="text-2xl font-bold text-gray-900">${totalRoyalties.toFixed(2)}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15.2%
                </p>
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
                <p className="text-sm font-medium text-gray-600">Unique Listeners</p>
                <p className="text-2xl font-bold text-gray-900">84,250</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +9.8%
                </p>
              </div>
              <div className="bg-pink-100 p-3 rounded-lg">
                <Users className="h-5 w-5 text-pink-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Monthly Performance Chart */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Monthly Performance</h2>
            <BarChart3 className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {monthlyData.map((month, index) => (
                <div key={month.month}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{month.month} 2024</span>
                    <span className="text-sm text-gray-600">{month.streams.toLocaleString()} streams</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(month.streams / Math.max(...monthlyData.map(m => m.streams))) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>{month.downloads.toLocaleString()} downloads</span>
                    <span className="text-green-600 font-medium">${month.royalties.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Platform Distribution */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Platform Distribution</h2>
            <PieChart className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {platformData.map((platform, index) => (
                <div key={platform.platform} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      index === 0 ? 'bg-green-500' :
                      index === 1 ? 'bg-blue-500' :
                      index === 2 ? 'bg-red-500' :
                      index === 3 ? 'bg-yellow-500' : 'bg-gray-400'
                    }`} />
                    <span className="text-sm font-medium text-gray-700">{platform.platform}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-900">{platform.percentage}%</span>
                    <p className="text-xs text-gray-500">{platform.streams.toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Geographic Distribution */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Geographic Distribution</h2>
            <Globe className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {regionData.map((region, index) => (
                <div key={region.region}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{region.region}</span>
                    <span className="text-sm text-gray-600">{region.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        index === 0 ? 'bg-purple-600' :
                        index === 1 ? 'bg-blue-500' :
                        index === 2 ? 'bg-green-500' :
                        index === 3 ? 'bg-yellow-500' : 'bg-gray-400'
                      }`}
                      style={{ width: `${region.percentage}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{region.streams.toLocaleString()} streams</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Royalty Breakdown */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Royalty Breakdown</h2>
            <DollarSign className="h-5 w-5 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Current Month</span>
                  <span className="text-lg font-bold text-green-600">$190.45</span>
                </div>
                <div className="text-xs text-gray-500">
                  Based on 38,000 streams and 2,400 downloads
                </div>
              </div>
              
              <div className="border-t pt-4">
                <h4 className="font-medium text-gray-900 mb-3">Payment History</h4>
                <div className="space-y-3">
                  {[
                    { date: '2024-01-01', amount: 175.80, status: 'Paid' },
                    { date: '2023-12-01', amount: 140.25, status: 'Paid' },
                    { date: '2023-11-01', amount: 160.75, status: 'Paid' },
                    { date: '2023-10-01', amount: 125.50, status: 'Paid' }
                  ].map((payment, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        {new Date(payment.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                      </span>
                      <div className="text-right">
                        <span className="text-sm font-medium text-gray-900">${payment.amount}</span>
                        <span className="ml-2 text-xs text-green-600">{payment.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Download className="h-4 w-4 mr-2" />
                Download Tax Documents
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;