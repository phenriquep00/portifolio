export function NavigationButton({ direction, gotClicked }) {
    return (
        <>
            {
                direction === "left"
                    ?
                    (<div className=" w-[8%] rounded-full flex items-center opacity-60 hover:opacity-100">
                        <button onClick={gotClicked} type="button" className="">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Breezeicons-actions-22-draw-triangle1.svg/1024px-Breezeicons-actions-22-draw-triangle1.svg.png" alt="left Arrow" className=" rounded-md"/>
                        </button>
                    </div>)
                    :
                    (<div className=" w-[8%] rounded-full flex items-center z-20 opacity-60 hover:opacity-100">
                        <button onClick={gotClicked}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Breezeicons-actions-22-draw-triangle2.svg/1024px-Breezeicons-actions-22-draw-triangle2.svg.png" alt="right Arrow" className=" rounded-md self-center"/>
                        </button>
                    </div>)
            }
        </>
    )
}