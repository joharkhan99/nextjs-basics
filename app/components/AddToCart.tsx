'use client';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
      <button
        onClick={()=>{ console.log("object");}}
        className='bg-purple-500 text-white px-4 py-2 rounded'
      >
        Click mes
      </button>

      <button className='btn btn-primary'>
        Daisy UI Button
      </button>


    </div>
  )
}

export default AddToCart