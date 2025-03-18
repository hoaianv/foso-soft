"use client";
import Image from "next/image";
import { useState } from "react";

export default function Share() {
  const [isExpanded, setIsExpanded] = useState(false);

  const buttons = [
    {
      name: "Zalo",
      imgSrc: "/images/social-network/social-1.svg",
    },
    {
      name: "Facebook",
      imgSrc: "/images/social-network/social-2.svg",
    },
    {
      name: "Twitter",
      imgSrc: "/images/social-network/social-3.svg",
    },
    {
      name: "Instagram",
      imgSrc: "/images/social-network/social-4.svg",
    },
    {
      name: "Reddit",
      imgSrc: "/images/social-network/social-5.svg",
    },
  ];

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed z-10 transition-all duration-300 bottom-4 left-4 lg:left-8 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2">
      <div className="relative">
        <button
          onClick={toggleExpand}
          className="w-12 h-12 bg-[#15AA7A] rounded-full flex items-center justify-center shadow-lg text-white hover:bg-[#128c64] transition-colors duration-200 lg:hidden"
          title="Chia sẻ"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ${
              isExpanded ? "rotate-45" : ""
            }`}
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>

        <div
          className={`lg:hidden absolute bottom-16 left-0 bg-white rounded-2xl shadow-lg p-4 transition-all duration-300 origin-bottom-left ${
            isExpanded
              ? "scale-100 opacity-100"
              : "scale-0 opacity-0 pointer-events-none"
          }`}
        >
          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
            Chia sẻ
          </h3>
          <div className="flex items-center gap-3">
            {buttons.map((button, index) => (
              <div
                key={index}
                className="w-10 h-10 border-2 border-[#15AA7A] rounded-xl flex items-center justify-center hover:bg-green-100 transition-colors duration-200 cursor-pointer"
                title={button.name}
              >
                <Image
                  src={button.imgSrc}
                  alt={button.name}
                  className="w-5 h-5"
                  width={25}
                  height={25}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block  rounded-2xl  p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
            Chia sẻ
          </h3>
          <div className="flex flex-col space-y-3">
            {buttons.map((button, index) => (
              <div
                key={index}
                className="w-12 h-12 border-2 border-[#15AA7A] rounded-xl flex items-center justify-center hover:bg-green-100 transition-colors duration-200 cursor-pointer"
                title={button.name}
              >
                <Image
                  src={button.imgSrc}
                  alt={button.name}
                  className="w-6 h-6"
                  width={25}
                  height={25}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
