import ImageSlider from './components/components/ImageSlider';
import { SliderData } from './components/components/SliderData';
import { Header, Main } from './components/components/Components';
import { AboutMe } from './components/components/AboutMe';
import { useState, useEffect } from 'react';
import useWindowSize from './components/components/useWindowSize';

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
                    <>
                        <div>
                            <Header></Header>
                        </div>
                    </>
                    :
                    <Main>
                
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
