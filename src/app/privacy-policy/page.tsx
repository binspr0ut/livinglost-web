import Navbar from "../components/navbar";
import Footer from "../components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The Living and The Lost",
};

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 text-white-800">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mb-6">
          The Living & The Lost respects your privacy. This Privacy Policy
          explains how the App handles information when you use our gameplay
          features, including online co-op functionality.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          1. No Personal Data Collection
        </h2>
        <p className="mb-4">
          The App does <strong>not</strong> collect, store, or request any
          personally identifiable information such as name, email, phone number,
          address, or location. No personal identifiers or device-level tracking
          data are collected or stored.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          2. Gameplay Data Processing (Non-Personal)
        </h2>
        <p className="mb-4">
          The App may process minimal gameplay-related data solely to make the
          game work properly. Examples include: puzzle progression, player
          interactions, and session status. This data is temporary,
          non-personal, and never stored or used for analytics.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          3. Use of Unity Relay (Online Multiplayer)
        </h2>
        <p className="mb-4">
          The App uses <strong>Unity Relay</strong> to enable real-time online
          co-op gameplay. Unity Relay temporarily transmits gameplay data (such
          as player movement, actions, and interactions) between players to
          maintain multiplayer functionality.
        </p>

        <p className="mb-4">
          Unity Relay does <strong>not</strong> store, log, or collect this
          data. It is processed only in real time and never used for analytics,
          advertising, or tracking.
        </p>

        <p className="mb-4">
          For more information, visit Unity’s Privacy Policy:{" "}
          <a
            href="https://unity.com/legal/privacy-policy"
            className="text-blue-600 underline"
            target="_blank"
          >
            https://unity.com/legal/privacy-policy
          </a>
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          4. No Tracking, Analytics, or Advertising
        </h2>
        <p className="mb-4">
          The App does not include advertising SDKs, analytics services,
          tracking tools, or third-party cookies. No behavioral or personal data
          is ever tracked or shared.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          5. Children’s Privacy
        </h2>
        <p className="mb-4">
          Since the App does not collect personal information, it complies with
          COPPA, GDPR-K, and other children’s privacy regulations. The App is
          suitable for all ages.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">6. Data Security</h2>
        <p className="mb-4">
          No personal data is stored or transmitted. Temporary gameplay
          information transmitted by Unity Relay is protected by Unity’s secure
          infrastructure.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">8. Contact Us</h2>
        <p className="mb-4">
          If you have questions about this Privacy Policy, please contact at
          instagram:
          <br />
          <strong>@thelivingandthelost</strong>
        </p>
      </div>

      <Footer />
    </>
  );
}
