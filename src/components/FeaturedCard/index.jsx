import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import BadgeComponent from "../Badge";
import ButtonComponent from "../Button";
import ModalComponent from "../Modal";
import "./style.css";
const FeaturedCard = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  const featuredData = [
    {
      name: "Footwork Patterns",
      type: "Tennis",
      for: "Kids | 4-7",
      description:
        "Improve with other players in a similar skill set and a fun envoronment.",
      time: "4:00pm - 5:00pm",
      date: "23 Aug - 13 Sep",
      notes: "",
    },
    {
      name: "Match fitness",
      type: "Tennis",
      for: "Adults | 18+",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      time: "4:00pm - 5:00pm",
      date: "23 Aug - 13 Sep",
      notes: "",
    },
    {
      name: "Match fitness",
      type: "pilates",
      for: "Adults | 18+",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      time: "4:00pm - 5:00pm",
      date: "23 Aug - 13 Sep",
      notes: "Still time left to register",
    },
    {
      name: "Match fitness",
      type: "pilates",
      for: "Adults | 18+",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      time: "4:00pm - 5:00pm",
      date: "23 Aug - 13 Sep",
      notes: "Class is in session, book now",
    },
  ];
  return (
    <>
      <div className="feature-container card-container">
        {featuredData?.map((data, index) => {
          return (
            <Card className={`mb-3 text-left`} key={index}>
              <Card.Body>
                <div className="row feature-info-container d-flex">
                  <div className="col-12 col-lg-7 col-md-5 title-info">
                    <div className="d-flex flex-wrap">
                      <Card.Title className="mr-2 mb-0">{data.name}</Card.Title>
                      {data.notes && (
                        <BadgeComponent
                          type={""}
                          text={data.notes}
                          theme={"orange"}
                        />
                      )}
                    </div>
                    <Card.Text className="mb-2">
                      <span className="feature-type mr-2">
                        <BadgeComponent
                          type={""}
                          text={data.type}
                          theme={"white"}
                        />
                      </span>
                      <span className="feature-type green">{data.for}</span>
                    </Card.Text>
                    <Card.Text className="feature-description description-info mb-4">
                      {data.description}
                    </Card.Text>
                  </div>
                  <div className="col-12 col-lg-5 col-md-7 date-and-time-info d-flex flex-column justify-content-between">
                    <div
                      className={`d-flex align-items-center justify-content-end time-date-container`}
                    >
                      <BadgeComponent
                        type={"time"}
                        text={data.time}
                        theme={"gray"}
                      />
                      <BadgeComponent
                        type={"date"}
                        text={data.date}
                        theme={"gray"}
                      />
                    </div>
                    <div className="d-flex align-items-center flex-column ">
                      <div className="my-2 w-100">
                        <ButtonComponent
                          text={"Register Now"}
                          theme={"green"}
                          share={false}
                        />
                      </div>
                      <div className=" w-100">
                        <ButtonComponent
                          text={`Share this`}
                          theme={"white"}
                          share={true}
                          onClickButton={handleOpenModal}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          );
        })}
        <div className="row view-all-link ">
          <div className="col-12">
            <div className="link text-right w-100">
              <p className={`text-right`}>
                <Link to="/">View all</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ModalComponent
        handleClose={handleCloseModal}
        openModal={openModal}
        socailMediaShare={true}
        image={""}
      />
    </>
  );
};

export default FeaturedCard;
