import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "DevKit - 30+ Free Developer Tools | JSON Formatter, JWT Decoder, Regex Tester",
  description: "DevKit is a collection of 30+ free, privacy-focused developer tools. Format JSON, decode JWTs, test regex, generate passwords, convert colors, and more. 100% client-side, no data leaves your browser.",
  keywords: "developer tools, json formatter, jwt decoder, regex tester, base64 encoder, url encoder, password generator, uuid generator, hash generator, color picker, gradient generator, markdown preview, diff checker, timestamp converter, web developer tools, programming tools, code formatter",
  authors: [{ name: "DevKit" }],
  creator: "DevKit",
  publisher: "DevKit",
  robots: "index, follow",
  metadataBase: new URL("https://devkit-peach.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devkit-peach.vercel.app",
    siteName: "DevKit",
    title: "DevKit - 30+ Free Developer Tools",
    description: "Free, privacy-focused developer tools. JSON formatter, JWT decoder, regex tester, password generator & more. 100% client-side.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevKit - Developer Tools Collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevKit - 30+ Free Developer Tools",
    description: "Free, privacy-focused developer tools. 100% client-side, no data leaves your browser.",
    images: ["/og-image.png"],
    creator: "@devkit",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Developer Tools",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="DevKit" />
        <meta name="application-name" content="DevKit" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "DevKit",
              description: "Free developer tools collection - JSON formatter, JWT decoder, regex tester, and more.",
              url: "https://devkit-peach.vercel.app",
              applicationCategory: "DeveloperApplication",
              operatingSystem: "Any",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              featureList: [
                "JSON Formatter and Validator",
                "JWT Decoder",
                "Base64 Encoder/Decoder",
                "URL Encoder/Decoder",
                "Regex Tester",
                "Password Generator",
                "UUID Generator",
                "Hash Generator",
                "Color Picker",
                "Gradient Generator",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white antialiased">
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
        <div className="relative z-10">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
