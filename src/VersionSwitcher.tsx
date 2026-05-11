import Experiences from "./components/classic/Experiences"
import HomeC from "./components/classic/HomeC"
import SoftSkills from "./components/classic/SoftSkills"
import Contact from "./components/Contact"
import HomeD from "./components/dev/HomeD"
import Skills from "./components/dev/Skills"

function VersionSwitcher({ version }: {version:string}) {
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
                <Contact />
            </>
        )
    } else {
        return null
    }
}

export default VersionSwitcher