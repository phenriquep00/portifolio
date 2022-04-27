import { ProfilePic } from "../components/Components"


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
                    borderTop: '3px solid yellow',
                    borderRadius: '20px',

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
                    <div style={{marginBottom: '3%'}}>About Me</div>
                    <ProfilePic></ProfilePic>
                </div>
            </div>
        </>
    )
}
