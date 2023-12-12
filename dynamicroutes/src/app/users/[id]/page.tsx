import React from 'react'
import { Users } from '../page'
import Link from 'next/link';
type params = {
    params : {
        id:string
    }
}
export default async function userData({params}:params) {   // props is similar to {params}
        const user_id = parseInt(params.id);
        const users = await Users(); 
        const user = users.find((user:any)=> user.id===user_id)


  return (
    <div>
      <ul>
            <li key = {user.id}>
            <p>User{user.id}</p>
            <p>User Id    : {user.id}</p> 
            <p>User Name  : {user.username}</p>
            <p>User Email : {user.email}</p>
            <p>User Phone : {user.phone}</p>
            <p><Link href= "/users">Users</Link></p>
            </li>


      </ul>
    </div>
  )
}
