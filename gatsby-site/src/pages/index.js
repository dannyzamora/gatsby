import React from 'react'
import {Link} from 'gatsby' // Navigates through pages
import indexStyles from './index.module.scss'

import Layout from '../components/layout'
import Head from '../components/head'

const IndexPage = () => {
    return (
        <Layout test = 'true' >
            <Head title = "Home"/>
 
            {/* <img id = 'img' src = './dan.jpeg' className ={indexStyles.img}></img> */}
            <p className={indexStyles.sum}> Hello, I’m Danny! I’m an aspiring software developer with a passion in frontend development.
I’m a passionate outgoing individual that enjoys new challenges that will allow growth. However, I also want to utilize experiences from my internship, school, and life into projects and careers. My knowledge ranges in programming, but have more hands on experience with web development. 
</p>
        </Layout>
    )
}

export default IndexPage