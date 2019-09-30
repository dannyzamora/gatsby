import React from 'react'
import {Link} from 'gatsby' // Navigates through pages
import Layout from '../components/layout'
import Head from '../components/head'



const AboutPage =() => {
    return (
        <Layout>
            <Head title = 'About'/>
            <h1> About Me</h1>
            <p>I currently work at the DOJ</p>
            <p>Need me? <Link to = '/contact'>Contact me</Link></p>

        </Layout>
    )
}
export default AboutPage