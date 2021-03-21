import React from 'react'
import { HeaderSlide } from '../components/HeaderSlide'
import { NavBar } from '../components/NavBar'
import { SurveyContainer } from '../components/SurveyContainer'

export const HomeScreen = () => {
    return (
        <div>
            <NavBar/>
            <HeaderSlide/>
            <SurveyContainer/>
        </div>
    )
}
