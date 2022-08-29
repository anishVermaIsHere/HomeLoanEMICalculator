import React from 'react'

const Footer = () => {
    let d=new Date();
    let year=d.getFullYear();
  return (
    <footer>
        <div className='d-flex justify-content-center pt-4'>
        <h5>
            Designed and Developed by Anish 
            © Copyright {year}. All Rights Reserved
        </h5>
        <span>
        <a className='ml-3' href='https://github.com/anishVermaIsHere'>Anish@github</a>
        </span>
        </div>
    </footer>
  )
}

export default Footer