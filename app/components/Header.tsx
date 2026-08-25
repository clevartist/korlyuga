import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex flex-row items-center justify-center container mx-auto px-4 py-4 gap-8 relative">
        {/* Left group */}
        <div className="hidden lg:flex text-white gap-8">
          <Link className="cursor-pointer" href="/nav/photography">
            Фотография
          </Link>
          <Link className="cursor-pointer" href="/nav/videography">
            Видеография
          </Link>
          <Link className="cursor-pointer" href="/nav/architecture">
            Архитектура
          </Link>
        </div>

        {/* Center image */}
        <Link href="/" className="hidden md:block">
          <img className="w-30 object-contain" src="/logo.png" />
        </Link>
        <Link href="/" className="absolute left-0 md:hidden mt-10 ml-8">
          <img className="w-30 object-contain" src="/logo.png" />
        </Link>

        {/* Right group */}
        <div className="hidden lg:flex text-white gap-8">
          <Link className="cursor-pointer" href="/nav/graphic-design">
            Граф. дизайн
          </Link>
          <Link className="cursor-pointer" href="/nav/coding">
            Программирование
          </Link>
          <Link className="cursor-pointer" href="/nav/contacts">
            Контакты
          </Link>
        </div>

        {/* Menu dropdown */}
      </div>
    </header>
  );
}
