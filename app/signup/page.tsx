"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "./actions";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const result = await registerUser(formData);
    if (result.success) {
      router.push("/dashboard"); // redirection
    } 
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Inscription</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-black font-medium mb-1">Nom</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-black font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        <div>
          <label className="block text-black font-medium mb-1">Mot de passe</label>
          <input
            type="password"
            name="password"
            className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          S’inscrire
        </button>
      </form>
    </div>
  );
}
