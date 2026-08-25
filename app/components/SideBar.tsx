import Link from "next/link";
import "../globals.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="liquid-glass__menus">
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
