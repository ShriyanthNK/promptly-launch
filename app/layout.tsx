import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Promptly — Do the work. Earn the scroll.",
  description:
    "Promptly puts you back in control. Earn screen time by completing real tasks — and get more done every single day.",
  metadataBase: new URL("https://promptly.app"),
  openGraph: {
    title: "Promptly — Do the work. Earn the scroll.",
    description:
      "A task-first screen-time reward system. Finish your tasks, unlock your apps.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Promptly — Do the work. Earn the scroll.",
    description:
      "A task-first screen-time reward system. Finish your tasks, unlock your apps.",
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
