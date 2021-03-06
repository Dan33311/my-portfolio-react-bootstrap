const ProjectCard = ({ title, description, iconSrc, text, urlProject, urlRepo }) => {
  return (  
    <>
      {/* <img src={imageSrc} alt="image project" /> */}
      {/* <div className="card"> */}
        <div className="card-body card-cc text-center py-4"  >{/* style={{width: '500px', height: '320px'}} */}
          <h4 className="card-title mt-2 mb-3">{title}</h4>
          {/* <p className="card-text mx-5 text-muted d-none d-lg-block">{description}</p> */}
          <p className="card-text mx-5 text-muted d-lg-block mb-4">{description}</p>
          {/* style={{width: '300px'}} */}
          <p className="card-text mx-5 d-lg-block">
            <span className="text-primary fw-bold">
              <img src={iconSrc} alt="icon" className="img-responsive mb-2 me-1" style={{width: '40px'}}/>            
            </span> {text}
          </p>
          <a className="btn btn-primary rounded text-light me-2 mb-2" href={urlProject} target="_blank" rel="noreferrer" style={{width: '77px'}}>View</a>
          <a className="btn btn-secondary rounded text-light ms-2 mb-2" href={urlRepo} target="_blank" rel="noreferrer">GitHub</a>
        {/* </div> */}
      </div>
    </>
  )
}

export default ProjectCard;