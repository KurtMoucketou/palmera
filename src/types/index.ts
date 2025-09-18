export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Prestation {
  id: number;
  title: string;
  description: string;
  images: string[];
  category: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
}

export interface ChatMessage {
  id: number;
  message: string;
  isUser: boolean;
  timestamp: Date;
}