import { HackathonCard } from '@/components/hackathon-card';
import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DATA } from '@/data/resume';
import Link from 'next/link';
import Markdown from 'react-markdown';
import About from '@/components/modules/About';
import Hero from '@/components/modules/Hero';
import Work from '@/components/modules/Work';
import Education from '@/components/modules/Education';
import Skills from '@/components/modules/Skills';
import Projects from '@/components/modules/Projects';
import Hackathons from '@/components/modules/Hackathons';
import Contact from '@/components/modules/Contact';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <Hero />

      <About />

      <Work />

      <Education />

      <Skills />

      <Projects />

      {/* <Hackathons /> */}

      <Contact />
    </main>
  );
}
