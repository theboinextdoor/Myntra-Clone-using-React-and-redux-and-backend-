import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">Myntra Insider</a>
        </div>

        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">Myntra Insider</a>
        </div>

        <div className="footer_column">
          <h3>ONLINE SHOPPING</h3>

          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">Gift Card</a>
          <a href="#">Myntra Insider</a>
        </div>
      </div>
      <hr />

      <div className="copyright">
         © 2023 www.myntra.com. All rights reserved. <br />
          <span className="copyright-name">FARAAZ ASHRAF</span>
          <br />
          <span><IoMail /> farazashraf1523@gmail.com</span>
          <span><IoMail /> cman55245@gmail.com</span>
          <span><FaPhoneAlt /> +91-8210111482</span>
          <span><FaGithub /> <a href="https://github.com/theboinextdoor" target="black">Github</a></span>
      </div>
    </footer>
  );
};

export default Footer;
