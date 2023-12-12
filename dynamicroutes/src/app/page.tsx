import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
   <div>
    <Link href = "/users">Users</Link>
   </div>
  )
}


// Route	Example                                         URL	                         params
// app/blog/[slug]/page.js	                            /blog/a	                    { slug: 'a' }
// app/blog/[slug]/page.js	                            /blog/b	                    { slug: 'b' }
// app/blog/[slug]/page.js	                            /blog/c	                    { slug: 'c' }


// layout kya ha 
// tamam pages is sa ho kah rander hota haan 