import { Options } from "./Options/RadioGroup";
import { useState } from "react";
import { Overview } from "./Overview/Overview";
import pokerBg from "../../assets/poker-bg.jpg";


export function Projects() {
    const [selectedProject, setSelectedProject] = useState("Poker Game");

    function handleSelectedProjectChange(e) {
        setSelectedProject(e.target.innerText);
    }

    return (
        <div className="flex flex-row w-full h-full">

            <div className="p-4 w-[20%] h-[100%] flex flex-col items-center flex-1 justify-center content-center"> {/* Options div */}
                <Options onSelectedProjectChange={handleSelectedProjectChange}/>
            </div>
            
            <div className="w-[80%] h-[90%] self-center border-separate border-2 shadow-2xl"> {/* focused div */}
                {
                    selectedProject === "Poker Game"
                    ? 
                    <Overview title="Poker Game" bg={pokerBg} color="#000" />
                    :
                    (
                        selectedProject === "Project 2"
                        ?
                        <Overview title="Project 2" />
                        :
                        (
                            selectedProject === "Project 3"
                            ?
                            <Overview title="Project 3" />
                            :
                            (
                                selectedProject === "Project 4"
                                ?
                                <Overview title="Project 4" />
                                :
                                (
                                    selectedProject === "Project 5"
                                    ?
                                    <Overview title="Project 5" />
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