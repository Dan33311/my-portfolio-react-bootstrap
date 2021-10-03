
const Navbar = () => {
  return (  
    <nav className="navbar navbar-expand-md navbar-light pt-5 pb-4">
      <div className="container-xxl">
        {/* navbar brand / title */}
        <a className="navbar-brand" href="#intro">
          <span className="text-secondary fw-bold">
            <i className="bi bi-trophy-fill"></i>
            DANIEL SANDOVAL
          </span>
        </a>
        {/* toggle button for mobile nav */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* navbar links */}
        <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#stack">TechStack</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            {/* d-md-none -> display like a text in medium and up screens */}
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            {/* d-none -> no display the button in small screens */}
            <li className="nav-item ms-2 d-none d-md-inline">
              <a className="btn btn-secondary" href="#pricing">buy now</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;