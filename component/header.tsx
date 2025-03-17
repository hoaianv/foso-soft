"use client";
import Image from "next/image";
import Link from "next/link";
import React, { JSX, useState } from "react"; // Nếu cần trong một số cấu hình

export default function Header(): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-7xl bg-[#FFFFFFA6] w-full h-[80px]   my-0 mx-auto">
      <div className="h-full  items-center justify-center shadow-md lg:rounded-[50px] hidden lg:flex">
        <div className="flex items-center justify-center gap-7">
          <div className="">
            <Link href={"/"}>
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={135}
                height={55}
              />
            </Link>
          </div>
          <div className="flex h-[55px]  w-[405px] items-center justify-between">
            <div className="h-[37px] flex     items-center p-[5px] ">
              <Link className="text-[14px] font-medium" href={"/"}>
                Về Chúng tôi
              </Link>
            </div>
            <div className="h-[37px] flex   gap-1  items-center p-[5px]">
              <Link className="text-[14px] font-medium" href={"/"}>
                Giải pháp
              </Link>
              <Image
                src={"/images/arrow.png"}
                alt="arrow"
                width={16}
                height={16}
              />
            </div>
            <div className="h-[37px] flex   gap-1  items-center p-[5px]">
              <Link className="text-[14px] font-medium" href={"/"}>
                Tài nguyên
              </Link>{" "}
              <Image
                src={"/images/arrow.png"}
                alt="arrow"
                width={16}
                height={16}
              />
            </div>
            <div className="h-[37px] flex     items-center p-[5px] ">
              <Link className="text-[14px] font-medium" href={"/"}>
                Liên hệ
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {" "}
            <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300">
              {" "}
              <Image
                src="/images/flag-VietNam.svg"
                alt="Vietnam Flag"
                width={24}
                height={24}
                className=" mr-2"
              />{" "}
              <span className="text-sm font-medium mr-2">VI</span>{" "}
              <Image
                src={"/images/arrow.png"}
                alt="arrow"
                width={16}
                height={16}
              />{" "}
            </button>{" "}
            <div className="flex  items-center px-3 py-2 bg-[#1AD598] text-white rounded-full  ">
              {" "}
              <span className="text-sm font-medium mr-2">
                Trở Thành Khách Hàng
              </span>{" "}
              <Image
                src={"/images/support.svg"}
                alt="arrow"
                width={22}
                height={22}
              />{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      <div className=" w-full relative   mx-auto px-4 sm:px-6 lg:px-8  h-full  block lg:hidden ">
        <div className="flex lg:hidden h-full items-center justify-between gap-3 ">
          <div>
            <Image src="/images/logo.png" alt="Logo" width={135} height={55} />
          </div>

          <div className="flex items-center space-x-3">
            <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full border border-gray-300">
              {" "}
              <Image
                src="/images/flag-VietNam.svg"
                alt="Vietnam Flag"
                width={24}
                height={24}
                className=" mr-2"
              />{" "}
              <span className="text-sm font-medium mr-2">VI</span>{" "}
              <Image
                src={"/images/arrow.png"}
                alt="arrow"
                width={16}
                height={16}
              />{" "}
            </button>{" "}
            <div onClick={() => setOpen(!open)} className="cursor-pointer">
              <Image
                src="/images/hamburger.png"
                alt="Logo"
                width={48}
                height={48}
              />
            </div>
          </div>
        </div>

        <div
          className={`
    absolute shadow-md z-10 bg-white top-full left-1/2 -translate-x-1/2 w-full
    transition-all duration-300 ease-in-out
    ${
      open
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-[-10px] scale-95 pointer-events-none"
    }
  `}
        >
          <div className="flex justify-center items-center px-3 py-2 bg-[#1AD598] text-white   ">
            {" "}
            <span className="text-[18px]  font-extrabold mr-2">
              Trở Thành Khách Hàng
            </span>{" "}
          </div>{" "}
          <div className="p-3 text-center  ">
            <Link
              className="text-[18px] text-[#25272A]  font-extrabold"
              href={"/"}
            >
              Về Chúng tôi
            </Link>
          </div>
          <div className="p-3 text-center  ">
            <Link
              className="text-[18px] text-[#25272A] font-extrabold"
              href={"/"}
            >
              Giải pháp
            </Link>
          </div>
          <div className="p-3 text-center  ">
            <Link
              className="text-[18px] text-[#25272A] font-extrabold "
              href={"/"}
            >
              Tài nguyên
            </Link>
          </div>
          <div className="p-3 text-center  ">
            <Link
              className="text-[18px]  text-[#25272A] font-extrabold"
              href={"/"}
            >
              Liên hệ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
