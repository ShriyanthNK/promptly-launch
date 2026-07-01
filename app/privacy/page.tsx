import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy — Promptly",
  description: "How Promptly collects, uses, and protects your information.",
};

const sections = [
  {
    title: "Information We Collect",
    body: [
      "Promptly is designed with your privacy in mind. The app stores your tasks, due times, and completion history locally on your device. This data never leaves your device unless you explicitly enable a backup or sync feature.",
      "When you sign up for our waitlist through this website, we collect your email address solely to notify you when Promptly becomes available on the App Store.",
      "When you use Promptly, we may collect anonymous, aggregated usage statistics (such as feature usage frequency) to help us improve the app. This data cannot be used to identify you.",
    ],
  },
  {
    title: "Screen Time & Device Data",
    body: [
      "Promptly uses Apple's Screen Time framework (Family Controls, Managed Settings, and Device Activity) to enforce screen time rewards. This framework is privacy-preserving by design — Apple does not allow apps to read raw usage data from other apps. Promptly only receives the information necessary to implement time limits you configure yourself.",
      "We do not sell, share, or transmit your screen time data to any third party.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "Your email address (collected via the waitlist) is used only to send you a one-time notification when Promptly launches. We will not send you marketing emails without your consent, and you can unsubscribe at any time.",
      "Anonymous analytics data is used to understand how people use Promptly so we can prioritize improvements.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "This website uses Vercel for hosting and Resend for email delivery. These services may process your email address as part of delivering our communications. Both are GDPR-compliant services. We do not share your data with any other third parties.",
      "The Promptly app does not include third-party advertising SDKs or data brokers.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Waitlist email addresses are retained until Promptly launches and you have been notified, after which you may request deletion at any time.",
      "Task and app data stored on your device is controlled entirely by you. Deleting the app removes all locally stored data.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You have the right to access, correct, or delete any personal data we hold about you. To make a request, email us at shriyanthnandakumar@gmail.com and we will respond within 30 days.",
      "If you are in the European Economic Area, you have additional rights under the GDPR including the right to data portability and the right to lodge a complaint with your local supervisory authority.",
    ],
  },
  {
    title: "Children's Privacy",
    body: [
      "Promptly is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it promptly.",
      "The Family Mode feature in Promptly is intended to be set up and managed by a parent or guardian.",
    ],
  },
  {
    title: "Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will update the date at the bottom of this page. Continued use of Promptly or this website after any changes constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about this Privacy Policy, please contact us at shriyanthnandakumar@gmail.com.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Legal
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500">Last updated: June 30, 2026</p>
          </div>

          {/* Intro */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl px-6 py-5 mb-10">
            <p className="text-brand-800 leading-relaxed">
              Your privacy matters to us. Promptly is built on the principle
              that your personal data and screen time habits belong to you —
              not us. This policy explains clearly what we collect, why, and
              how we protect it.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {i + 1}. {s.title}
                </h2>
                <div className="space-y-3">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-gray-600 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
