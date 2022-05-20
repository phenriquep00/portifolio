import githubLogo from '../../../../assets/GitHub-Mark-Light-32px.png';
import { Popover } from "@headlessui/react";
import { Status } from "../../Status/Status";


export function Description( { description, onOpenRepo, status } ) {
    return (
        <div className="flex flex-col items-start m-4 bg-slate-800 w-full h-full p-6 text-justify shadow-2xl drop-shadow-2xl rounded-md ">

                    <p className="text-cyan-100 text-2xl font-mono font-hint indent-8 break-no m-4">
                        {description}
                        <br />
                    </p>

                    <Popover className="absolute bottom-8 flex flex-col items-start ">
                        <Popover.Button onClick={onOpenRepo} className="bg-gradient-to-r from-indigo-900 to-purple-600 rounded-full px-3 h-12 text-white flex items-center group hover:ring-2 ring-violet-500">

                            <img src={githubLogo} className="w-6 h-6" alt="github" />

                            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                                <span className="pl-2"></span>
                                Github repository
                            </span>
                            
                        </Popover.Button>
                    </Popover>

                    <Status stts={status}/>
                    
                </div>
    )
}