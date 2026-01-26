const githubIcon = '/images/github.png';
const linkedinIcon = '/images/linkedin.png';
const contactIcon = '/images/contact.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 bg-[#231212] dark:bg-black border-t-2 border-[#422727] dark:border-white/10">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/80">
            <span className="font-ibm-plex-mono text-xs md:text-sm">
              © {currentYear} Abdul Rehman. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/abdulrehman142"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="GitHub"
            >
              <img src={githubIcon} alt="GitHub" className="w-5 h-5 invert" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rehman2020/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="LinkedIn"
            >
              <img
                src={linkedinIcon}
                alt="LinkedIn"
                className="w-5 h-5 invert"
              />
            </a>
            <a
              href="mailto:abdulrehmantahir142@gmail.com"
              className="hover:opacity-80 transition-opacity duration-200"
              aria-label="Email"
            >
              <img src={contactIcon} alt="Email" className="w-5 h-5 invert" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
