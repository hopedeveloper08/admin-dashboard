"use client";

import { themeChange, themeInitialization } from "@/lib/theme";
import { useEffect, useRef } from "react";

import { BsMoon, BsSun } from "react-icons/bs";

export default function TopbarThemeSwap() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    themeInitialization()
    if (ref.current) ref.current.checked = localStorage.getItem("theme") === "dark";
  }, []);

  return (
    <button className="btn my-auto btn-ghost btn-circle size-8 lg:size-12">
      <label className="swap swap-rotate">
        <input
          ref={ref}
          type="checkbox"
          className="theme-controller"
          value="synthwave"
          onChange={(e) => themeChange(e.target.checked)}
        />
        <BsSun className="swap-off size-5 lg:size-6 fill-current" />
        <BsMoon className="swap-on size-5 lg:size-6 fill-current" />
      </label>
    </button>
  );
}
