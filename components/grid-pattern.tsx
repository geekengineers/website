"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/magicui/grid-pattern";

export default function GridPatternBg() {
  return (
    <>
      <div className="absolute left-0 top-0 right-0 flex size-full items-center justify-center overflow-hidden">
        <GridPattern
          width={25}
          height={25}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
          )}
        />
      </div>
    </>
  );
}
