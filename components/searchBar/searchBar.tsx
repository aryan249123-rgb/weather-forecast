"use client";

import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState("");

  return (
    <div className="flex gap-3">
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className="px-4 py-2 rounded-lg border w-64 outline-none text-black"
      />
      <button
        onClick={() => onSearch(city)}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold"
      >
        Search
      </button>
    </div>
  );
}
