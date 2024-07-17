import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-blue-950
    min-h-screen
    ">
      <h1 className="font-black">Masterclass Next</h1>
      <nav className="flex flex-col">
        <Link href='/first'>Go to First Page </Link>
        <Link href='/second'>Go to Second Page </Link>
      </nav>
    </div>
  );
}
