import { useState, useEffect } from "react";
import type { Video } from "../../types/Video";

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const [fetchedTitle, setFetchedTitle] = useState("Cargando título...");
  const title = video.title ?? fetchedTitle;
  const watchUrl = `https://www.youtube.com/watch?v=${video.videoId}`;
  const thumbnailUrl =
    video.thumbnail ?? `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`;

  // Solo los videos de respaldo (escritos a mano) no traen título.
  useEffect(() => {
    if (video.title) return;
    fetch(`https://noembed.com/embed?url=${watchUrl}`)
      .then((res) => res.json())
      .then((data) => setFetchedTitle(data?.title || "Video de YouTube"))
      .catch(() => setFetchedTitle("Video de YouTube"));
  }, [video.title, watchUrl]);

  return (
    <div className="group bg-white dark:bg-[#161a22] rounded-2xl shadow-sm overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col h-full">
      <a
        href={watchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative aspect-video overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 block"
      >
        <img
          src={thumbnailUrl}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </a>

      <div className="p-6 flex flex-col flex-grow">
        {video.category && (
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-2 block">
            {video.category}
          </span>
        )}
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-2 mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-grow">
          {title}
        </h3>

        <a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-gray-950 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors self-start cursor-pointer"
        >
          Ver Video &rarr;
        </a>
      </div>
    </div>
  );
};

export default VideoCard;
