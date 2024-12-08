import React, { createContext, useEffect, useState } from 'react'

const DataContext = createContext()

const DataProvider = ({ children }) => {
    const savedDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false
    const [isDarkMode, setIsDarkMode] = useState(savedDarkMode)

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode))
    }, [isDarkMode])

    const value = {
        isDarkMode, setIsDarkMode
    }

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    )
}

export { DataContext, DataProvider }
