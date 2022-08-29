
import React from 'react';
import LoanRangeSlider from '../widgets/LoanRangeSlider';
import LoanTextbox from './LoanTextbox';
import '../../assets/styles/LoanInput.css';


const LoanInput = (props) => {
    const styleCol={
        margin:'0rem 0.5rem',
        marginBottom:'2.2rem',
        backgroundColor:'#f2f2f2',
        padding:'0.8rem 1rem',
        textAlign:'center',
    }

   let array=props.arr;
   let value=props.value;
   let handleChange=props.handleChange;
 
  return (
      <>
        <section className="" style={styleCol}>
            <div className='row flex-center'>
                <label className="col-4 hloan-label">{props.label}</label>
                <LoanTextbox btn={props.btn} id={props.id} value={value} handleChange={handleChange}/>
            </div>
            <LoanRangeSlider val={array} value={value} handleChange={handleChange} min={props.min} max={props.max} steps={props.steps}/>
        </section>
    </>
  )
}

export default LoanInput