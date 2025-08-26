import { notFound } from "next/navigation";

export default async function PostPage({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok) return notFound();
  const post: { id: number; title: string; body: string } = await res.json();

  return (
    <article className="prose max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
