import React from 'react'
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'
import layoutStyles from './layout.module.scss' 
const Layout = (props) => { 
    return(
        <div className={layoutStyles.container}>
            <div className={layoutStyles.content}>
                <Header test = {props.test}/>
                
                <div className={layoutStyles.body}>
                    {props.children}
                </div >
            </div>
            <Footer test = {props.test}/>
        </div>
    )
}
export default Layout