import { ProfilePic } from './Components'
import { useRef } from 'react';


export function AboutMe() {
    const testRef = useRef(null);
    const scrollToElement = () => testRef.current.scrollIntoView({ behavior: 'smooth' });

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
                    flex: 1
                }}
            >
                <p onClick={scrollToElement} style={{marginTop: '-6px'}}>About Me</p>
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
                                <pre>&nbsp;&nbsp;&nbsp;&nbsp;I&apos;m Pedro, <br/> 
                                &nbsp;&nbsp;&nbsp;&nbsp;Technology enthusiast and student at UNIP (Universidade Paulista)
                                <br/>
                                &nbsp;&nbsp;&nbsp;&nbsp;Learning by trying, with lots, lots of failures <br/>
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
                    backgroundColor: '#547080',
                    borderRadius: '10px',
                    width: props.wid,
                    height: props.hei,
                    margin: '10px'
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
                    backgroundColor: '#ffffff',
                    borderRadius: '20px',
                    margin: '2px'

                }}
            >
                <img src={props.icon} style={{width: '40%', height: '40%', borderBottom: '1px solid #000000'}}></img>
                <div>
                    <p style={{ color: '#000000' , fontSize: '16px'}}>{props.language}</p>
                </div>
            </div>
        </>
    )
}