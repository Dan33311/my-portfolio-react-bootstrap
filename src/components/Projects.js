import './navbar.css';
import ProjectCard from './ProjectCard';

import lineImage from '../assets/line-b.png'
import projectImgOne from "../assets/square-kcc.png";
import projectImgTwo from "../assets/square-spacex.png";
import projectImgThree from "../assets/square-toodo.png";
import projectImgFour from "../assets/square-toodo2.png";
import projectIcon from '../assets/computer.png';


const projectsCards = [
  {
    id: 1,
    title: 'SpaceX-API',
    description: 'Working with the SpaceX API, you can get info about launches, missions, rockets through a UI',
    text: 'React, Router, API, Fetch',
    icon: projectIcon,
    image: projectImgTwo
  },
  
  {
    id: 2,
    title: 'TOODO App',
    description: 'A TODO app, using React and React-Router, HOOKS, you can add, list, edit and delete task',
    text: 'React, React-Router, CRUD, CSS',
    icon: projectIcon,
    image: projectImgThree
  },
  {
    id: 3,
    title: 'KOFCOLOMBIA',
    description: 'React app, mainly using Bootstrap for styles and we are able to customize styles through a SASS file',
    text: 'React, Bootstrap, SASS',
    icon: projectIcon,
    image: projectImgOne
  },
  {
    id: 4,
    title: 'Markdown App',
    description: 'This app allow us to write Markdown, you could view Markdown info, edit and deleted it',
    text: 'NodeJS, Express, MongoDB, EJS',
    icon: projectIcon,
    image: projectImgFour
  },
]

const Projects = () => {
  return (  
    <section id="techstack" className="bg-dark bg-opacity-10 py-5">
      <div className="container-lg">

        <div className="text-center">
          <h2 className="card-title mt-4 mb-2 display-5" style={{fontFamily: 'Prata'}}>Projects</h2>
          <div className="mb-4">
            <img src={lineImage} className="img-fluid" alt="line" />
          </div>
        </div>


        <div>
          {projectsCards.map(projectCard =>
          // funcionan los child, NO row-reverse
          <div className="card card-w bg-transparent border border-0 mb-3 pt-2">
            {/* aca aplica el row-reverse, NO funcionan los child */}
            <div className="card-p row g-0  justify-content-center align-items-center" key={projectCard.id}>
              <div className="card-i d-none d-sm-none d-md-block col-md-4 d-flex" style={{width: '303px', height: '304px'}}>{/* justify-content-end */}
                <img className="img-fluid" src={projectCard.image} alt="project" style={{height: '304px'}}/>         
              </div>
              <div className="card-c bg-white col-md-5" style={{width: '424px', height: '304px'}}> 
                <ProjectCard 
                  title={projectCard.title} 
                  description={projectCard.description} 
                  iconSrc={projectCard.icon} 
                  text={projectCard.text}
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