"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="text-center py-20">
      <h2 className="text-red-600 font-bold text-xl">Erreur : {error.message}</h2>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Réessayer
      </button>
    </div>
  );
}
