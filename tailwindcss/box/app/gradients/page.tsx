import React from 'react'

export default function page() {
  return (
    <main className='p-10 bg-gradient-to-r from-red-600 via-green-600 to-yellow-600'>
        <div className=' flex justify-center my-10'>
            <button className='p-10 mx-10 bg-white hover:bg-gradient-to-b from-green-600 to-red-600 hover:text-white  '>
                        One
            </button>

            <button className='p-10 shadow-2xl shadow-black rounded-md mx-10 bg-white hover:bg-gradient-to-tl from-yellow-600 to-red-600 hover:text-white '>
                        Two
            </button>

            <button className='p-10 mx-10 bg-white hover:bg-gradient-to-tr from-green-600 to-yellow-600 hover:text-white  '>
                        Three
            </button>
        </div>
    </main>


  )
}
