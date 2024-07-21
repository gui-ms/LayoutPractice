import { IconHome } from "@tabler/icons-react";
import Link from "next/link";

export default function Home() {
  return (
      <div className="bg-gradient-to-r
       from-orange-400 to-blue-950
        h-screen
        flex
        flex-col
        items-center
        justify-center
        gap-3
      ">
        <h1 className="font-black text-2xl text-black">Masterclass Next</h1>
        <Link href='/'>
          <IconHome size={100} className="text-black"/>
        </Link>
        <nav className="flex flex-col text-black">
          <Link href='/first'>Go to First Page </Link>
          <Link href='/second'>Go to Second Page </Link>
          <Link href='/page'>Go to Third Page </Link>
        </nav>
      </div>
  );
}
