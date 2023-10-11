import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, HiloSeries, Category, Tooltip, Zoom, Legend,Crosshair,DateTime } 
from '@syncfusion/ej2-react-charts';
import {financialChartData} from '../DataDummy.js'
export default function Financial() {
    const primaryxAxis = { valueType: 'DateTime', title: 'Months' };
    const primaryyAxis = {title: 'Price'};
  return (
   <div>
    <h3 className='py-3'>Financial Charts</h3>
 <ChartComponent id='charts'  primaryXAxis={primaryxAxis}  primaryYAxis ={primaryyAxis} title='AAPLE Historical' legendSettings={{Visible:true}} tooltip={{enable:true}}>
      <Inject services={[HiloSeries, Tooltip, Category, Crosshair, Zoom,DateTime,Legend]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={financialChartData} xName='x' yName='low'  type='Hilo' low='low' high='high'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}
