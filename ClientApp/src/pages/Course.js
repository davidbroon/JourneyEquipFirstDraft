import React from "react";
import { CoreValueList } from "../helpers/CoreValuesList";
import CoreValueItem from "../components/CoreValueItem";
//import CourseItemModal from "../components/CourseItemModal";
import "../styles/Course.css";
//mport Modal from 'react-modal';


function Course() {
     
  return (
    <div className="course">
      <h1 className="courseTitle">Our Course</h1>
      <div className="courseList">
        {CoreValueList.map((coreValueItem, key) => {
           return (
            <CoreValueItem
               key={key}
               image={coreValueItem.image}
               name={coreValueItem.name}
               description={coreValueItem.description}
                 />            
          );
        })} 
      </div>
       
    </div>
  );
}

export default Course;