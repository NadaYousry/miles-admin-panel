import React, { useState } from "react";
import CheckBoxInput from "./../CheckBoxInput";
import './style.css';

const CheckBox = ({showOptions , option , type  ,name , toggleSelectOtherCheckBox , theme}) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    if(toggleSelectOtherCheckBox){
      toggleSelectOtherCheckBox()
    }
  };

  return (
    <div className="checkbox-label-container">
      <label>
        <CheckBoxInput theme={theme} checked={checked} onChange={handleCheckboxChange} name={name} type={type}/>
        {showOptions&&<span >{option}</span>}
      </label>
    </div>
  );
};

export default CheckBox;
