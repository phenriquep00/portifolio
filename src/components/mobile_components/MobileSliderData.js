import React from "react";


export const MobileSliderData = [

    {
        image:
            <MobileProject
                name='Poker Game'
                image='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/poker.png'
                image1='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/poker%202.png'
                image2='https://raw.githubusercontent.com/phenriquep00/portifolio/master/src/components/img/projects/poker%203.png'
                description="teste"
                gitlink='https://github.com/phenriquep00/poker'
            ></MobileProject>
    }
];

function MobileProject(props) {
    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#243035',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '8%',
                    justifyContent: 'center',


                }}
            > {/* root div */}

                <div
                    style={{
                        display: 'flex',
                        paddingTop: '3%',
                        paddingBottom: '5%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: '#ffff00',
                        fontSize: '4vw',
                    }}
                >   {/* Image */}
                    <div>
                        {props.name}
                    </div>
                    <img
                        src={props.image}
                        style={{
                            width: '60%',
                            height: '60%',
                            alignSelf: 'center',
                            border: '2px solid #ffff00',
                            boxShadow: '3px 3px 5px 1px #191712',
                            marginTop: '3%',
                        }}
                    ></img>
                </div>
                <div>   {/* Description */}
                        {props.description}
                </div>
            </div>
        </>
    )
}