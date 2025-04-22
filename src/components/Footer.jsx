import React from 'react'

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className='p-4 text-[#f1f1f1] bg-blue-600 mx-auto text-center font-[Poppins] text-lg '>
        <p>
        
        Copyright © {year} Qurvii Tools | All right reserved.

        </p>
    </div>
  )
}

export default Footer