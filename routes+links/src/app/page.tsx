import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
 <div> 
  <h1>Hello Wasam</h1>
  <Link href="/contact" >Contact</Link>
  <Link href="/contact/about" >About</Link>
  <Link href="/users" >Users</Link>
  <Link href="/service1" >service 1</Link>
 </div>
  )
}
