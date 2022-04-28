import ImageSlider from './components/components/ImageSlider';
import { SliderData } from './components/components/SliderData';
import { Header, Main } from './components/components/Components';
import { AboutMe } from './components/components/AboutMe';
import { useState, useEffect } from 'react';
import useWindowSize from './components/components/useWindowSize';
import { MobileHeader } from './components/mobile_components/MobileHeader';
import MobileSlider from './components/mobile_components/MobileSlider';
import { MobileAboutMe, MobileAboutMeFocus } from './components/mobile_components/MobileAboutMe';
import { MobileVersion } from './components/mobile_components/MobileVersion';

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
                        <MobileVersion></MobileVersion>
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
