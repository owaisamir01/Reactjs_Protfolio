import React from "react";
import { NavLink } from "react-router-dom";
function Card2(props){
    return(
    <>    

    <div className="col-md-4 col-10 mx-auto">
    <div className="card">
  <img src={props.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink href="" className="btn btn-primary">Go Some Where</NavLink>
  </div>
</div>
    </div>


 

    </>
        )
} export default Card2;