export function HeaderButton({ text, onClickToFocus, focus }) {

    return (
        <div
            onClick={onClickToFocus}
            className={`text-cyan-100 antialiased font-mono flex-1 py-2 md:py-3 leading-10 font-bold transition-all transform-200 ease-in-out hover:cursor-pointer ${focus ? 'bg-slate-800 z-50' : 'bg-gradient-to-t from-indigo-600 to-slate-500 opacity-50 hover:opacity-100'} rounded-t-lg text-center`}>
            {text}
        </div>

    )
}