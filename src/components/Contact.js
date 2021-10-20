import lineImage from '../assets/line-b.png'
import emailImg from '../assets/email.png'
import linkedinImg from '../assets/linkedin.png'
import smartphoneImg from '../assets/smartphone-with-a-smile.png'


const Contact = () => {
  return (  
    <>
      <div class="text-center mt-5 mb-5 mx-auto pt-5" style={{width: '630px'}}>
        <p class="lead">I'm seeking out opportunities to get my first job as developer, if you have any request or question, send me a message. Feel free to reach out to me any time. </p>
      </div>
      
      <section id="contact">
        <div className="container pt-5">

          <div class="contact d-flex flex-column align-items-center mt-5 pt-5">
            <h2 className="card-title mt-5 mb-2 display-5" style={{fontFamily: 'Prata', color: 'white'}}>Contact Information</h2>
            <div>
              <img src={lineImage} className="img-fluid mb-4" alt="line" />
            </div>
            <div className="d-flex justify-content-around mt-5 pt-5" style={{width: '400px'}}>
              <a href="https://www.linkedin.com/in/dan-sandoval/" target="_blank">
                <img src={linkedinImg} className="img-fluid mb-4" alt="linkedin" style={{width: '60px'}}/>
              </a>
              <img src={emailImg} className="img-fluid mb-4" alt="email" style={{width: '60px'}}/>
              <img src={smartphoneImg} className="img-fluid mb-4" alt="phone" style={{width: '60px'}}/>
            </div>
          </div>


        </div>
      </section>
    </>
  );
}

export default Contact;