import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AccordionComponent from "../Accordion";
import "./style.css";
const FAQs = ({faqsData,isMobileScreen}) => {
 
  return (
    <>
      <div className="card-container pb-3 faq">
        {faqsData?.map((data, index) => {
          return (
            <AccordionComponent key={index} data={data}/>
          );
        })}
      </div>
    </>
  );
};

export default FAQs;
