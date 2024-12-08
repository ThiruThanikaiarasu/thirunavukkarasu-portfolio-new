import { Linkedin } from 'lucide-react'
import React from 'react'

import github_dark from '../../assets/images/github_dark.svg'
import github_light from '../../assets/images/github_light.svg'
import linkedin_dark from '../../assets/images/linkedin_dark.svg'
import linkedin_light from '../../assets/images/linkedin_light.svg'

import useDataContext from '../../hooks/useDataContext'

const FooterComponent = () => {

    const { isDarkMode } = useDataContext()

    const linkedInIcon = isDarkMode ? linkedin_light : linkedin_dark
    const githubIcon = isDarkMode ? github_light : github_dark

    const linkedInUrl = 'https://www.linkedin.com/in/thiruthanikaiarasu/'
    const githubUrl = 'https://www.github.com/thiruthanikaiarasu'

    return (
        <footer
            className="flex flex-col gap-3"
        >
            <div
                className="
                    py-6 px-6
                    flex justify-between
                    bg-[#F6F6F6] dark:bg-[#2C2C2C]
                    rounded-lg
                "
            >
                <div
                    className="
                        flex items-center
                        gap-2
                    "
                >
                    <span
                        className="
                                text-2xl 
                                pb-1
                                text-[#CCCCCC] dark:text-[#616161]
                            "
                    >
                        &#8226;
                    </span>

                    <h2
                        className="
                                text-xl font-medium
                                tracking-tight
                                text-[#666666] dark:text-[#C0C0C0]
                            "
                    >
                        Ping me
                    </h2>


                </div>
                <div
                    className="
                            mr-4
                            flex items-center 
                            gap-6
                        "
                >
                    <a 
                        href={linkedInUrl} 
                        target='_blank' 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={linkedInIcon} 
                            alt="" 
                            className="w-6 h-6 cursor-pointer"
                        />
                    </a>

                    <a 
                        href={githubUrl} 
                        target='_blank' 
                        rel="noopener noreferrer"
                    >
                        <img 
                            src={githubIcon} 
                            alt="" 
                            className="w-6 h-6 cursor-pointer"
                        />
                    </a>
                </div>
            </div>

            <div
                className="
                            py-6 px-6
                            bg-[#F6F6F6] dark:bg-[#2C2C2C]
                            rounded-lg
                        "
            >
                <p
                    className="
                            text-center
                            text-[#666666]
                        "
                >
                    Designed by <strong className="font-medium text-[#000000]">Thirunavukkarasu</strong> &copy; 2024
                </p>
            </div>
        </footer>
    )
}

export default FooterComponent