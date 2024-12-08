import React from 'react'
import profile from '../../assets/images/img1.jpg'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const ProfilePage = () => {
    return (
        <div
            className="px-4 flex flex-col gap-6"
        >
            <div
                    className="flex items-center gap-2"
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
                        About
                    </h2>
            </div>

            <main
                className="flex flex-col gap-5"
            >
                <h1
                    className="
                                dark:text-[#ffffff]
                                text-4xl font-medium
                                tracking-tight
                            "
                >
                    Its me thiru
                </h1>

                <p
                    className="
                                text-lg text-justify
                                text-[#666666] dark:text-[#c0c0c0]
                                leading-relaxed
                            "
                >
                    As a web developer with a deep appreciation for the unseen layers of digital experiences, I’m drawn to the intricacies of backend development. Driven by a relentless thirst for knowledge and innovation, I’m committed to creating impactful solutions and pushing boundaries. I see myself as a magician, orchestrating the backend to bring ideas to life. Problem-solving fuels me, and I love transforming abstract concepts into functional realities that enhance every user interaction.
                </p>
                <div
                    className="flex justify-center py-4"
                >
                    <img 
                        src={profile} 
                        alt="" 
                        className="w-[80%] rounded-full shadow-custom-shadow border-8"
                    />
                </div>
                <p
                    className="
                                text-lg text-justify
                                text-[#666666] dark:text-[#c0c0c0]
                                leading-relaxed
                            "
                >
                    My fascination with web development deepened as I began to understand the art of server optimization and the seamless flow of data. There’s something incredibly rewarding about watching a well-tuned backend respond in fractions of a second, delivering information across the globe almost instantaneously. Each request and response cycle reveals the power of efficient code, and it inspires me to continually refine my skills. This balance of precision and speed is where I find true fulfillment—creating systems that are not only functional but also fast, resilient, and ready to adapt to evolving demands.
                </p>
            </main>
            
            <FooterComponent />
        </div>
    )
}

export default ProfilePage