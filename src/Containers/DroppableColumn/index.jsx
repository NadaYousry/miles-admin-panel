import React from "react";
import {  Draggable, Droppable } from "react-beautiful-dnd";
import { Card } from "react-bootstrap";
import DragappleCard from "../DragappleCard";

const DroppableColumn = ({columnId , column}) => {
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
                  background: snapshot.isDraggingOver ? "#6abf4836" : "white",
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
                          <DragappleCard
                            snapshot={snapshot}
                            item={item}
                            {...provided}
                          />
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
