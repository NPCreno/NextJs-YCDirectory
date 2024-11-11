import React from "react";
import "../globals.css";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main className="font-work-sans">{children}</main>
      </body>
    </html>
  );
}
