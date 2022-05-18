export function SocialButtons({ image, link }) {

    function handleClick(){
        window.open(link, "_blank")
    }

    return (
        <div className={`self-center w-12 h-12 bg-teal-800 rounded-full flex items-center p-2`}>
            <button onClick={handleClick}>
                <img src={image} alt="logo" />
            </button>
        </div>


    )
}