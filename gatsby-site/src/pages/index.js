import React from 'react'
import {Link} from 'gatsby' // Navigates through pages

import Layout from '../components/layout'

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>I am danny</h2>
            <p>Need me <Link to='/contact'>me</Link></p>
        </Layout>
    )
}

export default IndexPage