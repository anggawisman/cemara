import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Cemara Education",
  description: "Overseas Education Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <main className=" relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
