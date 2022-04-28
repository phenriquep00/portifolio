import { useState, useEffect } from 'react';
import { MobileAboutMe } from './MobileAboutMe';
import { MobileHeader } from './MobileHeader';
import MobileSlider from './MobileSlider';
import { SliderData } from '../components/SliderData';
import { MobileAboutMeFocus } from './MobileAboutMe';
import { ColapsedProjects } from './MobileAboutMe';



export function MobileVersion() {
    const [isAboutMeFocus, setIsAboutMeFocus] = useState('8%');
    const [isAboutMe, setIsAboutMe] = useState(true);


    const [touchPosition, setTouchPosition] = useState(null);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientY;
        setTouchPosition(touchDown);
    }
    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientY;
        const diff = touchDown - currentTouch;

        if (diff > 5) {
            if (isAboutMe) {
                setIsAboutMeFocus("93%");
                setIsAboutMe(false);
            } else {
                setIsAboutMeFocus("8%");
                setIsAboutMe(true);
            }
        }


        setTouchPosition(null);
    }



    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#243035',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '7%',
                        background: '#243035',
                        position: 'fixed',
                    }}
                >
                    <MobileHeader />
                </div>

                <div
                    style={{
                        width: '100%',
                        height: '87%',
                        background: '#c7d0ec',
                        position: 'fixed',
                        marginTop: '12%',
                    }}
                >
                    <MobileSlider slides={SliderData} />
                </div>
                <div
                    style={{
                        position: 'fixed',
                        width: '100%',
                        height: isAboutMeFocus,
                        background: '#c7d0ec',
                        bottom: '0',
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onClick={handleTouchMove}
                >
                    {isAboutMe
                        ?
                        <MobileAboutMe />
                        :
                        <div
                            style={{
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',

                            }}
                        >
                            <MobileAboutMeFocus />
                            <div
                                style={{
                                    background: '#243035',
                                }}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onClick={handleTouchMove}
                            >
                                <ColapsedProjects />
                            </div>


                        </div>


                    }
                </div>
            </div>
        </>
    )
}