import AboutMe from './components/AboutMe';
import AppBanner from './components/AppBanner';

import { CTA } from './components/ContactMe';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';

function App() {
  return (
    <div className="relative flex justify-center overflow-x-hidden">
      <div className="absolute top-1/2 left-0 w-screen h-screen bg-blue-50 -skew-x-12 z-0"></div>
      <div className="absolute top-1/4 rounded-2xl left-0  h-screen bg-blue-50 w-1/2 z-0"></div>

      <main className="container mx-auto space-y-10 my-20 relative z-10">
        <div className="blob blob1 z-0"></div>

        <AppBanner />
        <AboutMe />

        <Services />
        <Skills />
        <Projects />
        <CTA />
      </main>

      {/* <Dock /> */}
    </div>
  );
}

export default App;
