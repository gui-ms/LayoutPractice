import Link from "next/link";

export default function Logo() {
    return (
        <Link href={'/'}>
            <div className="flex gap-2">
                <div className="flex gap-1">
                    <span className="h-5 w-5 bg-red-500 rounded-full"></span>
                    <span className="h-5 w-5 bg-green-500 rounded-full"></span>
                    <span className="h-5 w-5 bg-blue-500 rounded-full"></span>
                </div>
                <span className="font-black">AppExample</span>
            </div>
        </Link>
    )
}