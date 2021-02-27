import React from "react";
import "./style.css";
const CheckBoxInput = ({ checked,  theme ,  ...props }) => (
  <div className={`checkbox-container mr-2 ${theme?theme:""}`}>
    <input
      className="check-input"
      defaultChecked={checked}
      {...props}
    />
    <div className={`styled-checkbox ${checked?"checked" :""}`} checked={checked} >
      <svg
        className="checkbox-icon"
        viewBox="0 0 24 24"
        style={{
          visibility: checked ? "visible" : "hidden",
        }}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  </div>
);

export default CheckBoxInput;
