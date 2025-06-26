import { Track, Analytics, Notification } from '../types';

export const mockTracks: Track[] = [
  {
    id: '1',
    title: 'Midnight Dreams',
    artist: 'Luna Echo',
    genre: 'Electronic',
    language: 'English',
    coverArt: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
    audioFile: 'midnight-dreams.mp3',
    platforms: ['Spotify', 'Apple Music', 'YouTube Music'],
    status: 'live',
    uploadDate: '2024-01-15',
    streams: 125000,
    downloads: 8500,
    royalties: 625.50
  },
  {
    id: '2',
    title: 'Urban Sunrise',
    artist: 'City Vibes',
    genre: 'Hip Hop',
    language: 'English',
    coverArt: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
    audioFile: 'urban-sunrise.mp3',
    platforms: ['Spotify', 'SoundCloud'],
    status: 'approved',
    uploadDate: '2024-01-20',
    streams: 45000,
    downloads: 2300,
    royalties: 225.75
  },
  {
    id: '3',
    title: 'Ocean Waves',
    artist: 'Serene Sound',
    genre: 'Ambient',
    language: 'Instrumental',
    coverArt: 'https://images.pexels.com/photos/1426718/pexels-photo-1426718.jpeg',
    audioFile: 'ocean-waves.mp3',
    platforms: ['Apple Music', 'YouTube Music', 'Deezer'],
    status: 'pending',
    uploadDate: '2024-01-25',
    streams: 0,
    downloads: 0,
    royalties: 0
  }
];

export const mockAnalytics: Analytics = {
  totalStreams: 170000,
  totalDownloads: 10800,
  totalRoyalties: 851.25,
  monthlyData: [
    { month: 'Jan', streams: 25000, downloads: 1500, royalties: 125.50 },
    { month: 'Feb', streams: 32000, downloads: 2100, royalties: 160.75 },
    { month: 'Mar', streams: 28000, downloads: 1800, royalties: 140.25 },
    { month: 'Apr', streams: 35000, downloads: 2200, royalties: 175.80 },
    { month: 'May', streams: 42000, downloads: 2800, royalties: 210.90 },
    { month: 'Jun', streams: 38000, downloads: 2400, royalties: 190.45 }
  ]
};

export const mockNotifications: Notification[] = [
  {
    id: '1',
    message: 'Your track "Midnight Dreams" has been approved and is now live!',
    type: 'success',
    timestamp: '2024-01-26T10:30:00Z'
  },
  {
    id: '2',
    message: 'Monthly royalty payment of $851.25 has been processed.',
    type: 'info',
    timestamp: '2024-01-25T14:15:00Z'
  },
  {
    id: '3',
    message: 'Your track "Ocean Waves" is pending review.',
    type: 'warning',
    timestamp: '2024-01-25T09:45:00Z'
  }
];