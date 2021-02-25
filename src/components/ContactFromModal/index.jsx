import React, {  useState } from "react";
import {  Modal } from "react-bootstrap";
import Loader from "../Loader";
import Message from "../Message";
import "./style.css";
const ContactFromModal = ({ handleClose, openModal , content , loader , sucessMessage }) => {
  const renderLoader = () => {
    return (
      <div className="loading-modal-container">
        <Loader />
      </div>
    );
  };
  
  const renderSucessMessage = () => {
    return <Message title={'Thank You!'} description={'Your submission has been received. You Will be Contacted Shortly'}/>;
  };
  return (
    <>
      <Modal
        show={openModal}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="contact-form "
      >
        <Modal.Header closeButton>
          <h3>Get in touch</h3>
        </Modal.Header>

        <Modal.Body>
          {!loader && !sucessMessage && content}
          {loader && renderLoader()}
          {sucessMessage && renderSucessMessage()}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ContactFromModal;
