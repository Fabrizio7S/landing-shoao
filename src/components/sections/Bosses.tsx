import { useState } from "react";
import { bossesData } from "../../data/boss";
import BossCard from "../ui/BossCard";
import type { boss } from "../../types/Boss";

const Bosses = () => {
  const [selectedBoss, setSelectedBoss] = useState<boss | null>(null);

  const openBossGuide = (boss: boss) => {
    // Si es Kaling mostrar modal
    if (boss.extraVideos?.length) {
      setSelectedBoss(boss);
      return;
    }

    // Boss normal
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

      {selectedBoss && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedBoss(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-4">
              {selectedBoss.name}
            </h2>

            <button
              onClick={() =>
                window.open(
                  `https://www.youtube.com/watch?v=${selectedBoss.videoId}`,
                  "_blank"
                )
              }
              className="w-full mb-3 bg-black hover:bg-gray-900 border border-gray-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Fase 1
            </button>
            {selectedBoss.extraVideos?.map((video) => (
              <button
                key={video.videoId}
                onClick={() =>
                  window.open(
                    `https://www.youtube.com/watch?v=${video.videoId}`,
                    "_blank"
                  )
                }
                className="w-full mb-3 bg-black hover:bg-gray-900 border border-gray-700 text-white py-3 rounded-lg font-semibold transitiond"
              >
                {video.title}
              </button>
            ))}

            <button
              onClick={() => setSelectedBoss(null)}
              className="w-full mt-2 border border-gray-300 py-2 rounded-lg"
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