import React from 'react'
import {Link} from 'gatsby' // Navigates through pages
import Layout from '../components/layout'



const AboutPage =() => {
    return (
        <Layout>
            <h1> About Me</h1>
            <p>I currently work at the DOJ</p>
            <p>Need me? <Link to = '/contact'>Contact me</Link></p>

        </Layout>
    )
}
export default AboutPage