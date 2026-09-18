import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Patient Management System",
  description: "Staff portal for patient management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
