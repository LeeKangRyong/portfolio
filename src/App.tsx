import { useState } from 'react';
import TopBar from '@/components/TopBar';
import AboutMe from '@/pages/AboutMe';
import Histories from '@/pages/Histories';
import Skills from '@/pages/Skills';
import Projects from '@/pages/Projects';
import Contact from '@/pages/Contact';
import Skeleton from '@/components/Skeleton';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <Skeleton onComplete={handleLoadingComplete} />;
  }

  return (
    <>
      <TopBar />
      <main className="scrollbar-hide">
        <section
          id="A"
          className="w-screen min-h-screen box-border flex flex-col justify-center items-center py-20 px-5 max-lg:py-20 max-lg:px-4 max-md:pt-[5.625rem] max-md:px-2.5 max-md:pb-10 max-sm:pt-20 max-sm:px-2 max-sm:pb-[1.875rem]"
        >
          <AboutMe />
        </section>

        <section
          id="B"
          className="w-screen min-h-screen box-border flex flex-col justify-center items-center py-20 px-5 max-lg:py-20 max-lg:px-4 max-md:pt-[5.625rem] max-md:px-2.5 max-md:pb-10 max-sm:pt-20 max-sm:px-2 max-sm:pb-[1.875rem]"
        >
          <Histories />
        </section>

        <section
          id="C"
          className="w-screen min-h-screen box-border flex flex-col justify-center items-center py-20 px-5 max-lg:py-20 max-lg:px-4 max-md:pt-[5.625rem] max-md:px-2.5 max-md:pb-10 max-sm:pt-20 max-sm:px-2 max-sm:pb-[1.875rem]"
        >
          <Skills />
        </section>

        <section
          id="D"
          className="w-screen min-h-screen box-border flex flex-col justify-center items-center py-20 px-5 max-lg:py-20 max-lg:px-4 max-md:pt-[5.625rem] max-md:px-2.5 max-md:pb-10 max-sm:pt-20 max-sm:px-2 max-sm:pb-[1.875rem]"
        >
          <Projects />
        </section>
        <footer>
          <Contact />
        </footer>
      </main>
    </>
  );
}

export default App;
