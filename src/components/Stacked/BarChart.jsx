import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, ColumnSeries } 
from '@syncfusion/ej2-react-charts';
import {barChartData} from '../DataDummy.js'
export default function BarChart() {
  const primaryxAxis = { valueType: 'Category', title: 'Countries' };
  const primaryyAxis = { minimum: 0, maximum: 80, interval: 20, title: 'Medals' };
  return (
    <div>
      <h3 className='py-3'>Bar Chart</h3>
   <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Olympic Medals' tooltip={{enable:true}}>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={barChartData} xName='x' yName='y' name='Gold' type='Column'>
          </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}
