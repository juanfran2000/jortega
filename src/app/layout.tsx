import type { Metadata } from "next";
import { Providers } from "./providers";

import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Jortega jewerly",
  description: "Generated by create next app",
};

let items = [
  { name: "Tienda", link: "./shop" },
  { name: "Lo que debes saber", link: "./explicacion" },
  { name: "Contacto", link: "/" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-myWhite">
        <header>
          <Nav
            elements={items}
            whatsapp={
              "https://api.whatsapp.com/send/?phone=5930983883197&text=Hola,%20vi%20su%20página%20y%20deseo%20información%20sobre%20sus%20anillos"
            }
          />
        </header>
        <main>
          <Providers>{children}</Providers>
          <footer>
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}
