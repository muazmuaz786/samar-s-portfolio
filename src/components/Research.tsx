import { useEffect, useRef, useState } from 'react';
import { BookOpen, FileText, Lightbulb, Sparkles } from 'lucide-react';

const researchInterests = [
  'Korean–Arabic Translation Studies',
  'Pedagogical Methods for Teaching Arabic as a Foreign Language',
  'Cross-Cultural Linguistics & Intercultural Communication',
  'Educational Technology in Language Learning',
];

const skills = {
  languages: ['Arabic (Native)', 'Korean (Fluent)', 'English (Fluent)'],
  teaching: ['Curriculum Design', 'Language Pedagogy', 'Student Evaluation', 'Cross-Cultural Communication'],
  academic: ['Translation Theory', 'Contrastive Linguistics', 'Academic Writing', 'Data Analysis'],
  professional: ['Consecutive Interpretation', 'Medical & Legal Translation', 'Microsoft Office', 'CAT Tools'],
};

const Research = () => {
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
    <section id="research" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      <div className="section-container relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Research & Skills
          </p>
          <h2 className="section-title">Academic Contributions</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Published Research */}
          <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-serif)' }}>
              <FileText className="gold-accent" size={24} />
              Published Research
            </h3>
            
            <div className="card-elevated relative overflow-hidden group">
              <div 
                className="absolute top-0 left-0 w-1 h-full"
                style={{ background: 'var(--gradient-gold)' }}
              />
              <div className="pl-4">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground mb-4">
                  2024
                </span>
                <h4 className="text-lg font-semibold text-foreground mb-3 leading-tight group-hover:text-accent transition-colors" style={{ fontFamily: 'var(--font-serif)' }}>
                  "Korean–Arabic Proper Names Translation: Focusing on the Classic Yoo Yeon-jeon"
                </h4>
                <p className="text-accent font-medium text-sm mb-2">
                  KCSI Translation and Interpretation Journal
                </p>
                <p className="text-muted-foreground text-sm">
                  Vol. 26(2), pp. 67–90
                </p>
              </div>
            </div>

            {/* Research Interests */}
            <h3 className="text-xl font-semibold mt-12 mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-serif)' }}>
              <Lightbulb className="gold-accent" size={24} />
              Research Interests
            </h3>
            
            <div className="space-y-3">
              {researchInterests.map((interest, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card hover:bg-secondary transition-colors"
                >
                  <div 
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: 'var(--gradient-gold)' }}
                  />
                  <span className="text-foreground font-medium">{interest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className={isVisible ? 'animate-slide-in-right' : 'opacity-0'}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-serif)' }}>
              <Sparkles className="gold-accent" size={24} />
              Professional Skills
            </h3>

            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {category === 'teaching' ? 'Teaching & Training' :
                     category === 'academic' ? 'Academic & Research' :
                     category === 'professional' ? 'Professional' : 'Languages'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Teaching Experience */}
            <div className="mt-12 card-elevated">
              <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-3" style={{ fontFamily: 'var(--font-serif)' }}>
                <BookOpen className="gold-accent" size={20} />
                Teaching Experience
              </h4>
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <p className="font-medium text-foreground">Lecturer – Dankook University</p>
                  <p className="text-sm text-muted-foreground">2022–Present</p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <p className="font-medium text-foreground">Private Arabic Instructor</p>
                  <p className="text-sm text-muted-foreground">Children & Adults | Since 2008</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
