import { error } from 'console';
import React from 'react'
import Link from 'next/link';
export async function Users (){
const data = await fetch("https://jsonplaceholder.typicode.com/users");
if (!data.ok) throw new Error ("User Data not Found")
return data.json();
}


export default async function All_users() {
    const usersData = await Users();

  return (
    <div>
      <h1>All Users</h1>
      <br />
      <ul>
        {usersData.map((user: any)=>{
            return <li key = {user.id}>
                <Link href = {`/users/${user.id}`}>{user.name}</Link>
                </li>
        })}
      </ul>

    </div>
  )
}
// yeh page server me request time pa build ho raha ha 
// Generate static params 
// matlab ham build time  ka aupar automatically page create kar sakta han 
// yani html page ban kah hamaa server me para ho ga 
// user jab request kara ga aus time pa nahi server render kara ga
// pehla build time pa render hua hota ha 
