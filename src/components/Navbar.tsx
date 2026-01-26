import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Dark mode toggle images
import lightModeIcon from '/images/lightmodeIcon.png';
import darkModeIconDark from '/images/ddarkmodeIcon.png';
import darkModeIconWhite from '/images/wdarkmodeIcon.jpg';

// Social icons
import githubIcon from '/images/github.png';
import githubHoverIcon from '/images/wgithub.png';
import linkedinIcon from '/images/linkedin.png';
import contactIcon from '/images/contact.png';

// Nav icons
import homeIcon from '/images/home.png';
import projectsIcon from '/images/projects.png';
import aboutIcon from '/images/about.png';
import skillsIcon from '/images/skills.png';
import experienceIcon from '/images/experience.png';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toggleHovered, setToggleHovered] = useState(false);
  const [githubHovered, setGithubHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', image: homeIcon },
    { name: 'Projects', href: '#projects', image: projectsIcon },
    { name: 'About', href: '#about', image: aboutIcon },
    { name: 'Skills', href: '#skills', image: skillsIcon },
    { name: 'Experience', href: '#experience', image: experienceIcon },
    { name: 'Contact', href: '#contact', image: contactIcon },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg border-b-2 border-[#231212]/10 dark:border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="font-ibm-plex-mono px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-3 py-2 font-ibm-plex-mono text-sm rounded-md text-[#231212] dark:text-white hover:bg-[#422727] hover:text-white dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-200"
              >
                <img src={link.image} alt={link.name} className="w-4 h-4" />
                <span>{link.name}</span>
              </a>
            ))}

            {/* Divider */}
            <div className="h-6 w-px bg-[#231212]/20 dark:bg-white/20 mx-2"></div>

            {/* Social Links */}
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/abdulrehman142"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-[#422727] hover:text-white dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="GitHub"
                onMouseEnter={() => setGithubHovered(true)}
                onMouseLeave={() => setGithubHovered(false)}
              >
                <img
                  src={githubHovered ? githubHoverIcon : githubIcon}
                  alt="GitHub"
                  className={`w-5 h-5 ${!githubHovered ? 'dark:invert' : ''}`}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rehman2020/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md hover:bg-[#422727] hover:text-white dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              </a>
              <a
                href="mailto:abdulrehmantahir142@gmail.com"
                className="p-2 rounded-md hover:bg-[#422727] hover:text-white dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Email"
              >
                <img src={contactIcon} alt="Email" className="w-5 h-5" />
              </a>
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-[#231212]/20 dark:bg-white/20 mx-2"></div>

            <button
              onClick={toggleDarkMode}
              onMouseEnter={() => setToggleHovered(true)}
              onMouseLeave={() => setToggleHovered(false)}
              className="p-2 rounded-md border-[#231212] dark:border-white  hover:bg-[#422727] hover:border-[#422727] dark:hover:bg-gray-800 dark:hover:border-gray-800 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              <img
                src={
                  darkMode
                    ? toggleHovered
                      ? darkModeIconWhite
                      : darkModeIconWhite
                    : toggleHovered
                      ? lightModeIcon
                      : darkModeIconDark
                }
                alt="Toggle Dark Mode"
                className="w-5 h-5"
              />
            </button>
          </div>

          <div className="md:hidden flex items-center gap-1.5">
            {/* Social Links */}
            <a
              href="https://github.com/abdulrehman142"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-[#422727] dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="GitHub"
              onMouseEnter={() => setGithubHovered(true)}
              onMouseLeave={() => setGithubHovered(false)}
            >
              <img
                src={githubHovered ? githubHoverIcon : githubIcon}
                alt="GitHub"
                className={`w-5 h-5 ${!githubHovered ? 'dark:invert' : ''}`}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rehman2020/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md hover:bg-[#422727] dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-5 h-5 dark:invert"
              />
            </a>
            <a
              href="mailto:your.email@example.com"
              className="p-1.5 rounded-md hover:bg-[#422727] dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Email"
            >
              <img
                src={contactIcon}
                alt="Email"
                className="w-5 h-5 dark:invert"
              />
            </a>

            {/* Divider */}
            <div className="h-5 w-px bg-[#231212]/20 dark:bg-white/20 mx-1"></div>

            <button
              onClick={toggleDarkMode}
              onMouseEnter={() => setToggleHovered(true)}
              onMouseLeave={() => setToggleHovered(false)}
              className="p-1.5 rounded-md hover:bg-[#422727] dark:hover:bg-gray-800 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              <img
                src={
                  darkMode
                    ? toggleHovered
                      ? darkModeIconWhite
                      : darkModeIconWhite
                    : toggleHovered
                      ? lightModeIcon
                      : darkModeIconDark
                }
                alt="Toggle Dark Mode"
                className="w-5 h-5"
              />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md border-2 border-[#231212] dark:border-white text-[#231212] dark:text-white hover:bg-[#422727] hover:text-white dark:hover:bg-gray-800 dark:hover:text-white dark:hover:border-gray-800 transition-all duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-black border-t-2 border-[#231212]/10 dark:border-white/10 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 font-ibm-plex-mono text-[#231212] dark:text-white border-2 border-transparent rounded-md hover:bg-[#422727] hover:text-white hover:border-[#422727] dark:hover:bg-gray-800 dark:hover:text-white dark:hover:border-gray-800 transition-all duration-200"
                >
                  <img
                    src={link.image}
                    alt={link.name}
                    className="w-4 h-4 dark:invert"
                  />
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
