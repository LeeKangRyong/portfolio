export interface FAQ {
  question: string;
  answer: string;
}

export interface Project {
  id: number;
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
  topcolor: string;
  faqData: FAQ[];
}
