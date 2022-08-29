import React,{useState,useRef,useEffect} from 'react'
import LoanInput from './subcompo/LoanInput';
import {loanAmtInterval,loanIntInterval, loanTenInterval} from '../utils/constants/labels';

const Input = ({
  loan, 
  interest, 
  tenure,
  handleLoanAmt,
  handleLoanInt,
  handleLoanTenure

}) => {

  return (
    <>
        <LoanInput label='Home Loan Amount' btn='&#8377;' min={0} max={20000000} 
        arr={loanAmtInterval} id='pri-input' steps={100000} value={loan} handleChange={handleLoanAmt} />

        <LoanInput key='02' label='Interest Rate' btn='%' min={5} max={20} 
        arr={loanIntInterval} id='int-input' steps={0.5} value={interest} handleChange={handleLoanInt}/>

        <LoanInput key='03' label='Loan Tenure' btn='Mo' min={6} max={360} 
        arr={loanTenInterval} id='tenure-input' value={tenure} handleChange={handleLoanTenure}/>
    </>
  )
}

export default Input