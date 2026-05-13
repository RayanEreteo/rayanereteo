import { FaGithub, FaLinkedin } from "react-icons/fa";

function HomeD() {
  return (
    <section id="Home" className="hero min-h-screen bg-base-200 motion-opacity-in-0 motion-translate-y-in-100">
      <div className="hero-content flex-col lg:flex-row gap-12 px-6 py-12 lg:px-12">
        <div className="text-center lg:text-left max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary mb-5">
            Développeur full-stack · React & TypeScript
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            Rayan Ereteo
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Création d'expériences web modernes, performantes et accessibles avec React, Tailwind et une touche de design élégant.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a href="#contact" className="btn btn-primary btn-lg">
              Me contacter
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-slate-700">
            <a
              href="https://github.com/rayanereteo"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="btn btn-circle btn-ghost border border-base-300 hover:border-primary"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/rayan-ereteo-65099437a/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="btn btn-circle btn-ghost border border-base-300 hover:border-primary"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <div className="border border-base-300 bg-base-100 shadow-xl p-8 w-full max-w-xl">
          <div className="flex flex-col gap-6">
            <div className="badge badge-primary badge-outline w-fit">Full-stack</div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-3">Compétences clés</p>
              <div className="flex flex-wrap gap-3">
                <span className="badge badge-outline">React</span>
                <span className="badge badge-outline">TypeScript</span>
                <span className="badge badge-outline">Tailwind CSS</span>
                <span className="badge badge-outline">Node.js</span>
                <span className="badge badge-outline">API</span>
                <span className="badge badge-outline">UI/UX</span>
              </div>
            </div>
            <div className="rounded-3xl border border-base-200 bg-base-200 p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500 mb-2">À propos</p>
              <p className="text-slate-600">
                Je construis des applications web claires et fluides, en mettant l'accent sur la qualité du code et l'expérience utilisateur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeD;