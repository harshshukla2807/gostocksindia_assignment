import { Inter } from "next/font/google";
import "./globals.css";
import { AppWrapper } from "./context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Go India Stocks",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppWrapper>
      {children}
      </AppWrapper>
      
      </body>
    </html>
  );
}
