//next imports
import Image from "next/image";
import { useState } from "react";
//utils
import { DeviceSize } from "../utils/deviceSize";
//media
import menuopen from "@/assets/images/icon-menu.svg";
import menuclose from "@/assets/images/icon-menu-close.svg";

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex absolute top-0 right-0 ">
      <Image
        src={!isOpen ? menuopen : menuclose}
        alt="icon menu"
        className="absolute top-6 right-5 z-50 transition-all ease-in-out duration-300"
        onClick={() => {
          !isOpen ? setIsOpen(true) : setIsOpen(false);
        }}
      />
      <nav className="">
        <ul className={!isOpen ? "closed" : "open"}>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </div>
  );
}
