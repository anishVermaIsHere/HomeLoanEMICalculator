import React from 'react'
import '../../assets/styles/LoanInput.css';

const LoanRangeSlider = (props) => {
  let arrItem=props.val;
  let value=props.value;
  let handleChange=props.handleChange;

  return (
    <div className='col-fluid' style={{marginTop:'0.6rem'}}>
        <input type='range' min={props.min} max={props.max} step={props.steps} className='input-group' value={value} onChange={handleChange}/>
        <div className='col-lg-12 loan-scale'>
          {
            arrItem.map((ele, index)=>{
              return(
                <span key={index} className='loan-scale-item' style={{left:`${ele.range}%`}}>
                  |<br/>
                  <span className='loan-amount-marker'>{ele.point}</span>                  
                </span>   
              )
            })
          }                      
        </div>
    </div>
  )
}


export default LoanRangeSlider







