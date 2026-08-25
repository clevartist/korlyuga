import Link from "next/link";
import "../globals.css";

export default function SideBar() {
  return (
    <div className="p-10 pt-15 text-right">
      <div className="liquid-glass__menus relative z-10">
        <Link href="/" className="text-white">
          Home
        </Link>
      </div>
      <div className="liquid-glass--bend"></div>
      <div className="liquid-glass--face"></div>
      <div className="liquid-glass--edge"></div>
    </div>
  );
}
