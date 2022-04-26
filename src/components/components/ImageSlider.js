import React, { useState } from 'react';
import { SliderData } from './SliderData';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const [focus, setFocus] = React.useState('#ffffff')
    const [focus_, setFocus_] = React.useState('#ffffff')

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
                    marginTop: '50px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'

                }}
            >

                <input
                    type="button"
                    style={{
                        zIndex: '10',
                        width: '80px',
                        height: '80px',
                        alignSelf: 'center',
                        marginRight: '8px',
                        background: '#243035',
                        border: 'none',
                        borderRadius: '60px',
                        color: focus,
                        fontSize: '40px',

                    }}
                    onClick={prevSlide}
                    onMouseEnter={() => setFocus('#FFFF00')}
                    onMouseLeave={() => setFocus('#ffffff')}
                    value="⬅"
                />
                <section className='slider' style={{
                    height: '87vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: '10px'
                }}>

                    {
                        SliderData.map((slide, index) => {
                            return (
                                <div
                                    className={index === current ? 'slide active' : 'slide'}
                                    key={index}
                                    style={{
                                        opacity: '1',
                                        transitionDuration: '2s',
                                        transform: 'scale(1.08)'
                                    }}
                                >
                                    {index === current && (
                                        <div
                                            style={{
                                                width: '1000px',
                                                height: '570px',
                                                borderRadius: '20px',
                                                boxShadow: '6px 3px 8px 1px #969696'
                                            }}
                                        > {slide.image}</div>
                                    )}
                                </div>
                            );
                        })
                    }

                </section >
                <input
                    type="button"
                    style={{
                        zIndex: '10',
                        width: '80px',
                        height: '80px',
                        alignSelf: 'center',
                        marginLeft: '8px',
                        background: '#243035',
                        border: 'none',
                        borderRadius: '60px',
                        color: focus_,
                        fontSize: '40px',

                    }}
                    onClick={prevSlide}
                    onMouseEnter={() => setFocus_('#FFFF00')}
                    onMouseLeave={() => setFocus_('#ffffff')}
                    value="➡"

                />

            </div>

        </>

    );
};


export default ImageSlider;