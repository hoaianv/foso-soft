import Banner from "@/component/banner";
import Pagination from "@/component/pagination";
import IntroductionSection from "@/pages/introductionSection";
import Posts from "@/pages/posts";
import Image from "next/image";
export default function Home() {
  const categories = [
    { name: "Tất cả", count: 108 },
    { name: "Thiết Kế Website", count: 36 },
    { name: "Thiết Kế App Mobile", count: 13 },
    { name: "Quản Lý Sản Xuất", count: 25 },
    { name: "Quản Lý Bán Hàng", count: 22 },
    { name: "Báo Chí Nói Về FOSO", count: 7 },
    { name: "Tin Tức FOSO", count: 5 },
  ];

  return (
    <div className="pb-5">
      <IntroductionSection />

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-8    ">
          <Posts />

          <div className="w-full lg:w-[366px]">
            <span className="font-extrabold text-2xl leading-[200%]">
              Tìm kiếm
            </span>
            <div className="mt-3">
              <div className="relative w-full sm:w-[300px]">
                <input
                  type="text"
                  placeholder="Tìm kiếm bài viết"
                  className=" w-full h-[72px]   pl-4 pr-14 text-gray-500 bg-white rounded-2xl shadow-md focus:outline-none"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2   bg-[#15AA7A] flex items-center justify-center rounded-xl w-[48px] h-[48px]">
                  <Image
                    src={"/images/search.svg"}
                    width={20}
                    height={20}
                    alt="Search"
                  />
                </button>
              </div>
            </div>

            <div className="w-full   my-6">
              <h2 className="text-2xl font-extrabold mb-6">Danh Mục</h2>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="w-full flex justify-between text-[#33404A] text-[18px] hover:text-black cursor-pointer border-b border-[#F1F5F7] pb-2 last:border-none"
                  >
                    <span>{category.name}</span>
                    <span className="text-[#667F93]">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Banner />
          </div>
        </div>

        <div className="mt-14 pb-4  border-b border-[#c8d0d6]">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
