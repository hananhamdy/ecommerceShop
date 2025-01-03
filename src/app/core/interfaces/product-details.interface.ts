export interface ProductDetails {
    image?: string;
    title?: string;
    category?: string;
    description?: string;
    price?: number;
    rating?: {
      count: number,
      rate: number
    };
  }