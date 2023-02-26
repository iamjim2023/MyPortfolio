import "./WorkCardStyles1.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard1 = (props) => {
  return (
    <div className="project-card1">
      <img src={props.imgsrc1} alt="" c />
      <h2 className="project-title1">{props.title1}</h2>
      <div className="pro-details1">
        <p>{props.text1}</p>
      </div>
      <div className="pro-btns1">
        <NavLink to={props.view1} className="btn">
          View
        </NavLink>
        <NavLink to="url.com" className="btn">
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard1;
