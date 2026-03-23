import React, { useState } from "react";
import recruit from "../../assets/recruit.svg";
import recruithover from "../../assets/recruit-hover.svg";
import recruitwhite from "../../assets/recruit-white.svg";

export default function MenuTextRecruit({
  variant = "default",
  isHover = false,
  onClick,
}) {
  const [isInnerHover, setIsInnerHover] = useState(false);
  const hovered = isHover || isInnerHover;
  const isWhite = variant === "white";
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      {...(onClick ? { type: "button" } : {})}
      className={`relative gap-[0.75rem] ${onClick ? "cursor-pointer bg-transparent border-0 p-0 text-left" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setIsInnerHover(true)}
      onMouseLeave={() => setIsInnerHover(false)}
    >

      {/* 화이트 모바일용: 글자+아이콘+선 가운데 정렬 */}
      {isWhite && (
        <div className="sm:hidden flex flex-col items-center justify-center gap-[0.3125rem]">
          <div className="flex items-end justify-center gap-[0.56rem]">
            <p
              className="typo-cardtexte"
              style={{ color: hovered ? "var(--color-primarybrand)" : "#FFF" }}
            >
              LIKELION
            </p>

            <img
              src={hovered ? recruithover : recruitwhite}
              alt="recruit-icon"
              className="h-[1.13131rem] mb-[0.12rem]"
            />
          </div>

          {/* Underline */}
          <span
            className="h-[1px] w-[7.5rem]"
            style={{
              backgroundColor: hovered ? "var(--color-primarybrand)" : "#FFF",
            }}
          />
        </div>
      )}

      {/* 화이트 웹용: 글자+아이콘+선 가운데 정렬 */}
      {isWhite && (
        <div className="hidden sm:flex flex-col items-center justify-center gap-[0.3125rem]">
          <div className="flex items-center justify-center gap-[0.75rem]">
            <p
              style={{
                color: hovered ? "var(--color-primarybrand)" : "#FFF",
                textAlign: "center",
                fontFamily: '"JetBrains Mono"',
                fontSize: "1.5rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "1.875rem",
              }}
            >
              LIKELION
            </p>

            <img
              src={hovered ? recruithover : recruitwhite}
              alt="recruit-icon"
              className="w-[1.59375rem] h-[1.60275rem]"
            />
          </div>

          <span
            className="h-[1px] w-[9.75rem]"
            style={{
              backgroundColor: hovered ? "var(--color-primarybrand)" : "#FFF",
            }}
          />
        </div>
      )}

      {/* 기본(default) 버전 */}
      {!isWhite && (
        <div className="flex items-center gap-[0.5rem]">
          <p
            className="typo-cardtexte"
            style={{
              color: hovered ? "var(--color-primarybrand)" : "var(--color-text)",
            }}
          >
            Recruit
          </p>

          <img
            src={hovered ? recruithover : recruit}
            alt="recruit-icon"
            className="w-[1.0625rem] h-[1.0685rem]"
          />

          {/* 기본 underline */}
          <span
            className="absolute h-[1px] bottom-[-0.07rem]"
            style={{
              width: "5.75rem",
              backgroundColor: hovered ? "var(--color-primarybrand)" : "var(--color-text)",
            }}
          />
        </div>
      )}

    </Wrapper>
  );
}
