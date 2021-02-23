import React, { useState } from "react";
import { render } from "react-dom";
import Checkbox from "./../CheckBoxStyled";

const CheckBoxStyledWithLabel = ({}) => {
  const [checked, setChecked] = useState();

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ fontFamily: "system-ui" }}>
      <label>
        <Checkbox checked={checked} onChange={handleCheckboxChange} />
        <span ></span>
      </label>
    </div>
  );
};

export default CheckBoxStyledWithLabel;
