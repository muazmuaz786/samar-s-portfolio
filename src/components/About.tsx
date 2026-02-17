import { useEffect, useRef, useState } from 'react';
import { BookOpen, Scale, Stethoscope, Languages, Award, Users } from 'lucide-react';

const competencies = [
  { icon: Languages, label: 'Arabic–Korean–English Translation & Interpretation' },
  { icon: Scale, label: 'Legal, Medical, and Diplomatic Translation' },
  { icon: BookOpen, label: 'Subtitling and Media Localization' },
  { icon: Users, label: 'Cross-Cultural Communication' },
  { icon: Award, label: 'Terminology & Quality Management' },
  { icon: Stethoscope, label: 'Editing and Proofreading' },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Summary */}
          <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
            <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
              About Me
            </p>
            <h2 className="section-title gold-underline mb-8">
              Professional Summary
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Experienced Arabic–Korean translator and interpreter with over{' '}
                <strong className="text-foreground">15 years of professional experience</strong> in 
                medical, legal, diplomatic, and media translation.
              </p>
              <p>
                Fluent in Arabic, Korean, and English, with a strong record of delivering accurate 
                and culturally sensitive translations and real-time interpretation for international 
                organizations, embassies, and major institutions.
              </p>
              <p>
                Dedicated lecturer and researcher specializing in Arabic language education, 
                translation, and cross-cultural communication. Passionate about advancing 
                intercultural understanding through effective language instruction and research.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold gold-accent mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  15+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gold-accent mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  3
                </div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gold-accent mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  4
                </div>
                <div className="text-sm text-muted-foreground">Degrees</div>
              </div>
            </div>
          </div>

          {/* Right Column - Competencies */}
          <div className={isVisible ? 'animate-slide-in-right' : 'opacity-0'}>
            <h3 className="text-xl font-semibold mb-8" style={{ fontFamily: 'var(--font-serif)' }}>
              Core Competencies
            </h3>
            <div className="grid gap-4">
              {competencies.map((item, index) => (
                <div
                  key={item.label}
                  className="card-elevated flex items-center gap-4 !p-5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'var(--gradient-gold)' }}
                  >
                    <item.icon size={22} className="text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
