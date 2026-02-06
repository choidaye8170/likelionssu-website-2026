import React, { useState } from "react";
import recruit from "../../assets/recruit.svg";
import recruithover from "../../assets/recruit-hover.svg";

export default function Recruit() {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="relative flex items-center cursor-pointer"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="flex flex-col items-start p-[0.625rem] gap-[0.125rem]">
        <img
          src={isHover ? recruithover : recruit}
          alt="recruit-icon"
          className="w-[1.0625rem] h-[1.0685rem]"
        />
      </div>

      <p
        className={`text-right font-medium text-[0.875rem] leading-normal tracking-[0.1225rem] transition-colors duration-200 ${
          isHover ? "text-[var(--color-primarybrand)]" : "text-text"
        }`}
        style={{ fontFamily: '"JetBrains Mono", monospace' }}
      >
        Recruit
      </p>
      <span
        className={`absolute w-[6.0625rem] h-[1px] left-[0.62rem] bottom-[0.506rem] transition-colors duration-200 ${
          isHover ? "bg-[var(--color-primarybrand)]" : "bg-text"
        }`}
      />
    </div>
  );
}

