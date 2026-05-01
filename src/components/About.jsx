import { useScrollReveal } from '../hooks/useAnimations';
import { HiCode, HiLightningBolt } from 'react-icons/hi';
import { FaServer, FaGraduationCap } from 'react-icons/fa';
import profileImg from '../assets/pfp.png';


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
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="relative group">
              {/* Image Card */}
              <div className="relative rounded-3xl overflow-hidden glass-card p-2">
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900 aspect-[4/5] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-2 border-accent/20">
                      <img
                        src={profileImg}
                        alt="Aditya Pandey"
                        className="w-full h-full object-cover"
                      />
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
            className={`lg:col-span-3 transition-all duration-700 delay-300 ${contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Passionate Software Developer based in{' '}
              <span className="gradient-text">India</span> 🇮🇳
            </h3>

            <div className="space-y-6 mb-8">
              {/* Intro Block */}
              <div className="space-y-4">
                <p className="text-lg text-white/90 leading-relaxed font-medium">
                  I like building things that people can actually use.
                  As a full-stack developer, I bridge the gap between complex logic and intuitive design.
                </p>
              </div>

              {/* Technical Split */}
              <div className="grid md:grid-cols-2 gap-6 py-2">
                <div className="space-y-2">
                  <h4 className="text-accent text-sm font-bold uppercase tracking-wider">The Frontend</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    I focus on making clean, responsive designs that feel effortless to navigate.
                    User experience is my priority.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-accent text-sm font-bold uppercase tracking-wider">The Backend</h4>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    I build the robust logic and scalable systems that power applications,
                    ensuring everything runs smoothly under the hood.
                  </p>
                </div>
              </div>

              {/* Philosophy & Goals */}
              <div className="space-y-4 pt-2 border-t border-white/5">
                <p className="text-neutral-400 text-sm leading-relaxed">
                  I learn by doing. Whether it&apos;s tackling complex DSA problems or
                  integrating AI tools into real-world projects, I thrive on continuous
                  learning and practical application.
                </p>

                {/* Student Info Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <span className="text-xs text-neutral-300">
                    Final Year BTech Computer Science • VIT Bhopal
                  </span>
                </div>
              </div>
            </div>

            {/* Highlight Cards */}
            <div
              ref={statsRef}
              className={`grid grid-cols-2 gap-4 mb-8 transition-all duration-700 delay-500 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
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


          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
