import PageTemplate from "@/components/template/Page";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <PageTemplate>
      <div className="bg-gradient-to-r from-orange-400 to-blue-950
      h-96
      ">
        <h1 className="font-black">Masterclass Next</h1>
        <nav className="flex flex-col">
          <Link href='/first'>Go to First Page </Link>
          <Link href='/second'>Go to Second Page </Link>
          <Link href='/page'>Go to Third Page </Link>
        </nav>
      </div>
    </PageTemplate>
  );
}
