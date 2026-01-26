import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      value: 'abdulrehmantahir142@gmail.com',
      href: 'mailto:abdulrehmantahir142@gmail.com',
      icon: Mail,
    },
    {
      name: 'GitHub',
      value: 'github.com/abdulrehman142',
      href: 'https://github.com/abdulrehman142',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/abdul-rehman2020',
      href: 'https://www.linkedin.com/in/abdul-rehman2020/',
      icon: Linkedin,
    },
  ];

  return (
    <section id="contact" className="py-6 md:py-12 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-jersey text-4xl sm:text-5xl md:text-6xl text-[#231212] dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="font-ibm-plex-mono text-sm md:text-base text-[#231212]/70 dark:text-white/70 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-jersey text-2xl md:text-3xl text-[#231212] dark:text-white mb-4 md:mb-6">
              Let's Connect
            </h3>

            <p className="font-ibm-plex-mono text-sm md:text-base text-[#231212]/80 dark:text-white/80 mb-6 md:mb-8">
              I'm currently looking for new opportunities and my inbox is always
              open. Whether you have a question, want to collaborate, or just
              want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex items-center justify-center gap-2 text-[#231212]/70 dark:text-white/70 mb-6 md:mb-8">
              <MapPin size={18} />
              <span className="font-ibm-plex-mono text-sm md:text-base">
                Lahore, Pakistan
              </span>
            </div>

            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={
                    link.name !== 'Email' ? 'noopener noreferrer' : undefined
                  }
                  className="flex items-center gap-4 p-3 md:p-4 bg-[#231212] rounded-md transition-all duration-200 group shadow-lg"
                >
                  <div className="p-2 md:p-3 bg-white dark:bg-white/10 rounded-md text-[#231212] dark:text-white">
                    <link.icon size={20} className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-left">
                    <p className="font-ibm-plex-mono text-xs md:text-sm text-white/60">
                      {link.name}
                    </p>
                    <p className="font-ibm-plex-mono text-xs sm:text-sm md:text-base text-white group-hover:text-white transition-colors duration-200 break-all sm:break-normal">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
