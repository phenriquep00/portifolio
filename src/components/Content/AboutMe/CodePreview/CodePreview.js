
export function CodePreview() {
    return (
        <div className=" text-cyan-100 bg-gradient-to-bl from-gray-800 to-cyan-900 w-[45%] h-[90%] rounded-sm m-10 shadow-2xl drop-shadow-2xl flex items-center flex-col align-middle">
            <img
                src="https://github.com/phenriquep00.png"
                alt="profile"
                className="rounded-full h-56 w-56 shadow-md drop-shadow-md border-separate border-2 border-violet-500 m-4"
            />
            <h1 className="text-3xl font-bold text-center animate-pulse">Phenriquep00</h1>
            <p className="text-center text-xl font-bold text-cyan-100 mt-4">
                Technologies:
            </p>
            <div className="flex flex-wrap justify-center mt-12">

                <div className="flex items-center justify-center w-16 h-16 m-4 rounded-full shadow-md drop-shadow-md animate-spin">
                    <img src=" https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="react"/>
                </div>

                <div className="flex items-center justify-center w-16 h-16 m-4 rounded-sm shadow-md drop-shadow-md animate-bounce">
                    <img src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png" alt="react" />
                </div>

                <div className="flex items-center justify-center w-16 h-16 m-4 rounded-sm shadow-md drop-shadow-md animate-bounce">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="react" />
                </div>

                <div className="flex items-center justify-center w-16 h-16 m-4 rounded-sm shadow-md drop-shadow-md animate-bounce">
                    <img src="https://seeklogo.com/images/H/html5-with-wordmark-color-logo-4259B7F24F-seeklogo.com.png" alt="react" />
                </div>

                <div className="flex items-center justify-center w-16 h-16 m-4 rounded-full shadow-md drop-shadow-md animate-spin">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="react" />
                </div>

            </div>
        </div>
    )
}