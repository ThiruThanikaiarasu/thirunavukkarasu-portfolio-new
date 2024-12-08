import React from 'react'
import { NavLink } from 'react-router-dom'
import { CreditCard, House, MoonStar, Sun, UserRound } from 'lucide-react'
import useDataContext from '../../hooks/useDataContext'
import HireMeButtonComponent from '../HireMeButtonComponent/HireMeButtonComponent'

const NavbarComponent = () => {

    const {isDarkMode, setIsDarkMode} = useDataContext()


    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <div className="sticky top-3 border-[2px] border-[rgb(230, 230, 230)] dark:border-[#2b2b2b] rounded-md">

            <div 
                className="
                        flex justify-between items-center 
                        bg-[#ffffff] dark:bg-[#212121]
                        rounded-lg
                    "
            >
                <ul
                    className="
                                flex items-center 
                                pl-4
                            "
                >
                    <li 
                        className="flex items-center"
                    >
                        <NavLink
                            to='/'
                            className={({ isActive }) => 
                                `rounded-full p-2 mx-2 transition-colors duration-200 ${isActive ? "bg-[#ececec] dark:bg-[#2C2C2C]" : ""}`
                            }
                        >
                            {({ isActive }) => (
                                <House className={isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-[#7f7f7f]"} />
                            )}
                        </NavLink>
                    </li>
                    <li className="flex items-center">
                        <NavLink
                            to='/profile'
                            className={({ isActive }) => 
                                `rounded-full p-2 mx-2 transition-colors duration-200 ${isActive ? "bg-[#ececec] dark:bg-[#2C2C2C]" : ""}`
                            }
                        >
                            {({ isActive }) => (
                                <UserRound className={isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-[#7f7f7f]"} />
                            )}
                        </NavLink>
                    </li>

                    <li className="flex items-center">
                        <NavLink
                            to='/projects'
                            className={({ isActive }) => 
                                `rounded-full p-2 mx-2 transition-colors duration-200 ${isActive ? "bg-[#ececec] dark:bg-[#2C2C2C]" : ""}`
                            }
                        >
                            {({ isActive }) => (
                                <CreditCard className={isActive ? "text-black dark:text-white" : "text-gray-400 dark:text-[#7f7f7f]"} />
                            )}
                        </NavLink>
                    </li>
                </ul>

                <ul
                    className="flex items-center"
                >
                    <li 
                        className="
                                    p-2 rounded-full cursor-pointer select-none 
                                    text-gray-400 dark:text-[#7f7f7f]
                                    hover:bg-[#ECECEC] dark:hover:bg-[#2c2c2c]
                                "
                        onClick={toggleTheme}
                    >
                        {isDarkMode ? (
                            <Sun 
                                className="dark:text-[#7f7f7f]"
                            />
                        ) : ( 
                            <MoonStar 
                            
                            />
                        )}
                    </li>
                    <li className="p-4">
                        <HireMeButtonComponent />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavbarComponent