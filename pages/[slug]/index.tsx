import Post from "@/component/post";
import Content from "./content";
import Headline from "./headline";
import ArticleDirectory from "./articleDirectory";
import Banner from "@/component/banner";
import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-[1440px] w-full my-0 mx-auto mt-5 pb-5 px-3 ">
      <div className="breadcrumb mb-7">
        <span className="text-[#050505]  text-[14px] ">Trang chủ &gt;</span>{" "}
        <span className="text-[#050505] text-[14px] ">Tài Nguyên &gt;</span>{" "}
        <span className="text-[#050505] text-[14px] ">Blog &gt;</span>{" "}
        <span className="text-[#050505]  text-[14px] font-semibold ">
          Quản Lý Sẩn Xuất
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="w-full lg:w-[900px] ">
          <Headline />
          <Content />
        </div>
        <div className="w-full lg:w-[492px] mt-8 lg:mt-0">
          <div className="sticky top-[5px]">
            <div className="flex items-center justify-between">
              <span className="text-[24px] font-extrabold text-[#050505]">
                Nội dung bài viết
              </span>
              <Image
                src="/images/arrow-high.svg"
                alt="arrow high"
                width={17}
                height={10}
              />
            </div>
            <ArticleDirectory />

            <Banner />
          </div>
        </div>
      </div>

      <div className=" mt-10">
        <span className="text-[#050505] text-[36px] font-extrabold ">
          Bài Viết Liên Quan
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-4 mt-10">
          {Array.from({ length: 3 }).map((_, index) => (
            <Post key={index} />
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
