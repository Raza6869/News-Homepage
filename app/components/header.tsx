"use client";
//next imports
import Image from "next/image";
//utils
import { DeviceSize } from "../utils/deviceSize";
//media
import logo from "@/assets/images/logo.svg";
import MobileHeader from "./mobileHeader";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-10 fixed bg-white w-full h-16 px-4 sm:px-40">
      <Image src={logo} alt="logo" className="py-4 h-14 w-fit" />

      {DeviceSize() < 648 ? (
        <MobileHeader />
      ) : (
        <nav>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
      )}
    </header>
  );
}
