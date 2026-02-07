import React from "react";
import down from "../assets/down.svg";

export default function ShortcutBtn({ text = "파트장의 말" }) {
  return (
    <div className="group flex border-[0.7px] border-text w-[7.625rem] gap-[0.3125rem] justify-center items-center p-[0.625rem]">
      <p className="typo-small1 text-text">{text}</p>

      <img
        src={down}
        alt="down"
        className="w-[0.625rem] h-[0.6875rem] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      />
    </div>
  );
}

//<ShortcutBtn text="세션 소개" />