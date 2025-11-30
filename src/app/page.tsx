import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen flex flex-col items-center justify-center bg-stone-100 pt-20">
        <img src="/images/hero.png" className="w-52 mt-10" />

        <h1 className="text-5xl text-black font-bold mt-6">
          The Living & The Lost
        </h1>
        <p className="text-xl text-gray-700 mt-3">
          Solve mysteries. Across two worlds. Together.
        </p>

        <a
          href="/privacy-policy"
          className="mt-8 bg-amber-800 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600 transition"
        >
          View Privacy Policy
        </a>
      </section>

      <Footer />
    </>
  );
}
