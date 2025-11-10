import { GLOBAL_CONFIG } from '@/lib';
import BlurFade from '@/components/magicui/blur-fade';
import Markdown from 'react-markdown';
import { DATA } from '@/data/resume';

const About = () => {
  return (
    <section id="about">
      <BlurFade delay={GLOBAL_CONFIG.blurFadeDelay * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={GLOBAL_CONFIG.blurFadeDelay * 4}>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {DATA.summary}
        </Markdown>
      </BlurFade>
    </section>
  );
};

export default About;
