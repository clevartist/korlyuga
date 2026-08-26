export default function Page() {
  return (
    <div>
      <div>
        <h1>Категории</h1>
        <div className="flex flex-row w-screen">
          <div className="flex justify-center items-center relative basis-1/4">
            <span className="absolute text-white">Портреты</span>
            <img
              src="/photography/portrait.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-center items-center relative basis-1/4">
            <span className="absolute text-white">Недвижимость</span>
            <img
              src="/photography/real-estate.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-center items-center relative basis-1/4">
            <span className="absolute text-white">События</span>
            <img
              src="/photography/events.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex justify-center items-center relative basis-1/4">
            <span className="absolute text-white">Разные</span>
            <img
              src="/photography/other.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-black">
        <h1>Альбомы</h1>
      </div>

      <div>
        <h1>Премии</h1>
      </div>
    </div>
  );
}
