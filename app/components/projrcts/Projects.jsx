import Wrapper from "../Wrapper"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div>
        <Wrapper myStyle='flex flex-col gap-8'>
            <h2 className="text-color-secondary text-2xl">Projrcts</h2>
            <ProjectItem src='/image/project1.png' href='https://clone-flame-nine.vercel.app/' title='Clothing E-commerce' w={841} h={480} />
            <ProjectItem src='/image/project2.png' href='/' title='Watchi' w={745} h={445} />
        </Wrapper>
    </div>
  )
}

export default Projects