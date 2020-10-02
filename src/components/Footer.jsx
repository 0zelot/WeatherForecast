import React from "react";
 
const Footer = () => {
    return (
        <footer>
            <span className="footer-visible">© {new Date().getFullYear()} Weather forecast</span>
            <span className="footer-hovered">View on <a href="https://github.com/0zelot/weather-forecast">GitHub</a>.</span>
        </footer>
    );
}
 
export default Footer;