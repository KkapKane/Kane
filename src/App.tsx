import { useState } from 'react'
import "./styles/app.scss"
import Title from './components/Title'
import Illusrations from './components/Illustration'
import Nav from './components/Nav'


function App() {
 

  return (
    <div className="App">
    <Nav />
     <Title />
     <Illusrations />
    </div>
  )
}

export default App
