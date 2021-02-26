import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./style.css";
const DropDown = ({selecteItemsArray , name}) => {
  
  const [selectElemntName, setSelectElemntName] = useState("");
  return (
    <>
      <DropdownButton
        id="dropdown-item-button"
        title={selectElemntName ? selectElemntName : name}
      >
        {selecteItemsArray.map((option, index) => {
          return (
            <div key={index}>
              <Dropdown.Item
                as="li"
                onClick={() => {
                  setSelectElemntName(option.option);
                }}
                className="dropDown-list"
              >
                <span
                  className="circle d-inline-block"
                  style={{
                    backgroundColor: option.color,
                  }}
                ></span>
                <span> {option.option}</span>
              </Dropdown.Item>
            </div>
          );
        })}
      </DropdownButton>
    </>
  );
};

export default DropDown;
