"use client";

import { useEffect, useRef } from "react";
import { BsSearch } from "react-icons/bs";

export default function TopbarSearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const kbdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="relative md:w-60 lg:w-80">
      <input
        ref={inputRef}
        type="text"
        placeholder="جستجو کنید . . ."
        className="
          w-full
          border
          py-1 lg:py-2 px-2 lg:px-4
          rounded-field
          placeholder:text-xs lg:placeholder:text-base
          bg-base-300
      "
        onFocus={() => kbdRef.current?.classList.add("hidden")}
        onBlur={() => kbdRef.current?.classList.remove("hidden")}
      />
      <div ref={kbdRef} className="absolute left-3 lg:left-4 top-1 lg:top-2">
        <kbd className="hidden lg:block kbd kbd-sm lg:kbd-md">CTRL + K</kbd>
        <BsSearch className="inline lg:hidden size-4" />
      </div>
    </div>
  );
}
