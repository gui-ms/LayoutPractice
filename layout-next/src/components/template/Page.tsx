import Box from "../Box";
import Footer from "./Footer";
import Header from "./Header";
import MainMenu from "./MainMenu";

export default function PageTemplate(props: any) {
    return (
        <div className="flex flex-col h-screen">
            <Header/>
            <div className="flex flex-grow">
                <MainMenu/>
                <div className="flex flex-1 flex-col">
                    <main className="p-7 flex-1">
                        {props.children}
                    </main>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}