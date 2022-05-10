import { TypingComponent, TypingComponentTitle } from "./Typing/TypingComponent";


export function Editor() {
    
    const TypingComponentStyles = {
        fontFamily: "monospace",
        fontSize: "1.5rem",
        color: "rgb(207 250 254",
        padding: "0.5rem",
        borderRadius: "0.5rem",
    };

    const TypingComponentStylesTitle = {
        fontFamily: "monospace",
        fontSize: "3rem",
        color: "rgb(207 250 254",
        padding: "0.5rem",
        borderRadius: "0.5rem",
    };
    
    const textArrayOne = [
        "I'm Pedro. ", "I.T student at Universidade Paulista ", "and developer.", " Practicing and learning new things ", "everyday." 
    ];

    return (
        <div className="flex flex-col bg-gradient-to-t from-[#272822] to-[#191520] w-[45%] h-[90%] m-10 shadow-2xl drop-shadow-2xl rounded-sm">

            <div className="h-[5%] bg-slate-400 rounded-t-sm flex flex-row items-start gap-1"> {/* header */}


                <div className={` rounded-full m-2 bg-red-600 w-4 h-4 z-50`} />
                <div className={` rounded-full m-2 bg-amber-400 w-4 h-4 z-50`} />
                <div className={` rounded-full m-2 bg-green-500 w-4 h-4 z-50`} />


            </div>

            <div className="flex fle-col h-full w-full m-4"> {/* code part */}
                <div className="w-[93%]" >
                    
                    <TypingComponentTitle 
                        classString="assign-as-many classes-as-you-want here"
                        text1="Hello, there!"
                        typingContentElementId="typerTitle"
                        styles={TypingComponentStylesTitle}
                    />

                    <TypingComponent
                        classString="assign-as-many classes-as-you-want here"
                        text1={textArrayOne}
                        typingContentElementId="typer"
                        styles={TypingComponentStyles}
                    />

                </div>

            </div>

        </div>
    )
}