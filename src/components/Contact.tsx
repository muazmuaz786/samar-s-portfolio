import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
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

  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=samarsaleh78@gmail.com`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create Gmail compose link with pre-filled content
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=samarsaleh78@gmail.com&su=${subject}&body=${body}`, '_blank');
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Decorative elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--gradient-gold)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
        style={{ background: 'var(--gradient-navy)' }}
      />

      <div className="section-container relative z-10">
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
            Get in Touch
          </p>
          <h2 className="section-title">Contact Me</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Available for translation, interpretation, and Arabic language instruction opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
            <div className="space-y-6">
              <a 
                href={gmailComposeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="card-elevated flex items-center gap-4 group"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ background: 'var(--gradient-gold)' }}
                >
                  <Mail size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                    samarsaleh78@gmail.com
                  </p>
                </div>
              </a>

              <a 
                href="tel:+82-010-2702-0692"
                className="card-elevated flex items-center gap-4 group"
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ background: 'var(--gradient-navy)' }}
                >
                  <Phone size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                    (+82) 010-2702-0692
                  </p>
                </div>
              </a>

              <div className="card-elevated flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--gradient-gold)' }}
                >
                  <MapPin size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium text-foreground">Seoul, South Korea</p>
                </div>
              </div>

              <div className="card-elevated flex items-center gap-4">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--gradient-navy)' }}
                >
                  <Globe size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Nationality</p>
                  <p className="font-medium text-foreground">South Korean-Egyptian</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={isVisible ? 'animate-slide-in-right' : 'opacity-0'}>
            <form onSubmit={handleSubmit} className="card-elevated">
              <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: 'var(--font-serif)' }}>
                Send a Message
              </h3>
              
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2 transition-all hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                  style={{ background: 'var(--gradient-gold)' }}
                >
                  <Send size={18} />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
