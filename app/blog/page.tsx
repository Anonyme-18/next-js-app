import Link from "next/link";

export default async function BlogPage() {
  // fetch côté serveur
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) throw new Error("Impossible de charger les posts");
  const posts: { id: number; title: string; body: string }[] = await res.json();

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6"> Blog</h1>
      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="p-4 shadow rounded-lg "
          >
            <Link href={`/blog/${post.id}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.body.slice(0, 80)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
