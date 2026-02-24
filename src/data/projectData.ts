import type { Project } from '@/types';

const projects: Project[] = [
  {
    id: 1,
    titleImg: 'zzan_zzan_intro',
    title: 'ZZAN',
    description: '전통주 경험 공유 SNS',
    member: 'FE (1), BE (1), Design (1), PM (1)',
    role: 'FE',
    duration: '2026.01 - 현재 (서비스 운영 중)',
    stack: [
      { name: 'RN Expo', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'HTML', icon: 'html' },
      { name: 'TailwindCSS', icon: 'tailwind' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'Tanstack Query', icon: 'tanstack_query' },
      { name: 'Claude Code', icon: 'claude_code' },
    ],
    github: 'https://github.com/zzan-app/zzan-fe-app',
    type: 'app',
    summary: [
      'zzan_zzan_map',
      'zzan_zzan_chat',
      'zzan_zzan_feed',
      'zzan_zzan_alcohol',
    ],
    architecture: 'zzan_zzan_architecture',
    headerColor: '#FFD800',
    faq: [
      {
        question: '이 서비스를 왜 만들게 되었나요?',
        answer:
          '주류 중 유일하게 온라인판매가 가능한 전통주라는 키워드에 꽂혀 개발하게 되었습니다. MZ세대가 전통주에 대한 관심은 높지만 경험이 부족하여, 경험을 미리 시켜주고 공유하는 SNS를 기획했습니다.',
      },
      {
        question: '성능 개선 사례는 무엇인가요?',
        answer:
          '현재 위치 주변 피드 목록을 지도에 마커로 띄울 때 성능 저하가 발생하였습니다. 따라서, 디바운싱 + 프리패칭 + 디핑을 이용하여 피드 목록 조회를 현저히 감소시켰고, 이로 인해 지도 화면 프레임 드랍 현상이 해결되었습니다.',
      },
      {
        question: '운영 현황이 궁금하고 앞으로의 계획이 궁금해요!',
        answer:
          '현재는 One Store에만 배포돼있지만, 기능 확장 및 iOS 개발 후 Google Play 및 App Store에도 2026.03 중순까지 배포할 계획입니다. 또한, 사용자 피드백 기반 서비스 개선도 수행할 게획입니다.',
      },
    ],
    demo: 'https://m.onestore.co.kr/v2/ko-kr/app/0001003973',
  },
  {
    id: 2,
    titleImg: 'teamworks_teamworks_intro',
    title: 'TeamWorks',
    description:
      '협업 시 발생하는 무임승차 문제를 데이터 기반으로 해결하는 공정 협업 관리 플랫폼',
    member: 'FE (1), BE (1), Design (1), PM (1)',
    role: 'FE',
    duration: '2025.08 - 2025.11',
    stack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TailwindCSS', icon: 'tailwind' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'Netlify', icon: 'netlify' },
      { name: 'Github Actions', icon: 'github' },
    ],
    github: 'https://github.com/LeeKangRyong/teamworks-fe',
    type: 'web',
    summary: [
      'teamworks_teamworks_dashboard',
      'teamworks_teamworks_list',
      'teamworks_teamworks_participation',
      'teamworks_teamworks_chat',
    ],
    architecture: 'teamworks_teamworks_architecture',
    headerColor: '#C3D6FE',
    faq: [
      {
        question: '이 서비스를 왜 만들게 되었나요?',
        answer:
          '팀프로젝트를 할 때 일부 팀원이 참여하지 않고도 같은 점수를 받아가는 무임승차 문제를 해결하기 위해 기획하였습니다. Admin은 통게적 기준으로 판단된 무임승차자를 볼 수 있고 User는 팀프로젝트를 수행하며 프로젝트 관리 및 수행이 동시에 가능한 플랫폼을 기획했습니다.',
      },
      {
        question: 'FSD 아키텍처 선정 이유는 무엇인가요?',
        answer:
          '공모전 출품 주제가 Cloud-Native한 대규모 서비스 제작이였습니다. 따라서, 대규모 서비스를 위해 백엔드에서 MSA 아키텍처를 채용하였습니다. 프론트엔드는 바로 MFA 도입은 무리라고 생각하여, 기능 및 도메인 별로 세세히 나눌 수 있는 FSD 아키텍처를 도입했습니다. 또한, 확장될 모바일 서비스는 UI가 아예 다를 수 있어 BFF 아키텍처도 추가로 제안하였습니다.',
      },
      {
        question: '성능 개선 사례는 무엇인가요?',
        answer:
          '폰트 로딩 중 기본 폰트가 노출되어 화면 배치가 어긋나는 Layout Shift 문제가 발생했습니다. 따라서 최상위 레이아웃에 Splash 화면을 도입하여 문제를 해결하고 초기 렌더링 관련 UX를 개선시켰습니다.',
      },
      {
        question: '또 다른 성능 개선 사례는 무엇인가요?',
        answer:
          'PDF 뷰어 페이지 관련하여 PDF 리소스 및 관련 라이브러리로 인해 초기 페이지 로딩 속도 저하 문제가 발생하였습니다. 따라서 next/dynamic을 활용한 lazy loading을 활용하여 초기 렌더링 시간 단축 및 PDF 뷰어 페이지 진입 속도를 향상시켰습니다.',
      },
      {
        question: '서비스 확장 계획이 있나요?',
        answer:
          '네, 프로젝트 도중 백엔드 개발자가 중간에 이탈하여 마감일 이슈로 인해 빠른 JavaScript 개발로 완성하였습니다. 기능 구현 또는 개선과 동시에 TypeScript로 migration 작업을 할 계획입니다.',
      },
    ],
    demo: 'https://teamworks-space.site',
  },
  {
    id: 3,
    titleImg: 'portfolio_portfolio_intro',
    title: '포트폴리오 웹사이트',
    description: '개인 포트폴리오 웹사이트 (2026.ver)',
    member: '전체 (1)',
    role: '전체',
    duration: '2025.08, 2026.02 (Renewal)',
    stack: [
      { name: 'React', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'TailwindCSS', icon: 'tailwind' },
      { name: 'Motion', icon: 'motion' },
      { name: 'Netlify', icon: 'netlify' },
      { name: 'Figma', icon: 'figma' },
    ],
    github: 'https://github.com/LeeKangRyong/portfolio',
    type: 'web',
    summary: [
      'portfolio_portfolio_skeleton',
      'portfolio_portoflio_history',
      'portfolio_portfolio_projects',
      'portfolio_portofolio_modal',
    ],
    architecture: 'portfolio_portfolio_architecture',
    headerColor: '#252c26',
    faq: [
      {
        question: '포트폴리오 사이트를 개발한 이유는 무엇인가요?',
        answer:
          '제 포트폴리오를 다이나믹하게 만들고 인터넷 상에 효과적으로 드러내기 위해 기획하였습니다.',
      },
      {
        question: '성능 개선 사례는 무엇인가요?',
        answer:
          '프로젝트 상세 모달에서 고해상도 이미지로 인해 해당 페이지 렌더링 지연 및 UX 저하 문제가 발생했습니다. 따라서, Vite에서 eager 설정을 통해 asset을 사전에 로딩하고, 초기 접속 시 Skeleton UI를 도입 및 webp 변환을 통해 이미지 최적화를 수행하였습니다. 이로 인해 이미지 크기 85% 감소 및 체감 성능을 극대화시키고 UX 안정성을 확보하였습니다.',
      },
      {
        question: '확장 계획은 무엇인가요?',
        answer:
          '현대 디자인에 맞게 계속해서 디자인을 수정하고 데이터를 업데이트할 계획입니다. 또한, SSR을 도입하여 SEO 최적화를 통해 외부에 저를 노출시킬 계획입니다.',
      },
    ],
    demo: 'https://portfolio-krlee.netlify.app',
  },
  {
    id: 4,
    titleImg: 'kong_kong_intro',
    title: '당신의 AI 심장비서, 콩콩',
    description:
      'RAG 기반 AI Agent 콩콩이를 탑재한 진단, 질의응답 및 병원 추천 종합 헬스케어 앱',
    member: 'FE/BE (1), Design (1), AI (3)',
    role: 'FE/BE',
    duration: '2025.05 ~ 2025.08',
    stack: [
      { name: 'RN bare', icon: 'react' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'HTML', icon: 'html' },
      { name: 'Styled Components', icon: 'styled_components' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Prisma', icon: 'prisma' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Github Actions', icon: 'github' },
    ],
    github: 'https://github.com/prome-individual',
    type: 'app',
    summary: [
      'kong_kong_login',
      'kong_kong_main',
      'kong_kong_chat',
      'kong_kong_diagnose',
    ],
    architecture: 'kong_kong_architecture',
    headerColor: '#DC2626',
    faq: [
      {
        question: '이 서비스를 왜 만들게 되었나요?',
        answer:
          '고령화사회에 접어들면서 전화로 병원 예약하는 것조차 어려워하는 사람들이 많아졌습니다. 따라서, RAG 기반 앱을 통해 진단, 병원 추천, 예약 등 올인원 헬스케어 앱서비르를 기획했습니다.',
      },
      {
        question: '다른 프로젝트와 달리 풀스택 개발을 한 이유는 무엇인가요?',
        answer:
          '인공지능 개발 대학생 동아리에서 만든 프로젝트이므로 실제 개발을 할 줄 아는 사람이 전무했습니다. 서비스의 메인 기능은 AI이므로, 혼자 풀스택 개발을 하고 나머지 AI 팀원은 모델 개발 및 성능 개선에 집중하였습니다.',
      },
      {
        question: 'AI 모델 연결은 어떻게 하였나요?',
        answer:
          'FastAPI를 통해 두 AI 모델(부정맥 진단, RAG)를 각 서버로 만든 후 메인 서버와 연결하였습니다. GPU 서버는 비용이 많이 들어, 데모데이 때는 ngrok을 통해 연결 후 시연하였습니다.',
      },
      {
        question: 'AI 모델 연결은 수월했나요?',
        answer:
          '아니요, AI 팀원분들께서는 파이썬 버전 및 패키지 정리도 다 제각각으로 하여 배포 및 연결이 어려운 상황이였습니다. 따라서, FastAPI 서버 템플릿 및 가이드를 제공해주었고, Swagger API 기반 API 목록을 미리 만들고 제공하여 구현하도록 하였습니다.',
      },
      {
        question: '확장 계획이 있으신가요?',
        answer:
          '현재는 없지만, 기존에 있던 기능인 AI 병원 예약 기능을 구현하지 못하였습니다. 만약 확장한다면 병원 추천에서 나아가 전화통화 후 STT하여 분석된 text 기반 자동 캘린더 일정 저장 기능을 추가하고 싶습니다.',
      },
    ],
  },
  {
    id: 5,
    titleImg: 'encapmoments_encapmoments_intro',
    title: 'EncapMoments',
    description: 'AI 미션 기반 추억을 만들고 저장하는 가족 공유 앱',
    member: 'FE/Design/PM (1), BE (2)',
    role: 'FE/Design/PM',
    duration: '2025.03 - 2025.05',
    stack: [
      { name: 'React Native', icon: 'react' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Styled Components', icon: 'styled_components' },
      { name: 'Zustand', icon: 'zustand' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Notion', icon: 'notion' },
    ],
    github: 'https://github.com/LeeKangRyong/encapmoments-fe',
    type: 'app',
    summary: [
      'encapmoments_encapmoments_main',
      'encapmoments_encapmoments_mission',
      'encapmoments_encapmoments_album',
      'encapmoments_encapmoments_profile',
    ],
    architecture: 'encapmoments_encapmoments_architecture',
    headerColor: '#AAAB52',
    faq: [
      {
        question: '이 서비스를 왜 만들게 되었나요?',
        answer:
          '디지털 사회 및 맞부모가정이 늘어남에 따라 가족 간 소통이 점점 소홀해지는 문제를 해결하고 싶었습니다. 따라서, 가족이 다같이 미션을 수행하고 기록 및 공유할 수 있는 앱서비스를 통해 가족 간 정서적 유대감을 늘리기 위해 기획했습니다.',
      },
      {
        question:
          'PM 및 리더로써 협업 시 문제는 무엇이였으며, 어떻게 해결하였나요?',
        answer:
          '개발 지식이 전무한 백엔드 개발자분들을 위해 백엔드 스터디를 개설 및 운영하였습니다. 기술 스택 선정 후 공부해올 것을 정하고 다같이 리뷰하는 식으로 진행하였으며, 프로젝트 회의 때도 백엔드 코드 리뷰를 다같이 진행하였습니다. 또한, PM으로써 일주일 단위로 Task 설정 후 각 팀원에게 TODO List를 부여하고 관리했습니다.',
      },
      {
        question: '장려상으로 선정된 비결은 무엇인가요?',
        answer:
          '우선 Agile한 협업 기반 팀원 각자가 명확한 역할을 가지고 완성도 높은 앱을 구현하였습니다. 또한 테스터를 모아 시연 후 피드백을 받아 서비스를 개선시키는 과정을 발표자료에 녹여내어 완성도 있는 발표를 한 것이 비결이라고 생각합니다.',
      },
    ],
  },
];

export default projects;
