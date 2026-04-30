import { FaGithub, FaLinkedinIn, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'About', href: 'about' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ];

  const socials = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  ];

  const handleNavClick = (href) => {
    document.getElementById(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary to-secondary/50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center font-bold text-lg text-white">
                  A
                </div>
                <span className="text-xl font-bold text-white">Aditya Pandey</span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
                Software Developer passionate about building exceptional digital experiences.
                Let&apos;s create something amazing together.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                {footerLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-neutral-400 text-sm hover:text-accent transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <div className="flex gap-3 mb-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                    title={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
              <p className="text-neutral-500 text-xs">
                Feel free to reach out for collaborations or just a friendly hello!
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm flex items-center gap-1">
            © {currentYear} Aditya Pandey. Built with{' '}
            <FaHeart className="text-accent text-xs" /> using React
          </p>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-neutral-500 text-sm hover:text-accent transition-colors duration-300"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-300 group-hover:-translate-y-1">
              <FaArrowUp className="text-xs" />
            </div>
          </button>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
        <div className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-white/[0.02] whitespace-nowrap leading-none tracking-tighter select-none">
          ADITYA PANDEY
        </div>
      </div>
    </footer>
  );
};

export default Footer;
