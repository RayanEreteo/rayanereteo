import { useState } from "react"

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const contactEmail = "ereteo.rayan1@gmail.com"
  const phoneNumber = "07 44 54 35 56"

  const handleSubmit = (event: any) => {
    event.preventDefault()
  }

  return (
    <section id="contact" className="bg-base-200 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold uppercase tracking-[0.35em] text-sm">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold sm:text-5xl">Faisons avancer les choses ensemble.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
            Contactez-moi par téléphone ou par e-mail, ou laissez-moi un message ci-dessous. Je répond généralement en quelque heures.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.4fr]">
          <div className="rounded-[2rem] border border-base-300 bg-base-100 p-8 shadow-lg shadow-base-200/50">
            <div className="space-y-6">
              <div>
                <span className="text-sm uppercase tracking-[0.35em] text-primary">Phone</span>
                <p className="mt-3 text-2xl font-semibold text-base-content">{phoneNumber}</p>
                <a className="link link-hover text-base-content/70" href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>
                  Cliquer pour appeler
                </a>
              </div>

              <div>
                <span className="text-sm uppercase tracking-[0.35em] text-primary">Email</span>
                <p className="mt-3 text-2xl font-semibold text-base-content">{contactEmail}</p>
                <a className="link link-hover text-base-content/70" href={`mailto:${contactEmail}`}>
                  Cliquer pour envoyer un mail
                </a>
              </div>

              <div className="rounded-3xl bg-primary/5 p-6">
                <h3 className="text-xl font-semibold">Note Rapide !</h3>
                <p className="mt-2 text-base-content/70">
                  Vous pouvez me contacter rapidement en remplissant le formulaire a droite de l'écran.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-base-300 bg-base-100 p-8 shadow-lg shadow-base-200/50">
            <div className="grid gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nom</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full bg-base-200"
                  placeholder="Votre nom OU celle de l'entreprise"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full bg-base-200"
                  placeholder="lorem@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered min-h-[160px] w-full bg-base-200"
                  placeholder="Dites moi votre proposition..."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary w-full py-4 text-base font-semibold">
                Envoyer le message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact