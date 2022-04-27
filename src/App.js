import ImageSlider from './components/components/ImageSlider';
import { SliderData } from './components/components/SliderData';
import { Header, Main } from './components/components/Components';
import { AboutMe } from './components/components/AboutMe';
import { useState, useEffect } from 'react';
import useWindowSize from './components/components/useWindowSize';
import { MobileHeader } from './components/mobile_components/MobileHeader';
import MobileSlider from './components/mobile_components/MobileSlider';
import { MobileAboutMe, MobileAboutMeFocus } from './components/mobile_components/MobileAboutMe';

function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [isAboutMeFocus, setIsAboutMeFocus] = useState('8%');
    const [ isAboutMe, setIsAboutMe ] = useState(true);
    

    const size = useWindowSize();


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
            setIsAboutMeFocus("93%");
            setIsAboutMe(false);
        }

        if (diff < 5) {
            setIsAboutMeFocus("8%");
            setIsAboutMe(true);
        }

        setTouchPosition(null);
    }



    useEffect(() => {
        if (size.width < size.height) {
            setIsMobile(true);
            setIsDesktop(false);
        } else {
            setIsMobile(false);
            setIsDesktop(true);
        }
    }, [size]);

    return (
        <>
            {
                isMobile ?
                    <> {/* mobile version */}
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
                                conclick={handleTouchMove}
                            >
                                {isAboutMe ? <MobileAboutMe /> : <MobileAboutMeFocus />}
                            </div>
                        </div>
                    </>
                    :
                    <Main> {/* desktop version */}

                        <Header></Header>
                        <div>
                            <ImageSlider slides={SliderData} />
                        </div>

                        <AboutMe></AboutMe>
                    </Main>
            }


        </>

    )
}

export default Home;
