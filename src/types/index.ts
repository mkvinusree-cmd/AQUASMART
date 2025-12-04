export interface RoomData {
  id: string;
  name: string;
  usage: number; // in Liters
  limit: number; // in Liters
  icon: 'kitchen' | 'bathroom' | 'garden' | 'laundry' | 'other';
}

export interface DailyUsage {
  day: string;
  usage: number;
}

export interface MonthlyUsage {
  month: string;
  usage: number;
}

export interface UserSettings {
  dailyLimit: number;
  currency: string; // e.g., 'L' for Liters or 'G' for Gallons
}
