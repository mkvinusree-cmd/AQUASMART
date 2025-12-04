import { RoomData, DailyUsage, MonthlyUsage } from '../types';

export const mockRooms: RoomData[] = [
  { id: '1', name: 'Master Bathroom', usage: 145, limit: 150, icon: 'bathroom' },
  { id: '2', name: 'Kitchen', usage: 45, limit: 80, icon: 'kitchen' },
  { id: '3', name: 'Garden', usage: 210, limit: 200, icon: 'garden' },
  { id: '4', name: 'Laundry Room', usage: 80, limit: 100, icon: 'laundry' },
];

export const weeklyData: DailyUsage[] = [
  { day: 'Mon', usage: 320 },
  { day: 'Tue', usage: 280 },
  { day: 'Wed', usage: 450 },
  { day: 'Thu', usage: 390 },
  { day: 'Fri', usage: 310 },
  { day: 'Sat', usage: 520 },
  { day: 'Sun', usage: 480 },
];

export const monthlyData: MonthlyUsage[] = [
  { month: 'Jan', usage: 12000 },
  { month: 'Feb', usage: 11500 },
  { month: 'Mar', usage: 13000 },
  { month: 'Apr', usage: 12500 },
  { month: 'May', usage: 14000 },
  { month: 'Jun', usage: 15500 },
];
