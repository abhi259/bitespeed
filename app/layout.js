import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitespeed",
  description: "Assignment (PS: Dont use tailwind css)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen flex flex-col ">
          <Navbar />
          {children}
          <ToastContainer
            position="top-center"
            transition={Bounce}
            theme="dark"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      </body>
    </html>
  );
}
