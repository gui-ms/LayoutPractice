import Link from "next/link";

export default function MenuItem(props: any) {
    return (
        <Link href={props.link} className="rounded-md
             hover:bg-orange-400 
            p-1 
            flex
            items-center
            gap-2
        ">
            {props.children} 
        </Link>
    )
}