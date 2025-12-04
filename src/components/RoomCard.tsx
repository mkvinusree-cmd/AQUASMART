import React from 'react';
import { RoomData } from '../types';
import { Card, CardContent } from './ui/Card';
import { Droplets, Utensils, Bath, Flower2, Waves } from 'lucide-react';
import { motion } from 'framer-motion';

interface RoomCardProps {
  room: RoomData;
}

const getIcon = (type: string) => {
  switch (type) {
    case 'kitchen': return <Utensils className="w-5 h-5 text-orange-500" />;
    case 'bathroom': return <Bath className="w-5 h-5 text-blue-500" />;
    case 'garden': return <Flower2 className="w-5 h-5 text-green-500" />;
    case 'laundry': return <Waves className="w-5 h-5 text-indigo-500" />;
    default: return <Droplets className="w-5 h-5 text-slate-500" />;
  }
};

export const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const percentage = Math.min((room.usage / room.limit) * 100, 100);
  const isOverLimit = room.usage > room.limit;

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card className={`border-l-4 ${isOverLimit ? 'border-l-red-500' : 'border-l-blue-500'}`}>
        <CardContent className="flex items-center justify-between p-5">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-50 rounded-xl">
              {getIcon(room.icon)}
            </div>
            <div>
              <h4 className="font-medium text-slate-900">{room.name}</h4>
              <p className="text-sm text-slate-500">{room.usage}L / {room.limit}L</p>
            </div>
          </div>
          <div className="w-16 h-16 relative flex items-center justify-center">
             <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className={`${isOverLimit ? 'text-red-500' : 'text-blue-500'} transition-all duration-1000 ease-out`}
                  strokeDasharray={`${percentage}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
              <span className="absolute text-xs font-bold text-slate-700">{Math.round(percentage)}%</span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
