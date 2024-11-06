import Swal from 'sweetalert2'
import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'

import lineImage from '../assets/line-w.png'
import emailImg from '../assets/email-e.png'
import linkedinImg from '../assets/linkedin-e.png'
import smartphoneImg from '../assets/smartphone-with-a-smile.png'
import './navbar.css';


const Contact = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  
  return (  
    <>
      <div className="card d-flex mx-auto my-5 border border-0" style={{maxWidth: '726px'}}>
        <div className="card-body contact-card">
        <p className="card-text text-center" data-aos="fade-up">I'm seeking out opportunities to get a job as developer, <br></br>if you have any request or question, send me a message. Feel free to reach out to me any time.</p>
        </div>
      </div>
      {/* <div class="text-center contact-text-w mt-5 mb-5 mx-auto pt-5" style={{width: '630px'}}>
        <p class="lead contact-text">I'm seeking out opportunities to get my first job as developer, if you have any request or question, send me a message. Feel free to reach out to me any time. </p>
      </div> */}
      
      <section id="contact">
        {/* <div className="container pt-5" data-aos="fade-up"> */}
        <div className="container pt-5">

          <div className="contact d-flex flex-column align-items-center mt-5 pt-5">
            <h2 className="card-title mt-5 mb-3 display-5" data-aos="fade-up" style={{fontFamily: 'Prata', color: 'white'}}>Contact Information</h2>
            <div>
              <img src={lineImage} className="img-fluid mb-4" alt="line" data-aos="fade-up"/>
            </div>
            <div className="d-flex justify-content-around align-items-center my-5 pt-5" style={{width: '400px'}}>
              <a className="contact-item" href="https://www.linkedin.com/in/dan-sandoval/" target="_blank" rel="noreferrer" data-aos="fade-up">
                <img src={linkedinImg} className=" img-fluid" alt="linkedin" style={{width: '60px'}}/>
              </a>
              <div className="contact-item" data-bs-placement="bottom" title="click to copy email address" data-aos="fade-up">
                <img 
                  className="img-fluid" 
                  src={emailImg} 
                  alt="email" 
                  style={{width: '60px'}}
                  onClick={() =>  {
                    navigator.clipboard.writeText('dansaro.groger@gmail.com'); 
                    // alert("Email address copied to clipboard")
                    Swal.fire({
                      position: 'top',
                      icon: 'success',
                      title: 'Email address copied to clipboard',
                      showConfirmButton: false,
                      timer: 2000
                    })
                  }}/>
              </div>
              <div className="contact-item tt" data-bs-placement="bottom" title="click to copy phone number" data-aos="fade-up">
                <img 
                  className="img-fluid" 
                  src={smartphoneImg} 
                  alt="phone" 
                  onClick={() =>  {
                    navigator.clipboard.writeText('+(57)300528-TEST'); 
                    // alert("Phone number copied to clipboard")
                    Swal.fire({
                      position: 'top',
                      icon: 'success',
                      title: 'Phone number copied to clipboard',
                      showConfirmButton: false,
                      timer: 2000
                    })
                  }} 
                  style={{height: '62px'}}/>
              </div>
            </div>
            {/* © */}
            <p className="footer-c text-light">{ new Date().getFullYear() } - Daniel Sandoval</p>
          </div>


        </div>
      </section>
    </>
  );
}

export default Contact;