import React, { useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonComponent from "../../components/Button";
import { ColumnContext } from "../AdminPanel";
import AddClassFrom from "../../components/AddClassFrom";
import DroppableColumn from "../DroppableColumn";
import ContactFromModal from "../../components/ContactFromModal";
import DropDown from "../../components/DropDown";
import "./style.css";

function AdminClassesPage() {
  const [openModal, setOpenModal] = useState(false);
  const [sucessMessage, setSucessMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const handleCloseModal = () => {
    setOpenModal(false);
    setSucessMessage(false);
  };
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
    { option: "All Activities" },
    { option: "Tennis" },
    { option: "Pilate" },
    { option: "Fitness" },
  ];
  const days = [
    { option: "All Days" },
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
  /************************************ end handel modal fun *****************************************/
  const handleCloseButton = () => {
    handleCloseModal();
    setTimeout(() => {
      setSucessMessage(false);
    }, 500);
  };
  const renderModalContent = () => {
    return (
      <AddClassFrom
        handleCloseButton={handleCloseButton}
        handleClose={handleCloseModal}
        setSucessMessage={setSucessMessage}
        setLoader={setLoader}
      />
    );
  };
  /************************************ end handel modal fun *****************************************/
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
              <DropDown selecteItemsArray={days} name="Days" />
            </div>
            <div className="dropDown-menu">
              <DropDown selecteItemsArray={selectActivities} name="Activity" />
            </div>
          </div>
          <div className="sort col-12 col-lg-3 col-md-3 d-flex">
            <p>sort: </p>
            <div className="dropDown-menu">
              <DropDown selecteItemsArray={selectStatus} name="Status" />
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
                    <DroppableColumn columnId={columnId} column={column} />
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
