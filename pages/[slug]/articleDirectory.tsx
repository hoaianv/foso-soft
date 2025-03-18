export default function ArticleDirectory() {
  return (
    <div className="text-[18px] font-medium text-[#15AA7A] mx-auto py-6 bg-white mt-5">
      <h1 className="text-xl font-bold text-green-600 transition-colors duration-300 hover:text-[#0F4F9E] cursor-pointer">
        1. Quy trình 5S là gì?
      </h1>
      <h2 className="mt-2 text-[#33404A] transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer">
        2. Lợi ích quy trình 5S đem lại
      </h2>

      <h2 className="mt-2 text-[#33404A] transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer">
        3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
      </h2>
      <ul className="ml-6 text-[#33404A] list-none space-y-2 mt-2">
        {[
          "3.1 Cải thiện rõ nét môi trường làm việc",
          "3.2 Tiết kiệm thời gian đáng kể",
          "3.3 Tăng năng suất làm việc",
          "3.4 Tiết kiệm chi phí",
          "3.5 Tăng chất lượng sản phẩm",
        ].map((item, index) => (
          <li
            key={index}
            className="transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-4 text-[#33404A] transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer">
        4. Quy trình 5S gồm các bước:
      </h2>
      <ul className="ml-6 text-[#33404A] list-none space-y-2 mt-2">
        {[
          "4.1 Seiri (Ngăn nắp)",
          "4.2 Seiton (Sắp xếp)",
          "4.3 Seiso (Vệ sinh)",
          "4.4 Seiketsu (Tiêu chuẩn hóa)",
          "4.5 Shitsuke (Kỷ luật)",
        ].map((item, index) => (
          <li
            key={index}
            className="transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-2 text-[#33404A] transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer">
        5. Quy trình được thực hiện như sau:
      </h2>
      <ul className="list-none ml-6 text-[#33404A] space-y-2 mt-2">
        {[
          "5.1 Giai đoạn chuẩn bị",
          "5.2 Triển khai rộng rãi",
          "5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp",
          "5.4 Sàng lọc, sắp xếp và đánh giá",
          "5.5 Đánh giá",
        ].map((item, index) => (
          <li
            key={index}
            className="transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-2 text-[#33404A] transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer">
        6. Quy trình 5S có giống với Kaizen?
      </h2>
      <h2 className="mt-2 text-[#33404A] transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer">
        7. Đối tượng nào nên áp dụng 5S?
      </h2>
      <h2 className="mt-2 text-[#33404A] transition-colors duration-300 hover:text-[#15AA7A] cursor-pointer">
        8. Các yếu tố tạo nên thành công cho quy trình 5S
      </h2>
    </div>
  );
}
