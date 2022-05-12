import { Options } from "./Options/RadioGroup";
import { useState } from "react";
import { Overview } from "./Overview/Overview";


import { ImageSlider } from "./Overview/ImageSlider/ImageSlider";



export function Projects() {
    const [selectedProject, setSelectedProject] = useState("Poker Game");

    function handleSelectedProjectChange(e) {
        setSelectedProject(e.target.innerText);
    }


    return (
        <div className="flex flex-row w-full h-full">

            <div className="p-4 w-[20%] h-[100%] flex flex-col items-center flex-1 justify-center content-center"> {/* Options div */}
                <Options onSelectedProjectChange={handleSelectedProjectChange} />
            </div>

            <div className="w-[80%] h-[90%] self-center border-separate ring-2"> {/* focused div */}
                {
                    selectedProject === "Poker Game"
                        ?
                        <Overview
                            title="Poker Game"
                            description=" A poker game created with python and pygame "
                            repo="https://github.com/phenriquep00/poker"
                        >
                            <ImageSlider project={selectedProject}/>
                        </Overview>
                        :
                        (
                            selectedProject === "Project 2"
                                ?
                                <Overview
                                    title="Imersao Dados"
                                    description=" Imersao dados alura "
                                    repo="https://github.com/phenriquep00/poker"
                                >
                                    <ImageSlider project={selectedProject}/>
                                </Overview>
                                :
                                (
                                    selectedProject === "Project 3"
                                        ?
                                        <Overview
                                            title="Pong"
                                            description=" A pong game created with python "
                                            repo="https://github.com/phenriquep00/poker"
                                        >
                                            <ImageSlider project={selectedProject}/>
                                        </Overview>
                                        :
                                        (
                                            selectedProject === "Project 4"
                                                ?
                                                <Overview
                                                    title="NLW return"
                                                    description=" A return calculator for the New Life Withdrawal "
                                                    repo="https://github.com/phenriquep00/poker"
                                                >
                                                    <ImageSlider project={selectedProject}/>
                                                </Overview>
                                                :
                                                (
                                                    selectedProject === "Project 5"
                                                        ?
                                                        <Overview
                                                            title="Hangman"
                                                            description=" A hangman game  "
                                                            repo="https://github.com/phenriquep00/poker"
                                                        >
                                                            <ImageSlider project={selectedProject}/>
                                                        </Overview>
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