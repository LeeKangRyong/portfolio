import type { FAQ } from './project';
import type { SkillItem } from './skill';

export interface ModalProps {
  onClose: () => void;
  title: string;
  duration: string;
  resultImg: string[];
  arcImg: string;
  faqData: FAQ[];
  topcolor: string;
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
  stack: string;
}

export interface FAQProps {
  question: string;
  answer: string;
}

export interface SkillProps extends SkillItem {}

export interface HistoryProps {
  title: string;
  duration: string;
  description: string;
}

export interface ProjectProps {
  titleImg: string;
  title: string;
  description: string;
  member: string;
  role: string;
  duration: string;
  stacks: string[];
  githubLink: string;
  resultImg: string[];
  arcImg: string;
  faqData: FAQ[];
  topcolor: string;
}
