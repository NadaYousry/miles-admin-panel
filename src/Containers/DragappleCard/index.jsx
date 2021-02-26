import React from "react";
import { faUserAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingCardDropDownMenu from "../../components/SettingCardDropDownMenu";
import CheckBox from "../../components/CheckBox";
import { Card } from "react-bootstrap";

const DragappleCard = ({snapshot  ,item , ...provided }) => {
  return (
    <>
      <Card
        className="class-card"
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
          padding: 10,
          margin: "0 0 2% 0",
          backgroundColor: snapshot.isDragging ? "#ffffff" : "#ffffff",
          ...provided.draggableProps.style,
        }}
      >
        <div className="mb-0 d-flex align-items-start justify-content-between">
          <div className="mb-0 d-flex align-items-center justify-content-between">
            <div
              className="circle mr-2"
              style={{
                backgroundColor:
                  item.status === "active"
                    ? "#6abf48"
                    : item.status === "completed"
                    ? "#d80c05"
                    : "#ebef04",
              }}
            ></div>
            <p className="name mb-0">{item.name}</p>
          </div>
          <div>
            <CheckBox
              showOptions={false}
              option={item.id}
              name="status"
              type="checkbox"
              theme="orange"
            />
          </div>
        </div>
        <div className="mb-2 d-flex align-items-start justify-content-between">
          <div className="time-and-date">
            <p className="mb-0">{item.date}</p>
            <p className="mb-0">{item.time}</p>
          </div>
        </div>

        <div className="mb-2">
          <span className="place">{item.place}</span>
        </div>
        <div className="user-container d-flex align-items-end justify-content-between">
          <div className="user">
            <FontAwesomeIcon icon={faUserAlt} className=" mr-2" />
            <p className="price mr-2">{item.registration_count}</p>
            <p className="price">{`${item.price}$`}</p>
          </div>
          <div className="setting">
            <SettingCardDropDownMenu
              selectOptions={[
                { option: "Make a copy" },
                { option: "Edit" },
                { option: "Active" },
              ]}
            />
            
          </div>
        </div>
      </Card>
    </>
  );
};

export default DragappleCard;
