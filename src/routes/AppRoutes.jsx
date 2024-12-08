import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/Home/HomePage'
import ProfilePage from '../pages/Profile/ProfilePage'
import ProjectsPage from '../pages/Projects/ProjectsPage'
import ContactPage from '../pages/Contact/ContactPage'
import ProjectDetailsComponent from '../components/ProjectDetailsComponent/ProjectDetailsComponent'

const AppRoutes = () => {

    const location = useLocation()

    return (
        <div className="w-full min-h-screen bg-[#f0f0f0] dark:bg-[#1a1a1a]">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='/projects' element={<ProjectsPage />} />
                    <Route path='/projects/:title' element={<ProjectDetailsComponent />} />
                    <Route path='/contact' element={<ContactPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default AppRoutes