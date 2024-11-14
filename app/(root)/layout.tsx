import React from "react";
import "../globals.css";
import Navbar from "../components/navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="font-work-sans">{children}</main>
      </body>
    </html>
  );
}
