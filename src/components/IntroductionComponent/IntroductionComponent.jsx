import React from 'react'
import emoji from '../../assets/images/avatar.webp'

const IntroductionComponent = () => {
    return (
            <main
                className="
                         flex flex-col-reverse items-center gap-6 md:flex-row md:justify-between
                    "
            >
                <div
                    className="
                                w-[90%] md:w-[60%] px-4
                                flex flex-col gap-4
                            "
                >
                    <h1
                        className="
                                    text-center md:text-start
                                    text-4xl md:text-4xl font-bold
                                    text-[#373737] dark:text-[#ffffff]
                                "   
                    >
                        Hey,  I'm Thiru
                    </h1>

                    <p
                        className="
                                    text-lg text-justify
                                    text-[#666666] dark:text-[#c0c0c0c0]
                                "   
                    >
                        A Full Stack developer on a journey to explore the world, grow, innovate, and tackle exciting challenges along the way.
                    </p>
                </div>

                <div
                    className="w-[50%] sm:w-[35%] md:w-[25%] mr-[5%]"
                >
                    <img 
                        src={emoji} 
                        alt="" 
                        className="rounded-full border-8 border-[#DADADA]"
                    />
                </div>
            </main>
    )
}

export default IntroductionComponent