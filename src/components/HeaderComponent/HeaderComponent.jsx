import React from 'react'

const HeaderComponent = ({ title }) => {
    return (
        <header
                className="flex justify-between items-center"
            >
                <div
                    className="flex items-center px-4 gap-2"
                >

                    <span
                        className="
                                text-2xl 
                                pb-1
                                text-[#CCCCCC] dark:#616161
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
                        {title}
                    </h2>
                </div>

                <div
                    className="
                            h-6
                            flex items-center justify-between gap-2
                            px-2 mx-2
                            rounded-full
                            bg-[#DFF7EC] dark:bg-[#223A2F]
                        "
                >
                    <span
                        className="
                                text-lg 
                                pb-1
                                text-[#039754] dark:text-[#28C780]
                            "
                    >
                        &#8226;
                    </span>
                    <p
                        className="
                                text-[12px] font-bold
                                py-0
                                tracking-normal
                                uppercase
                                text-[#039754] dark:text-[#039653]
                            "
                    >
                        available for work
                    </p>
                </div>
            </header>
    )
}

export default HeaderComponent