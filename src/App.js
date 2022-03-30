import ImageSlider from './components/components/ImageSlider';
import { SliderData } from './components/components/SliderData';
import { Header, Main } from './components/components/Components';
import { AboutMe } from './components/components/AboutMe'

function Home() {
    return (
        <>
            <Main>
                <Header></Header>
                <div>
                    <ImageSlider slides={SliderData} />
                </div>
                
                <AboutMe></AboutMe>
            </Main>

        </>

    )
}

export default Home;
