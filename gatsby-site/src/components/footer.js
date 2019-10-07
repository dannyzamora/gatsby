import React from 'react'
import footerStyles from './footer.module.scss'
import { FaLinkedin,FaGithub } from "react-icons/fa";

const Footer =({test}) =>{
  const icon = typeof(test) == 'undefined'? footerStyles.icon:footerStyles.noIcons

   
    return (
        <footer className = {footerStyles.footer}>
          <a  href = "https://www.linkedin.com/in/danny-zamora/">
          <FaLinkedin size = '2em' className={icon}/>
          </a>
          <a  href = "https://github.com/dannyzamora">
          <FaGithub size = '2em' className={icon}/>
          </a>
        </footer>
    )
}

export default Footer