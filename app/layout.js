import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Cemara Education",
  description: "Overseas Education Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className=" relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
