import { Modal,Show, Button} from "react-bootstrap";
import React, { useState } from "react";



const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const MovieBox =({title, poster_path, vote_average, release_date, overview})=>{

    const [Show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
return(
    <>
  <div className="card text-center bg-secendary mb-3">
    <div className="card-body">
       <img className="card-img-top" src={IMG_URL+poster_path}/>
    
    <div className="card-body">
         <button type="button" className="btn btn-dark" onClick={handleShow}>view More</button>
         
         <Modal show={Show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img className="card-img-top" style={{width:'14rem'}} src={IMG_URL+poster_path}/>
            <h3>{title}</h3>
            <h4>Imdb: {vote_average}</h4>
            <h5>Release_date: {release_date}</h5>
            <br></br>
            <h6>Overview</h6>
            <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button varient="secondary" onClick={handleClose}>close</Button>
            </Modal.Footer>

         </Modal>
     </div>
     </div>
  
    </div>
    </>
)


}

export default MovieBox;