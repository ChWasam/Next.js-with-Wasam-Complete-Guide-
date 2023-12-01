import Image from 'next/image'
import Link from 'next/link'
export default function Home() {
  return (
 <div> 
  Hello Wasam
  <Link href="/contact" >Contact</Link>
  <Link href="/contact/about" >About</Link>
  <Link href="/users" >Users</Link>
 </div>
  )
}
