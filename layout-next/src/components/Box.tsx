export default function Box(props: any) {
    return (
        <div className= {`p-3 bg-red-500 border-2 rounded-md flex justify-center items-center
        ${props.className ?? ''} 
        `}>
            <span>{props.text}</span>
        </div>
    )
}