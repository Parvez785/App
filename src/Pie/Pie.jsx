import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationDataLabel ,AccumulationLegend
,AccumulationTooltip} 
from '@syncfusion/ej2-react-charts';
import {pieChartData} from '../components/DataDummy.js'
export default function Pie() {
    const datalabel = { visible: true };
  return (
   
    <>
    <h1>Charts</h1>
    <h5>Pie Chart</h5>
    <AccumulationChartComponent  title="Project Cost Breakdown" legendSettings={"Position:top"} enableSmartLabels='true'tooltip={{enable:true}}>
      <Inject services={[AccumulationLegend,AccumulationTooltip,AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' type='Pie' innerRadius='30%' dataLabel={{
            visible: true, position: 'Inside', name: 'text'}}/>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </>
  )
}
