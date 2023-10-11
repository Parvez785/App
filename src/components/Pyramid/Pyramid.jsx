import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel
} from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../DataDummy.js';
import { Position } from '@syncfusion/ej2-base';

export default function Pyramid() {
  return (
    <div>
      <h3 className='py-3'>Pyramid Food Chart</h3>
    <AccumulationChartComponent title ="Food Comparison Chart" legendSettings={"Position:top"} enableSmartLabels='true'tooltip={{enable:true}}
    height="600">
      <Inject services={[AccumulationLegend, PyramidSeries,AccumulationTooltip,AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid' dataLabel={{
            visible: true, position: 'Inside', name: 'text'}}/>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </div>
  );
}
