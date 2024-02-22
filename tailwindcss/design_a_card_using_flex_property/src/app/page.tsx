import Image from 'next/image'

export default function Home() {
  return (
    <div>
      Lorem, ipsum dolor sit amet <strong>consectetur adipisicing elit.</strong> Doloremque nemo dignissimos at et corrupti earum culpa ullam numquam ipsum possimus.
    </div>
  )
}

// if we define the following in global css
// html{
//   font-size: 48px;
//   }

// and then add the below in page.tsx


/* <p className='text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, mollitia?</p>
 why above p is not 16 px bcz parent html has been redefined to 48 

<p className='text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, cum?</p> */

