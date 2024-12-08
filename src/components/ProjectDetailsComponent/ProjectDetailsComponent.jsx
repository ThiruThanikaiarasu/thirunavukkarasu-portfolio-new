import React from 'react'
import { useLocation } from 'react-router-dom'
import VisitWebsiteButtonComponent from '../VisitWebsiteButtonComponent/VisitWebsiteButtonComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import OtherProjectsComponent from '../OtherProjectsComponent/OtherProjectsComponent'

const ProjectDetailsComponent = () => {

    const location = useLocation()
    const { project } = location.state || {}

    console.log(project)
    return (
        <div
            className="px-4 flex flex-col gap-6"
        >
            <div>
                <div 
                    className="h-12 w-12 rounded-full flex items-center justify-center border-1 ring-8 ring-[#f7f7f7] dark:ring-[#2C2C2C]" 
                    aria-hidden="true"

                >
                    <img src={project.icon} className="h-6 w-6 text-white" />
                </div>
            </div>

            <main
                className="flex flex-col gap-6"
            >
                <h1
                    className="
                                text-4xl font-medium 
                                text-[#373737] dark:text-[#ffffff]
                            "
                >
                    {project.title}
                </h1>

                <p
                    className="
                            text-lg 
                            leading-relaxed
                            text-[#666666] dark:text-[#c0c0c0]
                        "
                >
                    {project.content1}
                </p>

                <VisitWebsiteButtonComponent url={project.website} />

                <img src={project.mockup1} alt="" />

                <p
                    className="
                            text-lg 
                            leading-relaxed
                            text-[#666666] dark:text-[#c0c0c0]
                        "
                >
                    {project.content2}
                </p>

                <img src={project.mockup2} alt="" />

                <p
                    className="
                            text-lg 
                            leading-relaxed
                            text-[#666666] dark:text-[#c0c0c0]
                        "
                >
                    {project.content3}
                </p>

            </main>

            <OtherProjectsComponent />

            <FooterComponent />
        </div>
    )
}

export default ProjectDetailsComponent