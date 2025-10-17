import Image from "next/image";
import Link from "next/link";
import React from "react";

const Experiences = () => {
  return (
    <div className="my-10 md:my-32 flex flex-col md:grid md:grid-cols-2 md:max-w-[1032px] md:mx-auto flex-wrap gap-0 md:gap-8 justify-center items-center">
      <div className="md:h-[550px]">
      <Link target="_blank" href="https://medium.com/@jsnegi/case-study-teaching-innovation-award-enhancing-tutor-recognition-with-automation-caa6ebc079c2" className="flex flex-col gap-6 md:h-[500px] p-5 md:p-0 md:w-[500px] group relative">
        <div className="hidden md:group-hover:flex w-full h-full transition-all duration-500 absolute top-0 left-0 bg-[rgba(0,0,0,.5)] backdrop-blur-[6px] rounded-[40px] justify-center items-center">
          <div className="px-6 py-3.5 bg-white flex flex-row items-center gap-1.5 rounded-xl">
            <p className="font-semibold">Open in Medium</p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.04831 5.89994L14.15 5.89983M14.15 5.89983L14.15 12.9005M14.15 5.89983L5.90039 14.1494" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <Image
          src="/filo-exp.png"
          width={1000}
          height={1000}
          alt="Filo experience"
          className="w-full h-full object-cover"
        />
        <p className="text-center text-[#787878] text-xl font-medium group-hover:underline transition-all duration-300">
          Teaching Innovation award
        </p>
      </Link>
      </div>
      <div className="md:h-[550px]">
      <Link target="_blank" href="https://dribbble.com/Js_negi" className="flex flex-col gap-6 md:h-[500px] p-5 md:p-0 md:w-[500px] group relative">
        <div className="hidden md:group-hover:flex w-full h-full transition-all duration-500 absolute top-0 left-0 bg-[rgba(0,0,0,.5)] backdrop-blur-[6px] rounded-[40px] justify-center items-center">
          <div className="px-6 py-3.5 bg-white flex flex-row items-center gap-1.5 rounded-xl">
            <p className="font-semibold">Open in dribbble</p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.04831 5.89994L14.15 5.89983M14.15 5.89983L14.15 12.9005M14.15 5.89983L5.90039 14.1494" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <Image
          src="/dribble-exp.png"
          width={1000}
          height={1000}
          alt="Dribble experience"
          className="w-full h-full object-cover"
        />
        <p className="text-center text-[#787878] text-xl font-medium group-hover:underline transition-all duration-300">
          Dribbble short - Concept works
        </p>
      </Link>
      </div>
      <div className="md:h-[550px]">
      <Link target="_blank" href="https://www.drivefitt.club/" className="flex flex-col gap-6 md:h-[500px] p-5 md:p-0 md:w-[500px] group relative">
        <div className="hidden md:group-hover:flex w-full h-full transition-all duration-500 absolute top-0 left-0 bg-[rgba(0,0,0,.5)] backdrop-blur-[6px] rounded-[40px] justify-center items-center">
          <div className="px-6 py-3.5 bg-white flex flex-row items-center gap-1.5 rounded-xl">
            <p className="font-semibold">Open website</p>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.04831 5.89994L14.15 5.89983M14.15 5.89983L14.15 12.9005M14.15 5.89983L5.90039 14.1494" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <Image
          src="/drivefitt-experience.png"
          width={1000}
          height={1000}
          alt="Drivefitt - website design"
          className="w-full h-full object-cover"
        />
        <p className="text-center text-[#787878] text-xl font-medium group-hover:underline transition-all duration-300">
          Drivefitt - website design
        </p>
      </Link>
      </div>
    </div>
  );
};

export default Experiences;
