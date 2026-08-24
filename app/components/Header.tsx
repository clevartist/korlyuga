export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-100 bg-transparent">
      <div className="flex flex-row items-center justify-center container mx-auto px-4 py-4 gap-8 relative">
        {/* Left group */}
        <div className="flex text-white gap-8">
          <button className="cursor-pointer">Фотография</button>
          <button className="cursor-pointer">Видеография</button>
          <button className="cursor-pointer">Архитектура</button>
        </div>

        {/* Center image */}
        <img className="w-30 object-contain" src="/logo.png" />

        {/* Right group */}
        <div className="flex text-white gap-8">
          <button className="cursor-pointer">Граф. дизайн</button>
          <button className="cursor-pointer">Программирование</button>
          <button className="cursor-pointer">Контакты</button>
        </div>

        {/* Menu dropdown */}
        <input
          className="text-white absolute right-0 w-8 object-contain mr-6"
          type="image"
          src="/icons/hamburger_menu.svg"
        />
      </div>
    </header>
  );
}
