import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import samarPhoto from '@/assets/samar-photo.png';

const Hero = () => {
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=samarsaleh78@gmail.com`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 geometric-pattern" />
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{ background: 'var(--gradient-cream)' }}
      />

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full opacity-20 animate-float" 
           style={{ background: 'var(--gradient-gold)' }} />
      <div className="absolute bottom-32 right-20 w-16 h-16 rounded-full opacity-15 animate-float delay-300" 
           style={{ background: 'var(--gradient-navy)' }} />
      <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full opacity-25 animate-float delay-500" 
           style={{ background: 'var(--gradient-gold)' }} />

      <div className="relative z-10 section-container text-center py-32">
        {/* Profile Photo */}
        <div className="animate-fade-up mb-8">
          <div className="relative inline-block">
            <div 
              className="w-48 h-60 md:w-56 md:h-72 rounded-2xl p-1"
              style={{ background: 'var(--gradient-gold)' }}
            >
              <img 
                src={samarPhoto} 
                alt="Samar A. Saleh" 
                className="w-full h-full rounded-2xl object-cover object-center"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-2xl border-2 border-accent/20" />
          </div>
        </div>

        {/* Nationality Badge */}
        <div className="animate-fade-up delay-100 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-sm font-medium text-muted-foreground mb-8">
          <Globe size={16} className="gold-accent" />
          <span>Korean-Egyptian</span>
        </div>

        {/* Name */}
        <h1 
          className="animate-fade-up delay-100 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Samar A. <span className="gold-accent">Saleh</span>
        </h1>

        {/* Title */}
        <p className="animate-fade-up delay-200 text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Arabic–Korean Translator & Interpreter
        </p>
        <p className="animate-fade-up delay-300 text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
          Lecturer • Researcher • Cross-Cultural Communication Specialist
        </p>

        {/* Contact Info */}
        <div className="animate-fade-up delay-400 flex flex-wrap justify-center gap-6 mb-12">
          <a 
            href={gmailComposeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={18} className="gold-accent" />
            <span>samarsaleh78@gmail.com</span>
          </a>
          <a 
            href="tel:+82-010-2702-0692"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone size={18} className="gold-accent" />
            <span>(+82) 010-2702-0692</span>
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} className="gold-accent" />
            <span>Seoul, South Korea</span>
          </div>
        </div>

        {/* Languages */}
        <div className="animate-fade-up delay-500 flex flex-wrap justify-center gap-3">
          <span className="skill-tag">Arabic (Native)</span>
          <span className="skill-tag">Korean (Fluent)</span>
          <span className="skill-tag">English (Fluent)</span>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-up delay-600 absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
