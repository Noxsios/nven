import React from "react";
import { ColorScheme } from "@mantine/core";

export function Logo({ colorScheme }: { colorScheme: ColorScheme }) {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      width={30}
      fill={colorScheme === "dark" ? "#fff" : "#000"}
    >
      <g>
        <g>
          <rect x="72.348" y="300.522" width="133.565" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <path
            d="M395.13,233.739V0H116.87v233.739H5.565V512h500.87V233.739H395.13z M150.261,33.391h211.478v200.348H150.261V33.391z
			 M239.304,478.609H38.957V267.13h200.348V478.609z M473.043,478.609H272.696V267.13h200.348V478.609z"
          />
        </g>
      </g>
      <g>
        <g>
          <rect x="306.087" y="300.522" width="133.565" height="33.391" />
        </g>
      </g>
      <g>
        <g>
          <rect x="183.652" y="66.783" width="144.696" height="33.391" />
        </g>
      </g>
    </svg>
  );
}
