import React, { useState }from "react";
import { MobileAboutMe } from "./MobileAboutMe";


export const MobileSliderData = [

    {
        image:
            <MobileProject
                name='Poker Game'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/poker.png'
                image1='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/poker%202.png'
                image2='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/poker%203.png'
                description="A Poker game developed with python and the pygame library. It&apos;s single player and it&apos;s a game of chance. The player has to choose wisely in the right order to win."
                gitlink='https://github.com/phenriquep00/poker'
            ></MobileProject>
    }
];

function MobileProject(props) {

    const [image, setImage] = useState(props.image)
    const [inputTime, setInputTime] = useState(0)
    const time = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '90%',
                    backgroundColor: '#243035',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',


                }}
            > {/* root div */}

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#ffff00',
                        fontSize: '4.5vw',
                    }}
                >   {/* Image */}
                    <div>
                        {props.name}
                    </div>
                    <img
                        src={image}
                        style={{
                            width: '70%',
                            alignSelf: 'center',
                            border: '2px solid #ffff00',
                            boxShadow: '3px 3px 5px 1px #191712',
                            marginTop: '7%',
                            marginBottom: '5%',
                        }}
                    ></img>
                    <progress
                            style={{
                                backgroundColor:'#00ffff',
                                color: '#000000',
                                alignSelf: 'center',
                                opacity: '0.5',
                            }}
                            value={inputTime}
                            max="10"
                        ></progress>
                        {
                            time.map(time => {
                                setTimeout(() => {
                                    if (inputTime < 10) {
                                        setInputTime(inputTime + 1)
                                    } else if (inputTime === 10) {
                                        setInputTime(1)
                                        if (image === props.image) {
                                            setImage(props.image1)
                                        } else if (image === props.image1) {
                                            setImage(props.image2)
                                        } else if (image === props.image2) {
                                            setImage(props.image)
                                        }
                                    }

                                }, 1000)
                            })
                        }
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#ffffff',
                        fontSize: '4vw',
                        height: '100%',
                        width: '80%',
                        textAlign: 'justify',
                        marginTop: '12%',
                        marginBottom: '12%',

                    }}
                >   {/* Description */}
                        {props.description}
                        <input
                            style={{
                                backgroundColor: '#f5f77e',
                                color: '#000000',
                                border: '2px solid #ffffff',
                                borderRadius: '5px',
                                fontSize: '14px',
                                width: '70%',
                                alignSelf: 'center',
                                boxShadow: '0px 0px 5px #200F5E',
                                marginTop: '8%',
                                marginBottom: '%',

                            }}
                            type='button'
                            value='check out the github repo'
                            onClick={() => window.open(props.gitlink)}
                            onMouseEnter={() => {

                            }}
                            onMouseLeave={() => {

                            }}
                        ></input>

                </div>
            </div>
        </>
    )
}