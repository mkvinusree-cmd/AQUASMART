import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { DashboardView } from './components/views/DashboardView';
import { AnalyticsView } from './components/views/AnalyticsView';
import { RewardsView } from './components/views/RewardsView';
import { SettingsView } from './components/views/SettingsView';
import { mockRooms } from './data/mockData';
import { Bell, Menu, AlertTriangle, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [dailyLimit, setDailyLimit] = useState(500);
  const [currentUsage, setCurrentUsage] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Calculate total usage from mock rooms
  useEffect(() => {
    const total = mockRooms.reduce((acc, room) => acc + room.usage, 0);
    setCurrentUsage(total);
  }, []);

  const isOverLimit = currentUsage > dailyLimit;

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <DashboardView 
            currentUsage={currentUsage}
            dailyLimit={dailyLimit}
            isOverLimit={isOverLimit}
            setActiveTab={setActiveTab}
          />
        );
      case 'analytics':
        return <AnalyticsView />;
      case 'rewards':
        return <RewardsView />;
      case 'settings':
        return (
          <SettingsView 
            dailyLimit={dailyLimit}
            setDailyLimit={setDailyLimit}
          />
        );
      default:
        return <DashboardView 
          currentUsage={currentUsage}
          dailyLimit={dailyLimit}
          isOverLimit={isOverLimit}
          setActiveTab={setActiveTab}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans text-slate-900">
      {/* Sidebar Navigation */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-white z-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Droplet className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-lg">AquaSmart</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-slate-600">
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute right-0 top-0 h-full w-64 bg-white p-4 shadow-xl" onClick={e => e.stopPropagation()}>
             <div className="flex flex-col gap-2 mt-12">
                {['dashboard', 'analytics', 'rewards', 'settings'].map(tab => (
                  <button 
                    key={tab}
                    onClick={() => { setActiveTab(tab); setIsMobileMenuOpen(false); }}
                    className={`text-left px-4 py-3 rounded-lg capitalize ${activeTab === tab ? 'bg-blue-50 text-blue-600' : 'text-slate-600'}`}
                  >
                    {tab}
                  </button>
                ))}
             </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 mt-14 md:mt-0 overflow-y-auto h-screen">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 capitalize">
              {activeTab === 'dashboard' ? 'Overview' : activeTab}
            </h2>
            <p className="text-slate-500 text-sm mt-1">Welcome back, Dualite User</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 bg-white rounded-full shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
              {isOverLimit && <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>}
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 border-2 border-white shadow-md"></div>
          </div>
        </header>

        {/* Alert Banner (Global) */}
        <AnimatePresence>
          {isOverLimit && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-4 text-red-700 shadow-sm"
            >
              <div className="p-2 bg-red-100 rounded-full">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold">Daily Limit Exceeded!</h4>
                <p className="text-sm text-red-600">You have used {currentUsage}L, which is {currentUsage - dailyLimit}L over your limit of {dailyLimit}L.</p>
              </div>
              <button 
                onClick={() => setActiveTab('settings')}
                className="px-4 py-2 bg-white border border-red-200 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors"
              >
                Adjust Limit
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dynamic Content Render */}
        <div className="animate-in fade-in duration-500">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;
