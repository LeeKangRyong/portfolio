import './App.css';
import TopBar from './components/TopBar/TopBar';
import AboutMe from './pages/AboutMe/AboutMe';
import Histories from './pages/History/Histories';
import Skills from './pages/Skill/Skills';
import Projects from './pages/Project/Projects';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import turtle from './assets/turtle.png';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <TopBar />
      
      <motion.img
        src={turtle}
        alt="감자"
        style={{
          position: 'fixed',
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: 0.8
        }}
        animate={{
          x: mousePosition.x - 30,
          y: mousePosition.y - 30,
        }}
        transition={{
          type: "spring",
          stiffness: 100, 
          damping: 20,   
          mass: 0.5       
        }}
      />
      
      <main>
        <section id="A">
          <AboutMe /> 
        </section>

        <section id='B'>
          <Histories />
        </section>

        <section id='C'>
            <Skills />
        </section>

        <section id='D'>  
          <Projects />        
            <div>
              <h2>Renew Wear</h2>
              <h3>FE, 디자인</h3>
              <div>
                <p>pages + components 구조</p>
                <p>타과에서 와서 개발을 아예 모르는 친구와 함께 FE를 하기 위해, 같이 스터디, 내용 정리 등을 직접 계획하여 좋은 성과를 냄</p>
              </div>
            </div>

            <div>
              <h2>EncapMoments</h2>
              <p>(우수작으로 선정되어 확장 후 교내 경진대회 예정)</p>
              <h3>FE, 디자인, 기획 (조장)</h3>
              <div>
                <p><span>제작 기간:</span> 2025.03 ~ 2025.06</p>
                <p><span>팀원:</span> BE(2명), FE(1명)</p>
                <p>FE - RN bare CLI + MVVM</p>
                <ul>
                  <li>협업 중심 - mock data 만들어서 개발</li>
                  <li>json 꼴로 데이터 만든 후, if(useMock)으로 BE 사용 여부 결정</li>
                  <li>react-native-svg 사용하여 TabBar 구성</li>
                  <li>svg + reanimated로 미션 생성 시 지연되는 시간에 skeleton UI 구현</li>
                </ul>
                <p>BE 배포 - EC2 + NGINX + pm2</p>
                <p>ORM - prisma 사용</p>
              </div>
            </div>

            <div>
              <h2>의료 AI agent</h2>
              <p>(제작 중, troubleShooting 한 거 보여주기)</p>
              <h3>FE, BE, AI</h3>
              <div>
                <p><span>팀원:</span> AI(3명), 개발(1명), 기획 및 디자인(1명)</p>
                <div>
                  <div>
                    <p>FE - RN bare CLI + MVVM</p>
                    <p>BE - nodeJS + MVC</p>
                    <ul>
                      <li>ORM - prisma 사용</li>
                      <li>BE 배포 - EC2 + NGINX + pm2</li>
                    </ul>
                  </div>
                  <div>
                    <p>AI - FastAPI</p>
                    <ul>
                      <li>simple RAG를 위한 병원 공공 데이터 수집하여 excel file로 제작</li>
                      <li>AI 기능 중 일부 구현 (simple RAG)</li>
                      <li>모델마다 다른 라이브러리 버전, 파이썬 버전 대비 docker로 inference 서버를 각각 씌움</li>
                      <li>AI 배포 - Ngrok</li>
                    </ul>
                  </div>
                </div>
                <p>혼자 빠른 개발을 해야하므로, Github Actions로 CI/CD 구축하여 BE 배포</p>
              </div>
            </div>

            <div>
              <h2>FLY AI Project</h2>
              <h3>기획</h3>
              <div>
                <p>사업가 대표님, 대학교수, 변리사, SKT 임원 등 다양한 멘토로부터 서비스 아이디어 개선</p>
                <p>서비스 이용성, 접근성, BM, 핵심 아이디어 등 다양한 고려할 점들을 생각하는 계기가 됨</p>
              </div>
            </div>
        </section>
      </main>
    </>
  )
}

export default App;