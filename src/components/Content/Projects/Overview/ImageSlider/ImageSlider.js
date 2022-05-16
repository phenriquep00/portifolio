import React, { useState, useEffect } from 'react';
import { NavigationButton } from './NavigationButton';

import cat1 from '../../../../assets/cat1.jpg'
import cat2 from '../../../../assets/cat2.jpg'
import cat3 from '../../../../assets/cat3.jpg'

import dog1 from '../../../../assets/dog1.jpg'
import dog2 from '../../../../assets/dog2.jpg'
import dog3 from '../../../../assets/dog3.jpg'

import mice1 from '../../../../assets/mice1.jpg'
import mice2 from '../../../../assets/mice2.jpeg'
import mice3 from '../../../../assets/mice3.jpg'

import fish1 from '../../../../assets/fish1.jpg'
import fish2 from '../../../../assets/fish2.jpg'
import fish3 from '../../../../assets/fish3.jpg'

import bird1 from '../../../../assets/bird1.jpg'
import bird2 from '../../../../assets/bird2.jpg'
import bird3 from '../../../../assets/bird3.jpg'



export function ImageSlider({ project }) {

    const [image1, setImage1] = useState(cat1);
    const [image2, setImage2] = useState(cat2);
    const [image3, setImage3] = useState(cat3);


    const [currentImage, setCurrentImage] = React.useState(image1);



    function nextImage() {
        setCurrentImage(currentImage === image1 ? image2 : currentImage === image2 ? image3 : image1);
    }

    function prevImage() {
        setCurrentImage(currentImage === image1 ? image3 : currentImage === image2 ? image1 : image2);
    }

    useEffect(() => {
        if (project === "Poker Game") {
            setImage1(cat1);
            setImage2(cat2);
            setImage3(cat3);
            
        }
        else if (project === "Imersao Dados Alura") {
            setImage1(dog1);
            setImage2(dog2);
            setImage3(dog3);
        }
        else if (project === "Pong") {
            setImage1(mice1);
            setImage2(mice2);
            setImage3(mice3);
        }
        else if (project === "NLW return") {
            setImage1(fish1);
            setImage2(fish2);
            setImage3(fish3);
        }
        else if (project === "Hangman") {
            setImage1(bird1);
            setImage2(bird2);
            setImage3(bird3);
        }
        else if (project === "Space Invaders") {
            setImage1(bird1);
            setImage2(bird2);
            setImage3(bird3);
        } else if (project === "Java Exercises"){
            setImage1(bird1);
            setImage2(bird2);
            setImage3(bird3);
        } else if (project === "Small Python Projects"){
            setImage1(bird1);
            setImage2(bird2);
            setImage3(bird3);
        } else if (project === "React Alura"){
            setImage1(bird1);
            setImage2(bird2);
            setImage3(bird3);
        }
        
    }, [project]);

    useEffect(() => {
        setCurrentImage(image1);
    }, [image1, image2, image3]);

    return (
        <div
            className="m-4 w-11/12 h-full p-6 text-justify shadow-2xl drop-shadow-2xl rounded-md ring-1 ring-gray-900 flex flex-row items-center transition-all duration-500 ease-in-out transform hover:scale-105"
            style={{
                backgroundImage: `url(${currentImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >

            <NavigationButton direction="left" gotClicked={nextImage} />

            <NavigationButton direction="right" gotClicked={prevImage} />

        </div>
    )
}