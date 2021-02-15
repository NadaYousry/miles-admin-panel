import React, { useState } from "react";
import ButtonComponent from "../Button";
import GroupLessonCardWithCheck from "../GroupLessonCardWithCheck";
import "./style.css";
const SelectFeatured = ({ title, isMobileScreen }) => {
  const gruopLessons = [
    {
      id: 1,
      groupFor: " Kids | 4-7",
      experience: "For Intermediate & Advanced Students",
      groupName: "Junior 8-12 fairland Recreational Park",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      howFar: "0 miles away",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      id: 2,
      groupFor: "Kids | 4-7",
      experience: "For Intermediate & Advanced Students",
      groupName: "Junior 8-12 fairland Recreational Park",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      howFar: "0 miles away",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      id: 3,
      groupFor: "Kids | 4-7",
      experience: "For Intermediate & Advanced Students",
      groupName: "Junior 8-12 fairland Recreational Park",
      description:
        "Get one on one private instruction. Improve faster working on specific skills.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      howFar: "0 miles away",
      label: "Group",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
  ];

  return (
    <div className="form-group-container">
      <form className="form-group">
        <div className="row form-title">
          <div className="col-5 col-lg-7 col-md-5 d-flex align-items-center justify-content-between">
            <label className="form-label">{title}</label>
          </div>
          <div className="col-7 col-lg-5 col-md-7 d-flex flex-column justify-content-between">
            <div className="d-flex align-items-center flex-column ">
              <div className="my-2 w-100">
                <ButtonComponent
                  share={""}
                  text={"Update"}
                  theme={"light-green"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-body text-left py-2">
          <div className="row">
            {gruopLessons.map((lesson, index) => {
              return (
                <div key={index} className="w-100">
                  <GroupLessonCardWithCheck
                    lesson={lesson}
                    isMobileScreen={isMobileScreen}
                    index={index}
                    length={gruopLessons.length}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SelectFeatured;
