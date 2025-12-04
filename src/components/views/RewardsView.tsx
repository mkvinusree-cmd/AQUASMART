import React from 'react';
import { RewardsSection } from '../RewardsSection';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Lock, Star, Zap } from 'lucide-react';

export const RewardsView = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <RewardsSection />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" /> Available Challenges
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {[
                    { title: "Under 400L Week", reward: "500 pts", progress: 80, color: "bg-blue-500" },
                    { title: "No Leaks Month", reward: "1000 pts", progress: 100, color: "bg-green-500" },
                    { title: "Garden Saver", reward: "300 pts", progress: 45, color: "bg-orange-500" },
                ].map((challenge, idx) => (
                    <div key={idx} className="p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                        <div className="flex justify-between mb-2">
                            <span className="font-medium text-slate-800 text-sm">{challenge.title}</span>
                            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">{challenge.reward}</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full ${challenge.color}`} style={{ width: `${challenge.progress}%` }}></div>
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-purple-500" /> Locked Badges
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="aspect-square rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400">
                            <Lock className="w-6 h-6" />
                            <span className="text-[10px] font-medium">Level {i + 5}</span>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
};
