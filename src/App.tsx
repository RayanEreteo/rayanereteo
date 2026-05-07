import './App.css'
import Navbar from './components/Navbar'

function App() {
  let version = new URLSearchParams(document.location.search).get("ver")
  if(!version || version === "" || (version != "classic" && version != "dev")) window.location.href = "http://localhost:5173/?ver=classic"

  return (
    <Navbar />
  )
}

export default App
