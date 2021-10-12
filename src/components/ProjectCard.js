const ProjectCard = ({ title, description, iconSrc, text }) => {
  return (  
    <>
      {/* <img src={imageSrc} alt="image project" /> */}
      <div className="card">
        <div className="card-body text-center py-4">
          <h4 className="card-title">{title}</h4>
          {/* <p className="card-text mx-5 text-muted d-none d-lg-block">{description}</p> */}
          <p className="card-text mx-5 text-muted d-lg-block mb-4">{description}</p>
          {/* style={{width: '300px'}} */}
          <p className="card-text mx-5 d-lg-block">
            <span className="text-primary fw-bold">
              <img src={iconSrc} alt="icon" className="img-responsive mb-2 me-1" style={{width: '40px'}}/>            
            </span> {text}
          </p>
          <button className="btn-primary">View</button>
        </div>
      </div>
    </>
  )
}

export default ProjectCard;