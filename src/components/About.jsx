import { useScrollReveal } from '../hooks/useAnimations';
import { HiDownload, HiCode, HiLightningBolt } from 'react-icons/hi';
import { FaServer, FaGraduationCap } from 'react-icons/fa';

const About = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal(0.1);
  const [statsRef, statsVisible] = useScrollReveal(0.2);

  const highlights = [
    { icon: HiCode, label: 'Frontend', desc: 'React, Next.js, Vue' },
    { icon: FaServer, label: 'Backend', desc: 'Node.js, Python, Java' },
    { icon: HiLightningBolt, label: 'Problem Solver', desc: 'DSA & System Design' },
    { icon: FaGraduationCap, label: 'Learner', desc: 'Always Growing' },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="section-container relative">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            Get to know me
          </span>
          <h2 className="section-title mt-3">
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left - Image & Quick Info */}
          <div
            ref={contentRef}
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              {/* Image Card */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-2">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 aspect-[4/5] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mb-6">
                      <span className="text-5xl font-bold text-white">AP</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">Aditya Pandey</h3>
                    <p className="text-accent text-sm">Software Developer</p>
                  </div>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-2 rounded-2xl bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 glass-card px-5 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">Open to Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Passionate Software Developer based in{' '}
              <span className="gradient-text">India</span> 🇮🇳
            </h3>

            <div className="space-y-4 text-neutral-400 leading-relaxed mb-8">
              <p>
                Hello! I&apos;m Aditya, an aspiring Software Developer with a strong passion for creating 
                elegant, efficient, and user-centric digital solutions. I am eager to apply my knowledge in 
                full-stack web development and bring ideas to life through clean code and thoughtful design.
              </p>
              <p>
                My skills extend beyond just coding — I&apos;m adept at problem-solving, 
                learning new technologies quickly, and building applications that not only work flawlessly but also 
                deliver exceptional user experiences. I stay current with the latest technologies 
                and best practices to ensure every project meets modern standards.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Highlight Cards */}
            <div
              ref={statsRef}
              className={`grid grid-cols-2 gap-4 mb-8 transition-all duration-700 delay-500 ${
                statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <div
                  key={label}
                  className="glass-card-hover p-4 group cursor-default"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <Icon className="text-accent text-xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-white font-semibold text-sm">{label}</h4>
                  <p className="text-neutral-500 text-xs mt-1">{desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              <HiDownload className="text-lg" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
