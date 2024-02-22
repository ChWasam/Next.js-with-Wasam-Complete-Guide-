import React from 'react'

export default function page() {
  return (
    <main className='  p-10 bg-gray-100 '>
        <div className=' my-10'>
          <button className='p-10 mx-10 shadow-blue-400 hover:bg-blue-400 hover:text-white shadow-sm bg-white'>
          One
          </button>
          <button className='p-10 mx-10 shadow-purple-400 hover:bg-purple-400 hover:text-white shadow-md bg-white'>
          Two
          </button>
          <button className='p-10 mx-10 shadow-red-400 hover:bg-red-400 hover:text-white  shadow-lg bg-white'>
          Three
          </button>
        </div>

        <div >
          <button className='p-10 mx-10 shadow-orange-400 hover:bg-orange-400 hover:text-white shadow-xl bg-white'>
          Four
          </button>
          <button className='p-10 mx-10 shadow-yellow-400 hover:bg-yellow-400 hover:text-white shadow-2xl bg-white'>
          Five
          </button>
          <button className='p-10 mx-10 shadow-green-400 hover:bg-green-400 hover:text-white shadow-inner bg-white'>
          Six
          </button>
        </div>

    </main>
  )
}


// shadow-inner class,
// which makes the element look like it’s lower than the rest of the screen.

//  if it’s an image with a transparent background). You
// can get a drop shadow with drop-shadow