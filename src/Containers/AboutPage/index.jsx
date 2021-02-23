import React from "react";
import FiveStarsRating from "../../components/FiveStarsRating";
import CourtsIcon from "./../../assets/images/about/5courts.svg";
import GymIcon from "./../../assets/images/about/gym.svg";
import SwimmingIcon from "./../../assets/images/about//swim.svg";
import CafeIcon from "./../../assets/images/about/cafe.svg";
import CyclingIcon from "./../../assets/images/about/cycling.svg";
import DangerAlertIcon from "./../../assets/images/about/danger.svg";
import MapCard from "../../components/MapCard";
import AlertComponent from "../../components/Alert";
import CircledIconContainer from "../../components/CircleedIconContainer";
import ReviewCardContainer from "../../components/ReviewCardContainer";
import ReviewWithProgress from "../../components/ReviewWithProgress";
import FeaturedCard from "../../components/FeaturedCard";
import FAQs from "../../components/FAQs/FAQs";
import "./style.css";
import { Link } from "react-router-dom";
const AboutPage = ({ isMobileScreen }) => {
  const fiveIconData = [
    {
      icon: CourtsIcon,
      name: "5 Courts",
    },
    {
      icon: GymIcon,
      name: "Gym",
    },
    {
      icon: CyclingIcon,
      name: "Cycling",
    },
    {
      icon: SwimmingIcon,
      name: "Swimming",
    },
    {
      icon: CafeIcon,
      name: "Cafe",
    },
  ];
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
  ];
  return (
    <>
      <section className="row  section-separator mb-3 pb-3">
        <div
          className={`col-12 col-md-12 col-lg-6 mb-5${
            !isMobileScreen ? "section-separator-right" : ""
          }`}
        >
          <FiveStarsRating
            ratingNumber={"4.5"}
            peopleNumber={"122"}
            theme={"dark-blue"}
          />
          <p className="section-separator pb-4">
            Clubhouse Woodridge Tennis Academy offers amazing recently
            re-surfaced Tournament Ready courts servicing North Beach, Glenwood,
            Riversdale and Central Dakota. We also boast hosting the World #11
            favorite training ground and wordl class cafeteria for the hungry
            little ones.
          </p>
          <div className="">
            <div className="pb-4 activity-icons d-flex align-items-center justify-content-around">
              {fiveIconData.map((data, index) => {
                return (
                  <div
                    className=" d-flex align-items-center justify-content-center flex-column"
                    key={index}
                  >
                    <CircledIconContainer
                      selecting={false}
                      theme={"normal"}
                      icon={data.icon}
                      name={data.name}
                    />
                  </div>
                );
              })}
            </div>
            <AlertComponent
              isMobileScreen={isMobileScreen}
              icon={DangerAlertIcon}
              theme={"white"}
              message={"Currently undergoing renovations."}
            />
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <h2
            className={`sub-heading text-left text-center ${
              isMobileScreen ? "mb-3" : "mb-4"
            }`}
          >
            Map
          </h2>
          <MapCard />
        </div>
      </section>
      <section className="row section-separator pb-3 mb-5">
        <div className="col-12 col-md-12 col-lg-12">
          <ReviewWithProgress />
        </div>
        <div className="col-12 col-md-12 col-lg-12">
          <h2 className="sub-heading text-left mb-3">Reviews</h2>
          <ReviewCardContainer isMobileScreen={isMobileScreen} />
        </div>
      </section>
      <section className="row section-separator p-0 pb-1 mb-3">
        <div className="col-12 col-md-12 col-lg-12">
          <h2 className="sub-heading text-left mb-3">Featured</h2>
          <div className="review-container">
            <div className="row no-gutters align-items-start">
              <div className="col-12">
                <FeaturedCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row section-separator  pb-3">
        <div className="col-12 col-md-12 col-lg-12">
          <h2 className="sub-heading text-left mb-3">FAQ</h2>
          <div className="faq-container">
            <div className="row no-gutters align-items-start">
              <div className="col-12">  
              <FAQs faqsData={faqsData}  isMobileScreen={isMobileScreen} />
                <div className="row view-all-link ">
                  <div className="col-12">
                    <div className="link text-right w-100">
                      <p
                        className={`${
                          isMobileScreen ? "text-center" : "text-right"
                        }`}
                      >
                        <Link to="/faq">View all</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
