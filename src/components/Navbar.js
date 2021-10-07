import './navbar.css'
import danLogo from '../assets/dan-logo-vector-w.png'

const Navbar = () => {
  return (  
    <nav className="navbar navbar-expand-md navbar-light pt-5 pb-4 align-items-start">
      <div className="container-xxl">
        {/* navbar brand / title */}
        <a className="navbar-brand" href="#intro">
          <span className="text-light fw-bold">
            <img src={danLogo} alt="DAN" />
            DANIEL SANDOVAL
          </span>
        </a>
        {/* toggle button for mobile nav */}
        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "></span>
        </button>

        {/* navbar links */}
        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item ms-3">
              <a className="nav-link text-light" href="about">About Me</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link text-light" href="stack">TechStack</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link text-light" href="projects">Projects</a>
            </li>
            {/* d-md-none -> display like a text in medium and up screens */}
            <li className="nav-item ms-3">
              <a className="nav-link text-light" href="contact">Contact</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;