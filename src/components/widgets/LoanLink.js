import React from 'react';

const LoanLink = (props) => {
    const styleLink={
        fontSize:'1.2rem'
    }
  return (
    <>
        <section>
          <a href='#' style={styleLink}>{props.link}</a>
        </section>
    </>
  )
}

export default LoanLink