import { ChevronRight } from 'lucide-react'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const ProjectCardComponent = ({ project }) => {

    const navigate = useNavigate()
    const location = useLocation()

    const handleOnClick = () => {
        const url = location.pathname.includes('projects') ? project.url : `projects/${project.url}`
    
        navigate(url, { state: { project: project } })
    }
    
    return (
        <div 
            className="
                        bg-white dark:bg-[#373737]
                        dark:text-[#FDFDFD]
                        rounded-xl overflow-hidden cursor-pointer 
                        transition-all duration-300 
                        shadow-custom-shadow
                        hover:ring-4 hover:ring-[#eaeaea] dark:hover:ring-[#252525]
                    "
            onClick={handleOnClick}
            >
            <div className="p-4 flex items-center space-x-4">
                <div className="flex-shrink-0">
                    <div 
                        className="h-12 w-12 rounded-full flex items-center justify-center border-1 ring-8 ring-[#f7f7f7] dark:ring-[#2C2C2C]" 
                        aria-hidden="true"

                    >
                        <img src={project.icon} className="h-6 w-6 text-white" />
                    </div>
                </div>
                <div className="flex-1 min-w-0 px-2 flex flex-col gap-2">
                    <h2 
                        className="
                                    text-xl font-semibold 
                                    text-gray-900 dark:text-[#FEFEFE]
                                    truncate
                                "
                    >
                        {project.title}
                    </h2>
                    <p className="
                                    text-lg 
                                    text-[#666666] dark:text-[#BBBBBB]
                                "
                    >
                        {project.description}
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <ChevronRight className="h-6 w-6 text-[#A0A0A0]" aria-hidden="true" />
                </div>
            </div>
            </div>
    )
}

export default ProjectCardComponent