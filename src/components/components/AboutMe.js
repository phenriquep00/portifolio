import { ProfilePic } from './Components'
import { useRef } from 'react';


export function AboutMe() {
    const testRef = useRef(null);
    const scrollToElement = () => testRef.current.scrollIntoView({ behavior: 'smooth' });
    const _scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '98.4%',
                    height: 'auto',
                    alignContent: 'center',
                    padding: '12px',
                    backgroundColor: '#243035',
                    color: '#FFFF00',
                    fontSize: '24px',
                    flex: 1,
                    marginTop: '-10px'
                }}
            >
                <p onClick={scrollToElement} style={{ marginTop: '-6px' }}>About Me</p>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <ProfilePic></ProfilePic>
                    <div>
                        <TextContent wid='100%' hei='auto'>
                            <div
                                style={{
                                    margin: '2px',
                                    padding: '12px',
                                    color: '#ffffff',
                                }}
                            >
                                <h2
                                    style={{
                                        margin: '8px'
                                    }}
                                >&#60; Hello There! </h2>
                                <pre>&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m Pedro, <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Technology enthusiast and student at UNIP (Universidade Paulista)
                                    <br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;Learning by trying and trying again <br />
                                    <h2>/&#62;</h2>
                                </pre>

                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginTop: '20px',
                                        borderTop: '2px solid'
                                    }}
                                >
                                    <p style={{ marginTop: '50px' }}> Technologies:</p>
                                    <TechIcon
                                        icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-python.gif'
                                        language='python'
                                    />
                                    <TechIcon
                                        icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-javascript.gif'
                                        language='javascript'
                                    />
                                    <TechIcon
                                        icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-react-native.gif'
                                        language='react'
                                    />
                                    <TechIcon
                                        icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-java.gif'
                                        language='java'
                                    />
                                    <TechIcon
                                        icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-html.gif'
                                        language='HTML'
                                    />


                                </div>

                            </div>

                        </TextContent>
                    </div>
                    <div
                        style={{
                            width: '50px',
                            height: '50px',
                            backgroundColor: 'yellow',
                            marginLeft: '1300px',
                            marginTop: '-50px',
                            color: '#000000',
                            alignItems: 'center',
                            fontSize: '40px',
                            textAlign: 'center',
                            boxShadow: '2px 1px 2px 1px #010f19'
                        }}
                        onClick={_scrollToTop}
                    >
                       <p style={{alignSelf: 'center', marginTop: '-1px'}}> ↑</p> 
                    </div>

                </div>
            </div>
            <div ref={testRef}></div>
        </>
    )
}

export function TextContent(props) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    backgroundColor: '#5F66A3',
                    borderRadius: '10px',
                    width: props.wid,
                    height: props.hei,
                    margin: '10px',
                }}
            >
                {props.children}
            </div>
        </>
    )
}

function TechIcon(props) {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0)',
                    borderRadius: '20px',
                    margin: '4px',
                    marginRight: '-70px',
                    marginTop: '8px'

                }}
            >
                <img src={props.icon} style={{ width: '40%', height: '40%', borderRadius: '20px', boxShadow: '2px 3px 2px 1px #403C3C' }}></img>
                <div>
                    <p style={{ color: '#ffffff', fontSize: '16px' }}>{props.language}</p>
                </div>
            </div>
        </>
    )
}