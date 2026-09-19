import { useState } from "react";
import technologies from "../../public/technologies.json";

interface Technology {
  id: number;
  name: string;
  icon: string;
  color: string;
  badge: string;
  badgeColor: string;
  description: string;
  category: string;
  level: string;
  rating: string;
}

const ExploreTheTechnologies = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const handleAddToStack = (tech: Technology) => {
    setStack((prev) => {
      const filtered = prev.filter(
        (item) => item.category !== tech.category
      );

      if (prev.some((item) => item.id === tech.id)) {
        return prev;
      }

      return [...filtered, tech];
    });
  };

  const handleRemove = (id: number) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="px-7">
      {/* Main Layout */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* ================================
            Explore Technologies
        ================================= */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">
            Explore the <span className="text-[#EC4899]">Technologies</span>
          </h1>

          <p className="mt-1 text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>

          {/* Technology Cards */}
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => {
              const isSelected = stack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className={`rounded-xl border bg-white p-5 transition-all duration-300 ${
                    isSelected
                      ? "border-[#EC4899] shadow-lg"
                      : "border-gray-200 hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  {/* Icon + Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-50">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-10 w-10 object-contain"
                      />
                    </div>

                    {tech.badge && (
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-500">
                        {tech.badge}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h2 className="text-lg font-bold">{tech.name}</h2>

                  {/* Description */}
                  <p className="mt-2 min-h-[55px] text-sm text-gray-500">
                    {tech.description}
                  </p>

                  {/* Info */}
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span className="rounded-md border px-2 py-1">
                      {tech.category}
                    </span>

                    <span>{tech.level}</span>

                    <span>⭐ {tech.rating}</span>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddToStack(tech)}
                    className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition ${
                      isSelected
                        ? "bg-green-500 text-white"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                  >
                    {isSelected ? "Added to Stack ✓" : "Add to Stack"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================
            Your Stack
        ================================= */}
        <div className="w-full shrink-0 lg:w-[280px]">
          <div className="sticky top-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
            {/* Title */}
            <h2 className="text-lg font-bold">Your Stack</h2>

            <p className="mt-1 text-sm text-gray-500">
              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} technologies selected.`}
            </p>

            {/* Empty */}
            {stack.length === 0 && (
              <div className="mt-5 flex h-24 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-gray-50">
                <p className="text-sm text-gray-400">Your stack is empty</p>
              </div>
            )}

            {/* Selected Stack */}
            {stack.length > 0 && (
              <div className="mt-5 space-y-3">
                {stack.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between rounded-lg border bg-gray-50 p-3"
                  >
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="h-6 w-6 object-contain"
                        />
                      </div>

                      {/* Name */}
                      <div>
                        <h3 className="text-sm font-semibold">{tech.name}</h3>

                        <p className="text-xs text-gray-400">
                          {tech.category}
                        </p>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(tech.id)}
                      className="font-bold text-red-400 hover:text-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Total */}
            <div className="mt-5 border-t pt-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Total Selected</span>

                <span className="font-bold text-[#EC4899]">
                  {stack.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTheTechnologies;