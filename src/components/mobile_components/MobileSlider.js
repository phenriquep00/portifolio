import React, { useState } from 'react';
import { MobileSliderData } from './MobileSliderData';

const MobileSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const [touchPosition, setTouchPosition] = useState(null);

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition;

        if (touchDown === null) {
            return;
        }

        const currentTouch = e.touches[0].clientX;
        const diff = touchDown - currentTouch;

        if (diff > 0) {
            nextSlide();
        }

        if (diff < 0) {
            prevSlide();
        }

        setTouchPosition(null);
    }

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <section className='slider' style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: '92.7%',

                }}>

                    {
                        MobileSliderData.map((slide, index) => {
                            return (
                                <div
                                    className={index === current ? 'slide active' : 'slide'}
                                    key={index}
                                    style={{
                                        opacity: '1',
                                        transitionDuration: '1s',
                                        transform: 'scale(1.08)'
                                    }}
                                >
                                    {index === current && (
                                        <div
                                            style={{
                                                width: '100%',
                                                height: '100%',

                                            }}
                                        > {slide.image} </div>
                                    )}
                                </div>
                            );
                        })
                    }

                </section >

            </div>

        </>

    );
};


export default MobileSlider;