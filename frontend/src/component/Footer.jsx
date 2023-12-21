import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="footer_container">
        <div className="footer_column">
          <a href="/" >ONLINE <span className="online-shopping">SHOPPING</span></a>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">Myntra Insider</a>
        </div>

        <div className="copyright">
          <span className="copyright-name">FARAAZ ASHRAF</span>
         © 2023 www.myntraclone.com. All rights reserved. <br />
          <br />
          <span><IoMail />farazashraf1523@gmail.com</span>
          <span><IoMail />cman55245@gmail.com</span>
          <span><FaPhoneAlt />+91-8210111482</span>
          <span><FaGithub /> <a href="https://github.com/theboinextdoor" target="_blank" className="github">Github</a></span>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
