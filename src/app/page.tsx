import About from '@/components/modules/About';
import Hero from '@/components/modules/Hero';
import Work from '@/components/modules/Work';
import Education from '@/components/modules/Education';
import Skills from '@/components/modules/Skills';
import Projects from '@/components/modules/Projects';
import Contact from '@/components/modules/Contact';

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />

      <About />

      <Work />

      <Education />

      <Skills />

      {/* <Projects /> */}

      {/* <Hackathons /> */}

      {/* <Contact /> */}
    </main>
  );
}
