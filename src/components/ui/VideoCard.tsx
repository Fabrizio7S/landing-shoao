import { useState, useEffect } from "react";
import type { Video } from "../../types/Video";

interface VideoCardProps {
  video: Video;
  onPlay?: (url: string) => void;
}

const VideoCard = ({ video, onPlay }: VideoCardProps) => {
  const [title, setTitle] = useState("Cargando título...");
  const embedUrl = `https://www.youtube.com/embed/${video.videoId}`;
  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;

  useEffect(() => {
    fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${video.videoId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.title) {
          setTitle(data.title);
        } else {
          setTitle("Video de YouTube");
        }
      })
      .catch(() => {
        setTitle("Video de YouTube");
      });
  }, [video.videoId]);

  return (
    <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 flex flex-col h-full">
      <div 
        className="relative aspect-video overflow-hidden cursor-pointer bg-gray-100" 
        onClick={() => onPlay?.(embedUrl)}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {video.category && (
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase mb-2 block">
            {video.category}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-800 line-clamp-2 mb-4 group-hover:text-blue-600 transition-colors flex-grow">
          {title}
        </h3>
        
        <button 
          onClick={() => onPlay?.(embedUrl)}
          className="text-sm font-semibold text-gray-955 hover:text-blue-600 flex items-center gap-1 transition-colors self-start cursor-pointer"
        >
          Ver Video &rarr;
        </button>
      </div>
    </div>
  );
};

export default VideoCard;