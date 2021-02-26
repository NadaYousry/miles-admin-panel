import React, { useState } from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { faUserAlt, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
const SettingCardDropDownMenu = ({ selectOptions }) => {
  return (
    <>
      <DropdownButton
      className="dropdown-menu-container"
        title={<FontAwesomeIcon icon={faEllipsisH} className=" mr-2" />}
      >
        {selectOptions.map((option, index) => {
          return (
            <div key={index}>
              <Dropdown.Item>{option.option}</Dropdown.Item>
            </div>
          );
        })}
      </DropdownButton>
    </>
  );
};

export default SettingCardDropDownMenu;
