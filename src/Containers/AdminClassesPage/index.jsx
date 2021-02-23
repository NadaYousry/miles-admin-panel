import React, { useContext, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { Card, Dropdown, DropdownButton } from "react-bootstrap";
import { faUserAlt, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropDownMenu from "../../components/DropDownMenu";
import ButtonComponent from "../../components/Button";
import "./style.css";
import AddClassFromModal from "../../components/AddClassFromModal";
import { ColumnContext, ItemsContext } from "../AdminPanel";

function AdminClassesPage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedName, setSelectedName] = useState(false);
  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);
  let [columnsFromBackend, setColumnsFromBackend] = useContext(ColumnContext);
  const [columns, setColumns] = useState(columnsFromBackend);
  const [isDragged, setIsDragged] = useState(false);
  const selectStatus = [
    { option: "Active" },
    { option: "Soon" },
    { option: "Completed" },
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

  return (
    <>
      <section className="container drag-and-drop-container">
        <div className="controls">
          <div className={"add-new-task"}>
            <ButtonComponent
              theme={"green"}
              text={`Add New Class`}
              icon={<FontAwesomeIcon icon={faPlus} className=" mr-2" />}
              onClickButton={handleOpenModal}
            />
          </div>
          <div className="sort">
            <DropdownButton id="dropdown-item-button" title={selectedName?selectedName :"Sort"}>
              {selectStatus.map((option, index) => {
                return (
                  <div key={index}>
                    <Dropdown.Item as="li" onClick={()=>{setSelectedName(option.option)}}>{option.option}</Dropdown.Item>
                  </div>
                );
              })}
            </DropdownButton>
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
                  <div style={{ marginLeft: 8  , marginRight:8}}>
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
                                          <div className="mb-2 d-flex align-items-start justify-content-between">
                                            <p className="name mb-0">
                                              {item.name}
                                            </p>
                                            <div
                                              className="circle"
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

      <AddClassFromModal handleClose={handleCloseModal} openModal={openModal} />
    </>
  );
}

export default AdminClassesPage;
