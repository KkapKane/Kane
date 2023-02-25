import book from "../assets/image 3.png"
import desk from "../assets/desk.png"
import laptop from "../assets/image 2.png"
import bookstack from "../assets/image 4.png"
import pencilCup from "../assets/image 5.png"
import coffeeCup from "../assets/image 6.png"
import "../styles/illustration.scss"

export default function Illusrations() {
    return (
        <div id="illustrations">
            <img src={book} alt="books" id="book-shelf"/>
            <img src={desk} alt="desk"  id="desk"/>
            <img src={laptop} alt="laptop"  id="laptop"/>
            <img src={bookstack} alt="book stack" id="book-stack" />
            <img src={pencilCup} alt="book stack" id="pencil-cup" />
            <img src={coffeeCup} alt="book stack" id="coffee-cup" />
        </div>
    )
}