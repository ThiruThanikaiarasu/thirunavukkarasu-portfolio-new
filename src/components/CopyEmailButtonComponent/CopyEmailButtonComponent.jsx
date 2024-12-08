import React, { useState } from 'react'
import Button from '../../elements/Button'
import { Copy } from 'lucide-react'

const CopyEmailButtonComponent = () => {

    const [buttonText, setButtonText] = useState('Copy Email')
    const email = 'thiru.thanikaiarasu@gmail.com'

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                setButtonText('Copied!');
                setTimeout(() => setButtonText('Copy Email'), 1000)
            })
            .catch((error) => {
                console.error('Failed to copy email: ', error)
            })
    }

    return (
        <Button
            className="
                        h-10
                        flex items-center 
                        px-2 
                        space-x-1
                        text-lg tracking-tight 
                        bg-[#ffffff] dark:bg-[#212121]
                        text-[#373737] dark:text-[#ffffff]
                        rounded-md 
                        border-1 border dark:border-[#2b2b2b]
                        hover:ring-4 hover:ring-[#ebebeb] dark:hover:ring-[#1c1c1c]
                        focus:outline-none 
                    "
            onClick={handleCopyEmail}
        >
            <Copy 
                size={14}
            />
            <span className="select-none tracking-tighter text-[16px]">{buttonText}</span>
        </Button>
    )
}

export default CopyEmailButtonComponent