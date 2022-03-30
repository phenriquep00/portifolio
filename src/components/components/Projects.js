import { ContentArea, Project, ContentBox, Profile } from './Components'
import { TextContent } from './AboutMe'

export function Projects() {
    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#243035',
                    width: 'auto',
                    height: 'auto',

                }}
            >
                <div
                    style={{
                        width: '700px',
                        marginLeft: '540px'
                    }}
                >
                    <TextContent hei='100px' wid='60%'></TextContent>
                </div>
                
            </div>
        </>
    )
}