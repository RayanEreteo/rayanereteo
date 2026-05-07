import HomeC from "./components/classic/HomeC"

function VersionSwitcher({ version }: {version:string}) {
    if (version === "classic") {
        return (
            <HomeC />
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