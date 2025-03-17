import Image from "next/image";

export default function IntroductionSection() {
  return (
    <div className="flex items-center justify-center h-[392px] ">
      <div className="flex items-center justify-center w-[282px] h-[268px]">
        <Image
          src={"/images/section1.1.svg"}
          alt="image-section-1"
          width={195}
          height={159}
        />
      </div>
      <div className="  w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 shrink-0 h-full">
        <div className="text-[12px] sm:text-[14px] text-center mt-4 sm:mt-6 lg:mt-10">
          <span>Trang chủ &gt; Tài nguyên </span> <strong> &gt; Blog</strong>
        </div>
        <div className="w-full mt-4 sm:mt-6 lg:mt-8">
          <div className="text-[36px] sm:text-[48px] lg:text-[64px] text-center flex items-center justify-center gap-2.5">
            <span>Blog </span>

            <div>
              <span className="text-[#53B086] font-extrabold">F</span>
              <span className="gradient font-extrabold">OS</span>
              <span className=" text-[#53B086] font-extrabold">O</span>
            </div>

            <span>-</span>
          </div>
          <div className="text-[24px] sm:text-[32px] md:text-[48px] lg:text-[64px] text-center flex items-center justify-center gap-2.5">
            <span>Cập Nhật Tin Tức</span>
            <div className="relative inline-block">
              <span className="absolute inset-x-0 bottom-[10%] h-4 sm:h-5 md:h-6 lg:h-7 bg-[#A3EED6] rounded-2xl"></span>
              <span className="relative   text-[64px]   text-black font-extrabold">
                Mới Nhất
              </span>
            </div>
          </div>
        </div>
        <div className="text-[#33404A] text-[14px] sm:text-[16px] lg:text-[18px] text-center mt-2 sm:mt-4">
          Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
        </div>
      </div>
      <div className="flex items-center justify-center w-[282px] h-[268px]">
        <Image
          src={"/images/section1.2.svg"}
          alt="image-section-2"
          width={195}
          height={159}
        />
      </div>
    </div>
  );
}
