import React from 'react'
import Button from '../../elements/Button'
import { useNavigate } from 'react-router-dom'
import { CirclePlus } from 'lucide-react'

const HireMeButtonComponent = () => {

    const navigate = useNavigate()

    const handleHireMeClick = () => {
        navigate('/contact')
    }

    return (
        <Button 
            className="
                        flex items-center 
                        px-2 py-1 
                        space-x-1
                        text-lg tracking-tight 
                        bg-[#141414] dark:bg-[#383838]
                        text-white 
                        rounded-md
                        hover:ring-4 hover:ring-[#ebebeb] dark:hover:ring-[#1c1c1c]
                        focus:outline-none
                    "
            onClick={handleHireMeClick}
        >
            <CirclePlus 
                size={14}
            />
            <span className="select-none tracking-tighter text-[16px]">Hire Me</span>
        </Button>
    )
}

export default HireMeButtonComponent