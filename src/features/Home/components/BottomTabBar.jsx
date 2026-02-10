import React from "react";
import BottomTab from "./BottomTab";

export default function BottomTabbar() {
  return (
    <div className="w-full bg-white flex">
      <BottomTab text="ABOUT US" />
      <BottomTab text="PART" />
      <BottomTab text="PROJECT" />
    </div>
  );
}
