import './App.css';
import { Link } from 'react-scroll';
import { useState, useEffect, useRef } from 'react';
import AboutMe from './pages/AboutMe';

/* 1. section 별 내용 넣기 */
/* 2. motion library로 스크롤 시 애니메이션 구현하기 */
/* 3. article 만들기 => grid로 구현 */
function App() {

  const [showNavBar, setShowNavbar] = useState(true);
  const hideNavBarTimeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
  
      setShowNavbar(true);

      if (hideNavBarTimeoutRef.current) {
        clearTimeout(hideNavBarTimeoutRef.current);
      }

      const timeoutId = setTimeout(() => {
        setShowNavbar(false);
      }, 800); 

      hideNavBarTimeoutRef.current = timeoutId;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (hideNavBarTimeoutRef.current) {
        clearTimeout(hideNavBarTimeoutRef.current);
      }
    };
  }, []); 

  return (
    <>
      <header className={showNavBar ? 'visible' : 'hidden'}>
        <nav className='navBar'>
          <Link to='A' smooth={true} duration={500}><span className='navText'>About me</span></Link>
          <Link to='B' smooth={true} duration={500}><span className='navText'>History</span></Link>
          <Link to='C' smooth={true} duration={500}><span className='navText'>Skills & Tools</span></Link>
          <Link to='D' smooth={true} duration={500}><span className='navText'>Projects</span></Link>
        </nav>
      </header>
      
      <main>
        <AboutMe />
        
        <section id='B'>
          <h1>History</h1>
          <h2>숭실대학교 IT대학 AI융합학부 재학 중 (2020.03 ~ 현재)</h2>
          <h2>LG AIMERS 4기 수료 (2024.01 ~ 2024.02)</h2>
          <h2>대학생 인공지능 개발 동아리 프로메테우스 6기 부원 (2024.09 ~ 현재)</h2>
          <h2>SKT FLY AI CHALLENGERS 6기 AI 부트캠프 수료 (2024.12 ~ 2025.02)</h2>
          <h2>B</h2>
          <h2>B</h2>
          <h2>B</h2>
          <h2>B</h2>
          <h2>B</h2>
          <h2>B</h2>
        </section>
        <section id='C'>
          <h1>Skills & Tools</h1>
          <h2>- Languages -</h2>
          <h3>HTML</h3>
          <h3>JavaScript</h3>
          <h3>Python</h3>
          <br />
          <h2>- FE -</h2>
          <h3>React</h3>
          <h3>React Native</h3>
          <h3>CSS</h3>
          <h3>Zustand</h3>
          <br />
          <h2>- BE -</h2>
          <h3>nodeJS</h3>
          <h3>MySQL</h3>
          <h3>ORM - prisma</h3>
          <br />
          <h2>- Tools -</h2>
          <h3>Figma</h3>
          <h3>Notion</h3>
          <h3>Git</h3>
        </section>
        <section id='D'>
          <h1>Projects</h1>
          <h2>Renew Wear</h2>
          <h3>FE, 디자인</h3>
          <p>pages + components 구조</p>
          <p>타과에서 와서 개발을 아예 모르는 친구와 함께 FE를 하기 위해, 같이 스터디, 내용 정리 등을 직접 계획하여 좋은 성과를 냄</p>
          <br />

          <h2>EncapMoments (우수작으로 선정되어 확장 후 교내 경진대회 예정)</h2>
          <h3>FE, 디자인, 기획 (조장)</h3>
          <p>제작 기간: 2025.03 ~ 2025.06</p>
          <p>팀원: BE(2명), FE(1명)</p>
          <p><b>FE - RN bare CLI + MVVM</b></p>
          <p>협업 중심 - mock data 만들어서 개발</p>
          <p>json 꼴로 데이터 만든 후, if(useMock)으로 BE 사용 여부 결정</p>
          <p>react-native-svg 사용하여 TabBar 구성</p>
          <p>svg + reanimated로 미션 생성 시 지연되는 시간에 skeleton UI 구현</p>
          <p>BE 배포 - EC2 + NGINX + pm2</p>
          <p>ORM - prisma 사용</p>
          <br />

          <h2>포트폴리오</h2>
          <p>FE</p>
          <br />

          <h2>의료 AI agent (제작 중, troubleShooting 한 거 보여주기)</h2>
          <h3>FE, BE, AI</h3>
          <p>팀원: AI(3명), 개발(1명), 기획 및 디자인(1명)</p>
          <p><b>FE - RN bare CLI + MVVM</b></p>
          <p><b>BE - nodeJS + MVC</b></p>
          <p>ORM - prisma 사용</p>
          <p>BE 배포 - EC2 + NGINX + pm2</p>
          <p><b>AI - FastAPI</b></p>
          <p>simple RAG를 위한 병원 공공 데이터 수집하여 excel file로 제작</p>
          <p>AI 기능 중 일부 구현 (simple RAG)</p>
          <p>모델마다 다른 라이브러리 버전, 파이썬 버전 대비 docker로 inference 서버를 각각 씌움</p>
          
          <p>AI 배포 - Ngrok</p>
          <p>혼자 빠른 개발을 해야하므로, Github Actions로 CI/CD 구축하여 BE 배포</p>
          <br />
          <h2>FLY AI Project</h2>
          <h3>기획</h3>
          <p>사업가 대표님, 대학교수, 변리사, SKT 임원 등 다양한 멘토로부터 서비스 아이디어 개선</p>
          <p>서비스 이용성, 접근성, BM, 핵심 아이디어 등 다양한 고려할 점들을 생각하는 계기가 됨</p>
        </section>
      </main>
      <footer />
    </>
  )
}

export default App;