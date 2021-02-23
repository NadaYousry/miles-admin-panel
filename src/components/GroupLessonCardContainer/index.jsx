import React from "react";
import GroupLessonCard from "../GroupLessonCard";
import DontFoundYouNeedCard from "../DontFoundYouNeedCard";
import SelectMenuComponent from "../SelectMenu";
import "./style.css";
const GroupLessonCardContainer = ({ isMobileScreen }) => {
  const groupLessons = [
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "pilates",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "pilates",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Tennis",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Tennis",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Tennis",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "Tennis",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
    {
      groupFor: "Beginner - Kids | 4-7",
      groupName: "Footwork Patterns",
      description:
        "Improve with other players in a similar skill set and a fun environment.",
      price: "$20/hr",
      place: "Fairland Recreational Park ",
      label: "pilates",
      date: "23 Aug - 13 Sep",
      time: "4:00pm - 5:00pm",
    },
  ];
  
  const filterOptions=[
    {
      option:"Kids 4-7",
    },
    {
      option:"Junior 8-12",
    },
    {
      option:"Teens 13-17",
    },
    {
      option:"Adults",
    }
  ];
  return (
    <div className={"group-lessons-container"}>
      <SelectMenuComponent filters={filterOptions} />
      {groupLessons.map((lesson, index) => {
        return (
          <div key={index}>
            <GroupLessonCard lesson={lesson} isMobileScreen={isMobileScreen} />
          </div>
        );
      })}

      <DontFoundYouNeedCard isMobileScreen={isMobileScreen} />
    </div>
  );
};

export default GroupLessonCardContainer;
