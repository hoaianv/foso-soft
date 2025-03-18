import Image from "next/image";
import Feedback from "./feedback";

export default function Content() {
  return (
    <div className="mt-5 ">
      <div className="">
        <Image
          src={"/images/post/image-1.png"}
          className="w-full h-full mb-1"
          width={900}
          height={600}
          alt="image post 1"
        />
        <div className="text-center ">
          <span className="text-[#667F93] text-[16px] ">
            Quy trình 5s là gì?
          </span>
        </div>
      </div>
      <div className="min-h-[92px] w-full relative my-6 px-4">
        <div className="w-full max-w-[778px] text-center mx-auto px-4">
          <span className="text-[#33404A] text-[20px] italic leading-7">
            Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì? Xây
            dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời cho bạn
            thông tin chi tiết về mô hình này cũng như yếu tố tạo nên thành công
            của quy trình bạn nhé.
          </span>
        </div>
        <Image
          src={"/images/post/quotation-marks.svg"}
          width={52}
          height={52}
          alt="quotation marks"
          className="absolute -top-[26px] left-0"
        />
      </div>

      <div>
        <span className="text-[#15AA7A] text-[16px] font-bold">
          1. Quy trình 5S là gì?
        </span>
        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
          xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật
          Bản. 
        </span>

        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận dụng
          bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ S đầu
          trong tiếng Nhật:
        </span>

        <ul className="list-disc list-inside ml-3 space-y-2  mt-5">
          <li className="text-[#15AA7A] font-bold">
            Seiri <span className="font-normal text-[#231F20]">(Ngăn nắp)</span>
          </li>
          <li className="text-[#15AA7A] font-bold">
            Seiso <span className="font-normal text-[#231F20]">(Sạch sẽ)</span>
          </li>
          <li className="text-[#15AA7A] font-bold">
            Seiton <span className="font-normal text-[#231F20]">(Trật tự)</span>
          </li>
          <li className="text-[#15AA7A] font-bold">
            Shitsuke{" "}
            <span className="font-normal text-[#231F20]">(Kỷ luật)</span>
          </li>
          <li className="text-[#15AA7A] font-bold">
            Seiketsu{" "}
            <span className="font-normal text-[#231F20]">(Tiêu chuẩn hóa)</span>
          </li>
        </ul>
      </div>

      <div className="mt-6">
        <span className="text-[#15AA7A] text-[16px] font-bold">
          2. Lợi ích quy trình 5S đem lại 
        </span>
        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi
          bước của quy trình với mục đích cải tiến môi trường làm việc của doanh
          nghiệp.
        </span>

        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp sẽ
          tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi làm
          việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt theo vị
          trí quy định và dễ dàng tìm kiếm khi cần thiết.
        </span>

        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói quen
          tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên một văn hóa
          doanh nghiệp tích cực.
        </span>

        <div className="mt-5">
          <Image
            src={"/images/post/image-2.png"}
            className="w-full h-full mb-1"
            width={900}
            height={600}
            alt="image post 2"
          />
          <div className="text-center ">
            <span className="text-[#667F93] text-[16px] ">
              Tại sao doanh nghiệp cần quy trình 5S?
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <span className="text-[#15AA7A] text-[16px] font-bold">
          3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
        </span>
        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          3.1 Cải thiện rõ nét môi trường làm việc
        </span>

        <span className="text-[#231F20] text-[16px]  ">
          Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn gàng
          hơn và có tổ chức hơn. Điều này tạo ra một không gian làm việc hiệu
          quả cho từng cá nhân trong doanh nghiệp.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          3.2 Tiết kiệm thời gian đáng kể
        </span>

        <span className="text-[#231F20] text-[16px] ">
          Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được thời
          gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ dùng, máy
          móc cần sử dụng trong quá trình làm việc. Khi mọi thứ đều có trật tự,
          mọi sự tìm kiếm đều trở nên dễ dàng. 
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          3.3 Tăng năng suất làm việc
        </span>

        <span className="text-[#231F20] text-[16px] ">
          Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết, tăng
          cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm và sử dụng
          các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời gian và tăng
          năng suất làm việc.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          3.4 Tiết kiệm chi phí{" "}
        </span>

        <span className="text-[#231F20] text-[16px] ">
          Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và sử
          dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu chi phí
          vận hành đáng kể cho doanh nghiệp của mình.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          3.5 Tăng chất lượng sản phẩm
        </span>

        <span className="text-[#231F20] text-[16px] ">
          5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ đó,
          giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất không
          mong muốn.
        </span>

        <div className="mt-5">
          <Image
            src={"/images/post/image-3.png"}
            className="w-full h-full mb-1"
            width={900}
            height={600}
            alt="image post 3"
          />
          <div className="text-center ">
            <span className="text-[#667F93] text-[16px] ">
              Quy trình 5s gồm các bước
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <span className="text-[#15AA7A] text-[16px] font-bold">
          4. Quy trình 5S gồm các bước
        </span>
        <span className="text-[#231F20] text-[16px] block mt-5 ">
          5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu quả
          làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm bước cơ
          bản sau:
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          4.1 Seiri (Ngăn nắp)
        </span>

        <span className="text-[#231F20] text-[16px]  ">
          Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp, nhằm
          tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo ra một
          không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời gian.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          4.2 Seiton (Sắp xếp)
        </span>

        <span className="text-[#231F20] text-[16px]  ">
          Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị, tài
          liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và sử dụng
          chúng một cách dễ dàng.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          4.3 Seiso (Vệ sinh){" "}
        </span>

        <span className="text-[#231F20] text-[16px] ">
          Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân trong
          doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và việc vệ
          sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm bệnh tật và
          tăng cường sức khỏe cho mỗi nhân viên.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          4.4 Seiketsu (Tiêu chuẩn hóa)
        </span>

        <span className="text-[#231F20] text-[16px] ">
          Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này giúp
          đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử dụng các
          dụng cụ, thiết bị, tài liệu.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          4.5 Shitsuke (Kỷ luật){" "}
        </span>

        <span className="text-[#231F20] text-[16px]  ">
          Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng vai
          trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S trong dài
          hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật và giám sát
          chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và tuân thủ theo
          quy trình.
        </span>

        <div className="mt-5">
          <Image
            src={"/images/post/image-4.png"}
            className="w-full h-full mb-1"
            width={900}
            height={600}
            alt="image post 4"
          />
          <div className="text-center ">
            <span className="text-[#667F93] text-[16px] ">
              Các bước thực hiện quy trình 5s
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <span className="text-[#15AA7A] text-[16px] font-bold">
          5. Quy trình được thực hiện như sau:
        </span>
        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp trên
          toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh rõ nét
          tính hiệu quả của quy trình đem lại. Sau đây là các lý do vì sao bạn
          nên lựa chọn quy trình:
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          5.1 Giai đoạn chuẩn bị
        </span>

        <span className="text-[#231F20] text-[16px]  ">
          Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra
          điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân bổ cụ
          thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả hơn.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          5.2 Triển khai rộng rãi
        </span>

        <span className="text-[#231F20] text-[16px]  ">
          Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy trình 5S
          cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức cũng như cách
          áp dụng như thế nào vào doanh nghiệp của bạn.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp{" "}
        </span>

        <span className="text-[#231F20] text-[16px] ">
          Đây là bước có thể khiến mọi người không hào hứng trong các bước của
          quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không khí hào
          hứng cho từng cá nhân.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          5.4 Sàng lọc, sắp xếp và đánh giá{" "}
        </span>

        <span className="text-[#231F20] text-[16px] ">
          Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ doanh
          nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc thực hiện
          sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn và dễ dàng tìm
          kiếm sau này.
        </span>

        <span className="text-[#15AA7A] text-[16px] block mt-5">
          5.5 Đánh giá{" "}
        </span>

        <span className="text-[#231F20] text-[16px]  ">
          Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá trình
          cải tiến và xem xét cần cải tiến phương diện nào hay không trong quá
          trình thực hiện quy trình 5S.
        </span>
      </div>

      <div className="mt-6">
        <span className="text-[#15AA7A] text-[16px] font-bold">
          6. Quy trình 5S có giống với Kaizen?
        </span>
        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
          không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa
          chúng có mối quan hệ chặt chẽ với nhau.
        </span>

        <div className="border-l-4 border-[#15AA7A]">
          <div className="w-full max-w-[778px] text-justify mx-auto mt-5 px-4">
            <span className="text-[#33404A] text-[20px] italic leading-7 block">
              Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
              trong doanh nghiệp.
            </span>

            <span className="text-[#33404A] text-[20px] italic leading-7 block">
              {" "}
              Phương pháp này nhằm tạo ra sự thay đổi tích cực, mang tính liên
              tục và bền vững. 
            </span>
          </div>
        </div>

        <div className="border-l-4 border-[#15AA7A]">
          <div className="w-full max-w-[778px] text-justify mx-auto mt-5 px-4">
            <span className="text-[#33404A] text-[20px] italic leading-7 block">
              Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến
              trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt,
              tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. {" "}
            </span>
          </div>
        </div>

        <span className="text-[#231F20] text-[16px] mt-5 block ">
          Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy tắc
          này đóng vai trò quan trọng trong việc tạo ra môi trường làm việc sạch
          sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu tiên trong
          quá trình cải tiến liên tục của phương pháp Kaizen để tạo ra một nền
          tảng vững chắc cho các hoạt động cải tiến tiếp theo. 
        </span>
      </div>

      <div className="mt-6">
        <span className="text-[#15AA7A] text-[16px] font-bold">
          7. Đối tượng nào nên áp dụng 5S?
        </span>
        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi ở
          nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy nhiên,
          5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ quan hành
          chính, các tổ chức phi lợi nhuận và các doanh nghiệp nhỏ.
        </span>

        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp,
          các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.
        </span>

        <div className="mt-5">
          <Image
            src={"/images/post/image-5.png"}
            className="w-full h-full mb-1"
            width={900}
            height={600}
            alt="image post 5"
          />
          <div className="text-center ">
            <span className="text-[#667F93] text-[16px] ">
              Các yếu tố tạo nên thành công cho quy trình 5S
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <span className="text-[#15AA7A] text-[16px] font-bold">
          8. Các yếu tố tạo nên thành công cho quy trình 5S
        </span>
        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Và những nhân tố quyết định đến quá trình thành công của quy trình
          nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
        </span>
        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức tạp,
          các trang thiết bị và vật dụng phải được quản lý và sử dụng hiệu quả.
        </span>
        <ul className="list-disc list-inside ml-3 space-y-2  mt-5">
          <li className="text-[#231F20]  text-[16px]">
            Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp. Bởi
            đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp dụng quy
            tắc này hay không.
          </li>
          <li className="text-[#231F20]  text-[16px]">
            Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh đạo
            đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch thực hiện
            triển khai 5S. 
          </li>
          <li className="text-[#231F20]  text-[16px]">
            Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần huy
            động và khuyến khích nhân viên tự nguyện thực hiện vì lợi ích chung
            của tổ chức, của doanh nghiệp.{" "}
          </li>
        </ul>

        <span className="text-[#231F20] text-[16px] block mt-5 ">
          Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng là
          các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay vào triển
          khai quy trình 5S vào doanh nghiệp của mình. Và với những thông tin bổ
          ích như trên, FOSO mong rằng phần nào giúp được doanh nghiệp của bạn
          phát triển, cải tiến vượt bậc trong tương lai.
        </span>
      </div>

      <Feedback />
    </div>
  );
}
