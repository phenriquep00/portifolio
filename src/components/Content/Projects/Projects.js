import { Options } from "./Options/RadioGroup";
import { useState } from "react";


export function Projects() {
    const [selectedProject, setSelectedProject] = useState("Project 1");

    function handleSelectedProjectChange(e) {
        setSelectedProject(e.target.innerText);
    }

    return (
        <div className="flex flex-row w-full h-full">

            <div className="p-4 w-[23%] h-[100%]"> {/* Options div */}
                <Options onSelectedProjectChange={handleSelectedProjectChange}/>
            </div>
            
            <div className="p-4 w-[81%] h-[100%] border-2 border-orange-600"> {/* focused div */}
                {
                    selectedProject === "Project 1" 
                    ? 
                    <div> Project 1 </div>
                    :
                    (
                        selectedProject === "Project 2"
                        ?
                        <div> Project 2 </div>
                        :
                        (
                            selectedProject === "Project 3"
                            ?
                            <div> Project 3 </div>
                            :
                            (
                                selectedProject === "Project 4"
                                ?
                                <div> Project 4 </div>
                                :
                                (
                                    selectedProject === "Project 5"
                                    ?
                                    <div> Project 5 </div>
                                    :
                                    null /* Add new projects here */
                                )
                            )
                        )
                    )
                }

            </div>

        </div>
            
        
    )
}