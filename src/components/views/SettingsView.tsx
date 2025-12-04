import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Bell, Shield, User, Smartphone, LogOut } from 'lucide-react';

interface SettingsViewProps {
  dailyLimit: number;
  setDailyLimit: (limit: number) => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({ dailyLimit, setDailyLimit }) => {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* System Configuration */}
      <Card>
        <CardHeader>
            <CardTitle>System Configuration</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="text-sm font-medium text-slate-700 mb-2 block">Daily Water Limit (Liters)</label>
            <p className="text-xs text-slate-500 mb-3">Set the threshold for daily water consumption alerts.</p>
            <div className="flex gap-2">
              <input 
                type="number" 
                value={dailyLimit}
                onChange={(e) => setDailyLimit(Number(e.target.value))}
                className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Save
              </button>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <div>
                  <span className="text-sm font-medium text-slate-700 block">Smart Valve Control</span>
                  <span className="text-xs text-slate-500">Auto-shutoff when leaks are detected</span>
              </div>
              <div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer transition-colors">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
          <CardHeader>
              <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-slate-500" /> Notifications
              </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
              {['Daily Summary Report', 'Leak Alerts (Critical)', 'Reward Milestones'].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg transition-colors">
                      <span className="text-sm text-slate-700">{item}</span>
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                  </div>
              ))}
          </CardContent>
      </Card>

      {/* Account */}
      <Card>
          <CardContent className="p-0">
              <div className="divide-y divide-slate-100">
                  <button className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 text-left transition-colors">
                      <User className="w-5 h-5 text-slate-400" />
                      <div className="flex-1">
                          <span className="text-sm font-medium text-slate-800 block">Edit Profile</span>
                          <span className="text-xs text-slate-500">Name, Email, Phone</span>
                      </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 hover:bg-slate-50 text-left transition-colors">
                      <Shield className="w-5 h-5 text-slate-400" />
                      <div className="flex-1">
                          <span className="text-sm font-medium text-slate-800 block">Privacy & Security</span>
                          <span className="text-xs text-slate-500">Password, 2FA</span>
                      </div>
                  </button>
                  <button className="w-full flex items-center gap-3 p-4 hover:bg-red-50 text-left transition-colors group">
                      <LogOut className="w-5 h-5 text-red-400 group-hover:text-red-500" />
                      <span className="text-sm font-medium text-red-600">Sign Out</span>
                  </button>
              </div>
          </CardContent>
      </Card>
    </div>
  );
};
