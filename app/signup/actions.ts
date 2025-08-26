"use server";

export type User = {
  name: string;
  email: string;
};

let users: User[] = []; // stockage temporaire en mémoire

// Action pour enregistrer un nouvel utilisateur
export async function registerUser(formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  if (!name || !email || !password) {
    return { success: false, message: "Tous les champs sont obligatoires" };
  }

  users.push({ name, email });

  return { success: true };
}

// Fonction pour récupérer tous les utilisateurs
export async function getUsers(): Promise<User[]> {
  return users;
}
