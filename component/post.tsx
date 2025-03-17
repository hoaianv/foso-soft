import Image from "next/image";
import Link from "next/link";

export default function Post() {
  return (
    <div className="pb-7">
      <div>
        <Link href={"/tai-sao-bom-quan-trong-trong-quan-ly-san-xuat"}>
          <Image
            src={"/images/posts/img-post.png"}
            alt="Image post"
            width={505}
            height={475}
            className="w-full h-auto"
          />
        </Link>
      </div>
      <div>
        <div className="bg-[#E2F0FE] mt-4 mb-4 rounded-[8px] w-[114px] h-[26px] justify-center flex items-center">
          <span className="text-[#0F4F9E] text-[12px]">Quản Lý Sản Xuất</span>
        </div>

        <Link href={"/tai-sao-bom-quan-trong-trong-quan-ly-san-xuat"}>
          <span className="  text-2xl font-extrabold leading-[1.5]">
            Tại sao BOM quan trọng trong quản lý sản xuất?
          </span>
        </Link>

        <div className="flex items-center  mt-3 gap-6">
          <div className=" pr-[25px] border-r-[1px] border-[#D9E1E7] flex items-center justify-center gap-2 text-[#667F93]">
            <Image
              src={"/images/posts/CalendarBlank.svg"}
              width={24}
              height={24}
              alt="CalendarBlank"
            />
            <span>17/11/2022</span>
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

        <div className=" mt-4 flex items-center gap-5 text-[#667F93]">
          <span>Khám phá thêm</span>
          <Image
            src={"/images/ArrowRight.svg"}
            width={24}
            height={24}
            alt="ArrowRight"
          />
        </div>
      </div>
    </div>
  );
}
