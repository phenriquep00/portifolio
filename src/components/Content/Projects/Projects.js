import { Options } from "./Options/RadioGroup";


export function Projects() {
    return (
        <div className="flex flex-row w-full h-full">

            <div className="p-4 w-[23%] h-[100%]"> {/* Options div */}
                <Options />
            </div>
            
            <div className="p-4 w-[81%] h-[100%] border-2 border-orange-600"> {/* focused div */}

            </div>

        </div>
            
        
    )
}