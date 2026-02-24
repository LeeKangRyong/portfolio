export interface FaqItem {
  question: string;
  answer: string;
}

export interface StackItem {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  type: 'web' | 'app';
  titleImg: string;
  title: string;
  description: string;
  member: string;
  role: string;
  duration: string;
  stack: StackItem[];
  github: string;
  demo?: string;
  summary: string[];
  architecture: string;
  headerColor: string;
  faq: FaqItem[];
}
