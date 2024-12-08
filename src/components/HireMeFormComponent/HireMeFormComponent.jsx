import React, { useRef, useState } from 'react'
import Button from '../../elements/Button'
import FooterComponent from '../FooterComponent/FooterComponent'
import useFormValidation from '../../hooks/useFormValidation'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import useDataContext from '../../hooks/useDataContext'

const HireMeFormComponent = () => {

    const form = useRef()

    const { formValue, setFormValue, errors, handleChange, validateForm } = useFormValidation()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { isDarkMode } = useDataContext()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!navigator.onLine) {
            toast.error(
                'You are offline. Please check your internet connection.', 
                {
                    position: 'top-right',
                    duration: 2000,
                    style: {
                        background: isDarkMode ? '#333333' : '#FFFFFF', 
                        color: isDarkMode ? '#FFFFFF' : '#000000',
                    }
                })
            return
        }

        if (validateForm()) {
            setIsSubmitting(true)
            emailjs.sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAIL_PUBLIC_KEY
            )            
            .then(
                (result) => {
                    toast.success('Email sent successfully',
                        {
                            position: 'top-right',
                            duration: 2000,
                            style: {
                                background: isDarkMode ? '#333333' : '#FFFFFF', 
                                color: isDarkMode ? '#FFFFFF' : '#000000',
                            }
                        }
                    )
                    setIsSubmitting(false)
                    setFormValue({
                        name: '',
                        email: '',
                        message: '',
                    })
                },
                (error) => {
                    toast.error(`Failed to send message: ${error.text}`,
                        {
                            position: 'top-right',
                            duration: 2000,
                            style: {
                                background: isDarkMode ? '#333333' : '#FFFFFF', 
                                color: isDarkMode ? '#FFFFFF' : '#000000',
                            }
                        }
                        )
                    setIsSubmitting(false)
                },
            )
        } else {
            
        }
    }

    return (
        <form
            className="px-4 flex flex-col gap-4 mt-6"
            onSubmit={handleSubmit}
            ref={form}
        >
            <div
                className="flex justify-between"
            >
                <div className="flex flex-col w-[48%]">
                    <input 
                        type="text" 
                        name="name"
                        placeholder='Name'
                        value={formValue.name}
                        onChange={handleChange}
                        className="
                            px-4 py-2
                            bg-[#F7F7F7] dark:bg-[#2C2C2C] 
                            border dark:border-[#2C2C2C] dark:outline-none
                            rounded-md
                        "
                    />
                    {errors.name && (
                        <span className="text-red-500 text-sm pt-1">{errors.name}</span>
                    )}
                </div>

                <div className="flex flex-col w-[48%]">
                    <input 
                        type="text" 
                        name="email"
                        placeholder='Email Address'
                        value={formValue.email}
                        onChange={handleChange}
                        className="
                            px-4 py-2
                            bg-[#F7F7F7] dark:bg-[#2C2C2C]
                            border dark:border-[#2C2C2C] dark:outline-none
                            rounded-md
                        "
                    />
                    {errors.email && (
                        <span className="text-red-500 text-sm pt-1">{errors.email}</span>
                    )}
                </div>
            </div>

            <div
                className="w-[100%]"
            >
                <textarea 
                    name="message"
                    value={formValue.message}
                    onChange={handleChange}
                    className="
                        w-full
                        px-4 py-2
                        bg-[#F7F7F7] dark:bg-[#2C2C2C]
                        border dark:border-[#2C2C2C] dark:outline-none
                        resize-none
                        rounded-md
                    "
                    placeholder="Message"
                    rows='6'
                />
                {errors.message && (
                    <span className="text-red-500 text-sm pt-1">{errors.message}</span>
                )}
            </div>

            <Button
                type="submit"
                className="
                    py-2
                    font-medium
                    text-[#ffffff]
                    bg-[#000000] dark:bg-[#424242]
                    rounded-md
                "
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>

            <FooterComponent />
        </form>
    )
}

export default HireMeFormComponent
