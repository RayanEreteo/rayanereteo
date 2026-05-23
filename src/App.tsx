import './App.css'
import Navbar from './components/Navbar'
import VersionSwitcher from './VersionSwitcher'

function App() {
  const version = new URLSearchParams(document.location.search).get("ver")
  //https://rayanereteo.vercel.app/?ver=classic
  if (version !== "classic" && version !== "dev") window.location.href = "https://rayanereteo.vercel.app/?ver=dev"

  return (
    <>
      <Navbar />
      <VersionSwitcher version={version!} />
    </>
  )
}

export default App
