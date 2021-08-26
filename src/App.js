import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import Menu from './components/Menu'
import Button from './components/Button'
import ToggleThemeButton from './components/ToggleThemeButton'

function App() {

  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    // console.log("toggle");
    let copy = toggle
    setToggle(!copy);
  }

  useEffect(() => {
    // console.log("se ejecutó toggle");
    const cuerpo = document.body
    cuerpo.classList.toggle("dark-mode")
  }, [toggle])

  return (
    <div className="container">
      <ToggleThemeButton toggle={toggle} onChange={handleToggle}/>
      <Menu />
      <Home />
      <Button text={"contáctame"} />
    </div>
  );
}

export default App;
