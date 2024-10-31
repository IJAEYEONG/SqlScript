// src/components/Sidebar.tsx
export default function Sidebar() {
  return (
    <div className="w-64 p-4 bg-gray-100 border-r border-gray-300">
      <input
        type="text"
        placeholder="Search CCTV"
        className="w-full p-2 mb-4 border border-gray-400 rounded"
      />
      <div>
        <h4 className="text-lg font-semibold mb-2">Filter by Type</h4>
        <button className="w-full p-2 mb-2 bg-gray-200 rounded">Highway</button>
        <button className="w-full p-2 mb-2 bg-gray-200 rounded">City</button>
        <button className="w-full p-2 mb-2 bg-gray-200 rounded">Traffic</button>
      </div>
    </div>
  );
}
