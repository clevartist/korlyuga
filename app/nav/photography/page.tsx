import Image from "next/image";

export default function Page() {
  return (
    <div className="pt-20 pb-20">
      <div className="pl-20 pr-20 pb-10">
        <h1 className="text-6xl pb-10">Категории</h1>
        <div className="flex flex-row w-full gap-2 text-white text-4xl">
          <div className="flex justify-center items-center relative flex-1 overflow-hidden group">
            <span className="absolute z-10">Портреты</span>
            <Image
              src="/photography/portrait.jpg"
              className="w-full h-full object-cover brightness-50 
               group-hover:brightness-100 group-hover:scale-105 
               transition duration-200 ease-in-out"
              alt="Портреты"
              width={600}
              height={600}
            />
          </div>

          <div className="flex justify-center items-center relative flex-1 overflow-hidden group">
            <span className="absolute z-10">Недвижимость</span>
            <Image
              src="/photography/real-estate.jpg"
              className="w-full h-full object-cover brightness-50 
               group-hover:brightness-100 group-hover:scale-105 
               transition duration-200 ease-in-out"
              alt="Недвижимость"
              width={600}
              height={600}
            />
          </div>

          <div className="flex justify-center items-center relative flex-1 overflow-hidden group">
            <span className="absolute z-10">События</span>
            <Image
              src="/photography/events.jpg"
              className="w-full h-full object-cover brightness-50 
               group-hover:brightness-100 group-hover:scale-105 
               transition duration-200 ease-in-out"
              alt="События"
              width={400}
              height={400}
            />
          </div>

          <div className="flex justify-center items-center relative flex-1 overflow-hidden group">
            <span className="absolute z-10">Разные</span>
            <Image
              src="/photography/other.png"
              className="w-full h-full object-cover brightness-50 
               group-hover:brightness-100 group-hover:scale-105 
               transition duration-200 ease-in-out"
              alt="Разные"
              width={600}
              height={600}
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
