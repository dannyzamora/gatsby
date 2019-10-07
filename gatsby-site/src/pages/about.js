import React from 'react'
import {Link} from 'gatsby' // Navigates through pages
import { DiPython,DiAngularSimple,DiNodejsSmall,DiReact,DiJava } from "react-icons/di";
import Layout from '../components/layout'
import Head from '../components/head'



const AboutPage =() => {
    return (
        <Layout>
            <Head title = 'About'/>
            <h2>Skills</h2>
            <div>
                <DiPython/>
                <DiReact/>
                <DiAngularSimple/>
                <DiNodejsSmall/>
                <DiReact/>
            </div>

        </Layout>
    )
}
export default AboutPage