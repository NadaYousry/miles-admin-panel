import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../Button";
import ContactFromModal from "../ContactFromModal";
import { Form, Modal } from "react-bootstrap";
import CheckBox from "../CheckBox";
import "./style.css";
const DonotFoundYouNeedCard = () => {
  const [selectOther, setSelectOther] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  const [sucessMessage, setSucessMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [contactData, setContactData] = useState({
    firstName: "",
    lasttName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    clubIntrest: [],
    knowTraning: [],
    opinion: "",
  });
  
    /************************************ start sbmit fun *****************************************/
  const toggleSelectOtherCheckBox = () => {
    if (selectOther) {
      setSelectOther(false);
    } else {
      setSelectOther(true);
    }
  };
  const handleCloseButton = () => {
    handleCloseModal();
    setTimeout(() => {
      setSucessMessage(false);
      setContactData({
        firstName: "",
        lasttName: "",
        email: "",
        countryCode: "",
        phoneNumber: "",
        clubIntrest: [],
        knowTraning: [],
        opinion: "",
      });
    }, 500);
  };
  // submit form
  const onSumbitContactUs = (e) => {
    let clubIntrest = [];
    let knowTraning = [];
    e.preventDefault();
    // loop on club intrests
    for (let i = 0; i < e.target.clubIntrest.length; i++) {
      if (e.target.clubIntrest[i].checked) {
        clubIntrest.push(e.target.clubIntrest[i].value);
      }
    }
    // loop on how did you know about us
    for (let i = 0; i < e.target.knowTraning.length; i++) {
      if (e.target.knowTraning[i].checked) {
        knowTraning.push(e.target.knowTraning[i].value);
      }
    }
    setContactData({
      // this object form api
      firstName: e.target.firstName.value,
      lasttName: e.target.lasttName.value,
      email: e.target.email.value,
      countryCode: e.target.countryCode.value,
      phoneNumber: e.target.phoneNumber.value,
      clubIntrest: clubIntrest,
      knowTraning: knowTraning,
      opinion: e.target.opinion.value,
    });
    // here i handle loader by my hand but it should be handled in interceptor when calling api
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setSucessMessage(true);
    }, 500);
  };
  
    /************************************ end sbmit fun *****************************************/
  const selectIntrests = [
    {
      option: "Golf",
    },
    {
      option: "Hosting an Event",
    },
    {
      option: "Tennis",
    },
    {
      option: "Zumba",
    },
    {
      option: "Pilates",
    },
    {
      option: "Fitness Bootcamp",
    },
  ];
  const selectHowKnowTraining = [
    {
      option: "Facebook",
    },
    {
      option: "Instagram",
    },
    {
      option: "Search Engine",
    },
    {
      option: "Online Ads",
    },
  ];
  
    /************************************ start render modal content fun *****************************************/
  const renderModalContent = () => {
    return (
      <>
        <Form onSubmit={(e) => onSumbitContactUs(e)} id="contactForm">
          <Form.Group controlId="">
            <div className="row">
              <div className="col-6">
                <div className="form-data">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" name="firstName" />
                </div>
              </div>
              <div className="col-6">
                <div className="form-data">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" name="lasttName" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-data">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" name="email" />
                </div>
              </div>
              <div className="col-12 ">
                <div className="form-data">
                  <Form.Label>Phone Number</Form.Label>
                  <div className="d-flex">
                    <div className="w-25 mr-3">
                      <Form.Control
                        type="number"
                        name="countryCode"
                        placeholder="country code"
                      />
                    </div>
                    <div className="w-75">
                      <Form.Control
                        type="number"
                        name="phoneNumber"
                        placeholder="phone number"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-data">
                  <Form.Label>
                    What are you most interested in at The Country Club At
                    Woodmore. Select all that Apply
                  </Form.Label>
                  {selectIntrests.map((intrest, index) => {
                    return (
                      <div key={index}>
                        <CheckBox
                          showOptions={true}
                          option={intrest.option}
                          name="clubIntrest"
                          type="checkbox"
                          theme=""
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-12">
                <div className="form-data">
                  <Form.Label>
                    How did you learn about our Programs or Facility training
                    program?
                  </Form.Label>
                  {selectHowKnowTraining.map((way, index) => {
                    return (
                      <div key={index}>
                        <CheckBox
                          showOptions={true}
                          option={way.option}
                          name="knowTraning"
                          type="checkbox"
                          theme=""
                        />
                      </div>
                    );
                  })}
                  <div className="mb-2 ">
                  <CheckBox
                    showOptions={true}
                    option={"other"}
                    type="checkbox"
                    theme=""
                    toggleSelectOtherCheckBox={toggleSelectOtherCheckBox}
                    />
                   
                    {selectOther && (
                      <Form.Control
                        type="text"
                        name="knowTraning"
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="form-data">
                  <Form.Label>
                  Any additional comments or information you would like to Know
                  </Form.Label>
                  <Form.Control as="textarea" name="opinion" />
                </div>
              </div>
            </div>
            <Modal.Footer>
              <div className="w-50">
                <ButtonComponent
                  share={""}
                  text={"Submit"}
                  theme={"light-green"}
                  type={"submit"}
                />
              </div>
            </Modal.Footer>
          </Form.Group>
        </Form>
      </> 
    );
  };
  
    /************************************ end render modal content fun *****************************************/

  return (
    <>
    {/************************************ Start don't found container *****************************************/}
    <div className={"do-not-find-need-container mb-3"}>
      <Card>
        <Card.Body>
          <div className="row align-items-center">
            <div className="col-12 col-lg-7 col-md-7 ">
              <h3>
                Didn’t find what you need
                <FontAwesomeIcon
                  icon={faQuestion}
                  className={"ml-2 question-icon"}
                />
              </h3>
              <p className={"contact-us"}>
                Please contact us, we always have a class for you.
              </p>
            </div>
            <div className="col-12 col-lg-5 col-md-5 d-flex flex-column justify-content-between">
              <div className="my-2 w-100">
                <ButtonComponent
                  text={"Get in touch"}
                  theme={"black"}
                  share={false}
                  onClickButton={handleOpenModal}
                />
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div> 

    {/************************************ End don't found container *****************************************/}

    {/************************************ start modal render *****************************************/}
    <ContactFromModal
    handleClose={handleCloseButton}
    openModal={openModal}
    content={renderModalContent()}
    loader={loader}
    sucessMessage={sucessMessage}
  />
  {/************************************ end modal render *****************************************/}
</>
  );
};

export default DonotFoundYouNeedCard;
