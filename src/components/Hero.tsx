import { ArrowDown, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = 'Welcome to my portfolio';

  useEffect(() => {
    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < fullText.length) {
            setDisplayText(fullText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(fullText.slice(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 40 : 80
    );

    return () => clearTimeout(timer);
  }, [displayText, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-black"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#231212]/5 dark:bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#231212]/5 dark:bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-3 md:px-4 text-center py-6 md:py-12">
        <div className="mb-6">
          <span className="font-ibm-plex-mono text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#231212] dark:text-white">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        <h1 className="font-jersey text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#231212] dark:text-white mb-4">
          Abdul Rehman
        </h1>

        <p className="font-ibm-plex-mono text-base sm:text-lg md:text-xl lg:text-2xl text-[#422727] dark:text-[#CCCCCC] mb-6">
          Full Stack Developer & ML Enthusiast
        </p>

        <p className="font-ibm-plex-mono text-[#231212]/80 dark:text-white/80 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          I build robust web applications and explore AI/ML solutions.
          Passionate about turning complex problems into elegant, user-friendly
          experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/AbdulRehman_CV.pdf"
            download
            className="w-full sm:w-auto px-6 md:px-8 py-3 bg-[#231212] hover:bg-[#422727] text-white font-ibm-plex-mono text-xs sm:text-sm rounded-md dark:hover:bg-gray-800 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-[#231212]/40 dark:text-white/40" size={24} />
      </div>
    </section>
  );
};

export default Hero;
