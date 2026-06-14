import { bossesData } from "../../data/boss";
import BossCard from "../ui/BossCard";

const Bosses = () => {
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
            <BossCard key={boss.name} boss={boss} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bosses;
