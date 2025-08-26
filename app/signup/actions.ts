"use server";

export type User = {
  name: string;
  email: string;
};

// ✅ const suffit ici
const users: User[] = [];

export async function registerUser(formData: FormData) {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";

  if (!name || !email) {
    throw new Error("Nom et email requis");
  }

  users.push({ name, email });

  return { success: true };
}

export async function getUsers() {
  return users;
}
