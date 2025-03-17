import Image from "next/image";
import Post from "../component/post";

export default function Posts() {
  return (
    <div className="   w-full lg:w-[1042px]">
      <div className="mb-[20px]">
        <span className="font-extrabold text-[36px]">Tất Cả Bài Viết</span>
      </div>
      <div className="flex flex-col md:flex-row items-center w-full relative rounded-2xl bg-cover bg-center h-auto md:h-[318px] bg-[url('/images/posts/bg-post-main.png')] p-4 ">
        <div className="w-full md:w-[550px] h-auto md:h-[208px] md:ml-[60px] text-center md:text-left">
          <div className="w-full   mb-6 md:w-[376px]  h-[126px]">
            <span className="z-10 relative text-2xl md:text-4xl font-bold text-white">
              Gia nhập cộng đồng FMRP – Kết nối, chia sẻ, cùng phát triển!
            </span>
          </div>
          <div className="text-red-50 rounded-[40px] outline border-solid w-[216px] h-[50px] flex items-center justify-center">
            <span className="text-white">Tham Gia Ngay</span>
            <Image
              src={"/images/arrow-join.svg"}
              width={18}
              height={18}
              alt="Arrow Join"
            />
          </div>
        </div>

        <div className="absolute right-0 bottom-0">
          <Image
            src={"/images/posts/img-post-main.png"}
            alt="Image Post Main"
            width={394}
            height={354}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <Post key={index} />
        ))}{" "}
      </div>
    </div>
  );
}
