import React from 'react'

export default function Event(props){
    return(
        <div>
        <div className="container">
            <div className="row">
            <div className="col-sm">
        <div className="card">
        <img className="card-img-top" src={props.data.imageUrl} alt="..." height="200px" />
        <div className="card-body">
          <h5 className="card-title">{props.data.eventName}</h5>
          <p className="card-text">{props.data.location}</p>
          <p className="card-text">{props.data.eventDateTime}</p>
          <p className="card-text">{props.data.participation}</p>
          <p className="card-text">{props.data.instructions}</p>
          <a href="#" className="btn btn-primary">Register</a>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
}
