import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";
import { faUserAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownMenu from "../../components/DropDownMenu";
import ButtonComponent from "../../components/Button";
import { ColumnContext } from "../AdminPanel";
import CheckBox from "../../components/CheckBox";
import AddClassFrom from "../../components/AddClassFrom";
import "./style.css";
import ContactFromModal from "../../components/ContactFromModal";

function AdminClassesPage() {
  const [openModal, setOpenModal] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [statusName, setStatusName] = useState("");
  const [dayName, setDayName] = useState("");
  

const [sucessMessage, setSucessMessage] = useState(false);
const [loader, setLoader] = useState(false);
  const handleCloseModal = () => {setOpenModal(false) ;setSucessMessage(false)};
  const handleOpenModal = () => setOpenModal(true);
  let [columnsFromBackend, setColumnsFromBackend] = useContext(ColumnContext);
  const [columns, setColumns] = useState(columnsFromBackend);
  const [isDragged, setIsDragged] = useState(false);
  const selectStatus = [
    { color: "#6abf48", option: "Active" },
    { color: "#ebef04", option: "Ending Soon" },
    { color: "#d80c05", option: "Completed" },
  ];
  const selectActivities = [
    { option: "Tennis" },
    { option: "Pilate" },
    { option: "Fitness" },
  ];
  const days = [
    { option: "Monday" },
    { option: "Tuesday" },
    { option: "Wednesday" },
    { option: "Thuresday" },
    { option: "Friday" },
    { option: "Saturday" },
    { option: "Sunday" },
  ];
  useEffect(() => {
    setColumns(columnsFromBackend);
  }, [columnsFromBackend]);

  useEffect(() => {
    if (isDragged) {
      setColumnsFromBackend(columns);
      setIsDragged(false);
    }
  }, [columns]);
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
// ////////////////////////////
const handleCloseButton = () => {
  handleCloseModal();
  setTimeout(() => {
    setSucessMessage(false);
  }, 500);
};
const renderModalContent = ()=>{
  return(
    
    <AddClassFrom
    handleCloseButton={handleCloseButton}
    handleClose={handleCloseModal}
    setSucessMessage={setSucessMessage}
    setLoader={setLoader}
     />
  )
}
///////////////////////////////
  return (
    <>
      <section className="container drag-and-drop-container">
        <div className="controls row">
          <div className="add-container col-12 col-lg-4 col-md-4 mb-2">
            <div className={"add-new-task"}>
              <ButtonComponent
                theme={"green"}
                text={`Add New Class`}
                icon={<FontAwesomeIcon icon={faPlus} className=" mr-2" />}
                onClickButton={handleOpenModal}
              />
            </div>
          </div>

          <div className="filter-container col-12 col-md-5 col-lg-5 d-flex">
            <p>filter: </p>{" "}
            <div className="dropDown-menu">
              <DropdownButton
                id="dropdown-item-button"
                drop="down"
                title={dayName ? dayName : "Days"}
              >
                {days.map((option, index) => {
                  return (
                    <div key={index}>
                      <Dropdown.Item
                        as="li"
                        onClick={() => {
                          setDayName(option.option);
                        }}
                        className="dropDown-list"
                      >
                        <span> {option.option}</span>
                      </Dropdown.Item>
                    </div>
                  );
                })}
              </DropdownButton>
            </div>
            <div className="dropDown-menu">
              <DropdownButton
                id="dropdown-item-button"
                drop="down"
                title={activityName ? activityName : "Activity"}
              >
                {selectActivities.map((option, index) => {
                  return (
                    <div key={index}>
                      <Dropdown.Item
                        as="li"
                        onClick={() => {
                          setActivityName(option.option);
                        }}
                        className="dropDown-list"
                      >
                        <span> {option.option}</span>
                      </Dropdown.Item>
                    </div>
                  );
                })}
              </DropdownButton>
            </div>
          </div>
          <div className="sort col-12 col-lg-3 col-md-3 d-flex">
            <p>sort: </p>
            <div className="dropDown-menu">
              <DropdownButton
                id="dropdown-item-button"
                title={statusName ? statusName : "Status"}
              >
                {selectStatus.map((option, index) => {
                  return (
                    <div key={index}>
                      <Dropdown.Item
                        as="li"
                        onClick={() => {
                          setStatusName(option.option);
                        }}
                        className="dropDown-list"
                      >
                        <span
                          className="circle d-inline-block"
                          style={{
                            backgroundColor: option.color,
                          }}
                        ></span>
                        <span> {option.option}</span>
                      </Dropdown.Item>
                    </div>
                  );
                })}
              </DropdownButton>
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            overflowX: "auto",
            justifyContent: "space-between",
          }}
        >
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            onDragStart={() => {
              setIsDragged(true);
            }}
          >
            {Object.entries(columns)?.map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  key={columnId}
                >
                  <div style={{ marginLeft: 8, marginRight: 8 }}>
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <>
                            <div
                              className="column-heading w-100"
                              style={{ overflow: "auto" }}
                            >
                              <h3
                                className={`m-0 ${column.name}`}
                                style={{
                                  padding: 10,
                                }}
                              >
                                {column.name}
                              </h3>
                            </div>
                            <Card
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={{
                                background: snapshot.isDraggingOver
                                  ? "#6abf4836"
                                  : "white",
                                width: 250,
                                padding: 5,
                                overflow: "hidden",
                                minHeight: 500,
                              }}
                            >
                              {column?.items?.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <Card
                                          className="class-card"
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            padding: 10,
                                            margin: "0 0 2% 0",
                                            backgroundColor: snapshot.isDragging
                                              ? "#ffffff"
                                              : "#ffffff",
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
                                                      : item.status ===
                                                        "completed"
                                                      ? "#d80c05"
                                                      : "#ebef04",
                                                }}
                                              ></div>
                                              <p className="name mb-0">
                                                {item.name}
                                              </p>
                                            </div>
                                            <div>
                                              <CheckBox
                                                showOptions={false}
                                                option={item.id}
                                                name="status"
                                                type="checkbox"
                                                theme='orange'
                                              />
                                            </div>
                                          </div>
                                          <div className="mb-2 d-flex align-items-start justify-content-between">
                                            <div className="time-and-date">
                                              <p className="mb-0">
                                                {item.date}
                                              </p>
                                              <p className="mb-0">
                                                {item.time}
                                              </p>
                                            </div>
                                          </div>

                                          <div className="mb-2">
                                            <span className="place">
                                              {item.place}
                                            </span>
                                          </div>
                                          <div className="user-container d-flex align-items-end justify-content-between">
                                            <div className="user">
                                              <FontAwesomeIcon
                                                icon={faUserAlt}
                                                className=" mr-2"
                                              />
                                              <p className="price mr-2">
                                                {item.registration_count}
                                              </p>
                                              <p className="price">{`${item.price}$`}</p>
                                            </div>
                                            <div className="setting">
                                              <DropDownMenu
                                                selectOptions={[
                                                  { option: "Make a copy" },
                                                  { option: "Edit" },
                                                  { option: "Active" },
                                                ]}
                                              />
                                            </div>
                                          </div>
                                        </Card>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </Card>
                          </>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </section>

    {/************************************ start modal render *****************************************/}
    <ContactFromModal
     handleClose={handleCloseModal} 
     openModal={openModal}
    content={renderModalContent()}
    loader={loader}
    sucessMessage={sucessMessage}
  />
  {/************************************ end modal render *****************************************/}
    </>
  );
}

export default AdminClassesPage;
