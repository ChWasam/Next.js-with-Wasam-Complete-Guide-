import React from 'react'
import Link from 'next/link'
export default function page() {
  return (
    <div>
      This is users page 
      <Link href= "/">Home</Link>
      <Link href= "contact">Contact</Link>
    </div>
  )
}
