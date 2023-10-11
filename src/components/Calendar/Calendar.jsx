import React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, Month, Agenda, Inject,DragAndDrop,Resize} from '@syncfusion/ej2-react-schedule';


export default function Newcalendar(){
  return (
  <>
   <h3 className='py-2'>Calendar</h3>
<ScheduleComponent height={"750px"}>
<Inject services={[Day, Week, Month, Agenda,DragAndDrop,Resize]}/>
</ScheduleComponent>
</>
  )
}
