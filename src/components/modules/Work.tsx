import BlurFade from '@/components/magicui/blur-fade';
import { GLOBAL_CONFIG } from '@/lib';
import { DATA } from '@/data/resume';
import { ResumeCard } from '@/components/resume-card';

const Work = () => {
  return (
    <section id="work">
      <div className="flex min-h-0 flex-col gap-y-3">
        <BlurFade delay={GLOBAL_CONFIG.blurFadeDelay * 5}>
          <h2 className="text-xl font-bold">Work Experience</h2>
        </BlurFade>
        {DATA.work.map((work, id) => (
          <BlurFade key={work.company} delay={GLOBAL_CONFIG.blurFadeDelay * 6 + id * 0.05}>
            <ResumeCard
              key={work.company}
              logoUrl={work.logoUrl}
              altText={work.company}
              title={work.company}
              subtitle={work.title}
              href={work.href}
              badges={work.badges}
              period={`${work.start} - ${work.end ?? 'Present'}`}
              description={work.description}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
};

export default Work;
