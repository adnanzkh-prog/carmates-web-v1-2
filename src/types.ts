// Car/Listing related types
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  colour: string;
  vin?: string;
  description: string;
  images: string[];
  isMatesPick: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Listing extends Car {}

// Enquiry related types
export interface Enquiry {
  id: string;
  listingId: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  status: 'pending' | 'contacted' | 'closed';
  createdAt: Date;
}

// Filter types
export interface FilterOptions {
  make?: string;
  model?: string;
  minPrice?: string;
  maxPrice?: string;
  year?: string;
  fuelType?: string;
  page?: string;
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

export interface ListingsResponse extends ApiResponse<Listing[]> {}
export interface EnquiryResponse extends ApiResponse<Enquiry> {}
