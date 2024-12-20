import localFont from "next/font/local";
import { Sarabun } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const sarabun = Sarabun({
  subsets: ['latin'], // Specify subsets, e.g., 'latin'
  weight: ['100','200', '300', '400', '500', '600', '700', '800'], // Include desired font weights
  variable: "--font-sarabun", // Custom CSS variable
});

export const metadata = {
  title: "RecRadar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sarabun.variable}`}>
        {children}
      </body>
    </html>
  );
}
