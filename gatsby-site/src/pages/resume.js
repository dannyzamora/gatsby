import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { FaFileDownload } from "react-icons/fa";



const ResumePage =()=> {
    return (
        <Layout>
            <Head title ="Resume"/>
            <div>
                <FaFileDownload size = '5em'/>
            </div> 
            

        </Layout>
    )
}

export default ResumePage