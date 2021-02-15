import React from "react";
import CircledIconContainer from "../CircleedIconContainer";
import FiveStarsRating from "../FiveStarsRating";
import "./style.css";
const ReviewCard = ({ isMobileScreen, review, length }) => {
  return (
    <div
      className={`row no-gutters align-items-start reviews py-3 section-separator ${
        length > 1 ? "section-separator-top" : ""
      }`}
    >
      <div
        className={` col-2 col-lg-1 col-md-1 d-flex align-items-start justify-content-center flex-column`}
      >
        <CircledIconContainer
          selecting={false}
          icon={review.reviewIcon}
          name={""}
          theme={"green"}
        />
      </div>
      <div className="col-10 col-md-8 col-lg-8">
        <p className=" text-left mb-0">{`"${review.message}"`}</p>
        <span
          className={`${
            isMobileScreen ? "mb-3" : ""
          }  w-100 reviewer-secondary-text  text-left d-inline-block mt-2`}
        >
          {review.reviewerName}
        </span>
      </div>
      {isMobileScreen && <div className="col-2"></div>}
      <div
        className={`col-10 col-md-2 col-lg-2 d-flex  flex-column justify-content-end ${
          !isMobileScreen ? " align-items-end" : " align-items-start"
        }`}
      >
        <span className=" d-flex  flex-row justify-content-end">
          <FiveStarsRating
            ratingNumber={""}
            peopleNumber={""}
            theme={"green"}
          />
        </span>
        <span
          className={`${
            isMobileScreen ? " text-left" : "text-right"
          }w-100 reviewer-secondary-text date d-inline-block mt-2`}
        >
          {review.date}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
