import React from 'react'
import {Link, graphql,useStaticQuery} from 'gatsby'
//import './header.module.scss'
import headerStyles from './header.module.scss'
const Header = ({test}) => {
    
    const titleMove = typeof(test) == 'undefined'? undefined:headerStyles.titleMove
    const noNav = typeof(test) == 'undefined'? undefined:headerStyles.nav

    console.log(test)
    const data = useStaticQuery(graphql`
    query{
        site{
          siteMetadata{
            title
          }
        }
      }`)
    return (
        <header className={headerStyles.header}>
            <h1 className={titleMove}>
                <Link className={headerStyles.title} to = '/'>
                {data.site.siteMetadata.title}
                </Link>
            </h1>
            <nav className={noNav}>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className ={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem} 
                        to = ''>Home</Link>
                        </li>
                    <li>
                        <Link className ={headerStyles.navItem} 
                        activeClassName={headerStyles.activeNavItem} 
                        to = 'about'>About</Link></li>
                    <li>
                        <Link className ={headerStyles.navItem} 
                        activeClassName={headerStyles.activeNavItem}
                        to = 'blog'>Blog</Link></li>
                    <li>
                        <Link className ={headerStyles.navItem}
                        activeClassName={headerStyles.activeNavItem} 
                        to = 'resume'>Resume</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

