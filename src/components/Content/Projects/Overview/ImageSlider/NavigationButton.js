export function NavigationButton({ direction, gotClicked }) {
    return (
        <>
            {
                direction === "left"
                    ?
                    (<div className="bg-gradient-to-r from-neutral-600 to-transparent  h-[30%] rounded-full flex items-center ">
                        <button onClick={gotClicked} type="button" className="">
                            <img src="https://img.icons8.com/ios/50/000000/left-squared.png" alt="left Arrow" className="opacity-40 hover:opacity-100"/>
                        </button>
                    </div>)
                    :
                    (<div className="ml-[80%] bg-gradient-to-l from-neutral-600 to-transparent h-[30%] rounded-full flex items-center ">
                        <button onClick={gotClicked}>
                            <img src="https://img.icons8.com/ios/50/000000/right-squared.png" alt="right Arrow" className="opacity-40 hover:opacity-100"/>
                        </button>
                    </div>)
            }
        </>
    )
}