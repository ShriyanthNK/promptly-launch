import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions — Promptly",
  description: "The terms governing your use of Promptly.",
};

const sections = [
  {
    title: "Acceptance of Terms",
    body: [
      "By downloading, installing, or using Promptly (the \"App\") or this website, you agree to be bound by these Terms & Conditions. If you do not agree, do not use the App or this website.",
      "These terms apply to all users of Promptly, including users of the free tier and any paid subscription plans.",
    ],
  },
  {
    title: "Use of the App",
    body: [
      "Promptly is a personal productivity tool designed to help you manage tasks and earn screen time rewards. You may use Promptly for personal, non-commercial purposes in accordance with these terms.",
      "You agree not to misuse the App, including attempting to bypass, circumvent, or disable any screen time enforcement features, reverse engineer the App, or use it in any way that violates applicable law.",
      "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.",
    ],
  },
  {
    title: "Screen Time Features",
    body: [
      "Promptly uses Apple's Screen Time framework to implement app restrictions and time limits. The effectiveness of these features depends on your device settings and iOS version. We do not guarantee that screen time restrictions cannot be bypassed through device settings, app deletion, or other means.",
      "Promptly is a tool to support your goals — it is not a substitute for parental supervision. If you are using Family Mode to manage a child's device, you remain responsible for appropriate oversight.",
    ],
  },
  {
    title: "Subscriptions & Payments",
    body: [
      "Promptly offers a free tier with core features. A Pro subscription with advanced features will be available at a price announced at launch. All payments are processed through Apple's App Store and are subject to Apple's payment terms.",
      "Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period. You can manage and cancel subscriptions in your Apple ID account settings.",
      "We reserve the right to change pricing with reasonable notice. Changes will not affect your current billing period.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "Promptly, its logo, and all related content are the intellectual property of Promptly's developers. You may not copy, modify, distribute, or create derivative works based on the App without our explicit written permission.",
      "Your task data and personal content remain yours. We claim no ownership over content you create within the App.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    body: [
      "Promptly is provided \"as is\" without warranties of any kind, express or implied. We do not warrant that the App will be error-free, uninterrupted, or free of security vulnerabilities.",
      "We do not guarantee that using Promptly will result in increased productivity, reduced screen time, or any other specific outcome. Results depend entirely on your own use of the App.",
    ],
  },
  {
    title: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, Promptly's developers shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to loss of data, loss of productivity, or device issues.",
      "Our total liability to you for any claim arising from these terms or use of the App shall not exceed the amount you paid for the App in the twelve months preceding the claim.",
    ],
  },
  {
    title: "Termination",
    body: [
      "We reserve the right to suspend or terminate your access to Promptly at any time if you violate these terms. You may stop using the App at any time by deleting it from your device.",
      "Upon termination, all locally stored data will be removed when you delete the App. Any data associated with your account may be deleted after a reasonable retention period.",
    ],
  },
  {
    title: "Changes to These Terms",
    body: [
      "We may update these Terms & Conditions from time to time. We will notify you of significant changes via the App or email. Continued use of Promptly after changes are posted constitutes your acceptance of the updated terms.",
    ],
  },
  {
    title: "Governing Law",
    body: [
      "These terms are governed by the laws of the United States. Any disputes arising from these terms or your use of Promptly shall be resolved through binding arbitration, except where prohibited by law.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about these Terms & Conditions, please contact us at shriyanthnandakumar@gmail.com.",
    ],
  },
];

export default function TermsPage() {
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
              Terms & Conditions
            </h1>
            <p className="text-gray-500">Last updated: June 30, 2026</p>
          </div>

          {/* Intro */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl px-6 py-5 mb-10">
            <p className="text-brand-800 leading-relaxed">
              Please read these terms carefully before using Promptly. They
              explain your rights, our responsibilities, and the rules that
              govern use of the app and this website.
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
