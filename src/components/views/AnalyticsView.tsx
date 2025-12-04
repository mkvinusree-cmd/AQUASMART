import React from 'react';
import { AnalyticsChart } from '../AnalyticsChart';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { weeklyData, monthlyData } from '../../data/mockData';
import { CalendarDays, TrendingUp, AlertCircle } from 'lucide-react';

export const AnalyticsView = () => {
  return (
    <div className="space-y-6">
      {/* Main Chart */}
      <AnalyticsChart weeklyData={weeklyData} monthlyData={monthlyData} />

      {/* Detailed Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" /> Monthly Trend
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-slate-800">+5.2%</div>
                <p className="text-xs text-slate-400 mt-1">Compared to last month</p>
                <div className="mt-4 h-1 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 w-[60%]"></div>
                </div>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                    <CalendarDays className="w-4 h-4" /> Peak Usage Day
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-slate-800">Saturday</div>
                <p className="text-xs text-slate-400 mt-1">Average 520L consumption</p>
            </CardContent>
        </Card>

        <Card>
            <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-500 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" /> Anomalies
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold text-slate-800">0 Detected</div>
                <p className="text-xs text-slate-400 mt-1">System flow is normal</p>
            </CardContent>
        </Card>
      </div>

      {/* History Table (Mock) */}
      <Card>
          <CardHeader>
              <CardTitle>Recent High Usage Events</CardTitle>
          </CardHeader>
          <CardContent>
              <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                      <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                          <tr>
                              <th className="px-4 py-3">Date</th>
                              <th className="px-4 py-3">Room</th>
                              <th className="px-4 py-3">Amount</th>
                              <th className="px-4 py-3">Status</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr className="border-b border-slate-100">
                              <td className="px-4 py-3 font-medium">Oct 24, 2023</td>
                              <td className="px-4 py-3">Garden</td>
                              <td className="px-4 py-3">210L</td>
                              <td className="px-4 py-3"><span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full text-xs">High</span></td>
                          </tr>
                          <tr className="border-b border-slate-100">
                              <td className="px-4 py-3 font-medium">Oct 22, 2023</td>
                              <td className="px-4 py-3">Master Bathroom</td>
                              <td className="px-4 py-3">180L</td>
                              <td className="px-4 py-3"><span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">Critical</span></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </CardContent>
      </Card>
    </div>
  );
};
