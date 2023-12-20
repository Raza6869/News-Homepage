//next imports
import Image from "next/image";
//media
import logo from "@/assets/images/logo.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-10">
      <Image src={logo} alt="logo" />
      <nav>
        <ul className="flex gap-10">
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </header>
  );
}
