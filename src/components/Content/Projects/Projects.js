import { Options } from "./Options/RadioGroup";
import { useState } from "react";
import { Overview } from "./Overview/Overview";
import { ImageSlider } from "./Overview/ImageSlider/ImageSlider";
import projects from "./data";

export function Projects() {

    const [selectedProject, setSelectedProject] = useState("NLW Return");

    function handleSelectedProjectChange(e) {
        setSelectedProject(e.target.innerText);
    }

    return (
        <div className="flex flex-row w-full h-full">

            <div className="p-4 w-[20%] h-[100%] flex flex-col items-center justify-center"> {/* Options div */}
                <Options onSelectedProjectChange={handleSelectedProjectChange} />
            </div>

            <div className="w-[80%] h-[90%] self-center "> {/* focused div */}
                {
                    projects.map((project) => {
                        if (project.name === selectedProject) {
                            return (
                                    <div className="w-full h-full">
                                        <Overview title={project.name} description={project.description} repo={project.repo} status={project.status}>
                                            <ImageSlider project={selectedProject} />
                                        </Overview>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>


    )
}