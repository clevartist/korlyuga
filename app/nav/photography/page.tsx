export default function Page() {
  return (
    <div className="pt-20 pb-20">
      <div className="pl-20 pr-20 pb-10">
        <h1 className="text-6xl pb-10">Категории</h1>
        <div className="flex flex-row w-full gap-2">
          <div className="flex justify-center items-center relative flex-1 overflow-hidden">
            <span className="absolute text-white z-10 text-2xl font-bold">
              Портреты
            </span>
            <img
              src="/photography/portrait.jpg"
              className="w-full h-full object-cover"
              alt="Портреты"
            />
          </div>

          <div className="flex justify-center items-center relative flex-1 overflow-hidden">
            <span className="absolute text-white z-10 text-2xl font-bold">
              Недвижимость
            </span>
            <img
              src="/photography/real-estate.jpg"
              className="w-full h-full object-cover"
              alt="Недвижимость"
            />
          </div>

          <div className="flex justify-center items-center relative flex-1 overflow-hidden">
            <span className="absolute text-white z-10 text-2xl font-bold">
              События
            </span>
            <img
              src="/photography/events.jpg"
              className="w-full h-full object-cover"
              alt="События"
            />
          </div>

          <div className="flex justify-center items-center relative flex-1 overflow-hidden">
            <span className="absolute text-white z-10 text-2xl font-bold">
              Разные
            </span>
            <img
              src="/photography/other.png"
              className="w-full h-full object-cover"
              alt="Разные"
            />
          </div>
        </div>
      </div>

      <div className="bg-black pl-20 pr-20 pt-20">
        <h1 className="text-white text-6xl pb-10">Альбомы</h1>
      </div>

      <div className="bg-white pl-20 pr-20 pt-20">
        <h1 className="text-6xl pb-10">Премии</h1>
      </div>
    </div>
  );
}
