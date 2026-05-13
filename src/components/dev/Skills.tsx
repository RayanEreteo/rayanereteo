function Skills() {
  const skills = [
    {
      title: "Langages",
      items: ["HTML5/CSS3", "Javascript", "Typescript", "C#", "Python", "Dart"],
      accent: "primary",
    },
    {
      title: "Front-end",
      items: ["React", "NextJS", "Tailwind CSS", "Vite", "Flutter"],
      accent: "secondary",
    },
    {
      title: "Back-end",
      items: ["NodeJS", "Express", "Flask", "MySQL", "MongoDB"],
      accent: "accent",
    },
    {
      title: "Outils & Systèmes",
      items: ["VSCode", "Android Studio", "Git", "Windows 11", "Linux (Ubuntu)"],
      accent: "info",
    },
  ]

  return (
    <section id="skills" className="bg-base-200 py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mb-10 text-center">
          <h2 className="section-title">Compétences</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Découvrez mon stack technique et mes principaux outils : une combinaison d'expertise front-end, back-end et d'environnements de développement.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {skills.map((section) => (
            <div key={section.title} className="card bg-base-100 shadow-xl border border-base-200">
              <div className="card-body p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">{section.title}</h3>
                  <span className={`badge badge-${section.accent} badge-outline`}>+{section.items.length}</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {section.items.map((skill) => (
                    <span key={skill} className="badge badge-ghost badge-lg text-slate-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills