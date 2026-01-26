import { ExternalLink, Github, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  problem: string;
  role: string;
  tech: string[];
  github?: string;
  live?: string;
  learned: string;
  featured: boolean;
  video?: string;
  image?: string;
}

const projects: Project[] = [
  {
    title: 'Curator – Personal Wardrobe Assistant',
    description:
      'An AI-powered wardrobe management system that helps users organize, categorize, and get outfit recommendations from their personal clothing collection.',
    problem:
      "People struggle to organize their wardrobe and often don't utilize clothes they own. Curator solves this by providing smart categorization and outfit suggestions.",
    role: 'Full Stack Developer & ML Engineer - Built the entire system from backend APIs to ML models for clothing detection and similarity matching.',
    tech: [
      'FastAPI',
      'Next.js',
      'Tailwind CSS',
      'Python',
      'YOLO',
      'Siamese Networks',
      'MobileNetV2',
      'MLflow',
      'DVC',
      'MinIO',
      'AWS S3',
    ],
    github:
      'https://github.com/abdulrehman142/Curator-Custom-Wardrobe-Stylist.git',
    learned:
      'Deepened my understanding of MLOps pipelines, model versioning with DVC, and integrating complex ML models into production-ready applications.',
    featured: true,
    video: '/videos/curator.mp4',
  },
  {
    title: 'Fixify – Service Marketplace',
    description:
      'A full-stack service marketplace connecting customers with service providers for home repairs, maintenance, and various professional services.',
    problem:
      'Finding reliable service providers is challenging. Fixify provides a trusted platform with reviews, booking, and secure payments.',
    role: 'Full Stack Developer - Developed the React frontend with TypeScript, designed the database schema, and built RESTful APIs with FastAPI.',
    tech: ['React 18', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'MariaDB'],
    github: 'https://github.com/abdulrehman142/fixify_frontend.git',
    learned:
      'Improved my skills in building scalable marketplaces, handling complex user flows, and implementing secure authentication systems.',
    featured: true,
    video: '/videos/fixify.mp4',
  },
  {
    title: 'Inventory Management System',
    description:
      'A comprehensive platform for managing gaming tournaments, player profiles, team formations, and match scheduling with real-time updates.',
    problem:
      'Gaming communities need organized tournament management. This system streamlines the entire process from registration to results.',
    role: 'Full Stack Developer - Built responsive UI components, designed the SQL database, and implemented the Node.js backend.',
    tech: ['React', 'Node.js', 'T-SQL', 'TypeScript', 'ShadCN', 'Tailwind CSS'],
    github: 'https://github.com/abdulrehman142/Inventory-System.git',
    learned:
      'Gained experience with complex database relationships and real-time data synchronization in gaming contexts.',
    featured: true,
    image: '/images/inventory.png',
  },
  {
    title: 'Sudoku Game',
    description:
      'A classic Sudoku game implemented in x86 Assembly language with VGA graphics mode, featuring puzzle generation and validation.',
    problem:
      'Created as a deep dive into low-level programming, demonstrating mastery of assembly language and direct hardware interaction.',
    role: 'Sole Developer - Wrote the entire game logic, graphics rendering, and user input handling in 16-bit assembly.',
    tech: ['x86 Assembly', 'VGA Mode', '16-bit'],
    github: 'https://github.com/abdulrehman142/Suduko-Game.git',
    learned:
      'Developed strong understanding of memory management, CPU registers, and low-level graphics programming.',
    featured: false,
  },
  {
    title: 'Pharmacy Management System',
    description:
      'A desktop application for managing pharmacy inventory, sales, prescriptions, and customer records with reporting capabilities.',
    problem:
      'Small pharmacies need affordable management solutions. This system provides essential features without complex enterprise software.',
    role: 'Developer - Implemented OOP principles for modular design and built the complete management workflow.',
    tech: ['C++', 'OOP', 'File Handling'],
    github: 'https://github.com/abdulrehman142/Pharmacy-System.git',
    learned:
      'Strengthened my OOP fundamentals and learned about building maintainable, modular codebases.',
    featured: false,
  },
  {
    title: 'Bingo Game',
    description:
      'An interactive terminal-based Bingo game with colorful UI using PDCurses library, supporting multiple players.',
    problem:
      'Created a fun multiplayer game to practice C++ and terminal UI development.',
    role: 'Sole Developer - Designed game mechanics, implemented the PDCurses interface, and added multiplayer support.',
    tech: ['C++', 'PDCurses'],
    github: 'https://github.com/abdulrehman142/Bingo-Game.git',
    learned: 'Learned about terminal UI libraries and game state management.',
    featured: false,
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-6 md:py-12 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-jersey text-4xl sm:text-5xl md:text-6xl text-[#231212] dark:text-white mb-4">
            Projects
          </h2>
          <p className="font-ibm-plex-mono text-sm md:text-base text-[#231212]/70 dark:text-white/70 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in full-stack
            development and machine learning
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 md:space-y-12 mb-12 md:mb-20">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row gap-6 md:gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Video/Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="aspect-video bg-[#231212] dark:bg-gray-800 rounded-md overflow-hidden border-2 border-[#E5E5E5] dark:border-white/10">
                    {project.video ? (
                      <video
                        src={project.video}
                        className="w-full h-full object-cover [&::-webkit-media-controls]:opacity-0 group-hover:[&::-webkit-media-controls]:opacity-100 [&::-webkit-media-controls]:transition-opacity"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                      />
                    ) : project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Folder
                            size={64}
                            className="text-[#231212]/30 dark:text-white/30"
                          />
                        </div>
                        <div className="absolute inset-0 bg-[#231212]/90 dark:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-4">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white dark:bg-black rounded-md text-[#231212] dark:text-white hover:scale-110 transition-transform duration-200"
                            >
                              <Github size={24} />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 bg-white dark:bg-black rounded-md text-[#231212] dark:text-white hover:scale-110 transition-transform duration-200"
                            >
                              <ExternalLink size={24} />
                            </a>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-jersey text-2xl md:text-3xl text-[#231212] dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="font-ibm-plex-mono text-sm md:text-base text-[#231212]/80 dark:text-white/80 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-ibm-plex-mono text-xs md:text-sm font-semibold text-[#422727] dark:text-[#CCCCCC] mb-1">
                    Problem Solved
                  </h4>
                  <p className="font-ibm-plex-mono text-xs md:text-sm text-[#231212]/70 dark:text-white/70">
                    {project.problem}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className="font-ibm-plex-mono text-xs md:text-sm font-semibold text-[#422727] dark:text-[#CCCCCC] mb-1">
                    My Role
                  </h4>
                  <p className="font-ibm-plex-mono text-xs md:text-sm text-[#231212]/70 dark:text-white/70">
                    {project.role}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#231212] text-white font-ibm-plex-mono text-xs rounded-md dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="font-ibm-plex-mono text-xs md:text-sm font-semibold text-[#422727] dark:text-[#CCCCCC] mb-1">
                    Key Takeaway
                  </h4>
                  <p className="font-ibm-plex-mono text-xs md:text-sm text-[#231212]/70 dark:text-white/70 italic">
                    "{project.learned}"
                  </p>
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#231212] hover:bg-[#422727] text-white hover:bg-[#231212] hover:text-white dark:hover:bg-gray-800 font-ibm-plex-mono text-sm rounded-md transition-all duration-200"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-[#231212] hover:bg-[#422727] text-white font-ibm-plex-mono text-sm rounded-md transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="font-jersey text-3xl md:text-4xl text-[#231212] dark:text-white mb-6 md:mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="p-4 md:p-6 bg-[#231212]  rounded-3xl border-2  transition-all duration-200 group shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder size={40} className="text-white dark:text-white" />
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#CCCCCC] hover:text-white dark:hover:text-white transition-colors duration-200"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#231212] dark:hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="font-jersey text-lg md:text-xl text-white dark:text-white mb-2  transition-colors duration-200">
                  {project.title}
                </h4>
                <p className="font-ibm-plex-mono text-xs md:text-sm text-white dark:text-white/70 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#422727] dark:bg-white/10 text-white font-ibm-plex-mono text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
