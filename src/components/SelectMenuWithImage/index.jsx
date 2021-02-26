import React from "react";
import CircleedImageContainer from "../CircleedIconContainer copy";
import "./style.css";
import DropDown from "../DropDown";
import Coach1 from "../../assets/images/coachs/1.png";
import Coach2 from "../../assets/images/coachs/2.png";
import Coach5 from "../../assets/images/coachs/5.png";
import Coach3 from "../../assets/images/coachs/3.png";
const SelectMenuWithImage = () => {
  const coachs = [
    {
      option: "Peter Andrews",
      id: 1,
      image: Coach1,
    },
    {
      option: "Jeff Bridges",
      id: 2,
      image: Coach2,
    },
    {
      option: "Miles Blackman",
      id: 3,
      image: Coach3,
    },
    {
      option: "Miles Blackman",
      id: 4,
      image: Coach3,
    },
    {
      option: "Jeff Bridges",
      id: 5,
      image: Coach5,
    },
    {
      option: "Peter Andrews",
      id: 6,
      image: Coach2,
    },
    {
      option: "Jeff Bridges",
      id: 7,
      image: Coach2,
    },
    {
      option: "Jeff Bridges",
      id: 8,
      image: Coach1,
    },
  ];

  return (
    <>
    <div className="w-25">
      <DropDown selecteItemsArray={coachs} name="Select Coach" />
    </div>
      <div className="assign-coach">
        <div className="row flex-column p-3">
          <p className="form-label d-inline-block">Assign a coach</p>
          <div className="assign-coach-card p-3  d-flex align-items-center  flex-wrap">
            {coachs.map((coach, index) => {
              return (
                <div key={index}>
                  <CircleedImageContainer
                    image={coach.image}
                    name={coach.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectMenuWithImage;
