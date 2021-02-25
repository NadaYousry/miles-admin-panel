import React from "react";
import PrivateLessonCard from "../PrivateLessonCard";
import DonotFoundYouNeedCard from "../DonotFoundYouNeedCard";
import TraineeImage from "./../../assets/images/private-lessons/Bitmap.png";
import "./style.css";
const PrivateLessonCardContainer = ({ isMobileScreen,find }) => {
  const privateLessons = [
    {
      reteValue: 5,
      rateFrom: "from 128 reviews",
      trainner: "Miles B",
      description:
        "Accredited USTA coach with over 10 years experience helping tennis players achieve their ambitions no matter how small or how big.",
      price: "$20/hr",
      image: TraineeImage,
    },
    {
      reteValue: 5,
      rateFrom: "from 128 reviews",
      trainner: "Miles B",
      description:
        "Accredited USTA coach with over 10 years experience helping tennis players achieve their ambitions no matter how small or how big.",
      price: "$20/hr",
      image: TraineeImage,
    },
    {
      reteValue: 5,
      rateFrom: "from 128 reviews",
      trainner: "Miles B",
      description:
        "Accredited USTA coach with over 10 years experience helping tennis players achieve their ambitions no matter how small or how big.",
      price: "$20/hr",
      image: TraineeImage,
    },
    {
      reteValue: 5,
      rateFrom: "from 128 reviews",
      trainner: "Miles B",
      description:
        "Accredited USTA coach with over 10 years experience helping tennis players achieve their ambitions no matter how small or how big.",
      price: "$20/hr",
      image: TraineeImage,
    },
    {
      reteValue: 5,
      rateFrom: "from 128 reviews",
      trainner: "Miles B",
      description:
        "Accredited USTA coach with over 10 years experience helping tennis players achieve their ambitions no matter how small or how big.",
      price: "$20/hr",
      image: TraineeImage,
    },
    {
      reteValue: 5,
      rateFrom: "from 128 reviews",
      trainner: "Miles B",
      description:
        "Accredited USTA coach with over 10 years experience helping tennis players achieve their ambitions no matter how small or how big.",
      price: "$20/hr",
      image: TraineeImage,
    },
    {
      reteValue: 5,
      rateFrom: "from 128 reviews",
      trainner: "Miles B",
      description:
        "Accredited USTA coach with over 10 years experience helping tennis players achieve their ambitions no matter how small or how big.",
      price: "$20/hr",
      image: TraineeImage,
    },
  ];
  return (
    <div className={"private-lessons-container"}>
      {privateLessons.map((lesson, index) => {
        return (
          <div key={index}>
            <PrivateLessonCard
              lesson={lesson}
              isMobileScreen={isMobileScreen}
            />
          </div>
        );
      })}
      {find && <DonotFoundYouNeedCard isMobileScreen={isMobileScreen} />}
    </div>
  );
};

export default PrivateLessonCardContainer;
