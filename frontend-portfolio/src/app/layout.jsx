import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Hamza Ahmed | Portfolio",
  description:
    "My personal portfolio website showcasing projects, skills, and contact info.",
  keywords: [
    "Zeeshan Haider",
    "Portfolio",
    "React Developer",
    "Frontend Developer",
    "MERN Stack",
    "portfolio",
  ],
  authors: [{ name: "Hamza Ahmed", url: "https://HamzaAhmed.vercel.app/" }],
  metadataBase: new URL("https://m-zeeshan-haider.vercel.app"), // ✅ Add this line
  openGraph: {
    title: "Zeeshan Haider | Portfolio",
    description:
      "My personal portfolio website showcasing projects, skills, and contact info.",
    url: "https://hamzaahmed-portfolio.vercel.app/",
    siteName: "Hamza Ahmed Portfolio",
    images: [
      {
        url: "/assets/images/Blog-Image.webp",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamza Ahmed | Portfolio",
    description:
      "My personal portfolio website showcasing projects, skills, and contact info.",
    images: ["/og-image.png"],
    creator: "@yourTwitterHandle",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Zeeshan Haider | Portfolio</title>
        <link rel="icon" href="/code.png" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
