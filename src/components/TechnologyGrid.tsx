import TechnologyCard from "./TechnologyCard";

import type { Technology } from "../types/technology";

interface TechnologyGridProps {
  technologies: Technology[];
  stack: Technology[];
  addToStack: (
    technology: Technology
  ) => void;
}

function TechnologyGrid({
  technologies,
  stack,
  addToStack,
}: TechnologyGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

      {technologies.map(
        (technology: Technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            stack={stack}
            addToStack={addToStack}
          />
        )
      )}

    </div>
  );
}

export default TechnologyGrid;