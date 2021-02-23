import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import SocialMediaShare from "../SocialMediaShare";
import "./style.css";
const ModalComponent = ({
  content,
  handleClose,
  openModal,
  image,
  socailMediaShare,
}) => {
  return (
    <>
      <Modal
      className="social-media-modal"
        show={openModal}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          {image && (
            <div className="image-container w-100">
              <img src={image} className="w-100" />
            </div>
          )}
          {socailMediaShare &&
          <>
            <div className="social-media-content">
                <h3>Share With Friends</h3>
                <p>Where whould you like to share ?</p>
            </div>
          <SocialMediaShare />
          </>
          }
          {content&&content}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
