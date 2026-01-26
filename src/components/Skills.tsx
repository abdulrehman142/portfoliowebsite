const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Python', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'C', level: 75 },
      ],
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'ShadCN/UI', level: 85 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'Flask', level: 75 },
      ],
    },
    {
      title: 'Data Science & ML',
      skills: [
        { name: 'NumPy', level: 80 },
        { name: 'Pandas', level: 80 },
        { name: 'Scikit-learn', level: 75 },
        { name: 'TensorFlow', level: 70 },
        { name: 'CNN/ANN', level: 70 },
      ],
    },
    {
      title: 'Databases & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'T-SQL', level: 75 },
        { name: 'AWS S3', level: 70 },
      ],
    },
    {
      title: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'MLflow', level: 70 },
        { name: 'DVC', level: 70 },
        { name: 'Netlify', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-6 md:py-12 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-3 md:px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="font-jersey text-4xl sm:text-5xl md:text-6xl text-[#231212] dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="font-ibm-plex-mono text-sm md:text-base text-[#231212]/70 dark:text-white/70 max-w-2xl mx-auto">
            Technologies I work with and my proficiency in each
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-4 md:p-6 bg-[#231212] rounded-3xl border-2 border-[#E5E5E5] dark:border-white/10 shadow-lg"
            >
              <h3 className="font-jersey text-xl md:text-2xl text-white mb-4 md:mb-6">
                {category.title}
              </h3>
              <div className="space-y-3 md:space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-ibm-plex-mono text-xs md:text-sm text-white">
                        {skill.name}
                      </span>
                      <span className="font-ibm-plex-mono text-xs text-white/60">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-white/20 rounded-md h-2">
                      <div
                        className="bg-white h-2 rounded-md transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-8 md:mt-16 text-center">
          <h3 className="font-jersey text-2xl md:text-3xl text-[#231212] dark:text-white mb-4 md:mb-6 flex items-center justify-center gap-2">
            Certifications
          </h3>

          <div className="inline-flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 bg-[#231212] rounded-md shadow-lg">
            <p className="font-ibm-plex-mono text-sm md:text-base text-white">
              AWS Cloud Foundations Course
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
