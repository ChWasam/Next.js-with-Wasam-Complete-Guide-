import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-screen  w-screen flex justify-center bg-purple-600 m-4 rounded-lg   ">
      <div className="order-last mx-4 self-center ">
        <Image className="rounded-lg" src="/next.svg" alt={"logo"} width={300} height={100}></Image>
        </div>

      <div className=" mx-4  self-center text-center" >
      <h1 className=" text-6xl my-2 font-bold text-red-600">Welcome to NorthBy</h1>

      <h2 className="text-4xl my-3 font-semibold text-yellow-500">A premium in sight and sound</h2>

      <button className="border-2 border-red-600 my-2 p-[8px] rounded-lg bg-green-800 hover:bg-white hover:text-red-600 hover:border-yellow-500 ">Learn More</button>

      </div>
    </div>
  );
}
