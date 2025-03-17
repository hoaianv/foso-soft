import Image from "next/image";
import React from "react";

export default function Feedback() {
  const feedbacks = [
    {
      label: "Hữu ích",
      emoji: "/images/feedback/thumbs-up.svg",
      count: 1,
      color: "text-[#33404A]",
      border: "border-green-600",
    },
    {
      label: "Yêu thích",
      emoji: "/images/feedback/green-heart.svg",
      count: 2,
      color: "text-[#33404A]",
      border: "bg-gray-100",
    },
    {
      label: "Thú vị",
      emoji: "/images/feedback/star-struck.svg",
      count: 0,
      color: "text-[#33404A]",
      border: "bg-gray-100",
    },
    {
      label: "Bất ngờ",
      emoji: "/images/feedback/hushed-face.svg",
      count: 1,
      color: "text-[#33404A]",
      border: "bg-gray-100",
    },
    {
      label: "Nhàm chán",
      emoji: "/images/feedback/yawning-face.svg",
      count: 0,
      color: "text-[#33404A]",
      border: "bg-gray-100",
    },
    {
      label: "Tức giận",
      emoji: "/images/feedback/pouting-face.svg",
      count: 0,
      color: "text-[#33404A]",
      border: "bg-gray-100",
    },
  ];

  return (
    <div className="flex items-center justify-center mt-14   shadow-[#33404A]">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl w-full min-h-[230px]">
        <p className="text-[#33404A] text-[20px]  font-extrabold text-lg text-center">
          Bạn thấy bài viết như thế nào?
        </p>
        <p className="text-[#33404A] text-[16px] text-center mt-1">
          4 phản hồi
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className={`flex flex-col items-center w-[70px] sm:w-[90px] h-auto sm:h-[109px] ${
                index === 0 ? "border border-[#10805B] rounded-md" : ""
              } ${feedback.color}`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center   rounded-lg`}
              >
                <Image
                  src={feedback.emoji}
                  alt={feedback.label}
                  height={48}
                  width={48}
                />
              </div>
              <p className="mt-2 text-sm font-bold">{feedback.count}</p>
              <p className="text-gray-500 text-xs">{feedback.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
