import lineImage from '../assets/line-b.png'
import projectImgOne from "../assets/square-kcc.png";
import projectImgTwo from "../assets/square-spacex.png";
import projectImgThree from "../assets/square-toodo.png";
import projectImgFour from "../assets/square-toodo2.png";


const projectsCards = [
  {
    id: 1,
    title: 'SpaceX-API',
    description: 'Working with the SpaceX API, you can get info about launches, missions, rockets through a UI',
    text: 'React, Router, API',
    icon: '',
    image: projectImgTwo
  },
  {
    id: 2,
    title: 'KOFCOLOMBIA',
    description: '',
    text: 'React, Javascript, CSS, HTML',
    icon: '',
    image: projectImgOne
  },
  {
    id: 3,
    title: 'TODO App',
    description: '',
    text: 'React, Javascript, CSS, HTML',
    icon: '',
    image: projectImgThree
  },
  {
    id: 4,
    title: 'Markdown',
    description: '',
    text: 'React, Javascript, CSS, HTML',
    icon: '',
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


        <div className="row my-3 g-3 align-items-center justify-content-center">
          {projectsCards.map(projectCard => 
            <div className="col-10 col-lg-4 col-xl-4" key={projectCard.id}>          
              {/* <ProjectCard 
                title={projectCard.title} 
                iconSrc={projectCard.icon} 
                description={projectCard.description} 
                text={projectCard.text}
                logosSrc={projectCard.image}
              /> */}
            </div>)}          
        </div>

      </div>

    </section>
  );
}

export default Projects;