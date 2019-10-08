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
                    <div className={codeStyles.skill}>
                        <DiReact size = '6vh'  />
                        <div>
                        <p>React</p>
                        </div>
                    </div>

                </li>

                <li className = {codeStyles.li}>
                    <div className={codeStyles.skill}>
                        <DiAngularSimple size = '6vh'/>
                        <div>
                        <p>Angular</p>
                        </div>
                    </div>
                </li>

                <li className = {codeStyles.li}>
                    <div className={codeStyles.skill}>
                        <DiNodejs size = '6vh'/>
                        <div>
                        <p>Node.js</p>
                        </div>
                    </div>
                </li>

                <li className = {codeStyles.li}>
                    <div className={codeStyles.skill}>
                        <DiJavascript1 size = '6vh'/>
                        <div>
                        <p>JavaScript</p>
                        </div>
                    </div>
                </li>

                <li className = {codeStyles.li}>
                    <div className={codeStyles.skill}>
                        <DiHtml5 size = '6vh'/>
                        <div>
                        <p>HTML5</p>
                        </div>
                    </div>
                </li>
                <li className = {codeStyles.li}>
                    <div className={codeStyles.skill}>
                        <DiCss3 size = '6vh'/>
                        <div>
                        <p>CSS</p>
                        </div>
                    </div>
                   
                </li>

                <li className = {codeStyles.li}>
                    <div className={codeStyles.skill}>
                        <DiPython size = '6vh'/>
                        <div>
                        <p>Python</p>
                        </div>
                    </div>                   
                </li>

                
                <li className = {codeStyles.li}>
                    <div className={codeStyles.skill}>
                        <   DiJava size = '6vh'/>
                        <div>
                        <p>Java</p>
                        </div>
                    </div> 
                </li>

            </ul>

        </Layout>
    )
}
export default AboutPage