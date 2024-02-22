import React from 'react'
import { AvatarUser } from './AvatarUser'
import  Menu  from './Menu'

export default function Navbar() {
  return (
   <header className='grid grid-cols-[auto,auto]'>
    
  <AvatarUser/>

  <Menu/>

   </header>
  )
}
