import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";


const Home = () => {
  const location=useLocation()


  return (
    <>
  

{location.pathname!=='/results'?<section className='grid lg:grid-cols-12 bg-white max-w-6xl mx-auto px-6 py-7 gap-6  grid-cols-1 rounded-xl shadow-2xl border-2 border-x-gray-500 '>
<div className='lg:col-span-2 '>
<div className=' px-4 pt-4  h-60 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg shadow-lg  ' >
<div>
<Link to='/'><button className={`text-xl   mt-5 btn bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-blue-400 ${location.pathname==='/'?'text-blue-300':'text-white'}`}>Step 1</button></Link>
</div>

<div>
<Link to='/2'><button className={`text-xl   mt-5 btn bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 hover:text-blue-400 ${location.pathname==='/2'?'text-blue-300':'text-white'}`}>Step 2</button></Link>

</div>

</div>
<div className='mt-6'>
<img src='https://media1.giphy.com/media/3a53VvGpzUgh05qq7W/giphy.webp?cid=ecf05e47c72el5tc0qc15f7gpxunh59jdvrvx4pxpmvmkp19&ep=v1_gifs_search&rid=giphy.webp&ct=g ' className='img-fluid  '/>
</div>

  </div>




      <div  className='lg:col-span-10'>
      <Outlet/>
      </div>
     
</section>:      <Outlet/>
}
</>
  )
}

export default Home
