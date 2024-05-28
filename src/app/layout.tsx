import type { Metadata } from "next";
import "./css/main.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
import { montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "isXander's Website",
  description:
    "isXander makes Minecraft mods for Java Edition. Adept in Java and Kotlin, dabbling in full-stack!",
  keywords: [
    "isXander",
    "XanderIsDev",
    "Minecraft",
    "mods",
    "java",
    "fabric",
    "fabric loader",
    "forge",
    "neoforge",
    "controlify",
    "debugify",
    "yetanotherconfiglib",
    "zoomify",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />

        <div>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
