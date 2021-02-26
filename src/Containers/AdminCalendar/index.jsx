import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  MonthView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import { owners } from './events';
import "./styles.css";
const appointments = [
  {
    id: 0,
    title: 'Tennis Class',
    startDate: new Date(2021, 6, 23, 9, 30),
    endDate: new Date(2021, 6, 23, 11, 30),
    ownerId: 1,
  }, {
    id: 1,
    title: 'Fitness Class',
    startDate: new Date(2021, 5, 28, 9, 30),
    endDate: new Date(2021, 5, 28, 11, 30),
    ownerId: 2,
  }, {
    id: 2,
    title: 'Pilate Class',
    startDate: new Date(2021, 6, 9, 12, 0),
    endDate: new Date(2021, 6, 9, 13, 0),
    ownerId: 3,
  }, {
    id: 3,
    title: 'Tennis Class',
    startDate: new Date(2021, 6, 18, 14, 30),
    endDate: new Date(2021, 6, 18, 15, 30),
    ownerId: 1,
  }, {
    id: 4,
    title: 'Tennis Class',
    startDate: new Date(2021, 6, 20, 12, 0),
    endDate: new Date(2021, 6, 20, 13, 35),
    ownerId:1,
  }, {
    id: 5,
    title: 'Fitness Class',
    startDate: new Date(2021, 6, 6, 13, 0),
    endDate: new Date(2021, 6, 6, 14, 0),
    exDate: '20210713T100000Z,20210727T100000Z',
    ownerId: 2,
  }, {
    id: 6,
    title: 'Swimming Class',
    startDate: new Date(2021, 5, 28, 12, 0),
    endDate: new Date(2021, 5, 28, 12, 30),
    exDate: '20210705T090000Z,20210719T090000Z',
    ownerId:4,
  }, {
    id: 7,
    title: 'Yoga Class',
    startDate: new Date(2021, 6, 3, 11, 0),
    endDate: new Date(2021, 6, 3, 12, 0),
    exDate: '20210710T080000Z,20210724T080000Z',
    ownerId: 5,
  }, {
    id: 8,
    title: 'Cycling',
    startDate: new Date(2021, 6, 9, 11, 0),
    endDate: new Date(2021, 6, 9, 12, 0),
    ownerId: 6,
  },
];

const resources = [{
  fieldName: 'ownerId',
  instances: owners,
}];


const DayScaleCell = props => (
  <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);

export default class Demo extends React.PureComponent {
  // #FOLD_BLOCK
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
    };

    this.commitChanges = this.commitChanges.bind(this);
  }

  // #FOLD_BLOCK
  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { data } = state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }

  render() {
    const { data } = this.state;

    return (
      <Paper>
        <Scheduler
          data={data}
        >
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <ViewState
            defaultCurrentDate="2021-07-17"
          />

          <MonthView
            dayScaleCellComponent={DayScaleCell}
          />

          <Appointments
          />
          <Resources
            data={resources}
          />

          <Toolbar
          />
          <DateNavigator />
          <EditRecurrenceMenu />
          <AppointmentTooltip
            showCloseButton
            showDeleteButton
            showOpenButton
          />
            <AppointmentForm />
            <DragDropProvider />
        </Scheduler>
      </Paper>
    );
  }
}
