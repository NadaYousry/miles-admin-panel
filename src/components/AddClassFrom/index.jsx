import { TextField } from "@material-ui/core";
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
    console.log(e.target.startDate.value);
    e.preventDefault();
    let taskData;
    taskData = {
      // this object form api
      id: (itemsFromBackend.length + 1).toString(),
      title: e.target.title.value,
      place: e.target.place.value,
      price: e.target.price.value,
      status: e.target.status.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    };
    setItemsFromBackend([...itemsFromBackend, taskData]);
    setColumnsFromBackend({
      potentialClassColumn: {
        title: "Potential Classes",
        items: [...columnsFromBackend.potentialClassColumn.items, taskData],
      },
      upcomingClassColumn: {
        title: "Upcoming",
        items: columnsFromBackend.upcomingClassColumn.items,
      },
      inProgressClassColumn: {
        title: "In Progress",
        items: columnsFromBackend.inProgressClassColumn.items,
      },
      doneClassColumn: {
        title: "Program Completed",
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
        title: "",
        place: "",
        price: "",
        status: "",
        startDate: "",
        endDate: "",
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
                <TextField id="title" label="Class Name" type="text" name="title" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-data">
                <TextField id="place" label="Place" type="text" name="place" />
              </div>
            </div>
            <div className="col-6">
              <div className="form-data">
                <TextField id="price" label="Price" type="text" name="price" />
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
                        value={status.option}
                        name="status"
                        type="radio"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-6">
              <TextField
                id="datetime-local"
                label="Start Date"
                type="datetime-local"
                name="startDate"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className="col-6">
              <TextField
                id="datetime-local"
                label="End Date"
                type="datetime-local"
                name="endDate"
                InputLabelProps={{
                  shrink: true,
                }}
              />
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
