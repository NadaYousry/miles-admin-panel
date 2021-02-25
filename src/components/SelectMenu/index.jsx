import React, { useState, useEffect } from "react";
import { Accordion, Card, Form } from "react-bootstrap";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CheckBox from "../CheckBox";
import "./style.css";
const SelectMenuComponent = ({ filters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleAccordion = (e) => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <Accordion className="select-menu mb-2">
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          eventKey={"0"}
          className="d-flex align-items-center"
          onClick={(e) => {
            onToggleAccordion(e);
          }}
        >
          <h3 className="my-0">All classes</h3>
          <span className="arrow-icon-container">
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`${isOpen ? "rotate" : ""} arrow-icon`}
            />
          </span>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={"0"}>
          <form>
            {filters.map((filter, index) => {
              return (
                <div key={index}>
                  <CheckBox
                    name="clubIntrest"
                    type="checkbox"
                    option={filter.option}
                    showOptions={true}
                    theme={""}
                  />
                </div>
              );
            })}
          </form>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default SelectMenuComponent;
