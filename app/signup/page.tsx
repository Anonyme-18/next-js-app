"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { registerUser, getUsers, User } from "./actions";

export default function SignupPage() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    (async () => {
      const u = await getUsers();
      setUsers(u);
    })();
  }, []);

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-6">Inscription</h1>

      <form
        action={async (formData) => {
          await registerUser(formData);
          router.push("/dashboard");
        }}
        className="space-y-4"
      >
        <div>
          <label className="block mb-1 text-black">Nom</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-black">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block mb-1 text-black">Mot de passe</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          S’inscrire
        </button>
      </form>
    </div>
  );
}
