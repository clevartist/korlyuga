import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-100 bg-transparent">
      <div className="flex flex-row items-center justify-center container mx-auto px-4 py-4 gap-8 relative">
        {/* Left group */}
        <div className="hidden lg:flex text-white gap-8">
          <Link className="cursor-pointer" href="/photography">
            Фотография
          </Link>
          <Link className="cursor-pointer" href="/videography">
            Видеография
          </Link>
          <Link className="cursor-pointer" href="/architecture">
            Архитектура
          </Link>
        </div>

        {/* Center image */}
        <img className="hidden md:block w-30 object-contain" src="/logo.png" />
        <img
          className="absolute left-0 md:hidden w-30 object-contain mt-10 ml-8"
          src="/logo.png"
        />

        {/* Right group */}
        <div className="hidden lg:flex text-white gap-8">
          <Link className="cursor-pointer" href="/graphic-design">
            Граф. дизайн
          </Link>
          <Link className="cursor-pointer" href="/coding">
            Программирование
          </Link>
          <Link className="cursor-pointer" href="/contacts">
            Контакты
          </Link>
        </div>

        {/* Menu dropdown */}
        <input
          className="text-white absolute right-0 w-8 object-contain mr-6 mt-10 md:mt-0"
          type="image"
          src="/icons/hamburger_menu.svg"
        />
      </div>
    </header>
  );
}
