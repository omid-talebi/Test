import Image from "next/image";
import localFont from "next/font/local";

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

export default function Home() {
  return (
    <>
      <h1 className="text-fuchsia-50 text-center bg-violet-800">First Application PWA</h1>
      <div className="bg-red-950 text-cyan-50 inline-block p-1 px-3  text-center rounded-full absolute bottom-5 right-5">+</div>
    </>
   
  );
}
