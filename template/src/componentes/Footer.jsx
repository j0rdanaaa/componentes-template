import React from "react";
import RedesSociais from "./RedesSociais";
import CopyWrite from "./CopyWrite";

import FooterStyles from "../styles/footer.module.css"

 function Footer () {
    return (
        <footer className={FooterStyles.header}>
        <RedesSociais />
        <CopyWrite />
      </footer>
 )
}

export default Footer;
