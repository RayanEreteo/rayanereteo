import face from "../../assets/hidden.webp"

function HomeC() {
  const d = new Date();
  let year = d.getFullYear();

  return (
    <section className="" id="Home">
      <div className="motion-opacity-in-0 motion-translate-y-in-100 hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={face}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Bienvenue!</h1>
            <p className="py-6">
              Mon nom est Rayan, agé de {Number(year.toString().substring(2, 4)) - 3} ans, je suis un professionnel opérationnel et organisé, dévoué et ambitieux.
            </p>
            <a className="btn btn-primary" href="#contact">Me Contacter</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeC