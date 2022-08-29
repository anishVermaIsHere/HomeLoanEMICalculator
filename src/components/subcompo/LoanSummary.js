import React from 'react'

const LoanSummary = ({
  title,
  id,
  amount
}) => {
  return (
    <>
        <div className='col-12 loan-calc-item'>
            <p className='loan-calc-title'>{title}</p>
            <p id={id} className='loan-emi-amt'><span className='curr-symb mr-2'>&#8377;</span>{Math.round(amount)}</p>
        </div>
    </>
  )
}

export default LoanSummary