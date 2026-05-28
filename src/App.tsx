import './App.css'
import Navbar from './components/Navbar'
import VersionSwitcher from './VersionSwitcher'

function App() {
  const version = new URLSearchParams(document.location.search).get("ver")
  
  return (
    <>
      <Navbar />
      <VersionSwitcher version={version!} />
    </>
  )
}

export default App
