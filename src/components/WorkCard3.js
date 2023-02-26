import "./WorkCardStyles3.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard3 = (props) => {
  return (
    <div className="project-card3">
      <img src={props.imgsrc3} alt="" c />
      <h2 className="project-title3">{props.title3}</h2>
      <div className="pro-details3">
        <p>{props.text3}</p>
      </div>
      <div className="pro-btns3">
        <NavLink to={props.view3} className="btn">
          View
        </NavLink>
        <NavLink to="url.com" className="btn">
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard3;
