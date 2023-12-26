//next imports
import Image, { StaticImageData } from "next/image";

interface SectionProps {
  image: StaticImageData;
  number: string;
  title: string;
  desc: string;
}

export default function SectionElement({
  image,
  number,
  title,
  desc,
}: SectionProps) {
  return (
    <li className="flex gap-5 sm:w-96  items-center">
      <Image src={image} alt="section image" className="sm:w-36 w-28 h-fit" />
      <div className="flex flex-col gap-2">
        <h1 className=" text-Grayish-blue text-3xl font-bold">{number}</h1>
        <h2 className=" font-extrabold text-lg text-Very-dark-blue hover:text-Soft-red hover:cursor-pointer">
          {title}
        </h2>
        <p className="text-Dark-grayish-blue">{desc}</p>
      </div>
    </li>
  );
}
