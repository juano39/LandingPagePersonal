import { useEffect, useState } from "react"
import { Cover } from "./components/Cover"
import { Footer } from "./components/Footer"
import { Info } from "./components/Info"
import { Navbar } from "./components/Navbar"
import "./css/App.css"
import { EstudiosPage } from "./page/EstudiosPage"
import { PerfilPage } from "./page/PerfilPage"
import { PortafolioPage } from "./page/PortafolioPage"


export const App = () => {

  const [scrollHeight, setScrollHEight] = useState(0);
  
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollHEight(position)
  };

  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])


  return (
    <div className="App">
      <Navbar
      isScrolling={scrollHeight} />
      <Cover/>
      <PerfilPage/>
      <EstudiosPage/>
      <PortafolioPage/>
      <Info/>
      <Footer/>
    </div>
  )
}
