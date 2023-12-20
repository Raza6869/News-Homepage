//next imports
import Image from "next/image";
//media
import desktopImage from "@/assets/images/image-web-3-desktop.jpg";

export default function Main() {
  return (
    <section>
      <Image src={desktopImage} alt="web image" />
      <div className="flex items-center mt-12">
        <h1 className="font-extrabold text-6xl text-left ">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col justify-between gap-12">
          <p className="text-Dark-grayish-blue">
            We dive into next evolution of the web that claims to put the power
            of the platforms back into hands of the people. But is it really
            fulfilling its promise?
          </p>
          <button className="bg-Soft-red text-Off-white uppercase w-52 py-4 tracking-[4px] font-semibold hover:bg-Very-dark-blue transition-all ease-in-out">
            read more
          </button>
        </div>
      </div>
    </section>
  );
}
