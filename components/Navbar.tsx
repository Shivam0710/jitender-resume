"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="p-6 md:px-20 md:py-7 flex justify-between items-center animate-slide-down z-[10000] relative">
      <div className="flex items-center gap-2 md:gap-4">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="w-10 h-10 rounded-full"
        />
        <p className="text-[#787878] font-medium">JITENDER SINGH NEGI</p>
      </div>
      <div className="block md:hidden">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <path
            d="M10.5 18H20M4 12H20M4 6H20"
            stroke="#1A1A1A"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        <div
          className={`items-start px-6 gap-9 flex flex-col absolute h-screen w-full bg-white top-0 right-0 pt-10 ${
            isOpen ? "translate-x-[0%]" : "translate-x-[100%]"
          } transition-all duration-300`}
        > 
          <svg onClick={() => setIsOpen(false)} className="h-6 w-6 absolute top-3 right-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="50px" height="50px"><path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z"/></svg>
          <Link
            href="https://shivam-resume-0710.tiiny.site"
            target="_blank"
            className="text-[#787878] font-semibold"
          >
            View CV
          </Link>
          <Link
            href="mailto:jitendersinghnegi.1990@gmail.com"
            className="text-[#787878] font-semibold"
          >
            jitendersinghnegi.1990@gmail.com
          </Link>
          <Link
            href="https://www.linkedin.com/in/js-negi-70789736/"
            target="_blank"
            className="flex flex-row items-center gap-2 font-semibold text-[#787878]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" rx="4" fill="#0274B3" />
              <path
                d="M8.09836 9.81967H5.22951V19H8.09836V9.81967ZM8.35656 6.66393C8.35807 6.44693 8.31682 6.23175 8.23517 6.03069C8.15352 5.82962 8.03307 5.64661 7.88069 5.4921C7.72831 5.33759 7.54699 5.2146 7.34708 5.13017C7.14716 5.04573 6.93258 5.0015 6.71557 5H6.66393C6.22263 5 5.7994 5.17531 5.48736 5.48736C5.17531 5.7994 5 6.22263 5 6.66393C5 7.10524 5.17531 7.52847 5.48736 7.84051C5.7994 8.15256 6.22263 8.32787 6.66393 8.32787C6.88095 8.33321 7.0969 8.29573 7.29943 8.21759C7.50197 8.13944 7.68711 8.02215 7.8443 7.87242C8.00149 7.72269 8.12764 7.54346 8.21553 7.34496C8.30342 7.14647 8.35135 6.9326 8.35656 6.71557V6.66393ZM19 13.423C19 10.6631 17.2443 9.59016 15.5 9.59016C14.9289 9.56157 14.3603 9.68321 13.8508 9.94295C13.3414 10.2027 12.909 10.5915 12.5967 11.0705H12.5164V9.81967H9.81967V19H12.6885V14.1172C12.6471 13.6171 12.8046 13.1209 13.1269 12.7363C13.4492 12.3517 13.9102 12.1098 14.4098 12.0631H14.5189C15.4311 12.0631 16.1082 12.6369 16.1082 14.0828V19H18.977L19 13.423Z"
                fill="white"
              />
            </svg>
            LinkedIn
          </Link>
        </div>
      </div>
      <div className="hidden items-center gap-9 md:flex">
        <Link
          href="https://shivam-resume-0710.tiiny.site"
          target="_blank"
          className="text-[#787878]"
        >
          View CV
        </Link>
        <Link
          href="mailto:jitendersinghnegi.1990@gmail.com"
          className="text-[#787878]"
        >
          jitendersinghnegi.1990@gmail.com
        </Link>
        <Link
          href="https://www.linkedin.com/in/js-negi-70789736/"
          target="_blank"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="4" fill="#0274B3" />
            <path
              d="M8.09836 9.81967H5.22951V19H8.09836V9.81967ZM8.35656 6.66393C8.35807 6.44693 8.31682 6.23175 8.23517 6.03069C8.15352 5.82962 8.03307 5.64661 7.88069 5.4921C7.72831 5.33759 7.54699 5.2146 7.34708 5.13017C7.14716 5.04573 6.93258 5.0015 6.71557 5H6.66393C6.22263 5 5.7994 5.17531 5.48736 5.48736C5.17531 5.7994 5 6.22263 5 6.66393C5 7.10524 5.17531 7.52847 5.48736 7.84051C5.7994 8.15256 6.22263 8.32787 6.66393 8.32787C6.88095 8.33321 7.0969 8.29573 7.29943 8.21759C7.50197 8.13944 7.68711 8.02215 7.8443 7.87242C8.00149 7.72269 8.12764 7.54346 8.21553 7.34496C8.30342 7.14647 8.35135 6.9326 8.35656 6.71557V6.66393ZM19 13.423C19 10.6631 17.2443 9.59016 15.5 9.59016C14.9289 9.56157 14.3603 9.68321 13.8508 9.94295C13.3414 10.2027 12.909 10.5915 12.5967 11.0705H12.5164V9.81967H9.81967V19H12.6885V14.1172C12.6471 13.6171 12.8046 13.1209 13.1269 12.7363C13.4492 12.3517 13.9102 12.1098 14.4098 12.0631H14.5189C15.4311 12.0631 16.1082 12.6369 16.1082 14.0828V19H18.977L19 13.423Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
