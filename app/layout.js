import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
// import CustomCursor from "@/components/CustomCursor";
import { site } from "@/data/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: `${site.name} — Portfolio`,
  description: site.tagline,
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} bg-bg font-body text-white antialiased`}>
        {/* <CustomCursor /> */}
        <Header />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
