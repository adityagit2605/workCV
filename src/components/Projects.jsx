import { useState } from 'react';
import { useScrollReveal } from '../hooks/useAnimations';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiNextdotjs, SiFirebase, SiTypescript, SiPython } from 'react-icons/si';

const techIcons = {
  React: SiReact,
  'Node.js': SiNodedotjs,
  MongoDB: SiMongodb,
  'Tailwind CSS': SiTailwindcss,
  'Next.js': SiNextdotjs,
  Firebase: SiFirebase,
  TypeScript: SiTypescript,
  Python: SiPython,
};

const projects = [
  {
    title: 'Tech Tangle',
    description: 'A full-stack web application supporting 150+ daily users to solve DSA problems with a real-time code execution playground and an intelligent AI assistant.',
    image: null,
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Firebase'],
    category: 'fullstack',
    liveUrl: '#',
    codeUrl: 'https://github.com/adityagit2605/techtangle',

    color: '#3178C6',
  },
  {
    title: 'Interview Nest',
    description: 'A job preparation portal with SSR and SSG for SEO optimization and a modular architecture, deployed on Vercel with CI/CD.',
    image: null,
    tags: ['Next.js', 'React'],
    category: 'frontend',
    liveUrl: 'https://interview-nest.vercel.app/',
    codeUrl: 'https://github.com/adityagit2605/interviewnest',
    color: '#61DAFB',
  },
  {
    title: 'Ignite Fitness',
    description: 'Engineered a scalable Django platform to manage fitness data for 200+ gym members, featuring role-based access and automated billing using Gemini API.',
    image: null,
    tags: ['Python', 'Tailwind CSS'],
    category: 'backend',
    liveUrl: '#',
    codeUrl: 'https://github.com/adityagit2605/Ignite-Fitness',
    color: '#339933',
  },
  {
    title: 'Password Manager',
    description: 'A responsive local password manager storing 256-bit encrypted strings with edit, delete, and copy-to-clipboard functionalities.',
    image: null,
    tags: ['React', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: '#',
    codeUrl: '#',
    color: '#F97316',
  },
  {
    title: 'Facial Recognition Attendance',
    description: 'An automated attendance and tracking system utilizing deep learning and OCR technology with a modern UI dashboard.',
    image: null,
    tags: ['Python', 'React', 'Tailwind CSS'],
    category: 'fullstack',
    liveUrl: '#',
    codeUrl: '#',
    color: '#8B5CF6',
  },
  {
    title: 'FOSSEE Workshop Portal',
    description: 'Enhanced and transitioned the workshop booking platform into a modern Single Page Application with intuitive statistics and dashboard views.',
    image: null,
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    category: 'frontend',
    liveUrl: '#',
    codeUrl: 'https://github.com/adityagit2605/workshop_booking',
    color: '#06B6D4',
  },
];

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full Stack', value: 'fullstack' },
  { label: 'Frontend', value: 'frontend' },
  { label: 'Backend', value: 'backend' },
];

const ProjectCard = ({ project, index, isVisible }) => {
  const { title, description, tags, liveUrl, codeUrl, color } = project;

  return (
    <div
      className={`group glass-card overflow-hidden transition-all duration-700 hover:border-white/20 hover:shadow-xl hover:shadow-accent/5 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
        }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Project Preview */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-neutral-800 to-neutral-900">
        {/* Colored accent */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 30% 50%, ${color}40, transparent 70%)`,
          }}
        />

        {/* Project mockup placeholder */}
        <div className="flex items-center justify-center h-full">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl font-bold opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500"
            style={{ color, border: `2px solid ${color}30` }}
          >
            {title.charAt(0)}
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <a
            href={liveUrl}
            className="w-12 h-12 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-all duration-300 hover:scale-110"
            title="Live Demo"
          >
            <HiExternalLink size={20} />
          </a>
          <a
            href={codeUrl}
            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-110"
            title="Source Code"
          >
            <HiCode size={20} />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => {
            const Icon = techIcons[tag];
            return (
              <span
                key={tag}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-400"
              >
                {Icon && <Icon className="text-[10px]" />}
                {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/3 rounded-full blur-[120px]" />

      <div className="section-container relative">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            My Work
          </span>
          <h2 className="section-title mt-3">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A showcase of projects that demonstrate my skills and passion
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.value
                ? 'bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/20'
                : 'bg-white/5 text-neutral-400 border border-white/10 hover:border-accent/30 hover:text-white'
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              isVisible={gridVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;