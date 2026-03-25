export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  duration: string;
  thumbnail: string;
  category: string;
  outcomes: string[];
  curriculum: {
    title: string;
    lessons: string[];
  }[];
}

export interface RoadmapItem {
  title: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
