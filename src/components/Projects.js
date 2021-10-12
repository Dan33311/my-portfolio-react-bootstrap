import ProjectCard from './ProjectCard'

import lineImage from '../assets/line-b.png'
import projectImgOne from "../assets/square-kcc.png";
import projectImgTwo from "../assets/square-spacex.png";
import projectImgThree from "../assets/square-toodo.png";
import projectImgFour from "../assets/square-toodo2.png";
import projectIcon from '../assets/computer.png'


const projectsCards = [
  {
    id: 1,
    title: 'SpaceX-API',
    description: 'Working with the SpaceX API, you can get info about launches, missions, rockets through a UI',
    text: 'React, Router, API',
    icon: projectIcon,
    image: projectImgTwo
  },
  {
    id: 2,
    title: 'KOFCOLOMBIA',
    description: 'React app, mainly using Bootstrap for styles and we are able to customize styles through a SASS file',
    text: 'React, Bootstrap, SASS',
    icon: projectIcon,
    image: projectImgOne
  },
  {
    id: 3,
    title: 'TOODO App',
    description: 'A TODO app, using React, and React-Router, HOOKS and CSS for styles, you can add, list, edit and delete task ',
    text: 'React, React-Router, CRUD, CSS, HTML',
    icon: projectIcon,
    image: projectImgThree
  },
  {
    id: 4,
    title: 'Markdown',
    description: 'This app allow us view a basic info about Fighting Games events, tournaments and competitons, you could publish your own event, edit and deleted it',
    text: 'NodeJS, Express, MongoDB, EJS',
    icon: projectIcon,
    image: projectImgFour
  },
]

const Projects = () => {
  return (  
    <section id="techstack" className="bg-light mt-5 pt-5">
      <div className="container-lg">

        <div className="text-center">
          <h2 className="card-title mt-4 mb-2 display-5" style={{fontFamily: 'Prata'}}>Projects</h2>
          <div>
            <img src={lineImage} className="img-fluid" alt="line" />
          </div>
        </div>


        <div>
          {projectsCards.map(projectCard =>
          <div className="card"> 
            <div className="row justify-content-center align-items-center" key={projectCard.id}>
              <div className="col-md-4 border border-danger">
                <img className="px-0 mx-0" src={projectCard.image} alt="image project" />         
              </div>
              <div className="col-md-6 border border-danger"> 
                <ProjectCard 
                  title={projectCard.title} 
                  description={projectCard.description} 
                  iconSrc={projectCard.icon} 
                  text={projectCard.text}
                  // imageSrc={projectCard.image}
                />
              </div>
            </div>
          </div>)}          
        </div>

      </div>

    </section>
  );
}

export default Projects;