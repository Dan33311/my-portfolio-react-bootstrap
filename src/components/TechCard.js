const Techcard = ({title, iconSrc, description, textOne, titleTwo, itemOne, itemTwo, itemThree, itemFour, logosSrc }) => {
  return (  
    <div className="card border border-danger">
      <div className="card-body text-center py-4">
        <img src={iconSrc} alt="icon" className="img-responsive mb-4" style={{width: '60px'}}/>
        <h4 className="card-title">{title}</h4>
        {/* <p className="card-text mx-5 text-muted d-none d-lg-block">{description}</p> */}
        <p className="card-text mx-5 text-muted d-none d-lg-block mb-4">{description}</p>
        <p className="card-text mx-5 text-muted d-lg-block mb-4">{textOne}</p>
        <h5 className="card-title">{titleTwo}</h5>
        <p className="card-text mx-5 my-0 text-muted d-lg-block">{itemOne}</p>
        <p className="card-text mx-5 my-0 text-muted d-lg-block">{itemTwo}</p>
        <p className="card-text mx-5 my-0 text-muted d-lg-block">{itemThree}</p>
        <p className="card-text mx-5 my-0 text-muted d-lg-block">{itemFour}</p>
        {/* style={{width: '300px'}} */}
        <img src={logosSrc} alt="icon" className="img-fluid" />
      </div>
    </div>
  );
}

export default Techcard;