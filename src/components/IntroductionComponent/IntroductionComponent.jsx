import React from 'react'
import HireMeButtonComponent from '../HireMeButtonComponent/HireMeButtonComponent'
import CopyEmailButtonComponent from '../CopyEmailButtonComponent/CopyEmailButtonComponent'
import emoji from '../../assets/images/img1.jpg'

const IntroductionComponent = () => {
    return (
<main
                className="flex justify-between"
            >
                <div
                    className="
                                w-[60%] px-4
                                flex flex-col gap-4
                            "
                >
                    <h1
                        className="
                                    text-4xl font-bold
                                    text-[#373737] dark:text-[#ffffff]
                                "   
                    >
                        I'm Thirunavukkarasu
                    </h1>

                    <p
                        className="
                                    text-lg 
                                    text-[#666666] dark:text-[#c0c0c0c0]
                                "   
                    >
                        Full Stack Developer
                    </p>

                    <div
                        className="flex gap-2"
                    >
                       
                        <HireMeButtonComponent />
                    
                        <CopyEmailButtonComponent />
    
                    </div>
                </div>

                <div
                    className="w-[25%] mr-[5%]"
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