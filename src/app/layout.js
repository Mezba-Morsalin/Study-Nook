
import "./globals.css";

import { Poppins } from "next/font/google";
import "./globals.css";


const poppinsSans = Poppins({
  variable : "poppins",
  subsets : ["latin"],
  weight : ["400", "500", "600", "700", "800"]
});


export const metadata = {
  title: "StudyNook - Home",
  description: "Library Study Room Booking",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppinsSans.className} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        {children}
        
        </body>
    </html>
  );
}
