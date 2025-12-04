import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { RoomCard } from '../RoomCard';
import { CheckCircle2, Plus, Droplet, ArrowRight } from 'lucide-react';
import { RoomData } from '../../types';
import { mockRooms } from '../../data/mockData';

interface DashboardViewProps {
  currentUsage: number;
  dailyLimit: number;
  isOverLimit: boolean;
  setActiveTab: (tab: string) => void;
}

export const DashboardView: React.FC<DashboardViewProps> = ({ 
  currentUsage, 
  dailyLimit, 
  isOverLimit,
  setActiveTab
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column (Stats & Rooms) */}
      <div className="lg:col-span-2 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="bg-blue-600 text-white border-none relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
            <CardContent className="p-6 relative z-10">
              <p className="text-blue-100 text-sm font-medium mb-1">Daily Usage</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-bold">{currentUsage}L</h3>
                <span className="text-sm text-blue-200">/ {dailyLimit}L</span>
              </div>
              <div className="mt-4 h-1.5 bg-black/20 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${isOverLimit ? 'bg-red-400' : 'bg-white'}`} 
                  style={{ width: `${Math.min((currentUsage / dailyLimit) * 100, 100)}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <p className="text-slate-500 text-sm font-medium">Weekly Avg</p>
                <span className="text-green-500 text-xs font-bold bg-green-50 px-2 py-1 rounded-full">-12%</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800">385L</h3>
              <p className="text-xs text-slate-400 mt-1">Better than last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <p className="text-slate-500 text-sm font-medium">System Status</p>
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Active</h3>
              <p className="text-xs text-slate-400 mt-1">No leaks detected</p>
            </CardContent>
          </Card>
        </div>

        {/* Room Breakdown */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800">Room Consumption</h3>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
              <Plus className="w-4 h-4" /> Add Room
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {mockRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Column (Tips & Quick Actions) */}
      <div className="space-y-6">
        <Card className="bg-cyan-50 border-cyan-100">
          <CardContent className="p-6">
            <div className="flex gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm h-fit">
                <Droplet className="w-5 h-5 text-cyan-500" />
              </div>
              <div>
                <h4 className="font-semibold text-cyan-900 text-sm">Water Saving Tip</h4>
                <p className="text-xs text-cyan-700 mt-1 leading-relaxed">
                  Fixing a leaky faucet can save up to 3,000 gallons of water per year. Check your bathroom taps today!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardContent className="p-6">
                <h4 className="font-semibold text-slate-800 mb-3">Quick Insights</h4>
                <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Most Used Room</span>
                        <span className="font-medium text-slate-800">Garden</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500">Peak Time</span>
                        <span className="font-medium text-slate-800">8:00 AM</span>
                    </div>
                    <div className="pt-3 border-t border-slate-100">
                        <button 
                            onClick={() => setActiveTab('analytics')}
                            className="text-blue-600 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
                        >
                            View Full Analytics <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};
