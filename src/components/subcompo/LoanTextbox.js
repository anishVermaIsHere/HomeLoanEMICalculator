import React from 'react'
import '../../assets/styles/LoanInput.css'

const LoanTextbox = (props) => {
    const styleSpan={
        padding:'0.5rem 0.8rem',
        height:'40px',
        border:'none',
        borderLeft:'1px solid grey',
        backgroundColor:'#f2f2f2',
        borderTopRightRadius: '5px',
        borderBottomRightRadius: '5px'  
    }
    const styleInputText={
        height:'40px',
        width:'100%',
        outline:'none',
        border:'none',
        padding:'0.3rem 0.5rem',
        borderTopLeftRadius: '5px',
        borderBottomLeftRadius: '5px',
    }

    let value=props.value;
    let handleChange=props.handleChange;
  return (
    <>
    <div className='col-lg-6 flex-center' style={{border:'1px solid grey', borderRadius:'5px'}}>
        <input type="number" style={styleInputText} id={props.id} value={value} onChange={handleChange}/>
        <span style={styleSpan} class=''>{props.btn}</span>
    </div>

    </>
  )
}

export default LoanTextbox