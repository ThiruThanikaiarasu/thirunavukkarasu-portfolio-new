import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent/NavbarComponent'
import { Toaster } from 'react-hot-toast'

const MainLayout = () => {
  return (
    <div
        className="max-w-[600px] mx-auto"
    >
        <NavbarComponent />
        <div
            className="
                        mt-6 p-4
                        rounded-lg
                        text-black dark:text-white
                        bg-[#ffffff] dark:bg-[#212121]
                        border-[1px] border-[rgb(230, 230, 230)] dark:border-[#2b2b2b]
                    "
        >
            <Outlet />
        </div>
        <Toaster />
    </div>
  )
}

export default MainLayout