import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Carnet",
  description: "Share any text document online!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " max-w-7xl mx-auto"}>{children}</body>
    </html>
  );
}
