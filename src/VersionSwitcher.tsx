import Experiences from "./components/classic/Experiences"
import HomeC from "./components/classic/HomeC"

function VersionSwitcher({ version }: {version:string}) {
    if (version === "classic") {
        return (
            <>
                <HomeC />
                <Experiences />
            </>
        )
    } else if (version === "dev") {
        return (
            //! Placeholder
            <HomeC />
        )
    } else {
        return null
    }
}

export default VersionSwitcher