import { useScrollReveal } from '../hooks/useAnimations';
import { HiDownload, HiAcademicCap, HiBriefcase, HiCode } from 'react-icons/hi';

const education = [
  {
    degree: 'B.Tech in Computer Science',
    field: 'Computer Science & Engineering',
    institution: 'Vellore Institute of Technology, Bhopal',
    period: 'Sept 2023 - Present',
    grade: 'CGPA: 8.65',
    highlights: ['Programming', 'Computer Systems'],
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    field: 'Science (PCM)',
    institution: 'St. Aloysius Sr. Sec. School, Jabalpur',
    period: 'May 2023',
    grade: '89%',
    highlights: ['Physics', 'Chemistry', 'Mathematics'],
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    field: 'General Science & Mathematics',
    institution: 'St. Aloysius Sr. Sec. School, Jabalpur',
    period: 'May 2021',
    grade: '93%',
    highlights: ['Mathematics', 'General Sciences'],
  },
];

const resumeData = {
  summary:
    'Computer Science undergraduate with experience in developing and deploying full-stack web applications. Skilled in technologies like React, Next.js, Firebase, and MongoDB. Growing foundation in data structures and algorithms with LeetCode and other platforms.',
  skills: [
    'C / C++',
    'Python / SQL',
    'JavaScript / HTML5 / CSS',
    'React.js / Next.js',
    'Node.js / Express.js',
    'MongoDB / Firebase',
    'Tailwind CSS',
    'Git / GitHub / VS Code',
  ],
};

const Resume = () => {
  const [titleRef, titleVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal(0.05);

  return (
    <section id="resume" className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[120px]" />

      <div className="section-container relative">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">
            My Credentials
          </span>
          <h2 className="section-title mt-3">
            Resume & <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            My academic background, technical skills, and professional summary
          </p>

          {/* Download Button */}
          <a
            href="/resume.pdf"
            download
            className="btn-primary mt-8 inline-flex"
          >
            <HiDownload className="text-lg" />
            <span>Download Resume (PDF)</span>
          </a>
        </div>

        {/* Inline Resume Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Summary & Skills */}
          <div className="space-y-8">
            {/* Professional Summary */}
            <div
              className={`glass-card p-6 md:p-8 transition-all duration-700 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <HiBriefcase className="text-accent text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Professional Summary</h3>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">{resumeData.summary}</p>
            </div>

            {/* Core Skills */}
            <div
              className={`glass-card p-6 md:p-8 transition-all duration-700 delay-100 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <HiCode className="text-accent text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {resumeData.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-neutral-400"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-8">
            {/* Education */}
            <div
              className={`glass-card p-6 md:p-8 transition-all duration-700 delay-200 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <HiAcademicCap className="text-accent text-lg" />
                </div>
                <h3 className="text-xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, i) => (
                  <div
                    key={edu.degree}
                    className={`${i > 0 ? 'pt-6 border-t border-white/5' : ''
                      }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-white font-semibold">{edu.degree}</h4>
                        <p className="text-accent text-sm">{edu.field}</p>
                      </div>
                      <span className="text-xs text-neutral-500 bg-white/5 px-3 py-1 rounded-full shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-400 mb-2">{edu.institution}</p>
                    <p className="text-xs text-accent/80 mb-3">{edu.grade}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs px-2 py-0.5 rounded bg-white/5 text-neutral-500"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;