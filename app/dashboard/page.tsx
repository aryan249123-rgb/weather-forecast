"use client"
import SearchBar from "@/components/searchBar/searchBar";
import WeatherCard from "@/components/weatherCard/weatherCard";
import { useState } from "react";

export default function Dashboard() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState(0);
  const [condition, setCondition] = useState("");

  const handleSearch = (cityName: string) => {
    setCity(cityName);
    setTemp(28);
    setCondition("Sunny");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100">
      <SearchBar onSearch={handleSearch} />

      {city && (
        <WeatherCard city={city} temperature={temp} condition={condition} />
      )}
    </div>
  );
}
