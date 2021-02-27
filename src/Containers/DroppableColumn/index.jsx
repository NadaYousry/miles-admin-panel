import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "react-bootstrap";
import DragappleCard from "../DragappleCard";
import ListDragappleCard from "../ListDragappleCard";

const DroppableColumn = ({ columnId, column , isList }) => {
  return (
    <>
      <Droppable droppableId={columnId} key={columnId}>
        {(provided, snapshot) => {
          return (
            <>
              <div
                className="column-heading w-100"
                style={{ overflow: "auto" }}
              >
                <h3
                  className={`m-0 ${column.title}`}
                  style={{
                    padding: isList?5:10,
                  }}
                >
                  {column.title}
                </h3>
              </div>
              <Card
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  background: snapshot.isDraggingOver ? "#6abf4836" : "white",
                  width: isList?'100%':250,
                  padding: 5,
                  overflow: "hidden",
                  minHeight: isList?'50px':500,
                  marginBottom:isList&&'1%',
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
                          <>
                         { isList ?<ListDragappleCard
                          isEdit={true}
                          snapshot={snapshot}
                          item={item}
                          {...provided}
                        />
                          : 
                          <DragappleCard
                            isEdit={true}
                            snapshot={snapshot}
                            item={item}
                            {...provided}
                          />
                          }
                          </>
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
    </>
  );
};

export default DroppableColumn;
