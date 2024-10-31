"use client"; // 클라이언트에서 렌더링하도록 지정

import Sidebar from "./components/Sidebar";
import Map from "./components/Map";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="flex items-center justify-between p-4 bg-white border-b border-gray-300">
          <h1 className="text-xl font-bold">CCTV Map</h1>
          <input
            type="text"
            placeholder="Search by Area"
            className="p-2 border border-gray-400 rounded"
          />
        </header>
        <Map />
      </div>
    </div>
  );
}
