import React from 'react'

import ProjectCardComponent from '../ProjectCardComponent/ProjectCardComponent'
import projects from '../../data/projectData'

const ProjectSectionComponent = () => {
    return (
        <section
                className="
                            py-6
                            flex flex-col gap-4
                            bg-[#F6F6F6] dark:bg-[#2C2C2C]
                            rounded-lg
                        "
            >
                <div
                    className="flex items-center px-4 gap-4"
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
                        Projects
                    </h2>
                </div>

                <div
                    className="
                                p-4
                                flex flex-col
                                gap-2
                            "
                >

                    {projects && projects.map((project, index) => (
                        <ProjectCardComponent key={index} project={project} />
                    ))}
                </div>

            </section>
    )
}

export default ProjectSectionComponent