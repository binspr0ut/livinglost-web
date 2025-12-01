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

      <div className="min-h-screen bg-linear-to-b from-amber-100 to-amber-50 pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-amber-900">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h1>

          {/* QUESTION 1 */}
          <details className="bg-amber-50 p-4 rounded-lg mb-4 shadow-sm border border-amber-200">
            <summary className="cursor-pointer font-semibold text-amber-900">
              Does the app collect personal data?
            </summary>
            <p className="mt-3 text-amber-800">
              No. The Living and The Lost does not collect or store any personal
              information such as name, email, or device identifiers. The game
              is designed to respect user privacy.
            </p>
          </details>

          {/* QUESTION 2 */}
          <details className="bg-amber-50 p-4 rounded-lg mb-4 shadow-sm border border-amber-200">
            <summary className="cursor-pointer font-semibold text-amber-900">
              Does the online multiplayer feature store my gameplay data?
            </summary>
            <p className="mt-3 text-amber-800">
              No. Multiplayer uses Unity Relay, which only transmits gameplay
              data temporarily between players during a session. This
              information is not stored or collected and is used solely to
              enable co-op gameplay.
            </p>
          </details>

          {/* QUESTION 3 */}
          <details className="bg-amber-50 p-4 rounded-lg mb-4 shadow-sm border border-amber-200">
            <summary className="cursor-pointer font-semibold text-amber-900">
              Is Unity Relay safe?
            </summary>
            <p className="mt-3 text-amber-800">
              Yes. Unity Relay is a secure and widely used networking service.
              Data transmitted through Relay is not stored, logged, or shared.
              It exists only for the duration of the multiplayer session.
            </p>
          </details>

          {/* QUESTION 4 */}
          <details className="bg-amber-50 p-4 rounded-lg mb-4 shadow-sm border border-amber-200">
            <summary className="cursor-pointer font-semibold text-amber-900">
              Does the game use analytics or tracking?
            </summary>
            <p className="mt-3 text-amber-800">
              No. The game does not use analytics services, tracking
              technologies, ad networks, or cookies.
            </p>
          </details>

          {/* QUESTION 5 */}
          <details className="bg-amber-50 p-4 rounded-lg mb-4 shadow-sm border border-amber-200">
            <summary className="cursor-pointer font-semibold text-amber-900">
              Who can I contact if I have additional questions?
            </summary>
            <p className="mt-3 text-amber-800">
              You can reach us via Instagram at{" "}
              <strong className="text-amber-900">@thelivingandthelost</strong>{" "}
              for privacy or support inquiries.
            </p>
          </details>
        </div>
      </div>

      <Footer />
    </>
  );
}
