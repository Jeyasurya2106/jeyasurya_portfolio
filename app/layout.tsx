import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { profileData } from "@/lib/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jeyasurya.vercel.app";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f0ede3" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0c09" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jeya Surya M | Full Stack & MERN Stack Developer Portfolio",
    template: "%s | Jeya Surya M",
  },
  description:
    "Official portfolio of Jeya Surya M, a Full Stack & MERN Stack Developer with 2.6+ years experience architecting responsive, high-performance web applications using React, Next.js, Node.js, NestJS, TypeScript, PostgreSQL, Prisma, and MySQL.",
  applicationName: "Jeya Surya M Portfolio",
  authors: [{ name: "Jeya Surya M", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Jeya Surya",
    "Jeya Surya M",
    "Jeyasurya",
    "Jeya Surya Developer",
    "Jeya Surya Portfolio",
    "Jeya Surya Chennai",
    "MERN Stack Developer",
    "Full Stack Developer",
    "React.js Developer",
    "Next.js Developer",
    "NestJS Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "Prisma ORM",
    "MySQL",
    "MongoDB",
    "Express.js",
    "Frontend Engineer",
    "Backend Engineer",
    "Software Engineer Portfolio",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Jeya Surya M",
  publisher: "Jeya Surya M",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Jeya Surya M | Full Stack & MERN Stack Developer",
    description:
      "Explore the enterprise projects, production engineering experience, and technical skills of Jeya Surya M (React, Next.js, Node.js, NestJS, TypeScript, PostgreSQL).",
    siteName: "Jeya Surya M Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeya Surya M - Full Stack & MERN Stack Developer Portfolio",
      },
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jeya Surya M - Vector Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeya Surya M | Full Stack & MERN Stack Developer",
    description:
      "Portfolio of Jeya Surya M - Full Stack & MERN Stack Developer specializing in React, Next.js, Node.js, NestJS, TypeScript, PostgreSQL, and MySQL.",
    images: ["/og-image.png"],
    creator: "@jeyasurya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "Jeya Surya M | Full Stack & MERN Stack Developer Portfolio",
      "description":
        "Portfolio of Jeya Surya M, a Full Stack Developer specializing in React, Next.js, Node.js, NestJS, TypeScript, PostgreSQL, and MySQL.",
      "publisher": {
        "@id": `${siteUrl}/#person`,
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      "url": siteUrl,
      "name": "Jeya Surya M | Full Stack Developer Profile",
      "isPartOf": {
        "@id": `${siteUrl}/#website`,
      },
      "about": {
        "@id": `${siteUrl}/#person`,
      },
      "mainEntity": {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      "name": profileData.name,
      "alternateName": ["Jeya Surya", "Jeyasurya", "Jeya Surya Developer"],
      "jobTitle": "Full Stack Developer & MERN Stack Developer",
      "url": siteUrl,
      "image": `${siteUrl}/og-image.png`,
      "description": profileData.summary,
      "email": profileData.contact.email,
      "telephone": profileData.contact.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": profileData.contact.location,
        "addressCountry": "IN",
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": profileData.education[0]?.institution || "Coimbatore Marine College",
      },
      "knowsAbout": [
        "MERN Stack",
        "Full Stack Development",
        "React.js",
        "Next.js",
        "NestJS",
        "Node.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "PostgreSQL",
        "Prisma ORM",
        "MySQL",
        "MongoDB",
        "Express.js",
        "REST APIs",
        "GraphQL",
        "Tailwind CSS",
        "Redux & State Management",
      ],
      "worksFor": {
        "@type": "Organization",
        "name": profileData.experience[0]?.company || "Globewebizze Pvt Ltd",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <noscript>
          <style>{`[data-preloader]{display:none!important}`}</style>
        </noscript>
      </head>
      <body
        className={`${inter.variable} ${display.variable} ${serif.variable} ${mono.variable} font-sans antialiased transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
