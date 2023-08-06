import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="h-screen bg-[#1c3534] w-1/2">
        <div className="h-[16rem] relative">
          <div className="rounded-full h-80 w-80 absolute top-[-8rem] left-[-10rem] bg-[#ff6d3f]"></div>
          <div className="rounded-full h-80 w-80 absolute top-[-8.4rem] left-[-11rem] bg-[#b7e4c7]"></div>
        </div>
        <div className="px-20">
          <p className="text-white text-2xl font-bold my-5">−Hello</p>
          <p className="text-[3rem] text-white font-bold">
            Move forward to stand out from the crowd with me - my name is Yuto
            and I am a full-stack developer.
          </p>
          <p className="text-white text-xl font-bold my-5">
            Patientenzentrisch. Wissenschaftlich fundiert. Digital.
          </p>
          <div className="btn h-5 w-1/3 mt-10 bg-[#fc764d] hover:bg-[hsl(14,99%,60%)] text-white font-poppins">
            Dive In
          </div>
        </div>
      </div>
      <div className="h-screen w-1/2 relative">
        <Image src="/yuto2.png" alt="Picture of the author" layout="fill" />
      </div>
    </div>
  );
}
