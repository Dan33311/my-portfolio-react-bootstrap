import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

import './navbar.css';
import ProjectCard from './ProjectCard';

import lineImage from '../assets/line-b.png';
import projectImgQandA from '../assets/square-q&a.png';
import projectImgCountrySelect from '../assets/image-country-selection.png';
import projectImgOne from "../assets/square-kcc.png";
import projectImgTwo from "../assets/square-spacex.png";
import projectImgThree from "../assets/square-toodo.png";
import projectImgFour from "../assets/square-toodo2.png";
import projectIcon from '../assets/computer.png';


const projectsCards = [
  {
    id: 1,
    title: 'Quiz App',
    description: 'Questions, multiple choice Answers, and rewards. Project focus on sharing state between components',
    text: 'React, Router, UseState',
    icon: projectIcon,
    image: projectImgQandA,
    urlProject: 'https://react-quiz-dan33311.vercel.app/',
    urlRepo: 'https://github.com/Dan33311/q-and-a-app'
  },
  {
    id: 2,
    title: 'Countdown and Datepicker',
    description: 'Chose a date and the app will show you a countdowntimer, when time is completed will show info about the country chosen',
    text: 'React, Context, LocalStorage, API',
    icon: projectIcon,
    image: projectImgCountrySelect,
    urlProject: 'https://prueba-tecnica-react-dan33311.vercel.app/',
    urlRepo: 'https://github.com/Dan33311/prueba-tecnica-react'
    
  },
  {
    id: 3,
    title: 'SpaceX-API',
    description: 'Working with the SpaceX API, you can get info about launches, missions, rockets through a UI',
    text: 'React, Router, API, Fetch',
    icon: projectIcon,
    image: projectImgTwo,
    urlProject: 'https://spacex-phi.vercel.app/',
    urlRepo: 'https://github.com/Dan33311/spacex'
  },
  {
    id: 4,
    title: 'TOODO App',
    description: 'A TODO app, using React and React-Router, HOOKS, you can add, list, edit and delete task',
    text: 'React, React-Router, CRUD, CSS',
    icon: projectIcon,
    image: projectImgThree,
    urlProject: 'https://dan-toodoo.netlify.app/',
    urlRepo: 'https://github.com/Dan33311/todo-react-app'
    
  },
  {
    id: 5,
    title: 'KOFCOLOMBIA',
    description: 'This app is using Bootstrap, we are able to customize Bootstrap styles through a SASS file',
    text: 'Bootstrap, SASS, Gulp',
    icon: projectIcon,
    image: projectImgOne,
    urlProject: 'https://kofcolombiacup.netlify.app/',
    urlRepo: 'https://github.com/Dan33311/bootstrap-app'
    
  },
  {
    id: 6,
    title: 'Markdown App',
    description: 'This app allow us to write Markdown, you could view Markdown info, edit and delete it',
    text: 'NodeJS, Express, MongoDB, EJS',
    icon: projectIcon,
    image: projectImgFour,
    urlProject: 'https://markdown-crud-nodejs.onrender.com/',
    urlRepo: 'https://github.com/Dan33311/markdown-crud-project'
  },
]

const Projects = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])


  return (  
    <section id="projects" className="ps bg-dark bg-opacity-10">
      <div className="container-lg">

        <div className="text-center" data-aos="fade-up">
          <h2 className="card-title mt-1 mb-2 display-5" style={{fontFamily: 'Prata'}}>Projects</h2>
          <div className="mb-4">
            <img src={lineImage} className="img-fluid" alt="line" />
          </div>
        </div>


        <div>
          {projectsCards.map(projectCard =>
            // funcionan los child, NO row-reverse
            <div className="card card-w bg-transparent border border-0 mb-3 pt-2" key={projectCard.id} data-aos="fade-up">
              {/* aca aplica el row-reverse, NO funcionan los child */}
              <div className="card-p row g-0  justify-content-center align-items-center" >
                <div className="card-i d-none d-sm-none d-md-block col-md-4 d-flex" style={{width: '303px', height: '304px'}}>{/* justify-content-end */}
                  <img className="img-fluid" src={projectCard.image} alt="project" style={{height: '304px'}}/>         
                </div>
                <div className="card-c bg-white col-md-5" style={{width: '424px', height: 'auto'}}> 
                  <ProjectCard 
                    title={projectCard.title} 
                    description={projectCard.description} 
                    iconSrc={projectCard.icon} 
                    text={projectCard.text}
                    urlProject={projectCard.urlProject}
                    urlRepo={projectCard.urlRepo}
                  />
                </div>
              </div>
            </div>
          )}          
        </div>

      </div>
    </section>
  );
}

export default Projects;