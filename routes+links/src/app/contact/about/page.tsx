import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
 <div> 
 Contact Us/ About us Page 
<Link href="/">Home</Link>
<Link href="/contact">Contact</Link>
 </div>
  )
}
// 
// link ka tab use kia ho to ak to page refresh nahi hota 
// dosra agar link ka tab use kia ho to wo agla tabs ko khud hi rander kar kah la kar a raha hota ha 
