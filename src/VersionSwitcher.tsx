import Experiences from "./components/classic/Experiences"
import HomeC from "./components/classic/HomeC"
import SoftSkills from "./components/classic/SoftSkills"
import Contact from "./components/Contact"
import HomeD from "./components/dev/HomeD"
import Projects from "./components/dev/Projects"
import Skills from "./components/dev/Skills"

import { useEffect, useRef } from "react"

function VersionSwitcher({ version }: { version: string }) {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (modalRef.current){
            modalRef.current.showModal()
        }
    }, [])

    if (version === "classic") {
        return (
            <>
                <HomeC />
                <SoftSkills />
                <Experiences />
                <Contact />
            </>
        )
    } else if (version === "dev") {
        return (
            <>
                <HomeD />
                <Skills />
                <Projects />
                <Contact />
            </>
        )
    } else {
        return (
            <>
                <dialog ref={modalRef} id="modal" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Bonjour !</h3>
                        <p className="py-4">Vous semblez avoir choisi aucune version valide du portfolio !</p>
                        <p className="py-4 font-bold">Veuillez choisir votre type d'entreprise :</p>
                        <div className="version-links flex space-x-4">
                            <a href="https://rayanereteo.vercel.app/?ver=dev" className="text-cyan-600 underline">Entreprise tech / ESN</a>
                            <a href="https://rayanereteo.vercel.app/?ver=classic" className="text-cyan-600 underline">Autre</a>
                        </div>
                    </div>
                </dialog>
            </>
        )
    }
}

export default VersionSwitcher