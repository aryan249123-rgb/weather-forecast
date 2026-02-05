type Props = {
  city: string;
  temperature: number;
  condition: string;
};

export default function WeatherCard({ city, temperature, condition }: Props) {
  return (
    <div className="mt-6 p-6 rounded-2xl bg-white shadow-lg text-center w-72">
      <h2 className="text-2xl font-bold">{city}</h2>
      <p className="text-4xl font-semibold mt-2">{temperature}°C</p>
      <p className="text-gray-500 mt-1">{condition}</p>
    </div>
  );
}
