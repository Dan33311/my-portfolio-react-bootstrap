import './navbar.css'
// import wavesvg from '../assets/wave.svg'
// style={{ backgroundImage: `url(${wavesvg})` }}


const Navbar = () => {
  return (  
    <nav className="navbar navbar-expand-md navbar-light pt-5 pb-4 align-items-start">
      <div className="container-xxl">
        {/* navbar brand / title */}
        <a className="navbar-brand" href="#intro">
          <span className="text-light fw-bold">
            <i class="bi bi-badge-4k-fill me-3"></i>
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
              <a className="nav-link text-light" href="#about">About Me</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link text-light" href="#stack">TechStack</a>
            </li>
            <li className="nav-item ms-3">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            {/* d-md-none -> display like a text in medium and up screens */}
            <li className="nav-item ms-3">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            {/* d-none -> no display the button in small screens */}
            {/* <li className="nav-item ms-2 d-none d-md-inline">
              <a className="btn btn-secondary" href="#pricing">buy now</a>
            </li> */}
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;