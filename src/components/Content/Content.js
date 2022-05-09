import { AboutMe } from './AboutMe/AboutMe';
import { Contact } from './Contact/Contact';
import { Projects } from './Projects/Projects';


export function Content({ whoIsFocused }) {
    return (
        <div className=" w-[91.4%] h-[85vh] bg-slate-800 self-center ml-[4.3%] rounded-b-md p-2 drop-shadow-2xl shadow-2xl fixed flex flex-col items-center justify-center text-cyan-100">
            
            {
                whoIsFocused === 'About Me'
                ?
                <AboutMe />
                :
                (
                    whoIsFocused === 'Projects'
                    ?
                    <Projects />
                    :
                    <Contact />
                )
            }
            
        </div>
    )
}