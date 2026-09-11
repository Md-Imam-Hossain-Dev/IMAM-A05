import  type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  stack: Technology[];
  addToStack: (
    technology: Technology
  ) => void;
}

function TechnologyCard({
  technology,
  stack,
  addToStack,
}: TechnologyCardProps) {

  const isAdded = stack.some(
    (item: Technology) =>
      item.id === technology.id
  );

  return (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Icon and badge */}
      <div className="flex items-start justify-between gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3">

          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />

        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
          {technology.badge}
        </span>

      </div>

      {/* Name */}
      <h3 className="mt-5 text-xl font-bold text-slate-900">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-3 flex-grow text-sm leading-6 text-slate-500">
        {technology.description}
      </p>

      {/* Chips */}
      <div className="mt-5 flex flex-wrap gap-2">

        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-600">
          {technology.difficulty}
        </span>

      </div>

      {/* Rating */}
      <div className="mt-5 flex items-center justify-between">

        <div className="flex items-center gap-1">

          <span className="text-yellow-400">
            ★
          </span>

          <span className="font-semibold text-slate-700">
            {technology.rating}
          </span>

        </div>

        <span className="text-xs text-slate-400">
          Rating
        </span>

      </div>

      {/* Add */}
      <button
        onClick={() =>
          addToStack(technology)
        }
        disabled={isAdded}
        className={`mt-5 w-full rounded-xl px-4 py-3 font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-green-100 text-green-600"
            : "gradient-bg text-white hover:opacity-90"
        }`}
      >
        {isAdded
          ? "✓ Added to Stack"
          : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;