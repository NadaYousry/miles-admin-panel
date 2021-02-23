import React, { useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import ButtonComponent from "../Button";
import CheckBox from "../CheckBox";
import Loader from "../Loader";
import Message from "../Message";
import "./style.css";
const ContactFromModal = ({ handleClose, openModal }) => {
  const [selectOther, setSelectOther] = useState(false);
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
  const toggleSelectOtherCheckBox = () => {
    if (selectOther) {
      setSelectOther(false);
    } else {
      setSelectOther(true);
    }
  };
  const handleCloseButton = () => {
    handleClose();
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
  const renderLoader = () => {
    return (
      <div className="loading-modal-container">
        <Loader />
      </div>
    );
  };
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
                          theme=""
                        />
                      </div>
                    );
                  })}
                  <div className="mb-2">
                  <CheckBox
                    showOptions={true}
                    option={"other"}
                    theme=""
                    onClick={toggleSelectOtherCheckBox}
                  />
                  </div>
                  {selectOther && (
                    <Form.Control
                      type="text"
                      name="knowTraning"
                      checked={selectOther}
                    />
                  )}
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
  const renderSucessMessage = () => {
    return <Message title={'Thank You!'} description={'Your submission has been received. You Will be Contacted Shortly'}/>;
  };
  return (
    <>
      <Modal
        show={openModal}
        onHide={handleCloseButton}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="contact-form "
      >
        <Modal.Header closeButton>
          <h3>Get in touch</h3>
        </Modal.Header>

        <Modal.Body>
          {!loader && !sucessMessage && renderModalContent()}
          {loader && renderLoader()}
          {sucessMessage && renderSucessMessage()}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactFromModal;
