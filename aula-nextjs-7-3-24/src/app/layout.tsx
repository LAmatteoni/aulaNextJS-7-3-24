import type { Metadata } from "next";
import Header from "./Header/page";
import Footer from "./Footer/page";

import './Estilo/style.css'


export const metadata: Metadata = {
  title: "Criando Rotas com NEXT.JS",
  description: "Aula 05",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
