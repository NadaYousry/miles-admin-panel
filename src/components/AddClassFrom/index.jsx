import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import ButtonComponent from "../Button";
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { ColumnContext, ItemsContext } from "./../../containers/AdminPanel";
import { makeStyles } from "@material-ui/core/styles";

import "./style.css";
import { withStyles } from "@material-ui/core/styles";

import { green } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

const GreenRadio = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const AddClassFrom = ({ setSucessMessage, setLoader }) => {
  let [itemsFromBackend, setItemsFromBackend] = useContext(ItemsContext);
  let [columnsFromBackend, setColumnsFromBackend] = useContext(ColumnContext);
  const [selectedValue, setSelectedValue] = React.useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const selectActivities = [
    { option: "All Activities" },
    { option: "Tennis" },
    { option: "Pilate" },
    { option: "Fitness" },
  ];
  const selectProgram = [
    { option: "Group Class" },
    { option: "Private Class" },
  ];
  const selectCycles = [
    {id:"potentialClassColumn", option: "Potential" },
    {id:"upcomingClassColumn", option: "upcoming" },
    {id:"inProgressClassColumn", option: "inProgress" },
    {id:"doneClassColumn", option: "Completed" },
  ];
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

  const [cycle, setCycle] = React.useState("");
  const classes = useStyles();

  const handleCycleChange = (event) => {
    setCycle(event.target.value);
  };
  const [activies, setActivities] = React.useState("");

  const handleActivitiesChange = (event) => {
    setActivities(event.target.value);
  };
  const [program, setProgram] = React.useState("");

  const handleProgramChange = (event) => {
    setProgram(event.target.value);
  };
  // submit form
  const onSumbitAddTask = (e) => {
    
    e.preventDefault();
    let taskData;
    taskData = {
      // this object form api
      id: (itemsFromBackend.length + 1).toString(),
      title: e.target.title.value,
      place: e.target.place.value,
      price: e.target.price.value,
      status: e.target.status.value,
      programType: e.target.programType.value,
      cycle: e.target.cycle.value,
      activity: e.target.activity.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
    };
    
    for(let i=0 ; i<columnsFromBackend.length ;i++){
      if(e.target.cycle.value===columnsFromBackend[i].id){
      columnsFromBackend[i].items.push(taskData)
    }else if(!e.target.cycle.value){
      columnsFromBackend[0].items.push(taskData)
    }
    }
    setItemsFromBackend([...itemsFromBackend, taskData]); //for calendar

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
                <TextField
                  id="title"
                  label="Class Name"
                  type="text"
                  name="title"
                />
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
            <div className="col-12 mt-5">
                <InputLabel >
                Status
                </InputLabel>     
               <RadioGroup 
                    name="status" defaultValue={''}
                    onChange={handleChange}>
              {selectStatus.map((status, index) => {
                return (
                  <FormControlLabel value={status.option} control={<GreenRadio />} label={status.option} key={index} />
                );
              })}

              </RadioGroup>

            </div>
            <div className="col-6">
              <FormControl className={classes.formControl}>
                <InputLabel id="program-type">
                  Program Type
                </InputLabel>
                <Select
                  labelId="program-type"
                  id="select"
                  value={program}
                  onChange={handleProgramChange}
                  name="programType"
                >
                  {selectProgram.map((program , index) => {
                    return (
                      <MenuItem value={program.option} key={index} id={index}>
                        {program.option}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="col-6">
              <FormControl className={classes.formControl}>
                <InputLabel id="activity">Activity</InputLabel>
                <Select
                  labelId="activity"
                  id="select"
                  value={activies}
                  onChange={handleActivitiesChange}
                  name="activity"
                >
                  {selectActivities.map((activity , index) => {
                    return (
                      <MenuItem value={activity.option}  key={index} id={index}>
                        {activity.option}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="col-12">
              <FormControl className={classes.formControl}>
                <InputLabel id="select-cycle">Cycle</InputLabel>
                <Select
                  labelId="select-cycle"
                  id="select"
                  value={cycle}
                  onChange={handleCycleChange}
                  name="cycle"
                >
                  {selectCycles.map((cycle , index) => {
                    return (
                      <MenuItem key={index} value={cycle.id}  id={index}>{cycle.option}</MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
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
