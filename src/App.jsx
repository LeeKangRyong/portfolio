import './App.css';
import { useState } from 'react';
import TopBar from './components/TopBar/TopBar';
import AboutMe from './pages/AboutMe/AboutMe';
import Histories from './pages/History/Histories';
import Skills from './pages/Skill/Skills';
import Projects from './pages/Project/Projects';
import Contact from './pages/Contact/Contact';
import Skeleton from './components/Skeleton/Skeleton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Skeleton onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <TopBar />
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
        </section>
        <footer>
          <Contact />
        </footer>
      </main>
    </>
  )
}

export default App;