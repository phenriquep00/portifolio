import TypeWriterEffect from 'react-typewriter-effect';

export function Editor() {

    return (
        <div className="flex flex-col bg-[#2e2e2e] w-[45%] h-[90%] m-10 shadow-2xl drop-shadow-2xl rounded-sm">

            <div className="h-[5%] bg-slate-400 rounded-t-sm"> {/* header */}

            </div>

            <div className="flex fle-col h-full w-full"> {/* code part */}

            <TypeWriterEffect
            textStyle={{ fontFamily: 'Red Hat Display' }}
            startDelay={100}
            cursorColor="black"
            text="<body>"
            typeSpeed={100}
            loop={true}
          />

            </div>

        </div>
    )
}