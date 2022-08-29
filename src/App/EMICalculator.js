import React from 'react';
import '../assets/styles/LoanInput.css';
import LoanAside from '../components/LoanAside';
import LoanContainer from '../components/LoanContainer';
import Footer from '../components/Footer';

export const EMICalculator = () => {

  return (
    <>
    <div className='container layout'>
      <h1 className='app-title'>EMI Calculator for Home Loan</h1> 
      <main className='row justify-content-around'>
        <LoanContainer />
        <LoanAside />
      </main>
      <Footer />
    </div>
    </>
  )
}
