import React, { useState } from "react";
import "./style.css";
const CheckBox = ({ option, showOptions , theme, name ,onClick , type}) => {
  
  const [selected, setSelected] = useState(false);
  const onSelectCheckBox = () => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }
    if(onClick){
    onClick();}
  };
  return (
    <>
      <div className={`${showOptions?"single-check-box-row":""}`} >
        <div className="checkbox-form-group">
          <input name={name} type={`${type==='radio' ?'radio' :'checkbox'}`} id={option} className={"form-check-box"} value={option}/>
          <label htmlFor={option} className={`form-check-label ${theme==="green"?"green":""} ${selected?"checked":""}`} onClick={onSelectCheckBox}>
            {showOptions &&<span> {option} </span>}
          </label>
        </div>
      </div>
    </>
  );
};

export default CheckBox;
