import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const BASE_URL = "https://promptly-launch.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Promptly — Do the work. Earn the scroll.",
    template: "%s | Promptly",
  },
  description:
    "Promptly is the iOS app that rewards you with screen time for completing tasks. Stop fighting your phone — start earning it. Built for students, professionals, and anyone who wants to spend less time scrolling.",
  metadataBase: new URL(BASE_URL),
  keywords: [
    "screen time reward app",
    "earn screen time iPhone",
    "productivity app iOS",
    "task manager screen time",
    "focus app for students",
    "procrastination app iPhone",
    "screen time control app",
    "digital wellbeing app iOS",
    "app blocker reward system",
    "habit tracker iPhone",
    "phone addiction app",
    "study productivity app",
  ],
  authors: [{ name: "Shriyanth Nanda Kumar" }],
  creator: "Shriyanth Nanda Kumar",
  openGraph: {
    title: "Promptly — Do the work. Earn the scroll.",
    description:
      "The iOS app that rewards you with screen time for completing tasks. Finish your to-do list, unlock your apps.",
    type: "website",
    url: BASE_URL,
    siteName: "Promptly",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promptly — Do the work. Earn the scroll.",
    description:
      "The iOS app that rewards you with screen time for completing tasks. Finish your to-do list, unlock your apps.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Promptly",
  url: BASE_URL,
  description:
    "Earn screen time by completing real tasks. The iOS productivity app that rewards you for getting things done.",
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Promptly",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "iOS",
  description:
    "Promptly is the task-first screen time reward app for iPhone. Add your tasks, get reminded when they're due, and earn screen time for completing them. Built for students, professionals, and anyone who wants to spend less time scrolling and more time doing.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Shriyanth Nanda Kumar",
  },
  featureList: [
    "Task-based screen time rewards",
    "Smart due-time reminders",
    "Reward Bank for earned screen time",
    "Day streaks and habit tracking",
    "Productivity history and insights",
    "Family Mode for parents and kids",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
