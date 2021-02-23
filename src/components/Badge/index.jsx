import React from "react";
import TimeIcon from "./../../assets/images/about/badge-time-icon.svg";
import DateIcon from "./../../assets/images/about/date-icon.svg";
import { Badge } from "react-bootstrap";

import "./style.css";
const BadgeComponent = ({ type, text, theme }) => {
  return (
    <Badge
    className={`badge d-flex align-items-center ${theme}`}
  >
    {type&&
    <span className="icon-container mr-2 d-block">
      <img src={type==="date"?DateIcon:TimeIcon} alt="time icon" className="w-100" />
    </span>
    }
    <span className={` ${theme === "orange"?"":"info-container"}`}>
      <span>{text}</span>
    </span>
  </Badge>
  );
};

export default BadgeComponent;
