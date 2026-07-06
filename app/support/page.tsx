import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Support — Pactly",
  description: "Get help with Pactly. Find answers to common questions or contact us directly.",
};

const faqs = [
  {
    q: "How do I add a task?",
    a: "Tap the + button in the bottom-right corner of the Today tab. Give the task a name, set a due time, and choose how many screen-time minutes it's worth. Hit Save and it'll appear in your list.",
  },
  {
    q: "My screen time isn't unlocking after I complete a task — what do I do?",
    a: "First, make sure Pactly has Screen Time permission. Go to your iPhone's Settings → Screen Time → and confirm Pactly is listed as an approved app. If the issue persists, force-quit Pactly and reopen it — the app re-syncs your earned time whenever it launches.",
  },
  {
    q: "How does the Reward Bank work?",
    a: "Every task you complete deposits screen-time minutes into your Reward Bank. Those minutes are applied to lift the app restrictions Pactly manages for you. The bank resets to 0 each day at midnight so you're always earning fresh.",
  },
  {
    q: "Can I delay a task without losing the reward?",
    a: "Yes. Tap the task row and choose 'Delay'. You can push it forward 15 minutes, 30 minutes, an hour, or to a custom time. The reward stays attached — you just need to complete it before the new deadline.",
  },
  {
    q: "How do I edit or delete a task?",
    a: "Long-press any task row to bring up the context menu, then tap Edit or Delete. You can also swipe left on a task for a quick delete option.",
  },
  {
    q: "What is the streak counter?",
    a: "Your streak increases by 1 for every calendar day where you completed every task you created. If you miss a day (had tasks but didn't finish them all), the streak resets to 0. Days with no tasks at all don't break your streak.",
  },
  {
    q: "I accidentally completed a task — can I undo it?",
    a: "Yes. Tap the checkmark on the completed task row and it'll toggle back to pending. The screen time earned will also be reversed.",
  },
  {
    q: "Will Pactly drain my battery?",
    a: "Pactly uses Apple's native Screen Time and DeviceActivity frameworks, which are very battery-efficient. The background monitor only activates when needed and does not run a continuous loop.",
  },
];

const troubleshooting = [
  {
    title: "Screen Time permission not granted",
    steps: [
      "Open the iPhone Settings app.",
      "Scroll down and tap Screen Time.",
      "Make sure Screen Time is turned on.",
      "Reopen Pactly and it will prompt you to authorize access.",
    ],
  },
  {
    title: "Notifications not arriving",
    steps: [
      "Go to Settings → Notifications → Pactly.",
      "Make sure Allow Notifications is enabled.",
      "Check that Alerts and Sounds are turned on.",
      "If you use Focus modes, add Pactly to your Focus allowed-apps list.",
    ],
  },
  {
    title: "App feels slow or data looks wrong",
    steps: [
      "Force-quit Pactly by swiping up from the Home Bar and swiping the app card away.",
      "Reopen the app — it will reload all data from your device storage.",
      "If the issue continues, try restarting your iPhone.",
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#FAFAFA] pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">
              Support
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              How can we help?
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              Find answers to common questions below, or email us directly and we&apos;ll get back to you.
            </p>
          </div>

          {/* Contact card */}
          <div className="bg-brand-50 border border-brand-100 rounded-2xl px-6 py-6 mb-14 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-bold text-gray-900 mb-1">Email support</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Can&apos;t find your answer below? We typically reply within 24 hours.
              </p>
            </div>
            <a
              href="mailto:shriyanthnandakumar@gmail.com"
              className="inline-block bg-brand-500 text-white font-semibold text-sm px-5 py-3 rounded-xl hover:bg-brand-600 transition-colors whitespace-nowrap"
            >
              shriyanthnandakumar@gmail.com
            </a>
          </div>

          {/* FAQ */}
          <section className="mb-14">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-6">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="bg-white border border-gray-100 rounded-2xl px-6 py-5 shadow-sm"
                >
                  <p className="font-semibold text-gray-900 mb-2">{item.q}</p>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Troubleshooting */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Troubleshooting
            </h2>
            <div className="space-y-8">
              {troubleshooting.map((item) => (
                <div key={item.title}>
                  <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                  <ol className="space-y-2">
                    {item.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-gray-600">
                        <span className="flex-shrink-0 w-5 h-5 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-xs">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          {/* Footer note */}
          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-400 text-sm">
              Pactly is built by a single developer. If something&apos;s broken, I genuinely want to know — email me at{" "}
              <a href="mailto:shriyanthnandakumar@gmail.com" className="text-brand-500 hover:underline">
                shriyanthnandakumar@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
