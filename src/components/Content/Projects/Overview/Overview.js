import { Description } from './Description/Description';


export function Overview(props) {

    function handleOpenRepo() {
        window.open(props.repo, "_blank");
    }


    return (
        <div className={`flex w-full h-full flex-col items-center`}>
            <h1 className="text-6xl font-mono m-4">{props.title}</h1>

            <div className="flex flex-row w-full h-full"> {/*  content div */}
                {/* description div */}
                <div className="w-2/4 h-[92%]">
                     <Description description={props.description} onOpenRepo={handleOpenRepo}/>
                </div>
                   

                {/* image div */}
                <div className="w-2/4 h-[92%] ml-8">
                    {props.children}
                </div>

            </div>
        </div>
    )
}