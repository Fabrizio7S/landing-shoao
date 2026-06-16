import { useState } from "react";
import { videosData } from "../../data/videos";
import type { Video } from "../../types/Video";
import VideoCard from "../ui/VideoCard";

const Videos = () => {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="mb-12">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-2">Videos</h1>
          <h2 className="text-2xl text-gray-600 font-medium text-left">
            Videos Recientes
          </h2>
        </div>

        {/* Grid de Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {videosData.map((video: Video) => (
            <VideoCard 
              key={video.videoId} 
              video={video} 
              onPlay={(url) => setActiveVideoUrl(url)} 
            />
          ))}
        </div>

        {/* Botón/Enlace al canal al final de la sección */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://www.youtube.com/@xShoao/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
          >
            Ver todos los videos
            <span className="transform group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>
      </div>

      {/* Modal del reproductor de video */}
      {activeVideoUrl && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setActiveVideoUrl(null)}
        >
          <div 
            className="relative max-w-4xl w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setActiveVideoUrl(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 p-2 rounded-full cursor-pointer hover:bg-black/80 transition-colors"
              aria-label="Cerrar modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <iframe
              className="w-full h-full"
              src={`${activeVideoUrl}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Videos;