import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Trophy, Award, Droplet, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export const RewardsSection = () => {
  return (
    <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-300" />
            Eco Rewards
          </CardTitle>
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
            Level 5
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Points</p>
              <h2 className="text-3xl font-bold">2,450</h2>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Award className="w-6 h-6 text-yellow-300" />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-blue-100">
              <span>Next Reward: Smart Nozzle</span>
              <span>85%</span>
            </div>
            <div className="h-2 bg-black/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-yellow-400 rounded-full" 
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-2">
             {[
               { icon: Droplet, label: 'Water Saver', active: true },
               { icon: Leaf, label: 'Eco Friendly', active: true },
               { icon: Award, label: 'Top 1%', active: false },
             ].map((badge, idx) => (
               <div key={idx} className={`flex flex-col items-center gap-1 p-2 rounded-lg ${badge.active ? 'bg-white/10' : 'bg-black/10 opacity-50'}`}>
                 <badge.icon className={`w-5 h-5 ${badge.active ? 'text-cyan-300' : 'text-gray-300'}`} />
                 <span className="text-[10px] text-center leading-tight">{badge.label}</span>
               </div>
             ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
