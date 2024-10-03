import React from 'react'
import { DotLoader } from 'react-spinners'

export default function Loader() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <DotLoader 
          color="#044620"
          size={50} 
        />
        
    </div>
  )
}
