export const SliderData = [
    {
        image:
            <Project
                name='Imersão Dados Alura'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/my-app/pages/src/img/projects/imersao%20dados.png'
                wid='400px' hei='500px'
                description="Data Science Project developet during Alura&apos;s Data Immersion. With this project, I was able to learn how to use the data science tools and how to use them to solve problems."
            ></Project>
    },
    {
        image:
            <Project
                name='Hangman Game'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/my-app/pages/src/img/projects/hangman.png'
                wid='400px' hei='500px'
                description="A Hangman game developed in React.Js. The game is based on the classic game of hangman. The player has to guess the word before the stickman if completely drawn in the hang"
            ></Project>
    },
    {
        image:
            <Project
                name='CantinaCord'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/my-app/pages/src/img/projects/cantina-cord.png'
                wid='400px' hei='500px'
                description="A discord-based app created during Alura&apos;s React Immersion. This app was created only with the purpose of learning the basics of React.Js and the discord API."
            ></Project>
    },
    {
        image:
            <Project
                name='Space Invaders'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/my-app/pages/src/img/projects/space%20invaders.png'
                wid='400px' hei='500px'
                description="A game based on the classic Space Invaders. The player has to destroy all the enemies before they reach the bottom of the screen. Created with pygame and based in the freeCodeCamp&apos;s tutorial."
            ></Project>
    },
    {
        image:
            <Project
                name='Poker Game'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/my-app/pages/src/img/projects/poker.png'
                wid='400px' hei='500px'
                description="A Poker game developed with python and the pygame library. It&apos;s single player and it&apos;s a game of chance. The player has to choose wisely in the right order to win."
            ></Project>
    }
];

function Project(props) {
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
                <h1 style={{ borderBottom: '1px solid #ffff00' }}>{props.name}</h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',

                    }}
                >
                    {/* img div */}
                    <div>
                        <img style={{ width: props.wid, hei: props.hei, margin: '35px' }} src={props.image} />
                    </div>
                    {/* text div */}
                    <div style={{ margin: '5px', fontSize: '22px', marginTop: '30px', color: '#ffffff', wordSpacing: '8px', textAlign: 'justify', marginRight: '20px', lineHeight: '30px' }}>
                        {props.description}
                    </div>
                </div>

            </div>
        </>
    )
}  