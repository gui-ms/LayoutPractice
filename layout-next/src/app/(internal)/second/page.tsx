import Box from "@/components/Box";

export default function Flexbox () {
    return (
            <div className="h-96">
                <h1>Flexbox</h1>
                <div className="flex h-full w-[500px] justify-around items-end gap-2">
                    <Box text="1"/>
                    <Box text="2" className="flex-grow"/>
                    <Box text="3"/>
                </div>
            </div>
    )
}