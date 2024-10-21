//File Name: ReactPortfolio 
//Student’s Name: Angelo Tiquio 
//StudentID: 301343280
//Date: September 21, 2024

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Project from './Project'
import Services from './Services'
import Contact from './Contact'
import Layout from './Layout'

/* 
  =============================
  JavaScript Functions Section
  =============================
*/

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>
                        <Route index path="/" element={<Home />} />
                        <Route exact path="/About" element={<About />} />
                        <Route exact path="/Project" element={<Project />} />
                        <Route exact path="/Services" element={<Services />} />
                        <Route exact path="/Contact" element={<Contact />} />
                </Routes>
        </div>
        )
}
export default MainRouter
