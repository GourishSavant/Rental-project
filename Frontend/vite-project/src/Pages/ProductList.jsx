import React, { useState } from "react";
import { Heart, Filter, LayoutGrid, List } from "lucide-react";
import L2 from "../assets/L2.jpg"

const carData = [
  {
    id: 1,
    year: 2023,
    title: "Audi Q7",
    subtitle: "Premium Plus",
    type: "SUV",
    seats: 7,
    doors: 5,
    luggage: 4,
    price: 250,
    image: L2,
  },
    {
    id: 1,
    year: 2023,
    title: "Audi Q7",
    subtitle: "Premium Plus",
    type: "SUV",
    seats: 7,
    doors: 5,
    luggage: 4,
    price: 250,
    image: L2,
  },
    {
    id: 1,
    year: 2023,
    title: "Audi Q7",
    subtitle: "Premium Plus",
    type: "SUV",
    seats: 7,
    doors: 5,
    luggage: 4,
    price: 250,
    image: L2,
  },
];

function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCars = carData.filter((car) =>
    car.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" text-black min-h-screen px-6 py-8">
      {/* Top search & filter bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        {/* Search input */}
        <div className="flex flex-1 items-center bg-gray-200 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Search car name, model"
            className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filter + View Toggle Buttons */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 text-sm">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
            <LayoutGrid className="w-5 h-5 text-gray-400" />
          </button>
          <button className="p-2 bg-gray-800 rounded-full hover:bg-gray-700">
            <List className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Car Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredCars.map((car) => (
          <div
            key={car.id}
            className="bg-gray-200 rounded-2xl p-4 shadow-lg relative"
          >
            <div className="absolute top-4 left-4 bg-gray-200 text-sm px-2 py-1 rounded">
              {car.year}
            </div>
            <div className="absolute top-4 right-4 cursor-pointer">
              <Heart className="w-5 h-5 text-gray-400 hover:text-pink-500" />
            </div>

            <img
              src={car.image}
              alt={car.title}
              className="w-full h-40 object-contain my-4"
            />

            <div className="text-sm text-gray-400">{car.subtitle}</div>
            <div className="text-lg font-semibold">{car.title}</div>

            <div className="flex gap-3 text-xs text-gray-400 mt-3">
              <span>{car.type}</span>
              <span>🚗 {car.seats}</span>
              <span>🧳 {car.luggage}</span>
              <span>🚪 {car.doors}</span>
            </div>

            <div className="flex justify-between items-center mt-4">
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-full">
                Rent Now
              </button>
              <div className="text-lg font-bold">
                ${car.price} <span className="text-sm font-normal">/day</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
