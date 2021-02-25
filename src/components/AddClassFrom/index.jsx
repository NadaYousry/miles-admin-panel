import React, { useContext, useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import ButtonComponent from "../Button";
import CheckBox from "../CheckBox";
import Loader from "../Loader";
import Message from "../Message";
import { ColumnContext, ItemsContext } from "./../../containers/AdminPanel";

import "./style.css";
const AddClassFrom = ({ setSucessMessage, setLoader }) => {
  let [itemsFromBackend, setItemsFromBackend] = useContext(ItemsContext);
  let [columnsFromBackend, setColumnsFromBackend] = useContext(ColumnContext);

  const selectStatus = [
    {
      option: "active",
    },
    {
      option: "completed",
    },
    {
      option: "soon",
    },
  ];
  useEffect(() => {}, [itemsFromBackend, columnsFromBackend]);
  // submit form
  const onSumbitAddTask = (e) => {
    e.preventDefault();
    let taskData;
    taskData = {
      // this object form api
      id: (itemsFromBackend.length + 1).toString(),
      name: e.target.name.value,
      place: e.target.place.value,
      price: e.target.price.value,
      status: e.target.status.value,
    };
    setItemsFromBackend([...itemsFromBackend, taskData]);
    setColumnsFromBackend({
      potentialClassColumn: {
        name: "Potential Classes",
        items: [...columnsFromBackend.potentialClassColumn.items, taskData],
      },
      upcomingClassColumn: {
        name: "Upcoming",
        items: columnsFromBackend.upcomingClassColumn.items,
      },
      inProgressClassColumn: {
        name: "In Progress",
        items: columnsFromBackend.inProgressClassColumn.items,
      },
      doneClassColumn: {
        name: "Program Completed",
        items: columnsFromBackend.doneClassColumn.items,
      },
    });
    // here i handle loader by my hand but it should be handled in interceptor when calling api
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setSucessMessage(true);
      taskData = {
        // this object form api
        id: "",
        name: "",
        place: "",
        price: "",
        status: "",
      };
    }, 500);
  };
  return (
    <>
      <Form onSubmit={(e) => onSumbitAddTask(e)} id="addTaskForm">
        <Form.Group controlId="">
          <div className="row">
            <div className="col-12">
              <div className="form-data">
                <Form.Label>Add Class</Form.Label>
                <Form.Control type="text" name="name" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-data">
                <Form.Label>Place</Form.Label>
                <Form.Control type="text" name="place" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-data">
                <Form.Label>Price</Form.Label>
                <Form.Control type="text" name="price" />
              </div>
            </div>
            <div className="col-12">
              <div className="form-data">
                <Form.Label>status</Form.Label>
                {selectStatus.map((status, index) => {
                  return (
                    <div key={index}>
                      <CheckBox
                        showOptions={true}
                        option={status.option}
                        name="status"
                        type="radio"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Modal.Footer>
            <div className="button">
              <ButtonComponent
                share={""}
                text={"Submit"}
                theme={"light-green"}
                type={"submit"}
              />
            </div>
          </Modal.Footer>
        </Form.Group>
      </Form>
    </>
  );
};

export default AddClassFrom;
