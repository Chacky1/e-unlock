import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Analytics } from '@vercel/analytics/react';

import Footer from "@/components/footer/footer";

import 'react-toastify/dist/ReactToastify.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "e-unlock",
  description: "Gagne des compétences et deviens développeur.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="fr">
        <body className={inter.className}>
          {children}
          <ToastContainer />
          <Footer />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
