import "../styles/title.scss";
import arrow from "../assets/arrow.png";
import { useState, useEffect } from "react";

export default function Title() {
  const [introText, setIntroText] = useState("Hi Im Kane");
  const letters: string = "ABCDEFGHIJKLMNOPQRSTUVWZYZ";

  let originalText = "HI IM KANE";

  function hackerEffect() {
    let iterations = 0;
    const interval = setInterval(() => {
      if (iterations > originalText.length) {
        clearInterval(interval);
      }
      let splitted = introText.split("")
      let randomized = splitted.map((letter, index) =>{
        if(index < iterations){
          return originalText.split("")[index] 
        }
        else {
           
         return letters.split("")[Math.floor(Math.random() * 26)];
        }
      }).join("")
        // .map((letter, index)  =>
        
        //  letters.split("")[Math.floor(Math.random() * 26)])
        // .join("");
      setIntroText(randomized);

      iterations += 1 / 3;
    }, 50);
    
  }

  useEffect(() => {
    hackerEffect();
  }, [])

  return (
    <div className='title'>
      <div className='intro'>
        <div className='text-box'>
          <div id='line-1' onMouseOver={hackerEffect}>
            {introText}
          </div>
          <div id='line-2'>
            A WEB <span id='dev'>DEV</span>
          </div>
        </div>
        <div id='description'>
          {" "}
          I'VE BEEN PROGRAMMING FOR 4 YEARS WITH 1 YEAR IN WEB DEV. LETS
          CONNECT!
        </div>
      </div>
      <img src={arrow} alt='arrow' id='arrow' />
      <div className='button-container'>
        <span id='project-btn'>projects</span>
        <span id='connect-btn'>connect</span>
      </div>
    </div>
  );
}
