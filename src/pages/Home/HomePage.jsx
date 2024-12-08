import { Dot, Linkedin } from 'lucide-react'
import React from 'react'

import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import IntroductionComponent from '../../components/IntroductionComponent/IntroductionComponent'
import ProjectSectionComponent from '../../components/ProjectSectionComponent/ProjectSectionComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'

const HomePage = () => {

    return (
        <div
            className="flex flex-col gap-12"
        >
            <HeaderComponent title="Web Developer" />

            <IntroductionComponent />

            <ProjectSectionComponent />

            <FooterComponent />
        </div>
    )
}

export default HomePage