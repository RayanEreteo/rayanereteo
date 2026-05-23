function Projects() {
  const projects = [
    {
      title: "Lives Pictures",
      description: "Application web pour organiser vos tâches, suivre l'avancement et garder une vue claire sur vos priorités.",
      image: "/thumbnail/livespictures.png",
      url: "https://livespictures.com/",
      completed: true,
      tags: ["TypeScript", "Socket.IO"],
    },
    {
      title: "Will It Dry ?",
      description: "Site de présentation moderne avec animations légères, sections dynamiques et un design responsive premium.",
      image: "/thumbnail/willitdry.png",
      url: "https://willitdry.vercel.app/",
      completed: true,
      tags: ["Vite", "CSS", "UX"],
    },
    {
      title: "Vaultio",
      description: "Gestionnaire de mot de passe.",
      image: "/thumbnail/codeonly.png",
      url: "https://github.com/RayanEreteo/Vaultio-Project",
      completed: true,
      tags: ["C#", ".NET Core", "AES-256"],
    },
  ]

  return (
    <section id="projects" className="bg-base-200 py-14">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <div className="mb-10 text-center">
          <h2 className="section-title">Projets</h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-300">
            Découvrez quelques réalisations récentes, chaque projet présentant une interface, une description claire et un lien direct pour explorer.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card group overflow-hidden rounded-[2rem] border border-base-200 bg-base-100 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="card-body flex flex-col gap-4 p-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge badge-outline badge-sm text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    {project.completed ? "Voir le projet" : "Voir le code source"}
                  </a>
                  <span className="text-xs uppercase tracking-[0.24em] text-slate-400">{project.completed ? "Terminé": "En cours"}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects