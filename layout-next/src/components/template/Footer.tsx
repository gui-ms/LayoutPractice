import { IconHeart } from "@tabler/icons-react";

export default function Footer(){
    return (
        <footer>
            <div className="flex items-center justify-end bg-zinc-700 p-4 gap-2 text-zinc-200 text-sm">
                <span>Desenvolvido com </span>
                <IconHeart size={50} className="text-red-500"/>
                <span> por <strong> Guilherme</strong> - {new Date().getFullYear()}</span>
            </div>
        </footer>
    )
}