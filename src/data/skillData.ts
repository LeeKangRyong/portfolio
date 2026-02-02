import type { SkillCategory } from '@/types';

const skills: SkillCategory[] = [
  {
    title: 'FE',
    items: [
      {
        name: 'React',
        description: 'components, custom hook 등 코드\n최적화를 항상 고려하며 개발합니다.',
        icon: 'react',
      },
      {
        name: 'React\nNative',
        description: 'Android 개발 시, React 문법과 \n함께 개발을 수행합니다.',
        icon: 'react',
      },
      {
        name: 'Zustand',
        description: 'accessToken을 관리할 때\n주로 사용하였습니다.',
        icon: 'zustand',
      },
      {
        name: 'Java\nScript',
        description: '현재 주 언어로써 집중적으로\n 공부 중입니다.',
        icon: 'js',
      },
      {
        name: 'HTML',
        description: 'semantic tag를 사용하여\n코드 가독성을 높입니다.',
        icon: 'html',
      },
      {
        name: 'CSS',
        description: 'media query + rem, flexbox\n조합을 주로 사용합니다.',
        icon: 'css',
      },
    ],
  },
  {
    title: 'BE',
    items: [
      {
        name: 'Node.js',
        description: 'NodeJS를 통한 백엔드\n개발이 가능합니다',
        icon: 'nodejs',
      },
      {
        name: 'MySQL',
        description: 'MySQL을 통한 DB 설계 및 백엔드 개발이 가능합니다.',
        icon: 'mysql',
      },
      {
        name: 'Prisma',
        description: '다양한 DB에 대응하고 같은 언어로써\n코드 가독성이 높아져 사용합니다.',
        icon: 'prisma',
      },
    ],
  },
  {
    title: 'ETC',
    items: [
      {
        name: 'Python',
        description: 'Python 및 AI Framework,\nLibrary 사용이 가능합니다.',
        icon: 'python',
      },
      {
        name: 'AI',
        description: '부트캠프, 학교 수업, 동아리 \n등을 통해 이해도가 높습니다.',
        icon: 'ai',
      },
      {
        name: 'Notion',
        description: '템플릿을 직접 만들고 자동화하여\n프로젝트를 수행합니다.',
        icon: 'notion',
      },
      {
        name: 'Figma',
        description: '피그마와 함께 UI 구현을\n많이 해왔습니다.',
        icon: 'figma',
      },
      {
        name: 'Git\nGithub',
        description: 'organiztaion을 만들어 팀원들과\n협업을 많이 해왔습니다.',
        icon: 'github',
      },
      {
        name: 'AWS',
        description: 'EC2, Elastic IP, 보안 그룹 등\n서버 배포에 능숙합니다.',
        icon: 'aws',
      },
      {
        name: 'Docker',
        description: '주로 AI 모델을 각각 docker로\n씌워 패키지 충돌을 방지합니다.',
        icon: 'docker',
      },
      {
        name: 'Github\nActions',
        description: '빠른 개발 시 , BE 수정 및 배포를\n빠르게 하기 위해 사용했습니다.',
        icon: 'github',
      },
    ],
  },
];

export default skills;
