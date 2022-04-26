import ImageSlider from './components/components/ImageSlider';
import { SliderData } from './components/components/SliderData';
import { Header, Main } from './components/components/Components';
import { AboutMe } from './components/components/AboutMe';
import { useState, useEffect } from 'react';
import useWindowSize from './components/components/useWindowSize';
import { MobileHeader } from './components/mobile_components/MobileHeader';
import MobileSlider from './components/mobile_components/MobileSlider';
import { MobileAboutMe } from './components/mobile_components/MobileAboutMe';

function Home() {
    const [isMobile, setIsMobile] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const size = useWindowSize();

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
                                <MobileHeader/>
                            </div>

                            <div
                                style={{
                                    width: '100%',
                                    height: '87%',
                                    background: 'red',
                                    position: 'fixed',
                                    marginTop: '11%',
                                }}
                            >
                                <MobileSlider slides={SliderData}/>
                            </div>
                            <div
                                style={{
                                    position: 'fixed',
                                    width: '100%',
                                    height: '7%',
                                    background: '#243035',
                                    marginTop: '150%',

                                }}
                            >
                                <MobileAboutMe/>
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
