import Image from "next/image";

export default function Pagination() {
  return (
    <div className="flex items-center  md:justify-between justify-center ">
      <div className="hidden sm:flex items-center gap-4">
        <span className="text-[16px] text-[#B3C5D4] font-semibold">
          Trang trước
        </span>
        <Image
          src="/images/arrow-left.svg"
          width={18}
          height={18}
          alt="ArrowRight"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button className="w-10 h-10 text[16px] flex items-center justify-center rounded-lg bg-[#D1F7EA] text-black font-medium">
          1
        </button>
        <button className="w-10 h-10  text[16px]  flex items-center justify-center text-[#809FB8]   hover:text-black font-medium">
          2
        </button>
        <button className="w-10 h-10  text[16px]  flex items-center justify-center text-[#809FB8]   hover:text-black font-medium">
          3
        </button>
        <span className="text-[#809FB8]  ">...</span>
        <button className="w-10 h-10 flex  text[16px] items-center justify-center text-[#809FB8]   hover:text-black font-medium">
          8
        </button>
        <button className="w-10 h-10  text[16px] flex items-center justify-center text-[#809FB8]   hover:text-black font-medium">
          9
        </button>
        <button className="w-10 h-10 text[16px]  flex items-center justify-center text-[#809FB8]   hover:text-black font-medium">
          10
        </button>
      </div>
      <div className="hidden sm:flex items-center gap-4 ">
        <span className="text-[16px] text-[#4D5F6E] font-semibold">
          Trang kế tiếp
        </span>
        <Image
          src="/images/arrow-right.svg"
          width={18}
          height={18}
          alt="ArrowRight"
        />
      </div>
    </div>
  );
}
