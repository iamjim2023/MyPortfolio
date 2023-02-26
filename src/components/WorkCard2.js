import "./WorkCardStyles2.css";

import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard2 = (props) => {
  return (
    <div className="project-card2">
      <img src={props.imgsrc2} alt="" c />
      <h2 className="project-title2">{props.title2}</h2>
      <div className="pro-details2">
        <p>{props.text2}</p>
      </div>
      <div className="pro-btns2">
        <NavLink to={props.view2} className="btn">
          View
        </NavLink>
        <NavLink to="url.com" className="btn">
          Source
        </NavLink>
      </div>
    </div>
  );
};

export default WorkCard2;
