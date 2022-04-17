const Testimony = ({dataToTestimony}) => {
    return (
        <div className="card mb-3 mx-auto testimony-container">
            <div className="row no-gutters">
                <div className="col-sm-4">
                <img src={dataToTestimony.img} alt="" className="imgTestimony"/>
                </div>
                <div className="col-sm-8">
                <div className="card-body">
                    <h5 className="card-title text-center">{dataToTestimony.name}</h5>
                    <h5 className="card-title text-center">{dataToTestimony.position}</h5>
                    <p className="card-text text-justify">{dataToTestimony.text}</p>                    
                </div>
                </div>
            </div>
        </div>
    )
}

export default Testimony