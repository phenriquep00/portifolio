import React from "react";


export const SliderData = [
    {
        image:
            <Project
                name='Imersão Dados Alura'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/imersao%20dados.png'
                image1='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/teste.png'
                wid='400px' hei='500px'
                description="Data Science Project developet during Alura&apos;s Data Immersion. With this project, I was able to learn how to use the data science tools and how to use them to solve problems."
                gitlink='https://github.com/phenriquep00/imersao_dados_alura'
            ></Project>
    },
    {
        image:
            <Project
                name='Hangman Game'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/hangman.png'
                image1='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/teste.png'
                wid='400px' hei='500px'
                description="A Hangman game developed in React.Js. The game is based on the classic game of hangman. The player has to guess the word before the stickman if completely drawn in the hang"
                gitlink='https://github.com/phenriquep00/hangman'
            ></Project>
    },
    {
        image:
            <Project
                name='CantinaCord'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/cantina-cord.png'
                image1='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/teste.png'
                wid='400px' hei='500px'
                description="A discord-based app created during Alura&apos;s React Immersion. This app was created only with the purpose of learning the basics of React.Js and the discord API."
                gitlink='https://github.com/phenriquep00/cantina-cord'
            ></Project>
    },
    {
        image:
            <Project
                name='Space Invaders'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/space%20invaders.png'
                image1='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/teste.png'
                wid='400px' hei='500px'
                description="A game based on the classic Space Invaders. The player has to destroy all the enemies before they reach the bottom of the screen. Created with pygame and based in the freeCodeCamp&apos;s tutorial."
                gitlink='https://github.com/phenriquep00/phenriquep00/tree/main/space_invader'
            ></Project>
    },
    {
        image:
            <Project
                name='Poker Game'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/poker.png'
                image1='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/teste.png'
                wid='400px' hei='500px'
                description="A Poker game developed with python and the pygame library. It&apos;s single player and it&apos;s a game of chance. The player has to choose wisely in the right order to win."
                gitlink='https://github.com/phenriquep00/poker'
            ></Project>
    }
];

function Project(props) {
    const [bgFocus, setBgFocus] = React.useState('#5F66A3')
    const [colorFocus, setColorFocus] = React.useState('#ffffff')
    const [borderFocus, setBorderFocus] = React.useState('1px solid #ffffff')
    const [image, setImage] = React.useState(props.image)

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    width: '1000px',
                    height: '570px',
                    backgroundColor: '#243035',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#FFFF00',
                    flexDirection: 'column'
                }}
            >
                <h2 style={{ borderBottom: '1px solid #ffff00' }}>{props.name}</h2>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',

                    }}
                >
                    {/* img div */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                        onClick={() => {
                            {
                                if (image === props.image) {
                                    setImage(props.image1)
                                } else {
                                    setImage(props.image)
                                }
                            }
                        }}
                    >
                        <img style={{ width: props.wid, hei: props.hei, margin: '35px', border: '3px solid #ffffff' }} src={image} />
                        {
                            setTimeout(() => {
                                if (image === props.image) {
                                    setImage(props.image1)
                                } else {
                                    setImage(props.image)
                                }
                            }, 10000)
                        }
                        <div
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#243035',
                                marginTop: '-50px',
                            }}
                        
                        >

                        </div>

                    </div>
                    {/* text div */}
                    <div style={{ display: 'flex', flexDirection: 'column', margin: '5px', fontSize: '22px', marginTop: '30px', color: '#ffffff', wordSpacing: '8px', textAlign: 'justify', marginRight: '20px', lineHeight: '30px' }}>
                        {props.description}
                        <input
                            style={{
                                backgroundColor: bgFocus,
                                color: colorFocus,
                                border: borderFocus,
                                borderRadius: '5px',
                                padding: '5px',
                                marginTop: '100px',
                                marginBottom: '10px',
                                fontSize: '14px',
                                width: '40%',
                                alignSelf: 'center',
                                boxShadow: '0px 0px 5px #200F5E'

                            }}
                            type='button'
                            value='check out the github repo'
                            onClick={() => window.open(props.gitlink)}
                            onMouseEnter={() => {
                                setBgFocus('#200F5E')
                                setColorFocus('#ffff00')
                                setBorderFocus('1px solid #ffff00')
                            }}
                            onMouseLeave={() => {
                                setBgFocus('#5F66A3')
                                setColorFocus('#ffffff')
                                setBorderFocus('1px solid #ffffff')
                            }}
                        ></input>
                    </div>
                </div>

            </div>
        </>
    )
}