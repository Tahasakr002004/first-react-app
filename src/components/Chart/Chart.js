import React from 'react';
import ChartBar from './ChartBar';
import './chart.css';



const Chart = ( props ) => {
  const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value );
  let totalMaxValue = Math.max( ...dataPointValues );


  

  return (
    <div className="chart">
      {
        props.dataPoints.map(dataPoint => 
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxValue}
            label={dataPoint.label}
          />
        )        
      }      
    </div>
  );
};

export default Chart