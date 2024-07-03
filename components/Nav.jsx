import React from 'react'

const Nav = () => {
  return (
    <div>
        <div className=' bg-slate-300 rounded-lg flex h-16 m-6'>
         <div className=' basis-1/4'> <div className='bg-blue-950 h-12 m-2'>s</div></div> 
         <div className=' basis-1/2 flex px-32 text-2xl'><h1 className='p-4'>home</h1>
         <h1 className='p-4'>about us</h1>
         <h1 className='p-4'>portfolio</h1>
         <h1 className='p-4'>blog</h1></div> 
         <div className='basis-1/4 p-4 px-32'><div className='bg-black text-white w-24 h-8 rounded-xl p-1'>contactus</div></div> 
        </div>
        
    </div>
  )
}

export default Nav