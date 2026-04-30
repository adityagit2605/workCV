import { useEffect, useState } from 'react';
import { HiArrowRight, HiDownload } from 'react-icons/hi';
import { FaStar, FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px] animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 bg-noise opacity-30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-screen pt-24 pb-16">
          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Hello Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8 transition-all duration-700 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-neutral-300">Available for work</span>
            </div>

            {/* Greeting */}
            <p
              className={`text-accent font-medium text-lg mb-4 transition-all duration-700 delay-100 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Hello! 👋
            </p>

            {/* Name & Title */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-700 delay-200 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              I&apos;m{' '}
              <span className="gradient-text">Aditya</span>,
              <br />
              <span className="text-white">Software</span>
              <br />
              <span className="text-white">Developer</span>
            </h1>

            {/* Description */}
            <p
              className={`text-neutral-400 text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 delay-300 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Exceptional software developer crafting robust, scalable applications.
              Recommended for building modern web solutions with clean, efficient code.
            </p>



            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap gap-4 justify-center lg:justify-start transition-all duration-700 delay-500 ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button onClick={() => scrollTo('projects')} className="btn-primary">
                <span>View Projects</span>
                <HiArrowRight className="text-lg" />
              </button>
              <button onClick={() => scrollTo('resume')} className="btn-outline">
                <HiDownload className="text-lg" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div
              className={`flex items-center gap-4 mt-10 justify-center lg:justify-start transition-all duration-700 delay-[600ms] ${
                loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="text-sm text-neutral-500">Follow me</span>
              <div className="w-8 h-px bg-neutral-700" />
              {[
                { icon: FaGithub, href: '#' },
                { icon: FaLinkedinIn, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-accent hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                loaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
            >
              {/* Orange Circle Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] rounded-full bg-gradient-to-br from-accent to-accent-dark animate-pulse-glow" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-2xl glass-card flex items-center justify-center animate-float">
                <span className="text-3xl">💻</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-2xl glass-card flex items-center justify-center animate-float-slow">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -right-8 w-16 h-16 rounded-xl glass-card flex items-center justify-center animate-bounce-gentle">
                <span className="text-2xl">⚡</span>
              </div>

              {/* Profile Image Container */}
              <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/80 z-10" />
                {/* Placeholder avatar */}
                <div className="w-full h-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl sm:text-9xl font-bold gradient-text">A</div>
                    <p className="text-neutral-400 text-sm mt-2">Your Photo Here</p>
                  </div>
                </div>
              </div>

              {/* Orbiting Ring */}
              <div className="absolute inset-[-20px] rounded-full border border-dashed border-accent/20 animate-spin-slow" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
