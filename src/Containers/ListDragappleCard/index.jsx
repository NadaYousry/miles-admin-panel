import React from "react";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SettingCardDropDownMenu from "../../components/SettingCardDropDownMenu";
import CheckBox from "../../components/CheckBox";
import moment from "moment";
import { Card } from "react-bootstrap";
import "./style.css";

const ListDragappleCard = ({ snapshot, item, isEdit, ...provided }) => {
  console.log(item, isEdit);
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
                  padding: 5,
                  margin: "0 0 0.5% 0",
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
            <div className="mb-0 d-flex align-items-start justify-content-between">
              {isEdit && (
                <div>
                  <CheckBox
                    showOptions={false}
                    option={item?.id}
                    name="status"
                    type="checkbox"
                    theme="orange"
                  />
                </div>
              )}
              <div className=" ml-2">
                <p className="name mb-0">{item?.title}</p>
                <div className="time-and-date">
                  <p className="mb-0">
                    {moment(item?.startDate).format("lll")}
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between align-items-end h-100">
              <div
                className="circle mb-3"
                style={{
                  backgroundColor:
                    item?.status === "active"
                      ? "#6abf48"
                      : item?.status === "completed"
                      ? "#d80c05"
                      : "#ebef04",
                }}
              ></div>
              {isEdit && (
                <>
                    <div className="setting">
                      <SettingCardDropDownMenu
                        selectOptions={[
                          { option: "Make a copy" },
                          { option: "Edit" },
                          { option: "Active" },
                        ]}
                      />
                    </div>
                </>
              )}
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default ListDragappleCard;
