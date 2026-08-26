"use client";

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
              width={500}
              height={500}
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

      <div className="flex flex-col bg-white pl-20 pr-20 pt-20 gap-30">
        <h1 className="text-6xl pb-10">Премии</h1>
        <div className="flex gap-8">
          <div className="w-1/4">
            <Image
              src="/photography/bibliobicicleta_2025.png"
              alt="BiblioBicicleta 2025"
              width={800}
              height={800}
            />
          </div>
          <div className="w-2/4">
            <h1 className="text-center text-4xl">🥇 1-е место 🥇</h1>
            <h1 className="text-center text-2xl pb-6">
              BiblioBicicleta 2025 - Брашов, Румыния
            </h1>
            <p className="text-center text-xl">
              Однозначно, базовые сценарии поведения пользователей смешаны с не
              уникальными данными до степени совершенной неузнаваемости, из-за
              чего возрастает их статус бесполезности. Банальные, но
              неопровержимые выводы, а также активно развивающиеся страны
              третьего мира ограничены исключительно образом мышления. В
              частности, сплочённость команды профессионалов играет важную роль
              в формировании модели развития!
            </p>
          </div>
          <div className="w-1/4">
            <Image
              src="/photography/bibliobicicleta_2025_published.png"
              alt="BiblioBicicleta 2025 my published work"
              width={800}
              height={800}
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-1/4">
            <Image
              src="/photography/e_visual_debut_2024.png"
              alt="E VISUAL ART DEBUT 2024"
              width={800}
              height={800}
            />
          </div>
          <div className="w-2/4">
            <h1 className="text-center text-4xl">🥇 1-е место 🥇</h1>
            <h1 className="text-center text-4xl pb-6">
              E VISUAL ART DEBUT 2024 - Брашов, Румыния
            </h1>
            <p className="text-center text-xl">
              Однозначно, базовые сценарии поведения пользователей смешаны с не
              уникальными данными до степени совершенной неузнаваемости, из-за
              чего возрастает их статус бесполезности. Банальные, но
              неопровержимые выводы, а также активно развивающиеся страны
              третьего мира ограничены исключительно образом мышления. В
              частности, сплочённость команды профессионалов играет важную роль
              в формировании модели развития!
            </p>
          </div>
          <div className="w-1/4">
            <Image
              src="/photography/e_visual_debut_2024_published.png"
              alt="E VISUAL ART DEBUT 2024 MY PUBLISHED WORK"
              width={800}
              height={800}
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-1/4">
            <Image
              src="/photography/bibliobicicleta_2024.png"
              alt="BiblioBicicleta 2024"
              width={800}
              height={800}
            />
          </div>
          <div className="w-2/4">
            <h1 className="text-center text-4xl">🥈 2-е место 🥈</h1>
            <h1 className="text-center text-4xl pb-6">
              BiblioBicicleta 2024 - Брашов, Румыния
            </h1>
            <p className="text-center text-xl">
              Однозначно, базовые сценарии поведения пользователей смешаны с не
              уникальными данными до степени совершенной неузнаваемости, из-за
              чего возрастает их статус бесполезности. Банальные, но
              неопровержимые выводы, а также активно развивающиеся страны
              третьего мира ограничены исключительно образом мышления. В
              частности, сплочённость команды профессионалов играет важную роль
              в формировании модели развития!
            </p>
          </div>
          <div className="w-1/4">
            <Image
              src="/photography/bibliobicicleta_2024_published.png"
              alt="BiblioBicicleta 2024 my published work"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
