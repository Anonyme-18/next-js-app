"use client";

import { useState } from "react";

export default function DashboardClient({
  data,
}: {
  data: { id: number; name: string; email: string; phone: string }[];
}) {
  const [visible, setVisible] = useState(5);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <table className="min-w-full text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-black">ID</th>
            <th className="p-3 text-black">Nom</th>
            <th className="p-3 text-black">Email</th>
            <th className="p-3 text-black">Téléphone</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, visible).map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-50">
              <td className="p-3 text-black">{user.id}</td>
              <td className="p-3 text-black">{user.name}</td>
              <td className="p-3 text-black">{user.email}</td>
              <td className="p-3 text-black">{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {visible < data.length && (
        <div className="p-4 text-center">
          <button
            onClick={() => setVisible((v) => v + 5)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Voir plus
          </button>
        </div>
      )}
    </div>
  );
}
