import type { Technology } from "../types/technology";

interface StackSidebarProps {
  stack: Technology[];
  removeFromStack: (
    id: string
  ) => void;
  removeAll: () => void;
}

function StackSidebar({
  stack,
  removeFromStack,
  removeAll,
}: StackSidebarProps) {

  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      {/* Header */}
      <div className="flex items-start justify-between gap-3">

        <div>

          <h2 className="text-xl font-bold text-slate-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {stack.length}{" "}
            {stack.length === 1
              ? "Technology"
              : "Technologies"}{" "}
            Selected
          </p>

        </div>

        {stack.length > 0 && (
          <button
            onClick={removeAll}
            className="text-sm font-semibold text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}

      </div>

      {/* Empty state */}
      {stack.length === 0 ? (

        <div className="mt-8 rounded-xl bg-slate-50 p-6 text-center">

          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-sm">
            +
          </div>

          <h3 className="font-semibold text-slate-700">
            Your stack is empty
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            Add technologies from the list to
            build your development stack.
          </p>

        </div>

      ) : (

        <div className="mt-6 space-y-3">

          {stack.map(
            (technology: Technology) => (

              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-2">

                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-full w-full object-contain"
                  />

                </div>

                <div className="min-w-0 flex-1">

                  <h3 className="truncate font-semibold text-slate-800">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-slate-400">
                    {technology.category}
                  </p>

                </div>

                <button
                  onClick={() =>
                    removeFromStack(
                      technology.id
                    )
                  }
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 hover:bg-red-100 hover:text-red-500"
                  title="Remove"
                >
                  ✕
                </button>

              </div>

            )
          )}

        </div>

      )}

    </aside>
  );
}

export default StackSidebar;