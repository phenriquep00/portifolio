export function Overview({ title, bg, color }) {
    return (
        <div
            className={`flex w-full h-full flex-col items-center`}
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: color }}
        >
            <h1 className="text-6xl font-mono font-extrabold m-4 animate-pulse">{title}</h1>

        </div>
    )
}