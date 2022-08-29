
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut  } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({loan,totalInterest,totalAmountPayable}) => {
    const principalAmt=Math.round(loan/totalAmountPayable*100);
    const totalInt=Math.round(totalInterest/totalAmountPayable*100);
    const doughnutData= {
        labels: ['Principal Loan in %', 'Total Interest in %'],
        datasets: [{
            label: '# of Votes',
            data: [principalAmt, totalInt],
            backgroundColor: [
                'rgb(0, 92, 200)',
                'rgb(26, 133, 255)'
            ],
            borderColor: [
                'rgb(0, 92, 200,0)',
                'rgb(26, 133, 255,0)'
            ],
            borderWidth:1
        }]
 }

 const styleDoughnut={
     height:'100px',
     width:'100px'
 }
  return (
    <>
    <div className='chart-container'>
        <Doughnut  data={doughnutData} style={styleDoughnut}/>
    </div>
    </>
  )
}

export default DoughnutChart 