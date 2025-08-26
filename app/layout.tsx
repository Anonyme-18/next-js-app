import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Challenge 1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <header className="p-4 border-b">
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">À propos</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
             <Link href="/dashboard">Dashboard</Link>
             <Link href="/signup">Signup</Link>
          </nav>
        </header>

        <main className="p-8">{children}</main>

        <footer className="p-4 border-t text-center">
          {new Date().getFullYear()} – Challenge 1
        </footer>
      </body>
    </html>
  );
}
