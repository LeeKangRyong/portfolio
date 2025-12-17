interface FAQType {
    question: string;
    answer: string;
}

export interface ProjectType {
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
    faqData: FAQType[];
}

const projects: ProjectType[] = [
    {
        "id": 1,
        "titleImg": "project1_portfolio",
        "title": "포트폴리오",
        "description": "개인 포트폴리오 웹사이트",
        "member": "개발(1명)",
        "role": "전체",
        "duration": "2025.06 ~ 2025.07 (2주)",
        "stacks": [
            "React", "JavaScript", "HTML", "CSS", "Netlify", "Framer Motion"
        ],
        "githubLink": "https://github.com/LeeKangRyong/portfolio",
        "resultImg": [
            "project1_portfolio1", "project1_portfolio2", "project1_portfolio3", "project1_portfolio4"
        ],
        "arcImg": "project1_portfolio_arc",
        "topcolor": "#252c26",
        "faqData": [
            {
                "question": "포트폴리오 사이트를 개발한 이유는 무엇인가요?",
                "answer": "기존 템플릿 기반 포트폴리오의 한계를 느꼈습니다. 직접 개발함으로써 개발 역량과 디자인 감각을 동시에 보여주고, 완전한 반응형 웹사이트 구축 경험을 쌓고 싶었습니다."
            },
            {
                "question": "중점으로 둔 기술적 도전은 무엇인가요?",
                "answer": "성능 최적화와 사용자 경험에 집중했습니다. lazy loading, 이미지 최적화, 번들 크기 최소화를 통해 빠른 로딩 속도를 구현했고, 모든 애니메이션에 최적화된 easing 함수를 적용했습니다."
            },
            {
                "question": "반응형은 어떻게 구현했나요?",
                "answer": "CSS Grid와 Flexbox를 활용해 4단계 브레이크포인트(Desktop, Tablet, Mobile, Small Mobile)를 설정했습니다. rem 단위와 clamp() 함수로 유연한 타이포그래피를 구현하여 모든 기기에서 최적의 가독성을 제공합니다."
            },
            {
                "question": "Custom Hooks는 어떤 것들을 왜 사용했나요?",
                "answer": "useAssets(동적 이미지 로딩), useModal(모달 상태 관리), useHover(인터랙션 상태)를 구현했습니다. 관심사 분리와 재사용성을 높이고, 컴포넌트 로직을 단순화하여 유지보수성을 개선했습니다."
            },
            {
                "question": "Framer Motion 적용은 어떻게 하시게 되었나요?",
                "answer": "페이지 전환과 스크롤 애니메이션에 물리 기반 spring 애니메이션을 적용했습니다. intersection observer API와 연동해 viewport 진입 시 자연스러운 fade-in 효과를 구현하고, 사용자 인터랙션에 즉각적인 피드백을 제공합니다."
            }
        ]
    },
    {
        "id": 2,
        "titleImg": "project2_encap",
        "title": "Encap Moments",
        "description": "AI 미션 기반 추억을 만들고 저장하는 가족 공유 앱서비스",
        "member": "BE(2명), FE(1명)",
        "role": "FE, 디자인, 기획 (조장)",
        "duration": "2025.03~2025.05",
        "stacks": [
            "React Native", "JavaScript", "HTML", "CSS", "AWS", "NGINX", "pm2"
        ],
        "githubLink": "https://github.com/encapmoments",
        "resultImg": [    
            "project2_encap1", "project2_encap2", "project2_encap3", "project2_encap4"
        ],
        "arcImg": "project2_encap_arc",
        "topcolor": "#aaab52",
        "faqData": [
            {
                "question": "이 서비스를 어떻게 만들게 되었나요?",
                "answer": "인스타그램처럼 즉석에서 공유하는 SNS와 달리, '의도적으로 기다리는' 경험을 제공하고 싶었습니다. 미래의 나에게 보내는 편지처럼, 시간이 지나야 열 수 있는 디지털 타임캡슐 개념으로 차별화했습니다."
            },
            {
                "question": "사용한 기술 및 구조에 대해 간략히 설명해주세요!",
                "answer": "React Native로 크로스플랫폼 구현, Redux Toolkit으로 전역 상태 관리, AWS S3로 미디어 파일 저장, JWT 기반 인증을 적용했습니다. MVVM 패턴으로 비즈니스 로직과 UI를 분리하여 테스트 용이성을 높였습니다."
            },
            {
                "question": "조장으로써 협업 시 문제는 어떻게 해결했나요?",
                "answer": "Git Flow 브랜칭 전략을 도입하고, 매일 스탠드업 미팅으로 진행 상황을 공유했습니다. API 문서를 Swagger로 표준화하고, 코드 리뷰 규칙을 정해 코드 품질을 관리했습니다. 갈등 발생 시 기술적 근거를 바탕으로 의사결정했습니다."
            },
            {
                "question": "주요 기술적 도전과 구현 방법은 무엇이인가요?",
                "answer": "대용량 이미지/영상 업로드 최적화가 가장 큰 도전이었습니다. 멀티파트 업로드와 이미지 압축을 구현하고, 업로드 진행률 표시와 에러 핸들링을 통해 UX를 개선했습니다. 또한 오프라인 모드에서도 작동하도록 로컬 스토리지를 활용했습니다."
            },
            {
                "question": "우수작으로 선정된 비결은 무엇인가요?",
                "answer": "기술적 완성도와 실용성의 균형이었다고 생각합니다. 단순한 CRUD를 넘어 실시간 알림, 위치 기반 서비스, 소셜 기능을 통합했고, 실제 사용자 테스트를 통해 검증된 UX를 제공했습니다. 특히 '기다림'이라는 감정적 가치를 기술로 구현한 점이 차별화 요소였습니다."
            }
        ]
    },
    {
        "id": 3,
        "titleImg": "project3_renew",
        "title": "Renew Wear",
        "description": "의류 중고거래 플랫폼 웹 어플리케이션",
        "member": "BE(2명), FE(2명)",
        "role": "FE, 기획 (팀원)",
        "duration": "2024.03 ~ 2024.06",
        "stacks": [
            "React", "JavaScript", "HTML", "CSS"
        ],
        "githubLink": "https://github.com/RenewWear/Front_Final",
        "resultImg": [
            "project3_renew1", "project3_renew2", "project3_renew3", "project3_renew4"
        ],
        "arcImg": "project3_renew_arc",
        "topcolor": "#2ba23c",
        "faqData": [
            {
                "question": "이 서비스를 어떻게 만들게 되었나요?",
                "answer": "전 세계 의류 산업이 환경에 미치는 영향을 조사하다가 충격을 받았습니다. 연간 920억 벌의 옷이 생산되고 73%가 매립되는 현실을 보고, 기술로 순환경제를 만들 수 있다고 생각했습니다. 단순 중고거래가 아닌 '새로운 가치 창조' 플랫폼을 목표했습니다."
            },
            {
                "question": "첫 협업에다가 코딩도 모르는데 어떻게 하였나요?",
                "answer": "React 공식 문서와 생활코딩을 병행하며 기초를 다졌습니다. Hook의 의존성 배열 개념이 어려워 무한 렌더링 이슈를 겪었지만, 디버깅 과정에서 React의 렌더링 원리를 깊이 이해하게 되었습니다. 매일 코드 리뷰를 받으며 점진적으로 성장했습니다."
            },
            {
                "question": "프로젝트에서 실패한 부분과 성찰할 점은 무엇인가요?",
                "answer": "상태 관리의 복잡성을 과소평가했습니다. props drilling 문제로 코드가 복잡해졌고, Context API 도입이 늦었습니다. 또한 컴포넌트를 너무 세분화해서 오히려 유지보수가 어려워졌습니다. 다음 프로젝트에서는 적절한 추상화 레벨을 찾는 것이 중요하다고 배웠습니다."
            },
            {
                "question": "첫 프로젝트를 통해 배운 점은 무엇인가요?",
                "answer": "기술적으로는 React의 컴포넌트 생명주기와 상태 관리 패턴을 익혔습니다. 하지만 더 중요한 것은 '사용자 중심 사고'였습니다. 개발자가 편한 구조와 사용자가 편한 UX는 다르다는 것을 깨달았고, 실제 사용자 피드백의 중요성을 체감했습니다."
            }
        ]
    },
    {
        "id": 4,
        "titleImg": "project4_medical",
        "title": "의료 AI agent",
        "description": "AI 기반 의료 상담, 진단, 예약 종합 앱서비스",
        "member": "AI(3명), 개발(1명), 디자인 및 기획(1명)",
        "role": "FE, BE (팀원)",
        "duration": "2025.05 ~ 2025.07 (제작 중)",
        "stacks": [
            "React Native", "JavaScript", "HTML", "CSS",
            "Node.js", "MySQL", "Prisma", "AWS", "NGINX", "pm2",
            "Github Actions", "Ngrok", "Python", "FastAPI"
        ],
        "githubLink": "https://github.com/prome-individual",
        "resultImg": [
            "project4_medical1", "project4_medical2", "project4_medical3", "project4_medical4"
        ],
        "arcImg": "project4_medical_arc",
        "topcolor": "#dc2626",
        "faqData": [
            {
                "question": "이 서비스를 어떻게 만들게 되었나요?",
                "answer": "의료진 부족으로 진료 대기시간이 평균 2-3시간인 현실을 보고 문제의식을 느꼈습니다. AI로 1차 스크리닝을 제공해 경증 환자는 셀프케어 가이드를, 중증 의심 환자는 즉시 병원 연결을 목표했습니다. 의료진을 대체하는 것이 아닌 효율적인 의료 접근성을 제공하고자 했습니다."
            },
            {
                "question": "개발이 어디까지 진행됐는지 설명해주세요.",
                "answer": "MVP 우선순위를 명확히 정하고 모듈화 개발을 했습니다. React Native로 UI를 먼저 구현하고, Node.js+Express로 RESTful API를 설계했습니다. Prisma ORM으로 데이터베이스 스키마 관리를 자동화하고, 에러 핸들링과 로깅 시스템을 체계화해 디버깅 시간을 단축했습니다."
            },
            {
                "question": "CI/CD는 어떻게 왜 사용하였나요?",
                "answer": "AI 모델 업데이트가 빈번해 수동 배포로는 한계가 있었습니다. GitHub Actions로 테스트 자동화와 배포 파이프라인을 구축해 코드 푸시 시 자동으로 린트, 테스트, 빌드, 배포가 진행되도록 했습니다. 롤백 기능도 구현해 장애 발생 시 즉시 이전 버전으로 복구 가능합니다."
            },
            {
                "question": "AI 모델 연결은 어떻게 하였나요?",
                "answer": "각 AI 모델(증상 분석, 이미지 진단, 자연어 처리)을 독립적인 Docker 컨테이너로 분리했습니다. FastAPI로 모델 서빙 서버를 구축하고, API Gateway 패턴으로 라우팅을 관리합니다. 모델별 다른 Python 버전과 라이브러리 충돌 문제를 해결하고, 수평 확장이 가능한 구조로 설계했습니다."
            },
            {
                "question": "팀원들과 갈등을 어떻게 해결하였나요?",
                "answer": "AI팀과 개발팀 간 데이터 포맷 불일치로 갈등이 있었습니다. Swagger로 API 명세를 표준화하고, 모든 데이터 교환을 JSON Schema로 검증하도록 했습니다. 주 2회 크로스 팀 미팅을 통해 기술적 이슈를 조기에 발견하고, Slack 채널로 실시간 소통을 활성화해 갈등을 예방했습니다."
            }
        ]
    }
];

export default projects;