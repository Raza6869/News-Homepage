//next imports
import Image from "next/image";
//media
import menuopen from "@/assets/images/icon-menu.svg";
import menuclose from "@/assets/images/icon-menu-close.svg";

export default function MobileHeader() {
  return (
    <div>
      <Image src={menuopen} alt="icon menu" />
      <nav>
        <ul className="sm:flex gap-10">
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
