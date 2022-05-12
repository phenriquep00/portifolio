import { Description } from './Description/Description';
import { ImageSlider } from './ImageSlider/ImageSlider';

export function Overview({ title, description, repo }) {

    function handleOpenRepo() {
        window.open(repo, "_blank");
    }

    return (
        <div className={`flex w-full h-full flex-col items-center`}>
            <h1 className="text-6xl font-mono m-4">{title}</h1>

            <div className="flex flex-row w-full h-full"> {/*  content div */}
                {/* description div */}
                <div className="w-2/4 h-[92%]">
                     <Description description={description} onOpenRepo={handleOpenRepo}/>
                </div>
                   

                {/* image div */}
                <div className="w-2/4 h-[92%] ml-8">
                    <ImageSlider />
                </div>

            </div>

        </div>
    )
}