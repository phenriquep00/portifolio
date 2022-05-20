import React, { useState, useEffect } from 'react';
import { NavigationButton } from './NavigationButton';

import nlw1 from '../../../../assets/img/nlw/nlw1.png';
import nlw2 from '../../../../assets/img/nlw/nlw2.png';
import nlw3 from '../../../../assets/img/nlw/nlw3.png';


import poker1 from '../../../../assets/img/poker/poker1.png';
import poker2 from '../../../../assets/img/poker/poker2.png';
import poker3 from '../../../../assets/img/poker/poker3.png';

import hangman1 from '../../../../assets/img/hangman/hangman1.png';
import hangman2 from '../../../../assets/img/hangman/hangman2.png';

import spaceinvaders1 from '../../../../assets/img/spaceinvaders/spaceinvaders1.png';
import spaceinvaders2 from '../../../../assets/img/spaceinvaders/spaceinvaders2.png';
import spaceinvaders3 from '../../../../assets/img/spaceinvaders/spaceinvaders3.png';

import cantinacord1 from '../../../../assets/img/cantinacord/cantinacord1.png';
import cantinacord2 from '../../../../assets/img/cantinacord/cantinacord2.png';

import pong1 from '../../../../assets/img/pong/pong1.png';
import pong2 from '../../../../assets/img/pong/pong2.png';
import pong3 from '../../../../assets/img/pong/pong3.png';

import dadosalura1 from '../../../../assets/img/dadosalura/aluradados1.png';
import dadosalura2 from '../../../../assets/img/dadosalura/aluradados2.png';
import dadosalura3 from '../../../../assets/img/dadosalura/aluradados3.png';

import drum1 from '../../../../assets/img/drum/drum1.png';
import drum2 from '../../../../assets/img/drum/drum2.png';
import drum3 from '../../../../assets/img/drum/drum3.png';


export function ImageSlider({ project }) {

    const [image1, setImage1] = useState(nlw1);
    const [image2, setImage2] = useState(nlw2);
    const [image3, setImage3] = useState(nlw3);


    const [currentImage, setCurrentImage] = React.useState(image1);



    function nextImage() {
        setCurrentImage(currentImage === image1 ? image2 : currentImage === image2 ? image3 : image1);
    }

    function prevImage() {
        setCurrentImage(currentImage === image1 ? image3 : currentImage === image2 ? image1 : image2);
    }

    useEffect(() => {
        if (project === "Poker Game") {
            setImage1(poker1);
            setImage2(poker2);
            setImage3(poker3);
            setCurrentImage(image1);
        }
        else if (project === "Imersão Dados Alura") {
            setImage1(dadosalura1);
            setImage2(dadosalura2);
            setImage3(dadosalura3);
            setCurrentImage(image1);
        }
        else if (project === "Pong") {
            setImage1(pong1);
            setImage2(pong2);
            setImage3(pong3);
            setCurrentImage(image1);
        }
        else if (project === "NLW return") {
            setImage1(nlw1);
            setImage2(nlw2);
            setImage3(nlw3);
            setCurrentImage(image1);
        }
        else if (project === "Hangman") {
            setImage1(hangman1);
            setImage2(hangman2);
            setImage3(hangman2);
            setCurrentImage(image1);
        }
        else if (project === "Space Invaders") {
            setImage1(spaceinvaders1);
            setImage2(spaceinvaders2);
            setImage3(spaceinvaders3);
            setCurrentImage(image1);
        } else if (project === "React Alura") {
            setImage1(cantinacord1);
            setImage2(cantinacord2);
            setImage3(cantinacord2);
            setCurrentImage(image1);
        } else if (project === "Beat Machine") {
            setImage1(drum1);
            setImage2(drum2);
            setImage3(drum3);
            setCurrentImage(image1);
        }

    }, [project, image1, image2, image3]);


    return (
        <div className="flex flex-row w-full h-full">
            <NavigationButton direction="left" gotClicked={nextImage} />
            <div
                className="mt-4 w-11/12 h-full text-justify shadow-2xl drop-shadow-2xl rounded-md ring-1 ring-gray-900 flex flex-row items-center transition-all duration-500 ease-in-out transform hover:scale-105"
                style={{
                    backgroundImage: `url(${currentImage})`,
                    backgroundSize: '100% 100%',
                    backgroundrepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                }}
            >
            </div>
            <NavigationButton direction="right" gotClicked={prevImage} />
        </div>

    )
}