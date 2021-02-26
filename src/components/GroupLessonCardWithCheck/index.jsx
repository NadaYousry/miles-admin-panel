import React from "react";
import { Card } from "react-bootstrap";
import BadgeComponent from "../Badge";
import ButtonComponent from "../Button";
import SelectMenuWithImage from "../SelectMenuWithImage";
import "./style.css";
import CheckBox from "../CheckBox";
const GroupLessonCardWithCheck = ({
  lesson,
  isMobileScreen,
  index,
  length,
}) => {
  
  return (
    <div className={"group-lessons-check-box group-lessons-container mb-3"}>
      {/* desktop screen card header */}
      <Card>
        {!isMobileScreen ? (
          // desktop card header
          <Card.Header
            as="div"
            className={`d-flex flex-row justify-content-between align-items-center`}
          >
            {" "}
            <div className={`heading-info`}>
              <h5
                className={`group-lessons-check-box group-lessons-trainner-name mb-0 ${
                  isMobileScreen ? "mb-2" : ""
                }`}
              >
                {lesson.groupName}
              </h5>
              <BadgeComponent type={""} text={lesson.label} theme={"white"} />
              <span className={`group-for ml-2`}>{lesson.groupFor}</span>
            </div>
            <div className={`date-and-time-info `}>
              <div
                className={`d-flex align-items-center justify-content-end time-date-container w-100`}
              >
                <BadgeComponent
                  type={"time"}
                  text={lesson.time}
                  theme={"gray"}
                />
                <BadgeComponent
                  type={"date"}
                  text={lesson.date}
                  theme={"gray"}
                />
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <CheckBox
                name="clubIntrest"
                type="checkbox"
                option={lesson.id}
                showOptions={false}
                theme={"green"}
              />
            </div>
          </Card.Header>
        ) : (
          <>
            {/* mobile screen card header */}
            <Card.Header as="div" className={` mobile-screen`}>
              <div
                className={`heading-info d-flex flex-row justify-content-between align-items-center`}
              >
                <div>
                  <h5
                    className={`group-lessons-check-box group-lessons-trainner-name mb-0 ${
                      isMobileScreen ? "mb-2" : ""
                    }`}
                  >
                    {lesson.groupName}
                  </h5>
                  <BadgeComponent
                    type={""}
                    text={lesson.label}
                    theme={"white"}
                  />
                  <span className={`group-for ml-2`}>{lesson.groupFor}</span>
                  <div className={`date-and-time-info`}>
                    <div
                      className={`d-flex align-items-center justify-content-end time-date-container w-100`}
                    >
                      <BadgeComponent
                        type={"time"}
                        text={lesson.time}
                        theme={"gray"}
                      />
                      <BadgeComponent
                        type={"date"}
                        text={lesson.date}
                        theme={"gray"}
                      />
                    </div>
                  </div>
                </div>
                <div className=" d-flex align-items-center justify-content-center">
                  <CheckBox
                    showOptions={false}
                    option={lesson.id}
                    name="knowTraning"
                    type="checkobx"
                    theme="green"
                  />
                </div>
              </div>
            </Card.Header>
            <Card.Header className="mobile-screen">
              <div className="row">
                <div className="col-12  mb-3">
                  <span className="group-lessons-check-box group-lessons-description">
                    {lesson.description}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <span className="place-name">{lesson.place}</span>|{" "}
                  <span className="place-far">{lesson.howFar}</span>
                </div>
              </div>
            </Card.Header>
            <Card.Header className="mobile-screen">
              <div className="row">
                <div className="col-12">
                  <span className="experience pt-2">{lesson.experience}</span>
                </div>
              </div>
            </Card.Header>
          </>
        )}
        <Card.Body>
          <div className="row">
            <div className="col-12 col-lg-8 col-md-8 description d-flex justify-content-center flex-column">
              <Card.Text
                className={`group-lessons-check-box group-lessons-description  ${
                  isMobileScreen ? "mb-3" : ""
                } mb-1`}
              >
                {lesson.description}
              </Card.Text>
              {/* content appear if mobile screen */}
              {!isMobileScreen && (
                <>
                  <div className="d-flex align-items-center ">
                    <span className="place-name">{lesson.place}</span>|{" "}
                    <span className="place-far">{lesson.howFar}</span>
                  </div>
                  <div className="d-flex align-items-center ">
                    <span className="experience pt-2">{lesson.experience}</span>
                  </div>
                </>
              )}
            </div>
            <div
              className={`col-12 col-lg-4 col-md-4 price-and-button  d-flex flex-column`}
            >
              <span
                className={`group-lessons-check-box group-lessons-price  mb-2 ${
                  isMobileScreen ? "mb-3 text-center" : ""
                }`}
              >
                {lesson.price}
              </span>
              <div className="d-flex align-items-center flex-column ">
                <div className="my-2 w-100">
                  <ButtonComponent
                    text={"Register Now"}
                    theme={"orange"}
                    share={false}
                  />
                </div>
                <div className=" w-100">
                  <ButtonComponent
                    text={`Share this`}
                    theme={"white"}
                    share={true}
                  />
                </div>
              </div>
            </div>
          </div>
           <SelectMenuWithImage />
        </Card.Body>
      </Card>
    </div>
  );
};

export default GroupLessonCardWithCheck;
