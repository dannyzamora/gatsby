import React from 'react'
import {Link} from 'gatsby' // Navigates through pages
import { DiPython,DiAngularSimple,DiReact,DiJava,DiHtml5, DiCss3, DiJavascript1, DiNodejs } from "react-icons/di";
import Layout from '../components/layout'
import Head from '../components/head'
import codeStyles from './code.module.scss'


const AboutPage =() => {
    return (
        <Layout>
            <Head title = 'About'/>
            <h2>Skills</h2>
            <ul className = {codeStyles.ul}>
                <li className = {codeStyles.li}>
                <DiReact size = '6vh'  />
                </li>

                <li className = {codeStyles.li}>
                    <DiAngularSimple size = '6vh'/>
                </li>

                <li className = {codeStyles.li}>
                    <DiNodejs size = '6vh'/>
                </li>

                <li className = {codeStyles.li}>
                <DiJavascript1 size = '6vh'/>
                </li>

                <li className = {codeStyles.li}>
                    <DiHtml5 size = '6vh'/>
                </li>

                <li className = {codeStyles.li}>
                    <DiPython size = '6vh'/>
                </li>
                <li className = {codeStyles.li}>
                    <DiCss3 size = '6vh'/>
                </li>
                <li className = {codeStyles.li}>
                    <DiJava size = '6vh'/>
                </li>

            </ul>

        </Layout>
    )
}
export default AboutPage