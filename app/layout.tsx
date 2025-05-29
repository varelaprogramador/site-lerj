import { Poppins } from "next/font/google";

import NextTopLoader from "nextjs-toploader";
import "./globals.css";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NEXTRECARGAS",
  applicationName: "NEXT RECARGAS",
  metadataBase: new URL("https://bot-next-v1.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={poppins.variable}>
      <body className="bg-gray-100">
        <NextTopLoader color="blue" />
        {children}
      </body>
    </html>
  );
}
