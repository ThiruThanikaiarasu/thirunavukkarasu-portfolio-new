import React from 'react'
import ProjectSectionComponent from '../../components/ProjectSectionComponent/ProjectSectionComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const ProjectsPage = () => {
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
                        Projects
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
                        My Work
                    </h1>

                    <p
                        className="
                                    text-lg 
                                    text-[#666666] dark:text-[#c0c0c0]
                                    leading-relaxed
                                "
                    >
                        Explore my portfolio, where thoughtful coding meets intuitive design. Each project is crafted to elevate user experiences and drive engagement.
                    </p>
                </main>

                <ProjectSectionComponent />

                <FooterComponent />
        </div>
    )
}

export default ProjectsPage