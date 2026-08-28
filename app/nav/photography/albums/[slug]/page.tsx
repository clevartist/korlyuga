// app/nav/photography/albums/[slug]/page.tsx
import fs from "fs";
import path from "path";
import Image from "next/image";
import { notFound } from "next/navigation";

// Generate all album slugs at build time
export async function generateStaticParams() {
  const albumsDir = path.join(process.cwd(), "public/photography/albums");
  if (!fs.existsSync(albumsDir)) return [];

  const folders = fs
    .readdirSync(albumsDir)
    .filter((item) => fs.statSync(path.join(albumsDir, item)).isDirectory());
  return folders.map((folder) => ({ slug: folder }));
}

// Fetch album data for a given slug
function getAlbumData(slug: string) {
  const albumDir = path.join(process.cwd(), "public/photography/albums", slug);
  if (!fs.existsSync(albumDir)) return null;

  const metadataPath = path.join(albumDir, "metadata.json");
  let metadata = { title: slug, description: "" };
  if (fs.existsSync(metadataPath)) {
    try {
      metadata = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));
    } catch (error) {
      console.error(`Error parsing metadata for ${slug}:`, error);
    }
  }

  const imageFiles = fs
    .readdirSync(albumDir)
    .filter((file) => /\.(jpg|jpeg|png|webp|gif)$/i.test(file));

  const images = imageFiles.map((file) => ({
    src: `/photography/albums/${slug}/${file}`,
    alt: file.replace(/\.[^/.]+$/, ""), // Remove extension for alt text
  }));

  return { slug, ...metadata, images };
}

// Important: Make the component async and await params
export default async function AlbumPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  // Handle both sync and async params
  const { slug } = await params;

  const album = getAlbumData(slug);
  if (!album) notFound();

  return (
    <div className="pt-20 pb-20 px-4 md:px-20 scroll-mt-20" id="album-content">
      <h1 className="text-5xl font-bold mb-4">{album.title}</h1>
      {album.description && (
        <p className="text-xl text-gray-600 mb-8">{album.description}</p>
      )}

      {album.images.length === 0 ? (
        <p className="text-xl text-gray-500">Нет фото...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {album.images.map((img, idx) => (
            <div key={idx} className="relative w-full h-64 md:h-80">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
