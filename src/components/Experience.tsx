import { useEffect, useRef, useState } from 'react';
import { Briefcase, Building2, GraduationCap, Film, Flag, Globe } from 'lucide-react';

const experiences = [
  {
    title: 'Lecturer – Arabic Language and Translation',
    organization: 'Dankook University, Seoul',
    period: '2022–Present',
    description: 'Teaching Arabic language and translation to undergraduate students; developing course materials; supervising projects; providing cultural and linguistic guidance.',
    icon: GraduationCap,
    type: 'academic',
  },
  {
    title: 'Secretary to the Ambassador / Diplomatic Translator',
    organization: 'Embassy of the State of Kuwait, Seoul',
    period: '2020–2022',
    description: 'Handled Arabic–Korean–English translation of diplomatic correspondence, speeches, and official letters. Provided simultaneous interpretation during high-level meetings.',
    icon: Flag,
    type: 'diplomatic',
  },
  {
    title: 'Video Subtitle Editor & Translator',
    organization: 'CJ-Powercast / SBS – "Romantic Doctor Mr. Kim"',
    period: '2020–2021',
    description: 'Translated and edited Korean drama subtitles into Arabic and English for global release. Ensured linguistic clarity and cultural relevance.',
    icon: Film,
    type: 'media',
  },
  {
    title: 'Interpreter & Translator',
    organization: 'UNESCO / UNISDR',
    period: '2012 & 2018',
    description: 'Interpreted at international conferences and translated reports between Arabic, Korean, and English.',
    icon: Globe,
    type: 'international',
  },
  {
    title: 'Chief Translator, Medical Translation Department',
    organization: 'MMK Company',
    period: '2015–2018',
    description: 'Supervised a team of translators and managed multilingual medical projects. Ensured quality control, terminology consistency, and deadline compliance.',
    icon: Building2,
    type: 'corporate',
  },
  {
    title: 'Medical Translator & Interpreter',
    organization: 'Asan, Severance, St. Mary\'s, CHA, Korea University Hospitals',
    period: '2013–Present',
    description: 'Facilitate communication between Arabic-speaking patients and Korean medical staff. Translate medical reports, consent forms, and patient documents.',
    icon: Briefcase,
    type: 'medical',
  },
  {
    title: 'Arabic–Korean Legal Translator & Court Interpreter',
    organization: 'Police, Prosecution & Courts, South Korea',
    period: '2009–Present',
    description: 'Provide legal translation and court interpretation for official documents, testimonies, and hearings. Ensure linguistic accuracy and confidentiality.',
    icon: Briefcase,
    type: 'legal',
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 geometric-pattern opacity-50" />
      
      <div className="section-container relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Career Journey
          </p>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-6 -translate-x-1/2 z-10">
                  <div className="timeline-dot" />
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="card-elevated">
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: 'var(--gradient-navy)' }}
                      >
                        <exp.icon size={22} className="text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground mb-2">
                          {exp.period}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
                          {exp.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-accent font-medium text-sm mb-3">{exp.organization}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
