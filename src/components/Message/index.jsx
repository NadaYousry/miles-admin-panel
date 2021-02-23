import React from "react";
import "./style.css";
const Message = ({title ,description}) => {
  return (
    <div className="message">
      <div className="row">
        <div className="col-12 text-center mb-2">
          <i className="far fa-check-circle message-icon"></i>
        </div>
        <div className="col-12">
          <h4>{title}</h4>
          <p>
          {description&&description}  
          </p>
        </div>
      </div>
    </div>
  );
};

export default Message;
