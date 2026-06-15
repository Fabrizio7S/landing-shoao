import { useState } from "react";
import { bossesData } from "../../data/boss";
import BossCard from "../ui/BossCard";
import type { boss } from "../../types/Boss";

const Bosses = () => {
  const [selectedBoss, setSelectedBoss] = useState<boss | null>(null);

  const openBossGuide = (boss: boss) => {
    if (boss.extraVideos?.length) {
      setSelectedBoss(boss);
      return;
    }

    if (boss.videoId) {
      window.open(
        `https://www.youtube.com/watch?v=${boss.videoId}`,
        "_blank"
      );
    }
  };

  return (
    <section id="bosses" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">

        <h1 className="text-5xl font-extrabold text-gray-900 mb-2">
          Guías de Bosses
        </h1>

        <p className="text-gray-600 mb-10">
          Haz clic en un boss para ver su guía.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {bossesData.map((boss) => (
            <BossCard
              key={boss.name}
              boss={boss}
              onClick={openBossGuide}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedBoss && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedBoss(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-5 text-gray-900">
              {selectedBoss.name}
            </h2>

            {/* BOTÓN FASE 1 */}
            <button
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${selectedBoss.videoId}`,
                  "_blank"
                )
              }
              className="w-full mb-3 bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition"
            >
              Fase 1
            </button>

            {/* EXTRA VIDEOS */}
            {selectedBoss.extraVideos?.map((video) => (
              <button
                key={video.videoId}
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${video.videoId}`,
                    "_blank"
                  )
                }
                className="w-full mb-3 bg-black hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition"
              >
                {video.title}
              </button>
            ))}

            {/* CERRAR */}
            <button
              onClick={() => setSelectedBoss(null)}
              className="w-full mt-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Bosses;