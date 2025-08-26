"use client";

import { useEffect, useState } from "react";
import { getUsers, User } from "../signup/actions";

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const u = await getUsers();
      setUsers(u);
    })();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {users.length > 0 ? (
        <ul className="space-y-2">
          {users.map((u, i) => (
            <li
              key={i}
              className="p-3 bg-gray-100 rounded flex justify-between items-center"
            >
              <span className="font-medium text-black">{u.name}</span>
              <span className="text-gray-500 text-sm text-black">{u.email}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-black">Aucun utilisateur inscrit pour le moment.</p>
      )}
    </div>
  );
}
