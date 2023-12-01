import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
 <div> 
  Contact Us
  <Link  href="/"> Home</Link>
  <Link  href="/contact/about"> About</Link>
  <Link  href="/service1"> Service1</Link>
 </div>
  )
}
