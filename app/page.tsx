"use client";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import Link from "next/link";

const DebounceDemo = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <h2 className="font-bold text-2xl">Debounce Hook Demo</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something here..."
        className="p-2 border border-gray-300 rounded"
      />
      <div>
        <h4 className="font-bold text-xl">Output With Debounce</h4>
        <p className="text-sm pb-2">Half a second delay</p>

        <p className="text-2xl">
          {debouncedValue ? (
            <span className="font-semibold">{debouncedValue}</span>
          ) : (
            <span className="text-gray-400">Waiting for input...</span>
          )}
        </p>
      </div>
      <div>
        <h4 className="font-bold text-xl">Output Without Debounce</h4>
        <p className="text-sm pb-2">No delay</p>
        <p className="text-2xl">
          {inputValue ? (
            <span className="font-semibold">{inputValue}</span>
          ) : (
            <span className="text-gray-400">Waiting for input...</span>
          )}
        </p>
      </div>
      <hr />
      <div className="pt-8">
        <p className="font-bold">Article about this debounce hook.</p>
        <Link
          title="Read Article"
          target="_blank"
          href="https://www.owolf.com/blog/react-debounce-hook"
        >
          https://www.owolf.com/blog/react-debounce-hook
        </Link>
      </div>
      <div className="pt-8">
        <p className="font-bold">Link to source code.</p>
        <Link
          title="View Source Code"
          target="_blank"
          href="https://github.com/owolfdev/debounce-hook/blob/main/hooks/useDebounce.ts"
        >
          https://github.com/owolfdev/debounce-hook/blob/main/hooks/useDebounce.ts
        </Link>
      </div>
    </div>
  );
};

export default DebounceDemo;
