"use client";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

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
        placeholder="Type something..."
        className="p-2 border border-gray-300 rounded"
      />
      <div>
        <h4 className="font-bold text-xl">Output With Debounce</h4>
        <p className="text-sm pb-2">Half a second delay</p>

        <p className="text-2xl">
          <span className="font-semibold">{debouncedValue}</span>
        </p>
      </div>
      <div>
        <h4 className="font-bold text-xl">Output Without Debounce</h4>
        <p className="text-sm pb-2">No delay</p>
        <p className="text-2xl">
          <span className="font-semibold">{inputValue}</span>
        </p>
      </div>
    </div>
  );
};

export default DebounceDemo;
