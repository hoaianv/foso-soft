import Image from "next/image";

export default function Headline() {
  return (
    <div className="mt-4">
      <div className="bg-[#E2F0FE]   mb-4 rounded-[8px] w-[114px] h-[26px] justify-center flex items-center">
        <span className="text-[#0F4F9E] text-[12px]">Quản Lý Sản Xuất</span>
      </div>

      <div className="mt-3">
        <span className="font-extrabold text-2xl sm:text-3xl md:text-[38px] leading-10 text-[#050505]">
          Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
        </span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between md:mt-7">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-[64px] w-[64px] rounded-full border border-[#F1F5F7] flex items-center justify-center">
            <Image
              src={"/images/logo-mini.svg"}
              alt="image logo"
              width={32}
              height={32}
            />
          </div>
          <div className="flex flex-col ">
            <span className="text-[#667F93] text-[14px]">Tác giả</span>
            <span className="text[#33404A] font-bold text-[16px]">
              FOSO Creator
            </span>
          </div>
        </div>

        <div className="flex items-center   gap-6">
          <div className="pr-4 sm:pr-[25px] border-r border-[#D9E1E7] flex items-center justify-center gap-2 text-[#667F93] text-xs sm:text-[14px]">
            <Image
              src={"/images/posts/CalendarBlank.svg"}
              width={24}
              height={24}
              alt="CalendarBlank"
            />
            <span>Cập nhật vào 17/11/2022</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-[#667F93]">
            <Image
              src={"/images/posts/Clock.svg"}
              width={24}
              height={24}
              alt="CalendarBlank"
            />
            <span>10 phút đọc</span>
          </div>
        </div>
      </div>
    </div>
  );
}
