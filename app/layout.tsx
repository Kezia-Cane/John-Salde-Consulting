import type { Metadata } from "next";
import { Montserrat, Poppins, Lora } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "John Salde Consulting | Coffee & Food Business Growth",
  description: "Bridging the gap between passion and profitability for coffee and food businesses in Mindanao.",
  icons: {
    icon: "/images/logo/newfavicon.ico",
    shortcut: "/images/logo/newfavicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${poppins.variable} ${lora.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
