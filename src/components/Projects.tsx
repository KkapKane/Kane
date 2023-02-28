import "../styles/projects/projects.scss"
import text from "../assets/image 2.png"

interface Props {
    projectPage: any;
}

export default function Projects({projectPage} : Props) {
    return (
        <div id="projects" ref={projectPage}>
            PROJECTS HERE
        </div>
    )
}