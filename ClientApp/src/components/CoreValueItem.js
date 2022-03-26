import React from "react";
import "../styles/Course.css";

function CoreValueItem({ image, name, description }) {

    // const [modalIsOpen,setModalIsOpen] = useState(false);
    // const setModalIsOpenToTrue =()=>{
    //     setModalIsOpen(true)
    // }
    // const setModalIsOpenToFalse =()=>{
    //     setModalIsOpen(false)
    // }
    return (
      
        <div className="courseItem">
            <div style={{ backgroundImage: `url(${image})` }}> </div>
            <h1> {name} </h1>
            <p>{description}</p>
      </div>
  );
}

export default CoreValueItem;
