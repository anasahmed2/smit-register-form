import { Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { AOSInit } from "./aos";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SMIT Con'23",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <AOSInit />
      <body
        className={`${poppins.className} w-full min-h-screen bg-[url("/assets/body-background.svg")] bg-cover`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}