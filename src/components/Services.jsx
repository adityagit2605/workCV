import { useScrollReveal } from '../hooks/useAnimations';
import { HiCode, HiDeviceMobile, HiDatabase, HiPencil, HiChip, HiGlobe } from 'react-icons/hi';

const services = [
  {
    icon: HiCode,
    title: 'Web Development',
    description:
      'Building responsive, performant web applications using modern frameworks like React, Next.js, and Node.js with clean architecture.',
    features: ['Single Page Apps', 'Progressive Web Apps', 'REST & GraphQL APIs'],
  },
  {
    icon: HiDeviceMobile,
    title: 'UI/UX Development',
    description:
      'Translating beautiful designs into pixel-perfect, interactive user interfaces with smooth animations and intuitive user flows.',
    features: ['Responsive Design', 'Micro-animations', 'Accessibility'],
  },
  {
    icon: HiDatabase,
    title: 'Backend Development',
    description:
      'Designing and building scalable server-side solutions, databases, and APIs that power robust applications.',
    features: ['Database Design', 'Cloud Deployment', 'Authentication'],
  },
  {
    icon: HiPencil,
    title: 'UI/UX Design',
    description:
      'Creating intuitive and aesthetically pleasing designs that enhance user experience and drive engagement.',
    features: ['Wireframing', 'Prototyping', 'User Research'],
  },
  {
    icon: HiGlobe,
    title: 'Technical Consulting',
    description:
      'Providing expert guidance on technology stack selection, architecture decisions, and development best practices.',
    features: ['Code Reviews', 'Tech Stack', 'Mentoring'],
  },
];

const ServiceCard = ({ service, index, isVisible }) => {
  const { icon: Icon, title, description, features } = service;

  return (
    <div
      className={`group relative glass-card p-6 md:p-8 transition-all duration-700 hover:bg-white/10 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-500">
        <Icon className="text-accent text-2xl" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>
      <p className="text-neutral-400 text-sm leading-relaxed mb-5">{description}</p>

      {/* Features */}
      <div className="space-y-2">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <span className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
              {feature}
            </span>
          </div>
        ))}
      </div>

      {/* Hover gradient overlay */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

const Services = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="section-container relative">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            What I Do
          </span>
          <h2 className="section-title mt-3">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Comprehensive development solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={i}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
