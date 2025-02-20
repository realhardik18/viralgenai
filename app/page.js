import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (    
    <>
    <Navbar/>
    <div className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400">
      <p className="text-9xl text-center">Generate VIral Videos fast</p>      
      <div class="flex justify-center items-center">
        <Link href={"/tools"}>
          <button class="btn btn-lg btn-secondary flex justify-center items-center mb-5">Start Now</button>
        </Link>
      </div>
      
    </div>
    </>
  );
}
