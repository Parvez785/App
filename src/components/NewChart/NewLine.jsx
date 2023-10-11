import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries } from 
'@syncfusion/ej2-react-charts';
import { Data2, Data3, data,lineChartData} from '../DataDummy.js'
export default function NewLineChart() {
    const marker = { visible: true, height: 10, width: 10, shape: 'Circle' };
  return (
    <ChartComponent id='charts' title='Sales overview' legendSettings={{Visible:true}} tooltip={{enable:true}}>
        <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]} />
        <SeriesCollectionDirective>
        <SeriesDirective dataSource={lineChartData} xName='x' yName='y' width={4} name='Germany' type='Line' marker={marker} >
</SeriesDirective>
<SeriesDirective dataSource={Data2} xName='x' yName='y' width={4} name='England' type='Line' marker={marker}>
</SeriesDirective>
<SeriesDirective dataSource={Data3} xName='x' yName='y' width={4} name='India' type='Line'  marker={marker}>
</SeriesDirective>
</SeriesCollectionDirective>
        </ChartComponent>
  )
}
