export function MobileHeader() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    background: '#243035',
                    width: '100%',
                    height: '100%',
                    alignItems: 'left',
                    zIndex: '20',

                }}
            >
                <SocialMidiaBar></SocialMidiaBar>
            </div>
        </>
    )
}

export function SocialMidiaBar() {
    return (
        <>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                }}
            >
                <SocialMidiaIcons
                    source='https://github.com/phenriquep00'
                    icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png'
                />


                <SocialMidiaIcons
                    source='https://www.linkedin.com/in/pedro-lima-255a33223/'
                    icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/linkedin/linkedin-4-32.png'
                />


                <SocialMidiaIcons
                    source='https://www.instagram.com/im.pedrooo/'
                    icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/instagram/instagram-4-32.png'
                />


                <SocialMidiaIcons
                    source='gmail'
                    icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/gmail/email-14-32.png'
                />

                <SocialMidiaIcons
                    source='https://twitter.com/Pedro32977686'
                    icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/twitter/twitter-4-32.png'
                />
            </div>
        </>
    )
}


export function SocialMidiaIcons(props) {

    return (
        <>
            <div
                style={{
                    margin: '7px 10px 0px 10px',
                    alignSelf: 'center'
                }}
            >
                <a href={props.source} target="_blank" rel="noreferrer">
                    <img src={props.icon} ></img>
                </a>
            </div>
        </>
    )
}