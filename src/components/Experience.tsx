import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string[];
  current?: boolean;
}

const workExperience: TimelineItem[] = [
  {
    title: 'Web Development Intern',
    organization: 'Tintash',
    period: 'Jul 2025 – Sep 2025',
    description: [
      'Built responsive UIs and reusable components with React, TypeScript, and Tailwind CSS',
      'Developed REST APIs using Node.js, Express; designed and managed databases with Sequelize',
      'Maintained clean code with Git, ESLint, Prettier; deployed apps via Netlify',
      'Contributed to projects: To-Do App, Tin Parity (PRs)',
    ],
    current: false,
  },
  {
    title: 'AI Engineering Intern',
    organization: 'Punjab Information Technology Board (PITB)',
    period: 'Jul 2025 – Aug 2025',
    description: [
      'Practiced Python for ML and explored deep learning with TensorFlow and Keras',
      'Implemented basic neural networks including sigmoid and probability-based models',
      'Developed a simple OCR tool to extract text from images',
    ],
    current: false,
  },
];

const education: TimelineItem[] = [
  {
    title: 'Bachelor of Science in Computer Science',
    organization: 'FAST-NUCES, Lahore',
    period: '2023 – 2027',
    description: [
      'Studying core CS fundamentals including Data Structures, Algorithms, and OOP',
      'Specializing in Software Engineering and Machine Learning',
      'Active participant in coding competitions and hackathons',
    ],
  },
  {
    title: 'HSSC – Pre-Engineering',
    organization: 'Government College University, Lahore',
    period: '2021 – 2023',
    description: [
      'Completed higher secondary education with focus on Mathematics and Physics',
    ],
  },
  {
    title: 'SSC – Science',
    organization: 'Beaconhouse School System',
    period: '2008 – 2021',
    description: ['Strong foundation in Science and Mathematics'],
  },
];

const TimelineSection = ({
  items,
  icon: Icon,
}: {
  items: TimelineItem[];
  icon: typeof Briefcase;
}) => (
  <div className="relative">
    {/* Timeline Line */}
    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-black/20 dark:bg-white/20"></div>

    <div className="space-y-6 md:space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative flex gap-6">
          {/* Timeline Dot */}
          <div className="absolute left-4 w-4 h-4 rounded-full bg-white transform -translate-x-1/2 mt-6 z-10 ring-4 ring-black">
            {item.current && (
              <span className="absolute inset-0 rounded-full bg-white animate-ping"></span>
            )}
          </div>

          {/* Content */}
          <div className="pl-12 flex-1">
            <div
              className={`p-4 md:p-6 bg-[#231212] rounded-md border-2 border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-200 ${
                item.current ? 'ring-2 ring-white' : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-2xl bg-white text-black">
                  <Icon size={20} />
                </div>
                {item.current && (
                  <span className="px-2 py-1 bg-white text-black font-ibm-plex-mono text-xs rounded-md">
                    Current
                  </span>
                )}
              </div>

              <h3 className="font-jersey text-xl md:text-2xl text-white mb-1">
                {item.title}
              </h3>

              <p className="font-ibm-plex-mono text-white font-medium text-sm md:text-base mb-2">
                {item.organization}
              </p>

              <div className="flex items-center gap-2 text-white/60 mb-4">
                <Calendar size={14} />
                <span className="font-ibm-plex-mono text-xs md:text-sm">
                  {item.period}
                </span>
              </div>

              <ul className="space-y-2">
                {item.description.map((desc, i) => (
                  <li
                    key={i}
                    className="font-ibm-plex-mono text-xs md:text-sm text-white/70"
                  >
                    • {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-6 md:py-12 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        {/* Experience Section */}
        <div className="mb-16 md:mb-24">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-jersey text-4xl sm:text-5xl md:text-6xl text-black dark:text-white mb-4 flex items-center justify-center gap-3">
              <Briefcase className="w-8 h-8 md:w-12 md:h-12" />
              Experience
            </h2>
            <p className="font-ibm-plex-mono text-sm md:text-base text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              My professional journey and work experience
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <TimelineSection items={workExperience} icon={Briefcase} />
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-jersey text-4xl sm:text-5xl md:text-6xl text-black dark:text-white mb-4 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 md:w-12 md:h-12" />
              Education
            </h2>
            <p className="font-ibm-plex-mono text-sm md:text-base text-black/70 dark:text-white/70 max-w-2xl mx-auto">
              My academic background and qualifications
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <TimelineSection items={education} icon={GraduationCap} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
