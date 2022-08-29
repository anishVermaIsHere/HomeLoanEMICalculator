import React from 'react'
import LoanSummary from './subcompo/LoanSummary'
import DoughnutChart  from './widgets/DoughnutChart'

const LoanContent = ({
  loan,
  totalAmountPayable,
  totalInterest,
  emi
}) => {
    let styLoanCont={
      borderTop:'1px solid #ccc',
      borderRight:'1px solid #ccc'
    }
    let styleDoughnut={
      borderTop:'1px solid #ccc'
    }
    
  return (
    <section className='row loan-calculate'>
        <div className='col-lg-6' style={styLoanCont}>
            <LoanSummary title='Loan EMI' id='loan-emi' amount={emi}/>
            <LoanSummary title='Total Interest Payable' id='total-int' amount={totalInterest}/>
            <LoanSummary title='Total Payment (Payment+Interest)' id='total-pay' amount={totalAmountPayable}/>
        </div>
        <div className='col-lg-6' style={styleDoughnut}>
          <p>Break-up of Total Payment</p>
          <DoughnutChart  loan={loan} totalInterest={totalInterest} totalAmountPayable={totalAmountPayable}/>
        </div>
    </section>     
  )
}

export default LoanContent