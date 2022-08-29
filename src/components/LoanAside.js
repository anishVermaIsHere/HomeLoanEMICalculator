import React from 'react'
import LoanLink from './widgets/LoanLink'

const LoanAside = () => {

  return (
    <>
    <aside className='col-lg-4 rounded' >
      <h3>Featured Calculators & Articles</h3>
        <LoanLink link='Calculate Home Loan EMI'></LoanLink>
        <LoanLink link='Calculate Car Loan EMI'></LoanLink>
        <LoanLink link='Calculate Personal Loan EMI'></LoanLink>  
    </aside>
    </>
  )
}

export default LoanAside