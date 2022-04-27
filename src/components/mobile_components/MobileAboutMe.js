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
                    marginTop: '-2%'

                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: '2%',
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
                    height: '130%',
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
                            alignItems: 'center',
                            width: '100%',
                            height: '100%',
                        }}
                    >   
                    
                    </div>
                </div>
            </div>
        </>
    )
}