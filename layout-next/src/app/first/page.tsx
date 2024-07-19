import PageTemplate from "@/components/template/Page";

export default function First (){

    const title = (
        <div>
            <h1>First Page</h1>
            <h2>What was done</h2>
        </div>
    )

    function currentYear () {
        return new Date().getFullYear();
    }

    function createList() {
        return (
            <ul className="pl-12 list-disc">
                <li>Jude</li>
                <li>Crowley</li>
                <li>Jolene</li>
            </ul>
        )
    }

    return (
        <PageTemplate>
            <div>
                {title}
                <div className="flex flex-col">
                    <span>
                        {1+1}
                    </span>
                    <span>
                        {Math.random()}
                    </span>
                    <span>
                        {currentYear()}
                    </span>
                    <span>
                        {createList()}
                    </span>
                </div>
            </div>
        </PageTemplate>
    )
}