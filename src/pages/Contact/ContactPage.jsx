import React from 'react'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import HireMeFormComponent from '../../components/HireMeFormComponent/HireMeFormComponent'

const ContactPage = () => {
  return (
    <div
        className="flex flex-col gap-4"
    >
        <HeaderComponent title="Hire Me" />

        <main
            className="flex flex-col gap-4 px-4"
        >
            <h1
                className="
                            text-4xl font-bold
                            tracking-tight
                            text-[#3c3c3c] dark:text-[#ffffff]
                        "
            >
                Have an idea in mind?
            </h1>
            <p
                className="
                            text-lg
                            text-[#666666] dark:text-[#c0c0c0]
                        "
            >
                Let's bring your ideas to life—reach out now!
            </p>
        </main>

        <HireMeFormComponent />
    </div>
  )
}

export default ContactPage