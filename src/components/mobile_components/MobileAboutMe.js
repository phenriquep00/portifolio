import { MobileProfilePic } from "./MobileProfilePic"


export function MobileAboutMe() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    background: '#243035',
                    position: 'fixed',
                    color: 'yellow',
                    borderTop: '3px solid yellow',
                    borderRadius: '20px',

                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '2%',
                    }}
                >About Me</div>
            </div>
        </>
    )
}


export function MobileAboutMeFocus() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    background: '#243035',
                    position: 'fixed',
                    color: 'yellow',
                    marginTop: '-1%'

                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '3%',
                        alignItems: 'center',

                    }}
                >
                    <div style={{ marginBottom: '3%' }}>About Me</div>
                    <div
                        style={{
                            width: '',
                        }}
                    >
                        <MobileProfilePic></MobileProfilePic>
                        <AboutMeBox></AboutMeBox>
                    </div>


                </div>
            </div>
        </>
    )
}


function AboutMeBox() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    height: 'auto',
                    alignContent: 'center',
                }}
            >
                <div
                    style={{
                        margin: '2px',
                        padding: '12px',
                        color: '#ffffff',
                        backgroundColor: '#5f66a3',
                        width: '90%',
                        height: '90%',
                        borderRadius: '20px',
                        boxShadow: '4px 5px 4px 1px #1E2021'

                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            height: 'auto',
                            fontSize: '14px',
                            marginTop: '-3%',
                        }}
                    >
                        <h2>&#60; Hello There!</h2>
                        <pre
                            style={{
                                marginTop: '-1%',
                            }}
                        >
                            &nbsp;&nbsp;&nbsp;&nbsp;I&apos;m Pedro, <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Technology enthusiast an studant at <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Universidade Paulista. <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;Learning by trying and trying again <br />
                            <h2>/&#62;</h2>
                        </pre>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                width: '100%',
                                height: 'auto',
                                borderTop: '1px solid #ffffff',
                                alignItems: 'center',
                                fontSize: '14px',

                            }}
                        >
                            Technologies:
                            <MobileTechIcon
                                icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-python.gif'
                                language='python'
                            />
                            <MobileTechIcon
                                icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-javascript.gif'
                                language='javascript'
                            />
                            <MobileTechIcon
                                icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-react-native.gif'
                                language='react'
                            />
                            <MobileTechIcon
                                icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-java.gif'
                                language='java'
                            />
                            <MobileTechIcon
                                icon='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/languages/icons8-html.gif'
                                language='HTML'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ColapsedProjects></ColapsedProjects>
        </>
    )
}


function MobileTechIcon(props) {
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
                    marginTop: '8px'

                }}
            >
                <img src={props.icon} style={{ width: '100%', height: '30%', borderRadius: '10px', boxShadow: '2px 3px 2px 1px #403C3C' }}></img>

            </div>
        </>
    )
}

function ColapsedProjects() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    height: '80%',
                    width: '100%',
                    background: '#243035',
                    color: 'yellow',
                    borderTop: '3px solid yellow',
                    borderRadius: '20px',
                    marginTop: '6%'

                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '2%',
                    }}
                >Projects</div>
            </div>
        </>
    )
}