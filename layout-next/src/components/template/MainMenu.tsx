import Link from "next/link";
import MenuItem from "./MenuItem";
import { IconHexagon1, IconHexagon2, IconHexagon3 } from "@tabler/icons-react";

export default function MainMenu() {

    return (
        <aside className="w-80 bg-zinc-900 ">
            <nav className="flex flex-col p-5 gap-1">
                <MenuItem link='/first' >
                    <IconHexagon1/>
                    <span>Go to First Page </span>
                </MenuItem>
                <MenuItem link='/second' >
                    <IconHexagon2/>
                    <span>Go to Second Page </span>
                </MenuItem>
                <MenuItem link='/page' >
                    <IconHexagon3/>
                    <span>Go to Third Page </span>
                </MenuItem>
            </nav>
        </aside>
    )
}