import book from "../../assets/image 3.png";
import desk from "../../assets/desk.png";
import laptop from "../../assets/image 2.png";
import bookstack from "../../assets/image 4.png";
import pencilCup from "../../assets/image 5.png";
import coffeeCup from "../../assets/image 6.png";
import { FiFigma } from "react-icons/fi";
import { FaReact, FaSass, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiJavascript } from "react-icons/si";

import "../../styles/homepage/illustration.scss";

export default function Illusrations() {
  const icons = [
    <FiFigma size={30}/>,
    <FaReact size={30}/>,
    <SiTypescript size={30}/>,
    <FaSass size={30}/>,
    <SiJavascript size={30}/>,
    <FaCss3Alt size={30}/>,
    <FaHtml5 size={30}/>,
  ];

  const svgs = [
    { source: book, alt: "books", id: "book-shelf" },
    { source: desk, alt: "desk", id: "desk" },
    { source: laptop, alt: "laptop", id: "laptop" },
    { source: bookstack, alt: "bookstack", id: "book-stack" },
    { source: pencilCup, alt: "pencilCup", id: "pencil-cup" },
    { source: coffeeCup, alt: "coffeeCup", id: "coffee-cup" },
  ];

  return (
    <div id='illustrations'>
      {svgs.map((svg) => {
        return (
          <img src={svg.source} alt={svg.alt} id={svg.id} className='svgs' />
        );
      })}
      <div className='icon-container'>
        {icons.map((i) => {
          return i;
        })}
      </div>
    </div>
  );
}
