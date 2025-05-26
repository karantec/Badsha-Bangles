import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div
      className="min-h-screen bg-pink-100 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/404.png')" }} // Ensure the image path is correct
    ></div>
  );
}
