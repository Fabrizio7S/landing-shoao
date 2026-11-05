import { useEffect, useState } from "react";
import { videosData } from "../../data/videos";
import type { Video } from "../../types/Video";
import VideoCard from "../ui/VideoCard";

interface ApiVideo {
  id: string;
  title: string;
  publishedAt: string | null;
  thumbnail: string;
}

// Si /api/videos tarda más que esto, se muestran los videos de respaldo.
const API_TIMEOUT_MS = 15000;

// Si un video del feed también está en data/videos.ts, se reutiliza su categoría.
const categoryById = new Map(videosData.map((v) => [v.videoId, v.category]));

const Videos = () => {
  // null = cargando. Si /api/videos falla se usan los videos de data/videos.ts.
  const [videos, setVideos] = useState<Video[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let timedOut = false;
    const timer = setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, API_TIMEOUT_MS);
    fetch("/api/videos", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { videos?: ApiVideo[] }) => {
        if (!data.videos?.length) throw new Error("sin videos");
        setVideos(
          data.videos.map((v) => ({
            videoId: v.id,
            title: v.title,
            thumbnail: v.thumbnail,
            publishedAt: v.publishedAt ?? undefined,
            category: categoryById.get(v.id),
          })),
        );
      })
      .catch(() => {
        // Abortado por desmontar el componente: no hacer nada.
        if (!controller.signal.aborted || timedOut) setVideos(videosData);
      })
      .finally(() => clearTimeout(timer));
    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-[#11141b] py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-12">
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-2">Videos</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-400 font-medium text-left">
            Videos Recientes
          </h2>
        </div>

        {/* Grid de Videos */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-busy={videos === null}
        >
          {videos === null
            ? Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-[#161a22] rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-800 animate-pulse"
                >
                  <div className="aspect-video bg-gray-100 dark:bg-gray-800" />
                  <div className="p-6 space-y-3">
                    <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-5/6" />
                    <div className="h-5 bg-gray-100 dark:bg-gray-800 rounded w-2/3" />
                    <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-20 mt-6" />
                  </div>
                </div>
              ))
            : videos.map((video) => <VideoCard key={video.videoId} video={video} />)}
        </div>

        {/* Botón/Enlace al canal al final de la sección */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://www.youtube.com/@xShoao/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors group"
          >
            Ver todos los videos
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;
