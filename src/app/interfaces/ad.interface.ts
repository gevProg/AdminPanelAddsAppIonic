export interface Ad {
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  startDate: Date;
  endDate: Date;
  status: 'active' | 'inactive' | 'pending';
  category: string;
  createdAt: Date;
  updatedAt: Date;
}