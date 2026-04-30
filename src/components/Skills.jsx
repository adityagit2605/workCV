import { useScrollReveal } from '../hooks/useAnimations';
import {
  SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiHtml5,
  SiCss, SiNodedotjs, SiPython, SiMongodb, SiPostgresql, SiGit,
  SiDocker, SiFigma, SiRedux,
  SiExpress, SiFirebase,
} from 'react-icons/si';
import { FaJava, FaAws } from 'react-icons/fa';
import { DiLinux } from 'react-icons/di';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
      { name: 'JavaScript', icon: SiJavascript, level: 92, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, level: 80, color: '#3178C6' },
      { name: 'Next.js', icon: SiNextdotjs, level: 82, color: '#ffffff' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 85, color: '#339933' },
      { name: 'Python', icon: SiPython, level: 80, color: '#3776AB' },
      { name: 'Java', icon: FaJava, level: 75, color: '#ED8B00' },
      { name: 'Express.js', icon: SiExpress, level: 82, color: '#ffffff' },
    ],
  },
  {
    title: 'Database & Cloud',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 82, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 75, color: '#4169E1' },
      { name: 'Firebase', icon: SiFirebase, level: 78, color: '#FFCA28' },
      { name: 'AWS', icon: FaAws, level: 70, color: '#FF9900' },
    ],
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, level: 72, color: '#2496ED' },
      { name: 'Figma', icon: SiFigma, level: 75, color: '#F24E1E' },
      { name: 'Linux', icon: DiLinux, level: 78, color: '#FCC624' },
    ],
  },
];

const SkillCard = ({ skill, index, isVisible }) => {
  const { name, icon: Icon, color } = skill;

  return (
    <div
      className={`glass-card-hover p-4 group cursor-default transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
        >
          <Icon style={{ color }} className="text-lg" />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white text-sm font-semibold truncate">{name}</h4>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [gridRef, gridVisible] = useScrollReveal(0.05);

  return (
    <section id="skills" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

      <div className="section-container relative">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            My Expertise
          </span>
          <h2 className="section-title mt-3">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
                <span className="w-8 h-0.5 bg-gradient-to-r from-accent to-transparent" />
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, i) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={i}
                    isVisible={gridVisible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
