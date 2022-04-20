import React, { useState } from 'react';
import { MobileSliderData } from './MobileSliderData';

const MobileSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

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
                    justifyContent: 'center'

                }}
            >
                <section className='slider' style={{
                    height: '100%',
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
                                                height: '80%',
                                                boxShadow: '6px 3px 8px 1px #969696'
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