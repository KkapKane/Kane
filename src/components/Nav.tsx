import logo from "../assets/logo.png"

import "../styles/Nav.scss"

export default function Nav() {
    const links = ["Home" , "Projects", "About" , "Contact"]
    return (
        <div id="Nav">
            <img src={logo} alt="boy with glasses" id="logo"/>
            <div id="link-container">
            {links.map((link) => <span >{link}</span>)}
            </div>
        </div>
    )
}