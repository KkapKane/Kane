import "./styles/app.scss"
import Nav from './components/Nav'
import scrollIcon from "./assets/scroll.svg"
import Projects from "./components/Projects"
import Homepage from "./components/Homepage/Homepage"
import {useRef, useState} from 'react';


function App() {


const ballRef = useRef<HTMLDivElement>(null)  
const projectPage = useRef<HTMLDListElement>(null)

const animateScroll = () => {
  let ballposition = 0

  let interval = setInterval(() => {
    if(!ballRef.current) return;
    projectPage.current?.scrollIntoView({behavior: 'smooth'})
    ballposition++
    ballRef.current.style.top = `${ballposition}%`
    if(ballposition >= 40){
      clearInterval(interval)
    }
  }, 4)
  
}

  return (
    <div className="App">
    <Nav />
     <Homepage />
     <div className="scroll-container">
     <img src={scrollIcon} alt="scroll indicator" id="scroll-icon" />
      <div id="ball" onClick={() => animateScroll()} ref={ballRef}></div>
     </div>
     <Projects projectPage={projectPage}/>
    </div>
  )
}

export default App
