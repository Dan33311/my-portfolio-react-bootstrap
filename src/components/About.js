import developerImage from '../assets/developer.png'
import lineImage from '../assets/line-b.png'
import myPDF from '../assets/my-cv.pdf'
import 'animate.css';

const About = () => {

  return (  
    <section id="about">
      <div className="container-lg">
        <div className="row g-4 justify-content-center align-items-center">

          {/* card */}
          <div className="col-md-5 text-center text-md-start">
            <div className="card border-0 carddd">
              <div className="cb-about card-body text-center py-4">              
                <h2 className="card-title mb-2 display-5 animate__backInLeft animate__delay-5s	5s" style={{fontFamily: 'Prata'}}>Daniel Sandoval</h2>
                <div>
                  <img src={lineImage} className="img-fluid mb-4 animate__backInLeft animate__delay-5s	5s" alt="line" />
                </div>
                <span className="text-primary display-6">
                  <i className="bi bi-person"></i>
                </span>
                <h4 className="card-title mb-4">Junior Developer</h4>
                
                <p className="card-text mx-5 d-lg-block">
                  <span className="text-primary fw-bold">
                    <i className="bi bi-geo-alt"></i>
                  </span> Bogota - Colombia
                </p>
                {/* <!-- no display this <p> in small screens --> */}
                <p className="p-about card-text mx-5 d-lg-block">Frontend Developer, constanly learning, working on my tech stack MERN. <br></br>Able to work independently and as part of a team. <br></br>Fighting Games Tournament Competitor.</p>
                <a 
                  className="btn-download btn btn-outline-primary btn-lg mt-5"
                  href={myPDF} 
                  target="_blank"
                  rel="noopener noreferrer"
                  // download="Daniel-Sandoval-CV.pdf"
                  onClick={() => window.open(myPDF)} 
                >
                  Download my CV
                </a>
              </div>
            </div>
          </div>

          {/* image */}
          <div className="col-md-7 text-center d-none d-md-block">
            {/* !! NO WORKING YET <!-- tooltip --> */}
            <span className="tt" data-bs-placement="bottom" title="Developer">
              <img src={developerImage} className="img-fluid" alt="pass" />
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
