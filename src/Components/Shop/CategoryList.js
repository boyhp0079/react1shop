import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CategoryList({active}) {
  const CateList = ["All", "Food", "Drink"];
  return (
    <div className="categrory-bar">
      <h2 className="title-name">Products</h2>
      <div className="dropdown-container">
      <button class="category-dropbtn">Category 
       <FontAwesomeIcon icon="caret-down" size="2x"/>
      </button>
      <ul>
        {CateList.map(item => {
          let classactive
          let classactivelink
            if(item === active||(active==undefined && item=="All")){
              classactive =  "category-name"
              classactivelink = "active"
            }
            return (
            <Link to={item=="All"?"":`/${item}`} className={classactive}>
             <li className={classactivelink}>{item}</li>
            </Link>
          );
        })}
      </ul>
      </div>
      </div>
  );
}
