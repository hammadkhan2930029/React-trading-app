import React from 'react'
import logo from "../../../../images/logoicon.png"
import './card_1.css'
import Chart from "react-apexcharts";

export const Card_1 = () => {
  const lineChartOptions = {
    chart: {
      id: "line-chart",
      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
      },
    },
    colors: ["#6C63FF", "#33BFFF"],
    xaxis: {
      categories: ["SEP", "OCT", "NOV", "DEC", "JAN", "FEB"],
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    markers: {
      size: 5,
    },
  };

  const lineChartSeries = [
    {
      name: "Revenue A",
      data: [400, 600, 800, 700, 500, 300],
    },
    {
      name: "Revenue B",
      data: [300, 200, 700, 500, 400, 600],
    },
  ];

  
  return (
    <div className='L_card_1'>
      <div className='top'>
        <div className='date'>
          <input className='input' type='date' />
        </div>
        <div>
          <img className='img' src={logo} />
        </div>
      </div>
      {/* ---------------------line chart---------------------------------- */}
      <div>
        <div className='line_chart'>
          {/* Line Chart */}
          <div className='line_chart_div'>
            <h3 style={{ textAlign: "center" }}>Monthly Overview</h3>
            <Chart options={lineChartOptions} series={lineChartSeries} type="line" height={300} />
          </div>

          
        </div>
      </div>
    </div>
  )
}
