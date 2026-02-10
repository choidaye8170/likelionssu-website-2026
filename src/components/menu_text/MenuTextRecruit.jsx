import React from "react";
import recruit from "../../assets/recruit.svg";
import recruithover from "../../assets/recruit-hover.svg";
import recruitwhite from "../../assets/recruit-white.svg";

export default function MenuTextRecruit({ variant = "default", isHover = false }) {
  const isWhite = variant === "white";

  return (
    <div
      className={`relative flex items-center ${
        isWhite ? "gap-[0.75rem]" : "gap-[0.5rem]"
      }`}
    >
      {/* Text */}
      <p
        className={`
          ${isWhite ? "typo-cardtexte sm:hidden" : "typo-cardtexte"}
          ${isWhite ? "sm:hidden" : ""}
        `}
        style={{
          color: isHover
            ? "var(--color-primarybrand)"
            : isWhite
            ? "var(--Color, #FFF)"
            : "var(--color-text)",
        }}
      >
        RECRUIT
      </p>

      {/* white 웹버전 전용 텍스트 */}
      {isWhite && (
        <p
          className="hidden sm:block"
          style={{
            color: isHover ? "var(--color-primarybrand)" : "var(--Color, #FFF)",
            textAlign: "right",
            fontFamily: '"JetBrains Mono"',
            fontSize: "1.5rem",
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "1.875rem",
          }}
        >
          RECRUIT
        </p>
      )}

      {/* Icon */}
      <img
        src={isHover ? recruithover : isWhite ? recruitwhite : recruit}
        alt="recruit-icon"
        className={`${
          isWhite
            ? "w-[1.125rem] h-[1.13131rem] sm:w-[1.59375rem] sm:h-[1.60275rem]"
            : "w-[1.0625rem] h-[1.0685rem]"
        }`}
      />

      {/* 기본 underline (default용) */}
      {!isWhite && (
        <span
          className="absolute h-[1px] bottom-[-0.07rem]"
          style={{
            width: "5.75rem",
            backgroundColor: isHover
              ? "var(--color-primarybrand)"
              : "var(--color-text)",
          }}
        />
      )}

      {/* white 모바일 선 */}
      {isWhite && (
        <span
          className="absolute h-[1px] bottom-[-0.07rem] sm:hidden"
          style={{
            width: "6.46875rem",
            backgroundColor: isHover
              ? "var(--color-primarybrand)"
              : "var(--Color, #FFF)",
          }}
        />
      )}

      {/* white 웹 선 */}
      {isWhite && (
        <span
          className="absolute h-[1px] bottom-[-0.07rem] hidden sm:block"
          style={{
            width: "8.625rem",
            backgroundColor: isHover
              ? "var(--color-primarybrand)"
              : "var(--Color, #FFF)",
          }}
        />
      )}
    </div>
  );
}
