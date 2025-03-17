import Image from "next/image";

export default function Banner() {
  const banners = [
    "/images/banner/banner-1.png",
    "/images/banner/banner-2.png",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">
      {banners.map((src, index) => (
        <Image
          key={index}
          src={src}
          width={366}
          height={655}
          alt={`banner-${index + 1}`}
          className="w-full lg:w-[366px] h-auto"
        />
      ))}
    </div>
  );
}
