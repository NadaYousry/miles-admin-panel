import React, { useContext, useEffect, useState } from "react";
import { ItemsContext } from "../AdminPanel";
import { ViewState, EditingState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  ViewSwitcher,
  DayView,
  WeekView,
  DragDropProvider,
  TodayButton,
  Resources,
} from "@devexpress/dx-react-scheduler-material-ui";
import "./styles.css";
import {  Paper } from "@material-ui/core";
const AdminCalendar = () => {
  let [itemsFromBackend, setItemsFromBackend] = useContext(ItemsContext);
  const [data, setData] = useState(itemsFromBackend);

useEffect(()=>{setData(itemsFromBackend)} ,[itemsFromBackend] )
  const commitChanges = ({ added, changed, deleted }) => {
    if (added) {
      const startingAddedId =
        data.length > 0 ? data[data.length - 1].id + 1 : 0;
      setData([...data, { id: startingAddedId, ...added }]);
    }
    if (changed) {
      setData(
        data.map((appointment) =>
          changed[appointment.id]
            ? { ...appointment, ...changed[appointment.id] }
            : appointment
        )
      );
    }
    if (deleted !== undefined) {
      setData(data.filter((appointment) => appointment.id !== deleted));
    }
    return { data };
  };
  const resource =[{
    fieldName: 'status',
    instances:[
      {
        id:'active',
        color: '#6abf48',
      }, {
        id:"soon",
        color: '#ebef04',
      },{
        id:"completed",
        color: '#d80c05',
      },
    ],
  }];
  return (
    <Paper >
      <Scheduler data={data}>
        <ViewState
          defaultCurrentDate="2021-07-17"
          defaultCurrentViewName="Month"
        />
        <MonthView />
        <DayView />
        <WeekView startDayHour={10} endDayHour={19} />
        <EditingState onCommitChanges={commitChanges} />
        <Appointments />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <EditRecurrenceMenu />
        <AppointmentTooltip showCloseButton  />
        <Resources data={resource}/>
        <DragDropProvider/>
      </Scheduler>
    </Paper>
  );
};
export default AdminCalendar;
