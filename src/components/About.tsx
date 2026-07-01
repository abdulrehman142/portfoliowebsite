import { Code, Coffee, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-6 md:py-12 bg-[#F3F3F3] dark:bg-black">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-jersey text-4xl sm:text-5xl md:text-6xl text-[#231212] dark:text-white mb-4">
            About Me
          </h2>
          <p className="font-ibm-plex-mono text-sm md:text-base text-[#231212]/70 dark:text-white/70 max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image Area */}
          <div className="relative">
            <div className="aspect-square max-w-xs sm:max-w-md mx-auto">
              <div className="w-full h-full rounded-md overflow-hidden border-2 border-[#231212] dark:border-white shadow-lg">
                <img
                  src="/images/pfp.png"
                  alt="Abdul Rehman"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#422727] dark:bg-[#CCCCCC] rounded-md -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#E5E5E5] dark:bg-white/20 rounded-md -z-10"></div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <h3 className="font-jersey text-2xl md:text-3xl text-[#231212] dark:text-white mb-6">
              Hi, I'm Abdul Rehman 👋
            </h3>

            <div className="space-y-4 font-ibm-plex-mono text-sm md:text-base text-[#231212]/80 dark:text-white/80">
              <p>
                I'm an AI/ML engineer and software developer at{' '}
                <span className="text-[#422727] dark:text-[#CCCCCC] font-semibold">
                  FAST National University of Computer and Emerging Sciences
                </span>{' '}
                with a focus on building practical systems that combine strong
                software engineering with applied machine learning.
              </p>

              <p>
                My work spans{' '}
                <span className="text-[#422727] dark:text-[#CCCCCC] font-semibold">
                  full-stack development
                </span>{' '}
                and{' '}
                <span className="text-[#422727] dark:text-[#CCCCCC] font-semibold">
                  AI/ML engineering
                </span>
                , from responsive frontend interfaces to OCR pipelines and AI
                healthcare products.
              </p>

              <p>
                I enjoy shipping useful products, improving user experience, and
                working on projects that turn messy real-world problems into
                reliable systems.
              </p>
            </div>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
              <div className="p-3 md:p-4 bg-[#231212] rounded-md border-2 border-[#E5E5E5] dark:border-white/10 shadow-lg">
                <Code className="text-white mb-2" size={24} />
                <h4 className="font-ibm-plex-mono font-semibold text-white text-xs md:text-sm">
                  Clean Code
                </h4>
                <p className="font-ibm-plex-mono text-xs text-white/60">
                  Readable & maintainable
                </p>
              </div>

              <div className="p-3 md:p-4 bg-[#231212] rounded-md border-2 border-[#E5E5E5] dark:border-white/10 shadow-lg">
                <Lightbulb className="text-white mb-2" size={24} />
                <h4 className="font-ibm-plex-mono font-semibold text-white text-xs md:text-sm">
                  Problem Solver
                </h4>
                <p className="font-ibm-plex-mono text-xs text-white/60">
                  Creative solutions
                </p>
              </div>

              <div className="p-3 md:p-4 bg-[#231212] rounded-md border-2 border-[#E5E5E5] dark:border-white/10 shadow-lg">
                <Coffee className="text-white mb-2" size={24} />
                <h4 className="font-ibm-plex-mono font-semibold text-white text-xs md:text-sm">
                  Always Learning
                </h4>
                <p className="font-ibm-plex-mono text-xs text-white/60">
                  Continuous growth
                </p>
              </div>

              <div className="p-3 md:p-4 bg-[#231212]  rounded-md border-2 border-[#E5E5E5] dark:border-white/10 shadow-lg">
                <Rocket className="text-white mb-2" size={24} />
                <h4 className="font-ibm-plex-mono font-semibold text-white text-xs md:text-sm">
                  Ship Fast
                </h4>
                <p className="font-ibm-plex-mono text-xs text-white/60">
                  Iterate & improve
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
