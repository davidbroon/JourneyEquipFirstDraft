import React from "react";
import { CoreValueList } from "../helpers/CoreValuesMenuList";
//import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Course() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Course</h1>
      <div className="menuList">
      {/*   {MenuList.map((menuItem, key) => {
           return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}  */}
      </div>
    </div>
  );
}

export default Course;
