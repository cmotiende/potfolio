// app/page.tsx
export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-8">
      <h1 className="text-5xl font-bold mb-4 text-center">Hi, I'm Curtis Mayfield Jr.</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        I'm a creative full-stack developer, building smart and professional web apps with AI and innovation.
      </p>
      <a
        href="/portfolio"
        className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        View My Work
      </a>
    </main>
  );
}
