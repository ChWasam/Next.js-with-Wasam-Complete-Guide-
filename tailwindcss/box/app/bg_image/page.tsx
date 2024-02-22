import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <main className='bg-top'>
<div >
    <Image src={'/nature.jpg'} alt={'Nature'}
    width={500} height={300}
    className='bg-top'

/>
</div>

    </main>
  )
}
