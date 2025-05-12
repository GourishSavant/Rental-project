
import React, { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";
import Card from "@mui/material/Card";

export default function DashboardPage() {
  const [bookings, setBookings] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(1000);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/bookings");
        const data = await response.json();
        setBookings(data);
        const total = data.reduce(
          (acc, item) =>
            acc + parseFloat(item.amount.replace("$", "").replace(",", "")),
          0
        );
        setTotalRevenue(total);
      } catch (err) {
        console.error("Failed to fetch bookings", err);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card className="p-4 text-center">
          <div className="text-sm text-gray-500">Total Revenue</div>
          <div className="text-xl font-bold">${totalRevenue}</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-sm text-gray-500">Total Earning</div>
          <div className="text-xl font-bold">${totalRevenue}</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-sm text-gray-500">Total Rented</div>
          <div className="text-xl font-bold">${totalRevenue}</div>
        </Card>
      </div>

      {/* Table Section */}
      <div className="bg-white p-4 rounded-xl shadow">
        <div className="flex justify-between mb-4">
          <div className="flex gap-6 text-sm font-medium">
            <span className="text-gray-500">Earning statistics</span>
            <span className="text-purple-600 border-b-2 border-purple-600 pb-1 cursor-pointer">
              Recent bookings
            </span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <CalendarDays className="w-5 h-5" />
            January 14, 2025 - January 20, 2025
          </div>
        </div>

        {/* Table Header */}
        <div className="grid grid-cols-6 gap-4 text-xs text-gray-400 border-b py-2">
          <div>CAR</div>
          <div>$PAYMENT AMOUNT</div>
          <div>$PRICE/DAY</div>
          <div>STATUS</div>
          <div className="col-span-2">DATE</div>
        </div>

        {/* Table Rows */}
        {bookings.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 gap-4 text-sm text-gray-700 py-3 border-b"
          >
            <div>{item.car}</div>
            <div>{item.amount}</div>
            <div>{item.price}</div>
            <div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium border ${
                  item.statusColor === "blue"
                    ? "text-blue-600 border-blue-600"
                    : item.statusColor === "purple"
                    ? "text-purple-600 border-purple-600"
                    : item.statusColor === "green"
                    ? "text-green-600 border-green-600"
                    : "text-red-600 border-red-600"
                }`}
              >
                {item.status}
              </span>
            </div>
            <div className="col-span-2">
              {item.date} <span className="text-xs ml-2">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
