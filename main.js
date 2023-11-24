import { Chart } from 'chart.js/auto' 
import 'chartjs-adapter-moment'
import { getFlightData } from './api'
import { simplifiedInfo } from './utils'
import './index.css'

(async () => {
  const $canvas = document.getElementById('line-chart')

  // Refactorizar
  const data = await getFlightData()

  const cleanData0 = simplifiedInfo(data.data0.info)
  const cleanData1 = simplifiedInfo(data.data1.info)

  new Chart($canvas, {
    type: 'line',
    data: {
      datasets: [
        {
          label: `Vuelo PC1102 Pegasus | ${data.data0.date}`,
          borderColor: 'orange',
          backgroundColor: 'orange',
          data: cleanData0.map(row => ({x: row.timestamp, y: parseInt(row.price)})),
          borderWidth: 1,
        },
        {
          label: `Vuelo PC1100 Pegasus | ${data.data1.date}`,
          borderColor: 'red',
          backgroundColor: 'red',
          data: cleanData1.map(row => ({x: row.timestamp, y: parseInt(row.price)})),
          borderWidth: 1
        },
    ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          ticks: {
            callback: value => `${value} €`
          }
        },
        x: {
          type: 'time',
        }
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: ({ formattedValue }) => formattedValue + '€'
          }
        }
      }
    }
  })
}) ()


