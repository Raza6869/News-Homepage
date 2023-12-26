"use client";

//next imports
import Image from "next/image";
//utils
import { DeviceSize } from "../utils/deviceSize";
//media
import desktopImage from "@/assets/images/image-web-3-desktop.jpg";
import mobileImage from "@/assets/images/image-web-3-mobile.jpg";

export default function Main() {
  return (
    <section>
      <Image
        src={DeviceSize() < 638 ? mobileImage : desktopImage}
        alt="web image"
      />
      <div className="flex flex-col sm:flex-row sm:items-center sm:mt-10 mt-6 gap-0 sm:gap-20">
        <h1 className="font-extrabold sm:text-[55px] text-[42px] leading-tight text-left sm:mb-0 mb-4 w-fit">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col justify-between sm:gap-12 gap-6 w-fit">
          <p className="text-Dark-grayish-blue">
            We dive into next evolution of the web that claims to put the power
            of the platforms back into hands of the people. But is it really
            fulfilling its promise?
          </p>
          <button className="bg-Soft-red text-Off-white uppercase w-52 sm:py-4 py-3 tracking-[4px] font-semibold hover:bg-Very-dark-blue transition-all ease-in-out text-sm">
            read more
          </button>
        </div>
      </div>
    </section>
  );
}
