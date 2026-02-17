const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground text-sm">
            <span>&copy; {currentYear} Samar A. Saleh</span>
            <span className="hidden md:inline">|</span>
            <span>All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <a
              href="https://muazmuaz786.github.io/muaz-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Made by Muaz Tillaev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
