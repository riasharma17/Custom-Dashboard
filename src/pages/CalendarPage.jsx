// import React, { useState } from 'react';
// import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
// import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

// import { scheduleData } from '../data/dummy';
// import { Header } from '../components';

// // eslint-disable-next-line react/destructuring-assignment
// const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

// const Scheduler = () => {
//   const [scheduleObj, setScheduleObj] = useState();

//   const change = (args) => {
//     scheduleObj.selectedDate = args.value;
//     scheduleObj.dataBind();
//   };

//   const onDragStart = (arg) => {
//     // eslint-disable-next-line no-param-reassign
//     arg.navigation.enable = true;
//   };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="App" title="Calendar" />
//       <ScheduleComponent
//         height="650px"
//         ref={(schedule) => setScheduleObj(schedule)}
//         selectedDate={new Date(2021, 0, 10)}
//         eventSettings={{ dataSource: scheduleData }}
//         dragStart={onDragStart}
//       >
//         <ViewsDirective>
//           { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) => <ViewDirective key={item} option={item} />)}
//         </ViewsDirective>
//         <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
//       </ScheduleComponent>
//       <PropertyPane>
//         <table
//           style={{ width: '100%', background: 'white' }}
//         >
//           <tbody>
//             <tr style={{ height: '50px' }}>
//               <td style={{ width: '100%' }}>
//                 <DatePickerComponent
//                   value={new Date(2021, 0, 10)}
//                   showClearButton={false}
//                   placeholder="Current Date"
//                   floatLabelType="Always"
//                   change={change}
//                 />
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </PropertyPane>
//     </div>
//   );
// };

// export default Scheduler;

import React, { useState, useRef, useEffect } from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';

import Header from '../components/Header';


const PropertyPane = ({ children }) => (
  <div className="mt-5 p-4 border rounded-md bg-white shadow-sm">{children}</div>
);

const CalendarPage = () => {
  const [scheduleObj, setScheduleObj] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date(2021, 0, 10));
  const scheduleRef = useRef(null);

  useEffect(() => {
    if (scheduleRef.current) {
      scheduleRef.current.selectedDate = selectedDate;
      scheduleRef.current.dataBind();
    }
  }, [selectedDate]);

  const onDateChange = (args) => {
    setSelectedDate(args.value);
  };

  const onDragStart = (args) => {
    args.navigation.enable = true;
  };

  return (
    <div className="m-4 md:m-10 mt-24 p-4 md:p-10 bg-white rounded-3xl shadow-lg">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        ref={scheduleRef}
        selectedDate={selectedDate}
        eventSettings={{ dataSource: scheduleData }}
        dragStart={onDragStart}
      >
        <ViewsDirective>
          {['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((view) => (
            <ViewDirective key={view} option={view} />
          ))}
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      <PropertyPane>
        <DatePickerComponent
          value={selectedDate}
          showClearButton={false}
          placeholder="Select Date"
          floatLabelType="Always"
          change={onDateChange}
          style={{ width: '100%' }}
        />
      </PropertyPane>
    </div>
  );
};

export default CalendarPage;
