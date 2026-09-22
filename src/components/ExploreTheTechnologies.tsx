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
      if (prev.some((item) => item.id === tech.id)) {
        return prev;
      }

      return [...prev, tech];
    });
  };

  const handleRemove = (id: number) => {
    setStack((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Main Layout */}
      <div className="flex flex-col gap-6 lg:flex-row">
        {/* ================================
            Explore Technologies
        ================================= */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Explore the <span className="text-[#EC4899]">Technologies</span>
          </h1>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Add technologies to build your ideal stack.
          </p>

          {/* Technology Cards */}
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => {
              const isSelected = stack.some((item) => item.id === tech.id);

              return (
                <div
                  key={tech.id}
                  className={`rounded-lg border bg-white p-3 transition-all duration-300 ${
                    isSelected
                      ? "border-[#EC4899] shadow-lg"
                      : "border-gray-200 hover:-translate-y-1 hover:shadow-lg"
                  }`}
                >
                  {/* Icon + Badge */}
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-50">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-5 w-5 object-contain"
                      />
                    </div>

                    {tech.badge && (
                      <span className={`rounded-full px-2 py-0.5 text-[8px] font-semibold ${tech.badgeColor}`}>
                        {tech.badge}
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h2 className="text-sm font-bold text-slate-800">{tech.name}</h2>

                  {/* Description */}
                  <p className="mt-1 min-h-10 text-[9px] leading-4 text-gray-500">
                    {tech.description}
                  </p>

                  {/* Info */}
                  <div className="mt-2 flex items-center justify-between text-[8px] text-gray-500">
                    <span className="rounded border px-1.5 py-0.5">
                      {tech.category}
                    </span>

                    <span>{tech.level}</span>

                    <span>⭐ {tech.rating}</span>
                  </div>

                  {/* Add Button */}
                  <button
                    onClick={() => handleAddToStack(tech)}
                    className={`mt-3 w-full rounded py-1.5 text-[9px] font-semibold transition ${
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
        <div className="w-full shrink-0 lg:w-[220px]">
          <div className="sticky top-5 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            {/* Title */}
            <h2 className="text-sm font-bold">Your Stack</h2>

            <p className="mt-1 text-[9px] text-gray-500">
              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} technologies selected.`}
            </p>

            {/* Empty */}
            {stack.length === 0 && (
              <div className="mt-3 flex h-16 items-center justify-center rounded border border-dashed border-gray-300 bg-gray-50">
                <p className="text-[9px] text-gray-400">Your stack is empty</p>
              </div>
            )}

            {/* Selected Stack */}
            {stack.length > 0 && (
              <div className="mt-3 space-y-2">
                {stack.map((tech) => (
                  <div
                    key={tech.id}
                    className="flex items-center justify-between rounded border bg-gray-50 p-2"
                  >
                    <div className="flex items-center gap-2">
                      {/* Icon */}
                      <div className="flex h-7 w-7 items-center justify-center rounded bg-white">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="h-4 w-4 object-contain"
                        />
                      </div>

                      {/* Name */}
                      <div>
                        <h3 className="text-[10px] font-semibold">{tech.name}</h3>

                        <p className="text-[8px] text-gray-400">{tech.category}</p>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      onClick={() => handleRemove(tech.id)}
                      className="text-xs font-bold text-red-400 hover:text-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Total */}
            <div className="mt-3 border-t pt-3">
              <div className="flex justify-between text-[10px]">
                <span className="text-gray-500">Total Selected</span>

                <span className="font-bold text-[#EC4899]">{stack.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreTheTechnologies;
