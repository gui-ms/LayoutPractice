import Logo from "./Logo";
import UserMenu from "./UserMenu";

export default function Header() {
    return (
        <header className="flex gap-5 bg-zinc-800 h-20 items-center px-5">
            <Logo/> 
            <span className="flex-grow">Header</span>
            <UserMenu/>
        </header>
    )
}