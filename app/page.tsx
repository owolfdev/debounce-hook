"use client";
import { useState, useEffect } from "react";
import { useDebounce } from "../hooks/useDebounce";
import Link from "next/link";

const DebounceDemo = () => {
  const [inputValue, setInputValue] = useState("");
  const [eventCount, setEventCount] = useState(0);
  const [debouncedEventCount, setDebouncedEventCount] = useState(0);
  const [delay, setDelay] = useState(500); // Default delay set to 500ms
  const debouncedValue = useDebounce(inputValue, delay);

  useEffect(() => {
    if (inputValue !== "") {
      setEventCount((count) => count + 1);
    }
  }, [inputValue]);

  useEffect(() => {
    if (debouncedValue !== "") {
      setDebouncedEventCount((count) => count + 1);
    }
  }, [debouncedValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleDelayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDelay(Number(event.target.value));
  };

  const handleReset = () => {
    setEventCount(0);
    setDebouncedEventCount(0);
  };

  return (
    <div className="flex flex-col gap-4 p-8">
      <h2 className="font-bold text-2xl">Debounce Hook Demo</h2>
      <p className="text-sm pb-4">
        Debouncing is a technique to limit the number of times a function is
        called, ensuring that it only fires once after a specified delay. This
        is crucial for improving performance in applications where events like
        keystrokes or button clicks trigger expensive operations.
      </p>
      <p className="text-sm pb-4">
        <strong>Instructions:</strong>
        <br />
        - Enter some text into the input field below.
        <br />
        - Note the number of events fired with and without debouncing.
        <br />
        <br />
        Imagine each event was a call to a database; the debounced updates would
        significantly reduce the number of calls, providing a performance
        advantage.
      </p>

      <h4 className="font-bold text-xl">Input</h4>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something here..."
        className="p-2 border border-gray-300 rounded"
      />

      <div>
        <h4 className="font-bold text-xl">Output With Debounce</h4>
        <p className="text-sm pb-2">{delay} millisecond delay</p>
        <p className="text-2xl">
          {debouncedValue ? (
            <span className="font-semibold bg-blue-100 px-2">
              {debouncedValue}
            </span>
          ) : (
            <span className="text-gray-400">Waiting for input...</span>
          )}
        </p>
        <p className="text-sm pt-1">Events Fired: {debouncedEventCount}</p>
      </div>
      <div>
        <h4 className="font-bold text-xl">Output Without Debounce</h4>
        <p className="text-sm pb-2">No delay</p>
        <p className="text-2xl">
          {inputValue ? (
            <span className="font-semibold bg-blue-100 px-2">{inputValue}</span>
          ) : (
            <span className="text-gray-400">Waiting for input...</span>
          )}
        </p>
        <p className="text-sm  pt-1">Events Fired: {eventCount}</p>
      </div>
      <label className="font-bold pt-8">Select Debounce Delay (ms):</label>
      <select
        value={delay}
        onChange={handleDelayChange}
        className="p-2 border border-gray-300 rounded mb-4"
      >
        <option value={100}>100 ms</option>
        <option value={300}>300 ms</option>
        <option value={500}>500 ms</option>
        <option value={1000}>1000 ms</option>
        <option value={1500}>1500 ms</option>
        <option value={2000}>2000 ms</option>
      </select>

      <div>
        <button
          onClick={handleReset}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Reset events count
        </button>
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
