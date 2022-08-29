import React,{useState,useEffect} from 'react'
import '../assets/styles/LoanInput.css';
import Input from './Input';
import LoanContent from './LoanContent';


const LoanContainer = () => {

  const [loan,setLoan]=useState(1000000);
  const [interest,setInterest]=useState(10.5);
  const [tenure,setTenure]=useState(120);

  const[emi, setEmi]=useState();
  const [totalInterest,setTotalInterest]=useState();
  const[totalAmountPayable, setTotalAmountPayable]=useState();

  const calculateEMI=()=>{
    const rate=interest/12/100; // divide interest by 12 months and 100
    const emi=loan*(rate)*((1+rate)**tenure)/(((1+rate)**tenure)-1);
    const totalAmtPayable=emi*tenure;
    const totalInt=totalAmtPayable-loan;
    setEmi(emi);
    setTotalInterest(totalInt);
    setTotalAmountPayable(totalAmtPayable);
  }
  const handleLoanAmt=(event)=>{
    setLoan(event.target.value);
  }
  const handleLoanInt=(event)=>{
    setInterest(event.target.value);
  }
  const handleLoanTenure=(event)=>{
    setTenure(event.target.value);
  }
  
useEffect(()=>{
  calculateEMI();
},[loan,interest,tenure])

  return (
    <>
        <div className='col-lg-7 rounded'>
           <Input 
           loan={loan} 
           interest={interest} 
           tenure={tenure} 
           handleLoanAmt={handleLoanAmt}
           handleLoanInt={handleLoanInt}
           handleLoanTenure={handleLoanTenure}
           />

           <LoanContent 
           loan={loan}
           emi={emi} 
           totalInterest={totalInterest} 
           totalAmountPayable={totalAmountPayable} 
           />
        </div>
    </>
  )
}

export default LoanContainer