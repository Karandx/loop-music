export interface User {
  id: string;
  name: string;
  email: string;  
  role: 'artist' | 'admin';
  createdAt: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  genre: string;
  language: string;
  coverArt: string;
  audioFile: string;
  platforms: string[];
  status: 'pending' | 'approved' | 'rejected' | 'live';
  uploadDate: string;
  streams: number;
  downloads: number;
  royalties: number;
}

export interface Analytics {
  totalStreams: number;
  totalDownloads: number;
  totalRoyalties: number;
  monthlyData: {
    month: string;
    streams: number;
    downloads: number;
    royalties: number;
  }[];
}

export interface Notification {
  id: string;
  message: string;
  type: 'success' | 'warning' | 'info';
  timestamp: string;
}