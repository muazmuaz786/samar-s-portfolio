import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

const education = [
  {
    degree: 'Ph.D. Coursework Completed (수료)',
    school: 'Graduate School, Hanguk University of Foreign Studies, Seoul',
    year: '2023',
    major: 'Translation & Interpretation Studies KFLT',
    grade: 'GPA 93.7',
    highlight: true,
  },
  {
    degree: "Master's Degree",
    school: 'Graduate School of Interpretation and Translation, Hanguk University of Foreign Studies, Seoul',
    year: '2015',
    major: 'Korean–Arabic Translation & Consecutive Interpretation',
    grade: 'GPA 90.83',
  },
  {
    degree: 'Bachelor of Arts (2nd)',
    school: 'College of Humanities, Kyunghee University, Seoul',
    year: '2012',
    major: 'English Liberal Arts (Korean–English Translation)',
    grade: 'GPA 87.7',
  },
  {
    degree: 'Bachelor of Arts (1st)',
    school: 'Al-Alsun, Ain Shams University, Cairo',
    year: '2008',
    major: 'Korean Language & Literature',
    grade: 'Very Good',
  },
];

const certificates = [
  {
    name: 'KIIP Level 5',
    issuer: 'KMJ',
    year: 'Apr 2015',
    details: 'Korean Language, Culture, History & Law',
  },
  {
    name: 'TOPIK Level 5',
    issuer: 'NIIED',
    year: 'Nov 2011',
    details: 'Korean Language Proficiency',
  },
];

const awards = [
  {
    name: 'Grand Prize (최우수상)',
    event: 'Middle East Korean Speech Contest',
    location: 'Ain Shams University',
    year: 'Oct 2006',
    description: 'The first Korean Speech Contest in the Middle East',
  },
];

const Education = () => {
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
    <section id="education" ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="section-container">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Academic Background
          </p>
          <h2 className="section-title">Education & Credentials</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Column */}
          <div className={`lg:col-span-2 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-serif)' }}>
              <GraduationCap className="gold-accent" size={24} />
              Academic Degrees
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`card-elevated relative overflow-hidden ${edu.highlight ? 'ring-2 ring-accent/30' : ''}`}
                >
                  {edu.highlight && (
                    <div 
                      className="absolute top-0 right-0 px-3 py-1 text-xs font-medium text-primary-foreground rounded-bl-lg"
                      style={{ background: 'var(--gradient-gold)' }}
                    >
                      Latest
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-foreground mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                        {edu.degree}
                      </h4>
                      <p className="text-accent font-medium text-sm mb-2">{edu.school}</p>
                      <p className="text-muted-foreground text-sm">{edu.major}</p>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1">
                      <span className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground">
                        {edu.year}
                      </span>
                      <span className="text-sm font-medium gold-accent">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates & Awards Column */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            {/* Certificates */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-serif)' }}>
                <CheckCircle2 className="gold-accent" size={24} />
                Certificates
              </h3>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="card-elevated !p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-foreground">{cert.name}</h4>
                      <span className="text-xs text-muted-foreground">{cert.year}</span>
                    </div>
                    <p className="text-sm text-accent font-medium mb-1">{cert.issuer}</p>
                    <p className="text-sm text-muted-foreground">{cert.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3" style={{ fontFamily: 'var(--font-serif)' }}>
                <Award className="gold-accent" size={24} />
                Honors & Awards
              </h3>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div 
                    key={index} 
                    className="card-elevated !p-5 relative overflow-hidden"
                  >
                    <div 
                      className="absolute inset-0 opacity-5"
                      style={{ background: 'var(--gradient-gold)' }}
                    />
                    <div className="relative">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{award.name}</h4>
                        <span className="text-xs text-muted-foreground">{award.year}</span>
                      </div>
                      <p className="text-sm text-accent font-medium mb-1">{award.event}</p>
                      <p className="text-sm text-muted-foreground mb-1">{award.location}</p>
                      <p className="text-xs text-muted-foreground italic">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
