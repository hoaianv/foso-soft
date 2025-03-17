export default function Page() {
  return (
    <div className="max-w-[1440px] w-full my-0 mx-auto mt-5">
      <div className="breadcrumb mb-7">
        <span className="text-[#050505]  text-[14px] ">Trang chủ &gt;</span>{" "}
        <span className="text-[#050505] text-[14px] ">Tài Nguyên &gt;</span>{" "}
        <span className="text-[#050505] text-[14px] ">Blog &gt;</span>{" "}
        <span className="text-[#050505]  text-[14px] font-semibold ">
          Quản Lý Sẩn Xuất
        </span>
      </div>
      <div className="flex gap-5">
        <div className="w-[900px] ">
          <div className="bg-[#E2F0FE] mt-4 mb-4 rounded-[8px] w-[114px] h-[26px] justify-center flex items-center">
            <span className="text-[#0F4F9E] text-[12px]">Quản Lý Sản Xuất</span>
          </div>

          <div className="mt-3">
            <span className="font-extrabold text-[38px] leading-10 text-[#050505] ">
              Quy trình 5S là gì? Cách ứng dụng hiệu quả nên biết
            </span>
          </div>
        </div>
        <div className="w-[492px]"></div>
      </div>
    </div>
  );
}
