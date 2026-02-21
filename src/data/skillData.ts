import type { SkillCategory } from '@/types';

const skills: SkillCategory[] = [
  {
    title: 'Language',
    items: [
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Python', icon: 'python' },
    ],
  },
  {
    title: 'FrontEnd',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'React\nNative', icon: 'react' },
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'Tanstack\nQuery', icon: 'tanstack_query' },
      { name: 'HTML', icon: 'html' },
      { name: 'CSS', icon: 'css' },
      { name: 'Styled\nComponents', icon: 'styled_components' },
      { name: 'Tailwind', icon: 'tailwind' },
    ],
  },
  {
    title: 'BackEnd',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Prisma', icon: 'prisma' },
    ],
  },
  {
    title: 'Deployment',
    items: [
      { name: 'AWS', icon: 'aws' },
      { name: 'Azure', icon: 'azure' },
    ],
  },
  {
    title: 'ETC',
    items: [
      { name: 'ML / DL', icon: 'mldl' },
      { name: 'Data\nAnalysis', icon: 'data_analysis' },
      { name: 'Claude\nCode', icon: 'claude_code' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Notion', icon: 'notion' },
      { name: 'Slack', icon: 'slack' },
    ],
  },
];

export default skills;
