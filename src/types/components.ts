import type { FaqItem, StackItem } from './project';
import type { SkillItem } from './skill';

export interface ModalProps {
  onClose: () => void;
  type: 'web' | 'app';
  title: string;
  duration: string;
  summary: string[];
  architecture: string;
  faq: FaqItem[];
  headerColor: string;
}

export interface ZoomProps {
  imageSrc: string;
  altText: string;
  onClose: () => void;
}

export interface SkeletonProps {
  onComplete: () => void;
}

export interface StackProps {
  name: string;
  icon: string;
}

export interface FaqItemProps {
  question: string;
  answer: string;
}

export type SkillProps = SkillItem;

export interface HistoryProps {
  title: string;
  duration: string;
  description: string;
}

export interface ProjectProps {
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
  faq: FaqItem[];
  headerColor: string;
}
