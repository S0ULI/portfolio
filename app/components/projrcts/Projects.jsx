import Wrapper from "../Wrapper"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div id="projects">
        <Wrapper myStyle='flex flex-col gap-8'>
            <h2 className="h2-style">Projrcts</h2>
            <ProjectItem src='/image/project1.png' href='https://clone-flame-nine.vercel.app/' title='Clothing E-commerce' w={841} h={480} />
            <ProjectItem src='/image/project2.png' title='Watchi' w={745} h={445} />
        </Wrapper>
    </div>
  )
}

export default Projects