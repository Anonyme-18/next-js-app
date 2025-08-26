export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="text-white">
      <h2 className="text-xl font-semibold mb-4">Section À propos</h2>
      {children}
    </section>
  );
}
