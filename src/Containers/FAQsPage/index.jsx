import React from 'react';
import FAQs from '../../components/FAQs';
import "./style.css";
const FAQsPage = ({isMobileScreen}) => {
  const faqsData = [
    {
      id:1,
      question: "What are the rules in place related to Corvid-19 regulations",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:2,
      question: "What are the rules in place related to Corvid-19 regulations",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:3,
      question: "How quickly can I get a new slot",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:4,
      question: "How many students are permitted in a class",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:5,
      question: "What are the rules in place related to Corvid-19 regulations",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:6,
      question: "What are the rules in place related to Corvid-19 regulations",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:7,
      question: "How quickly can I get a new slot",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
    {
      id:8,
      question: "How many students are permitted in a class",
      answer:
        "The condition for such operation is that public transport vehicles are only permitted to transport persons permitted to travel between Provinces in terms of the Regulations. ",
    },
  ];
  return (
    <>
       <div className="col-12 col-md-12 col-lg-12">
          <div className="faq-container">
            <div className="row no-gutters align-items-start">
              <div className="col-12">
                <FAQs faqsData={faqsData}  isMobileScreen={isMobileScreen} />
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default FAQsPage;
