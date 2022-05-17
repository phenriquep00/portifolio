export function Status({ stts }) {

    return (
        <div className={
            `absolute bottom-8 right-4 p-2 flex items-start rounded-xl text-white shadow-2xl bg-opacity-75 ring-2 ring-white ring-opacity-60 ring-offset-2 
            ${stts === "Completed" ? "bg-gradient-to-r from-emerald-700 to-lime-600 ring-offset-green-500" : "bg-gradient-to-r from-amber-600 to-orange-600 ring-offset-yellow-600"}
            `
        }>
            {stts}
        </div>
    )
}