import { useState } from 'react';
import {
  Sparkles,
  TrendingUp,
  Shield,
  BarChart3,
  MessageSquare,
  Lock,
  Users,
  DollarSign,
  Activity
} from 'lucide-react';

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-4 sm:space-y-6">
            {/* Mobile-Optimized Welcome Message */}
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Good Morning, Eva!</h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 flex-shrink-0" />
                  <span>Filter</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span>Monthly (5)</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 flex-shrink-0" />
                  <span>Download Data</span>
                </div>
                <div className="sm:ml-auto flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 flex-shrink-0" />
                  <span>Support</span>
                </div>
              </div>
            </div>

            {/* Mobile-Optimized Dashboard Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6 hover:border-amber-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-white">Portfolio Performance</h3>
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xl sm:text-2xl font-bold text-white">$2.4M</div>
                  <div className="text-xs sm:text-sm text-slate-400">Total Value</div>
                  <div className="h-12 sm:h-16 bg-gradient-to-r from-emerald-500/20 to-emerald-400/20 rounded-lg flex items-end justify-between p-2">
                    {[60, 75, 45, 85, 70, 90, 65, 80].map((height, idx) => (
                      <div key={idx} className="w-1.5 sm:w-2 bg-emerald-400 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 sm:p-6 hover:border-amber-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-white">Client Engagement</h3>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-slate-950 font-bold text-xs sm:text-sm">85%</span>
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xs sm:text-sm text-slate-400">Active Clients</div>
                  <div className="text-base sm:text-lg font-semibold text-white">247 clients</div>
                  <div className="text-xs sm:text-sm text-emerald-400">+12% this month</div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-white">Revenue Growth</h3>
                  <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 flex-shrink-0" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xl sm:text-2xl font-bold text-white">$124K</div>
                  <div className="text-xs sm:text-sm text-slate-400">Monthly Revenue</div>
                  <div className="h-12 sm:h-16 bg-gradient-to-r from-blue-500/20 to-blue-400/20 rounded-lg flex items-end justify-between p-2">
                    {[40, 65, 55, 80, 70, 85, 75, 90].map((height, idx) => (
                      <div key={idx} className="w-1.5 sm:w-2 bg-blue-400 rounded-t" style={{ height: `${height}%` }}></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <h3 className="text-sm sm:text-base font-semibold text-white">Daily Progress</h3>
                  <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 flex-shrink-0" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <div className="text-xl sm:text-2xl font-bold text-white">7/8</div>
                  <div className="text-xs sm:text-sm text-slate-400">Tasks Completed</div>
                  <div className="text-xs sm:text-sm text-purple-400">85% completion</div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Portfolio Management</h2>
              <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-lg font-medium text-sm sm:text-base touch-target">
                Add Portfolio
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Asset Allocation</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full"></div>
                      <span className="text-white text-sm sm:text-base">Equities</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold text-sm sm:text-base">65%</div>
                      <div className="text-xs sm:text-sm text-slate-400">$1.6M</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-emerald-400 rounded-full"></div>
                      <span className="text-white text-sm sm:text-base">Bonds</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold text-sm sm:text-base">25%</div>
                      <div className="text-xs sm:text-sm text-slate-400">$600K</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-amber-400 rounded-full"></div>
                      <span className="text-white text-sm sm:text-base">Alternatives</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold text-sm sm:text-base">10%</div>
                      <div className="text-xs sm:text-sm text-slate-400">$240K</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Top Holdings</h3>
                <div className="space-y-2 sm:space-y-3">
                  {['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'NVDA'].map((stock) => (
                    <div key={stock} className="flex items-center justify-between">
                      <span className="text-white text-sm sm:text-base">{stock}</span>
                      <span className="text-emerald-400 text-xs sm:text-sm">+{(Math.random() * 10 + 1).toFixed(1)}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'clients':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Client Management</h2>
              <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-lg font-medium text-sm sm:text-base touch-target">
                Add Client
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Recent Clients</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { name: 'Sarah Johnson', amount: '$2.4M', change: '+12.3%', status: 'Active' },
                    { name: 'Michael Chen', amount: '$1.8M', change: '+8.7%', status: 'Active' },
                    { name: 'Emily Rodriguez', amount: '$950K', change: '+5.2%', status: 'Review' }
                  ].map((client, idx) => (
                    <div key={idx} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-slate-950 font-bold text-xs sm:text-sm">{client.name.split(' ').map(n => n[0]).join('')}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium text-sm sm:text-base">{client.name}</span>
                          <span className="text-emerald-400 text-xs sm:text-sm">{client.change}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400 text-xs sm:text-sm">{client.amount}</span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            client.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                          }`}>{client.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Client Statistics</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300 text-sm sm:text-base">Total Clients</span>
                    <span className="text-white font-bold text-sm sm:text-base">247</span>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300 text-sm sm:text-base">Active This Month</span>
                    <span className="text-emerald-400 font-bold text-sm sm:text-base">189</span>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300 text-sm sm:text-base">New This Quarter</span>
                    <span className="text-blue-400 font-bold text-sm sm:text-base">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'reports':
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Reports & Analytics</h2>
              <button className="px-3 sm:px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-lg font-medium text-sm sm:text-base touch-target">
                Generate Report
              </button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Recent Reports</h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { name: 'Q4 Performance Summary', date: '2 hours ago', type: 'Performance' },
                    { name: 'Client Portfolio Review', date: '1 day ago', type: 'Portfolio' },
                    { name: 'Risk Assessment Report', date: '3 days ago', type: 'Risk' }
                  ].map((report, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                      <div>
                        <div className="text-white font-medium text-sm sm:text-base">{report.name}</div>
                        <div className="text-slate-400 text-xs sm:text-sm">{report.date}</div>
                      </div>
                      <span className="text-amber-400 text-xs px-2 py-1 bg-amber-500/20 rounded-full">{report.type}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Report Analytics</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300 text-sm sm:text-base">Reports Generated</span>
                    <span className="text-white font-bold text-sm sm:text-base">156</span>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300 text-sm sm:text-base">Avg. Generation Time</span>
                    <span className="text-emerald-400 font-bold text-sm sm:text-base">2.3s</span>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-700/50 rounded-lg">
                    <span className="text-slate-300 text-sm sm:text-base">Client Downloads</span>
                    <span className="text-blue-400 font-bold text-sm sm:text-base">1,247</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Mobile-Optimized Dashboard Window */}
      <div className="bg-slate-900 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-slate-700">
        {/* Mobile-Optimized Browser Header */}
        <div className="bg-slate-800 px-4 sm:px-6 py-3 sm:py-4 border-b border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex gap-1 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-sm text-slate-400">
              <Lock className="w-4 h-4" />
              <span>wealthsync.com</span>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Users className="w-4 h-4 text-slate-500" />
            <MessageSquare className="w-4 h-4 text-slate-500" />
            <Shield className="w-4 h-4 text-slate-500" />
          </div>
        </div>

        {/* Mobile-Optimized Dashboard Content */}
        <div className="p-3 sm:p-4 lg:p-6 bg-slate-900 min-h-[400px] sm:min-h-[500px]">
          {/* Mobile-Optimized Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-slate-950" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white">WealthSync</span>
            </div>
            
            {/* Mobile-Optimized Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-1 sm:gap-2 lg:gap-3 w-full sm:w-auto">
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 touch-target ${
                  activeTab === 'dashboard' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => setActiveTab('portfolio')}
                className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 touch-target ${
                  activeTab === 'portfolio' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Portfolio
              </button>
              <button 
                onClick={() => setActiveTab('clients')}
                className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 touch-target ${
                  activeTab === 'clients' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Clients
              </button>
              <button 
                onClick={() => setActiveTab('reports')}
                className={`px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 touch-target ${
                  activeTab === 'reports' 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                Reports
              </button>
              <button 
                onClick={() => setActiveTab('profile')}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 touch-target ${
                  activeTab === 'profile' 
                    ? 'bg-gradient-to-br from-amber-500 to-orange-500' 
                    : 'bg-slate-700 hover:bg-slate-600'
                }`}
              >
                <span className={`font-semibold text-xs sm:text-sm ${
                  activeTab === 'profile' ? 'text-slate-950' : 'text-slate-300'
                }`}>EV</span>
              </button>
            </div>
          </div>

          {/* Dynamic Content */}
          {renderDashboardContent()}

          {/* Bottom Action */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <button className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 rounded-lg sm:rounded-xl font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-200 shadow-lg shadow-amber-500/25 text-sm sm:text-base touch-target">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              {activeTab === 'dashboard' && 'Check new clients'}
              {activeTab === 'portfolio' && 'View all portfolios'}
              {activeTab === 'clients' && 'Add new client'}
              {activeTab === 'reports' && 'Generate report'}
              {activeTab === 'profile' && 'Edit profile'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
