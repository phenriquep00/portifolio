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

            <div className="p-4 w-[20%] h-[80%] flex flex-col content-evenly items-center justify-center"> {/* Options div */}
                <Options onSelectedProjectChange={handleSelectedProjectChange} />
            </div>

            <div className="w-[80%] h-[90%] self-center "> {/* focused div */}
                {
                    selectedProject === "Poker Game"
                        ?
                        <Overview
                            title="Poker Game"
                            description=" A poker game created with python and the pygame library. This is a single player game where the player plays against -yet to be- three smart bots. "
                            repo="https://github.com/phenriquep00/poker"
                        >
                            <ImageSlider project={selectedProject} />
                        </Overview>
                        :
                        (
                            selectedProject === "Imersao Dados Alura"
                                ?
                                <Overview
                                    title="Imersao Dados Alura"
                                    description=" A data analysis project created with python and the pandas library inside Google Collab during Alura's Data Imersion in 2021. This project uses data visualization tools such as matplotlib and seaborn to create a data analysis dashboard. "
                                    repo="https://github.com/phenriquep00/imersao_dados_alura"
                                >
                                    <ImageSlider project={selectedProject} />
                                </Overview>
                                :
                                (
                                    selectedProject === "Pong"
                                        ?
                                        <Overview
                                            title="Pong"
                                            description=" A pong game created with python using the turtle library. This game tries to emulate the classic pong game. "
                                            repo="https://github.com/phenriquep00/pong"
                                        >
                                            <ImageSlider project={selectedProject} />
                                        </Overview>
                                        :
                                        (
                                            selectedProject === "NLW return"
                                                ?
                                                <Overview
                                                    title="NLW return"
                                                    description=" Complete app with front-end, back-end and mobile version developed during the Rocketseat's Next Level Week. The project consists of a responsive widget that get feedback from the user and send it to a backend that add the data to a DB and send a mail to the owner. "
                                                    repo="https://github.com/phenriquep00/NLW-Return"
                                                >
                                                    <ImageSlider project={selectedProject} />
                                                </Overview>
                                                :
                                                (
                                                    selectedProject === "Hangman"
                                                        ?
                                                        <Overview
                                                            title="Hangman"
                                                            description=" A React app created with the purpose of learning React. This app is a single player hangman game. The words of the game come from a supabase Database."
                                                            repo="https://github.com/phenriquep00/hangman"
                                                        >
                                                            <ImageSlider project={selectedProject} />
                                                        </Overview>
                                                        :
                                                        (
                                                            selectedProject === "Space Invaders"
                                                                ?
                                                                <Overview
                                                                    title="Space Invaders"
                                                                    description=" A game based on FreeCodeCamp's Space Invaders tutorial. This game follows the classic game logic, but the visuals and soundFX are made with free images from the internet."
                                                                    repo="https://github.com/phenriquep00/phenriquep00/tree/main/space_invader"
                                                                >
                                                                    <ImageSlider project={selectedProject} />
                                                                </Overview>
                                                                :
                                                                (
                                                                    selectedProject === "Java Exercises"
                                                                        ?
                                                                        <Overview
                                                                            title="Java Exercises"
                                                                            description="Repository of my attempts to solve Java Exercises from w3resource.com. Every exercise is a complete Java program with a comment explaining the logic of the program."
                                                                            repo="https://github.com/phenriquep00/java-learning"
                                                                        >
                                                                            <ImageSlider project={selectedProject} />
                                                                        </Overview>
                                                                        :
                                                                        (
                                                                            selectedProject === "Small Python Projects"
                                                                                ?
                                                                                <Overview
                                                                                    title="Small Python Projects"
                                                                                    description=" My solutions to the projects present in Al Sweigart's Big Book of Small Python Projects. The scripts contain the projects of the book, with a different approach to the solutions."
                                                                                    repo="https://github.com/phenriquep00/big-book-of-small-python-projects"
                                                                                >
                                                                                    <ImageSlider project={selectedProject} />
                                                                                </Overview>
                                                                                :
                                                                                <Overview
                                                                                title="React Alura"
                                                                                description=" A Discord-based app created during Alura's React Imersion in 2022. The app has a simple altentication system based on the user's Github, a Supabase Database that stores the messages and other data, and a chat room with a simple UI. "
                                                                                repo="https://github.com/phenriquep00/cantina-cord"
                                                                            >
                                                                                <ImageSlider project={selectedProject} />
                                                                            </Overview>

                                                                            
                                                                        )
                                                                )
                                                        )
                                                )
                                        )
                                )
                        )
                }

            </div>

        </div>


    )
}