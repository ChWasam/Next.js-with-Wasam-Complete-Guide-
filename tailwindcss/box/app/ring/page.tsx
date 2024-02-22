import React from 'react'

export default function page() {
  return (
<main>
<button className="p-3 m-6 border-2 rounded-md ring-4">

Four

</button>

<button className=" p-3 m-6 border-2 rounded-2xl ring-2 ">

Five

</button>

<button className="p-3 m-6 border-2 rounded-full ring-4    ring-offset-4 ring-offset-black ">

Six

</button>

<button className="p-3 m-6 border-2 rounded-full ring-4  ring-inset   ring-offset-4 ring-offset-black ">
{/* ring-inset, which draws the ring in the content part of the box, rather than the border part of the box,  */}
7

</button>
</main>
  )
}
