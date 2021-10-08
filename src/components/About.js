import developerImage from '../assets/developer.png'
import lineImage from '../assets/line-b.png'

const About = () => {
  return (  
    <section id="about">
      <div className="container-lg">
        <div className="row g-4 justify-content-center align-items-center">

          {/* card */}
          <div className="col-md-5 text-center text-md-start">
            <div className="card border-0">
              <div className="card-body text-center py-4">
                <h2 className="card-title mb-2 display-5" style={{fontFamily: 'Prata'}}>About Me</h2>
                <div>
                  <img src={lineImage} className="img-fluid mb-4" alt="line" />
                </div>
                <span className="text-primary display-6">
                  <i class="bi bi-person"></i>
                </span>
                <h4 className="card-title mb-4">Daniel Sandoval</h4>
                
                <p className="card-text mx-5 d-lg-block">
                  <span className="text-primary fw-bold">
                    <i class="bi bi-geo-alt"></i>
                  </span> Bogota - Colombia
                </p>
                {/* <!-- no display this <p> in small screens --> */}
                <p className="card-text mx-5 d-lg-block">Constanly learning, working on my tech stack with NodeJS & Express, mainly using MongoDB as database. <br></br>Fighting Games Tournament Competitor.</p>
                {/* <a href="/" className="btn btn-outline-primary btn-lg mt-3">
                  Contact
                </a> */}
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
