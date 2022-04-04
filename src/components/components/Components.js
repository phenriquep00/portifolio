import React, { useState } from "react";
import ReactDOM from 'react-dom';


export function Main(props) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: '#C7D0EC',
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                    height: '100%'
                }}
            >
                {props.children}
            </div>
        </>
    )
}


export function Header() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    background: '#243035',
                    width: '100%',
                    height: '7%',
                    alignItems: 'left',
                    position: 'fixed',
                    zIndex: '20'
                }}
            >
                <SocialMidiaBar></SocialMidiaBar>
            </div>
        </>
    )
}


export function ProfilePic() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '6px',
                    marginTop: '15px',
                    marginLeft: '30px'
                }}
            >
                <img
                    src='https://github.com/phenriquep00.png'
                    style={{
                        border: '1px solid',
                        borderRadius: '150px',
                        height: '200px',
                        width: '200px'
                    }}
                >
                </img>
            </div>
        </>
    )
}

export function SocialMidiaBar() {
    return (
        <>
            <div
                style={{
                    height: 'auto',
                    width: '75%',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginLeft: '215px'
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
    const [focus, setFocus] = React.useState('#243035')

    return (
        <>
            <div
                style={{
                    margin: '7px 10px 0px 10px',
                    borderBottom: '3px solid',
                    borderColor: focus,
                }}
                onMouseEnter={() => setFocus('#FFFF00')}
                onMouseLeave={() => setFocus('#243035')}
            >
                <a href={props.source} target="_blank" rel="noreferrer">
                    <img src={props.icon} ></img>
                </a>
            </div>
        </>
    )
}


export function ContentArea(props) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#C7D0EC',
                    marginLeft: '10px',
                    marginTop: '6px',
                }}
            >
                {props.children}
            </div>
        </>
    )
}

export function ContentBox(props) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: props.wid,
                    height: props.hei,
                    backgroundColor: '#C7D0EC',
                    borderRadius: '10px',
                    alignItems: 'center',
                    alignContent: 'center'
                }}
            >
                {props.children}
            </div>
        </>
    )
}


export function Project(props) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    height: '100%',
                    width: '100%',
                    background: '#C7D0EC',
                    borderRadius: '10px'
                }}
            >
                <div
                    style={{
                        color: '#333333',
                        height: '10%',
                        width: '80%',
                        borderBottom: '1px solid',
                        fontSize: '30px',
                    }}
                >
                    {/* Nome do projeto */}
                    <span> &nbsp;&nbsp;&nbsp;&nbsp; {props.name}</span>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        height: '90%',
                        width: '100%'
                    }}
                >
                    {/* Conteúdo (imagem e descrição) */}
                    <div
                        style={{
                            border: '1px solid',
                            margin: '40px 10px 0px 30px',
                            width: '35%',
                            height: '80%',
                            backgroundColor: '#3B3E46',
                            borderRadius: '10px'
                        }}
                    >
                        {/* Imagem do projeto */}
                    </div>

                    <div
                        style={{
                            border: '1px solid',
                            margin: '40px 30px 0px 10px',
                            width: '65%',
                            height: '80%',
                            backgroundColor: '#3B3E46',
                            borderRadius: '10px'
                        }}
                    >
                        {/* Descrição e link */}
                    </div>
                </div>
            </div>

        </>
    )
}

export function Profile() {
    return (
        <>
            <ProfilePic></ProfilePic>
            <div /* box under pic */
                    /* TODO: make it draggable */
                style={{
                    border: '1px solid',
                    width: '60%',
                    height: '300px',
                    backgroundColor: '#3B3E46',
                    borderRadius: '10px',
                    marginTop: '-150px',
                    marginLeft: '40px'
                }}
            >
            </div>
        </>
    )
}

