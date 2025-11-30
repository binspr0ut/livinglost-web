import Navbar from "../components/navbar";
import Footer from "../components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | The Living and The Lost",
  description: "Frequently Asked Questions for The Living and The Lost",
};

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-gray-800">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Frequently Asked Questions
        </h1>

        {/* QUESTION 1 */}
        <details className="bg-blue-100 p-4 rounded-lg mb-4 shadow-sm">
          <summary className="cursor-pointer font-semibold">
            Does the app collect personal data?
          </summary>
          <p className="mt-3">
            No. The Living and The Lost does not collect or store any personal
            information such as name, email, or device identifiers. The game is
            designed to respect user privacy.
          </p>
        </details>

        {/* QUESTION 2 */}
        <details className="bg-blue-100 p-4 rounded-lg mb-4 shadow-sm">
          <summary className="cursor-pointer font-semibold">
            Does the online multiplayer feature store my gameplay data?
          </summary>
          <p className="mt-3">
            No. Multiplayer uses Unity Relay, which only transmits gameplay data
            temporarily between players during a session. This information is
            not stored or collected and is used solely to enable co-op gameplay.
          </p>
        </details>

        {/* QUESTION 3 */}
        <details className="bg-blue-100 p-4 rounded-lg mb-4 shadow-sm">
          <summary className="cursor-pointer font-semibold">
            Is Unity Relay safe?
          </summary>
          <p className="mt-3">
            Yes. Unity Relay is a secure and widely used networking service.
            Data transmitted through Relay is not stored, logged, or shared. It
            exists only for the duration of the multiplayer session.
          </p>
        </details>

        {/* QUESTION 4 */}
        <details className="bg-blue-100 p-4 rounded-lg mb-4 shadow-sm">
          <summary className="cursor-pointer font-semibold">
            Does the game use analytics or tracking?
          </summary>
          <p className="mt-3">
            No. The game does not use analytics services, tracking technologies,
            ad networks, or cookies.
          </p>
        </details>

        {/* QUESTION 6 */}
        <details className="bg-blue-100 p-4 rounded-lg mb-4 shadow-sm">
          <summary className="cursor-pointer font-semibold">
            Who can I contact if I have additional questions?
          </summary>
          <p className="mt-3">
            You can reach us at <strong>instagram @thelivingandthelost</strong>{" "}
            for privacy or support inquiries.
          </p>
        </details>
      </div>

      <Footer />
    </>
  );
}
