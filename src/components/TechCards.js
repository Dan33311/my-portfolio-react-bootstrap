import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

import './navbar.css';
import Techcard from "./TechCard";

import lineImage from '../assets/line-b.png';
import icon1 from '../assets/setting.png';
import icon2 from '../assets/frontend-icon.png'
import icon3 from '../assets/other-tools.png';
import logosBack from '../assets/logos-back.png';
import logosFront from '../assets/logos-front.png';
import logosOthers from '../assets/logos-other.png';



const cards = [
  {
    id: 1,
    title: 'Front-end Developer',
    description: 'Previous experience working with design the visual part, I used to work as a Graphic Designer',
    text1: 'React, Javascript, CSS, HTML',
    title2: 'Dev Tech & Tools',
    items: {
      item1: 'React',
      item2: 'Javascript',
      item3: 'Bootstrap',
      item4: 'HTML - CSS',
    },
    icon: icon2,
    image: logosFront
  },
  {
    id: 2,
    title: 'Back-end Developer',
    description: 'I enjoy working with the logic part, knowledge of object-oriented/functional programming',
    text1: 'RESTful API, CRUD, Login',
    title2: 'Dev Tech & Tools',
    items: {
      item1: 'Node.js',
      item2: 'Express',
      item3: 'SQL Database',
      item4: 'Mongoose',
    },
    icon: icon1,
    image: logosBack
  },
  {
    id: 3,
    title: 'Other Skills',
    description: 'Around 10 years experience working as a Graphic Designer, intermedium english level and more...',
    text1: 'Graphic Design, English, others',
    title2: '*Other Dev Tech & Tools',
    items: {
      item1: 'Figma',
      item2: 'GIT',
      item3: 'GitHub',
      item4: 'npm',
    },
    icon: icon3,
    image: logosOthers
  },
]


const Cards = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  console.log(cards)


  return (
    <section id="techstack" className="bg-dark bg-opacity-10 mt-5 pt-5 pb-1">
      <div className="container-lg" data-aos="fade-up" >

        <div className="text-center">
          <h2 className="card-title mt-4 mb-2 display-5" style={{fontFamily: 'Prata'}}>Tech Stack</h2>
          <div>
            <img src={lineImage} className="img-fluid" alt="line" />
          </div>
        </div>


        <div className="row my-3 g-3 align-items-center justify-content-center">
          {cards.map(card => 
            <div className="col-auto col-lg-4 col-xl-4" key={card.id}>          
              <Techcard 
                title={card.title} 
                iconSrc={card.icon} 
                description={card.description} 
                textOne={card.text1}
                titleTwo={card.title2}
                itemOne={card.items.item1}
                itemTwo={card.items.item2}
                itemThree={card.items.item3}
                itemFour={card.items.item4}
                logosSrc={card.image}
              />
            </div>)}          
        </div>

      </div>

    </section>
  );
}

export default Cards;