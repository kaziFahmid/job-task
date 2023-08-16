import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
    
    <div className='flex justify-center items-center gap-6'>
<div className='text-black'>
    <h2 className='text-3xl'><Link to='/'>1</Link></h2>
</div>
<div className='text-black'><h2 className='text-3xl'><Link to='/2'>2</Link></h2></div>
    </div>

      <Outlet/>
    </>
  )
}

export default Home
