export function SocialButtons({ image, link }) {

    function handleClick(){
        window.open(link, "_blank")
    }

    return (
        <div className={`self-center w-12 h-12 bg-violet-700 rounded-full flex items-center p-2 ring-2 ring-violet-500 hover:ring-cyan-100 ring-offset-cyan-300 ring-offset-1 shadow-2xl drop-shadow-2xl`}>
            <button onClick={handleClick}>
                <img src={image} alt="logo" />
            </button>
        </div>


    )
}