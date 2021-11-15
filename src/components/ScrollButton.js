import { useState } from "react"
import topArrow from "../assets/up-arrow.png"

const ScrollButton = () => {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200){
      setVisible(true)
    } 
    else if (scrolled <= 200){
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', toggleVisible);

  return (  
    <div>
      <img className="top-arrow" src={topArrow} onClick={() => scrollToTop()} style={{display: visible ? 'inline' : 'none'}} alt="top"></img>
    </div>
  );
}

export default ScrollButton;