import React from "react";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingCardDropDownMenu from "../../components/SettingCardDropDownMenu";
import CheckBox from "../../components/CheckBox";
import moment from "moment";
import { Card } from "react-bootstrap";
import "./style.css";

const DragappleCard = ({ snapshot, item, isEdit, ...provided }) => {
  return (
    <>
      {item && (
        <Card
          className="class-card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={
            provided && snapshot
              ? {
                  padding: 10,
                  margin: "0 0 2% 0",
                  backgroundColor:
                    snapshot?.isDragging && isEdit ? "#ffffff" : "#ffffff",
                  ...provided?.draggableProps.style,
                }
              : {
                  boxShadow:
                    item?.status === "active"
                      ? " 0 0 5px #6abf48"
                      : item?.status === "completed"
                      ? " 0 0 5px #d80c05"
                      : " 0 0 5px #ebef04",
                }
          }
        >
          <div className="mb-0 d-flex align-items-start justify-content-between">
            <div className="mb-0 d-flex align-items-center justify-content-between">
              <div
                className="circle mr-2"
                style={{
                  backgroundColor:
                    item?.status === "active"
                      ? "#6abf48"
                      : item?.status === "completed"
                      ? "#d80c05"
                      : "#ebef04",
                }}
              ></div>
              <p className="name mb-0">{item?.title}</p>
            </div>
            <div>
              {isEdit && (
                <CheckBox
                  showOptions={false}
                  option={item?.id}
                  name="status"
                  type="checkbox"
                  theme="orange"
                />
              )}
            </div>
          </div>
          <div className="mb-2 d-flex align-items-start justify-content-between">
            <div className="time-and-date">
              <p className="mb-0">{moment(item?.startDate).format("llll")}</p>
              {/* <p className="mb-0">{item?.time}</p> */}
            </div>
          </div>

          {isEdit && (
            <>
              <div className="mb-2">
                <span className="place">{item?.place}</span>
              </div>
              <div className="user-container d-flex align-items-end justify-content-between">
                <div className="user">
                  <FontAwesomeIcon icon={faUserAlt} className=" mr-2" />
                  <p className="price mr-2">{item?.registration_count}</p>
                  <p className="price">{`${item?.price}$`}</p>
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
            </>
          )}
        </Card>
      )}
    </>
  );
};

export default DragappleCard;
