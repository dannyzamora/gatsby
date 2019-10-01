import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import {graphql,useStaticQuery} from 'gatsby'


const ContactPage =()=> {
    const data = useStaticQuery(graphql`
    query{
        markdownRemark (
            frontmatter : {
                title:{
                    eq: "resume"
                    }
                    }
                    ){
                        html
                        }
                        }
    `)
    return (
        <Layout>
            <Head title ="Resume"/>
            <div dangerouslySetInnerHTML = {{__html:data.markdownRemark.html}}>
                
            </div>
            
        </Layout>
    )
}

export default ContactPage