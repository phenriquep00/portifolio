export function HeaderButton({ text, onClickToFocus, focus }) {

    return (
        <div
            onClick={onClickToFocus}
            className={`text-cyan-100 antialiased font-mono flex-1 md:py-4 py-2  font-bold hover:text-xl transition-all transform-400  hover:cursor-pointer ${focus && 'bg-slate-800 z-50'} rounded-t-md text-center`}>
            {text}
        </div>

    )
}