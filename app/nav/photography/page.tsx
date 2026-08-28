// app/nav/photography/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";
import Link from "next/link";

// Helper to read album folders and their metadata
function getAlbums() {
  const albumsDir = path.join(process.cwd(), "public/photography/albums");
  if (!fs.existsSync(albumsDir)) return [];

  const folders = fs
    .readdirSync(albumsDir)
    .filter((item) => fs.statSync(path.join(albumsDir, item)).isDirectory());

  return folders.map((folder) => {
    const folderPath = path.join(albumsDir, folder);
    const metadataPath = path.join(folderPath, "metadata.json");
    let metadata = { title: folder, description: "" };
    if (fs.existsSync(metadataPath)) {
      metadata = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));
    }

    // Get the first 4 image files for preview
    const imageFiles = fs
      .readdirSync(folderPath)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file));
    const previewImages = imageFiles.slice(0, 4).map((file) => ({
      src: `/photography/albums/${folder}/${file}`,
    }));

    return {
      slug: folder,
      title: metadata.title || folder,
      description: metadata.description || "",
      previewImages,
    };
  });
}

export default function Page() {
  const albums = getAlbums();

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

      {/*from here*/}

      <div className="bg-black pl-20 pr-20 pt-20">
        <h1 className="text-white text-6xl pb-10">Альбомы</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {albums.map((album) => (
            <Link
              key={album.slug}
              href={`/nav/photography/albums/${album.slug}`}
            >
              <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                {/* Preview grid of first 4 images */}
                <div className="grid grid-cols-2 grid-rows-2 gap-1 h-48">
                  {album.previewImages.map((img, idx) => (
                    <div key={idx} className="relative w-full h-full">
                      <Image
                        src={img.src}
                        alt={`${album.title} preview ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  {/* If fewer than 4 images, fill with placeholder */}
                  {album.previewImages.length < 4 &&
                    [...Array(4 - album.previewImages.length)].map((_, i) => (
                      <div key={`placeholder-${i}`} className="bg-gray-200" />
                    ))}
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{album.title}</h2>
                  <p className="text-sm text-gray-600 truncate">
                    {album.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/*to here*/}

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
