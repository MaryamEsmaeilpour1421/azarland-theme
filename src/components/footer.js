import React from "react"
import * as footerStyles from "./Footer.module.css"


const Footer=()=>{
    return(
        <footer className={footerStyles.footer}>
        <div>
          <span className={footerStyles.textmuted}>&copy; BTA Coder - 2021</span>
        </div>
      </footer>
    )
}

export default Footer;