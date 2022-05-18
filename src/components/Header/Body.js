import { HeaderButton } from './HeaderButton/HeaderButton';
import { useState } from 'react';
import { Content } from '../Content/Content';


export function Body() {

    const [isAboutMeFocused, setIsAboutMeFocused] = useState(true);
    const [isProjectsFocused, setIsProjectsFocused] = useState(false);
    const [ whoIsFocused_, setWhoIsFocused_ ] = useState('About Me');


    function handleAboutMeClick() {
        setIsAboutMeFocused(true);
        setIsProjectsFocused(false);
        setWhoIsFocused_('About Me');
    }

    function handleProjectsClick() {
        setIsAboutMeFocused(false);
        setIsProjectsFocused(true);
        setWhoIsFocused_('Projects');
    }

    return (
        <>
            <div className="absolute bg-gradient-to-r from-indigo-900 to-purple-600 h-full w-full flex flex-col">
                <div className=" flex align-middle flex-row justify-around w-[91.4%] self-center gap-[2px] mt-3">

                    <HeaderButton text="About Me" onClickToFocus={handleAboutMeClick} focus={isAboutMeFocused} />

                    <HeaderButton text="Projects" onClickToFocus={handleProjectsClick} focus={isProjectsFocused} />


                </div>

                <div>
                    <Content whoIsFocused={whoIsFocused_} />
                </div>
            </div>

        </>

    )
}