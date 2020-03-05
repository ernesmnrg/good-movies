import React from "react";
import "../footer/_footers.scss";
// import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container__footer">
      <div className="footer">
        <div className="row row-1">
          <div className="footer__image">
            <img src={require("../../assets/images/good-time.png")} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              molestie consectetur orci, sit amet egestas magna condimentum in.
              Proin eros quam, hendrerit ut rutrum ut, euismod ac felis. Cras
              laoreet orci eget venenatis aliquam. Suspendisse maximus ex vitae
              mi fermentum vestibulum. Vivamus metus ipsum, porttitor in sem
              vitae, vehicula elementum purus.
            </p>
          </div>
        </div>
        <div className="row row-2">
          <ul>
            <li>Tentang Kami</li>
            <li>Blog</li>
            <li>Layanan</li>
            <li>Karir</li>
            <li>Pusat Media</li>
          </ul>
        </div>
        <div className="row row-3">
          <div className="store">
            <p>Download</p>
            <img src={require("../../assets/images/appstore.svg")} />
            <img src={require("../../assets/images/playstore.svg")} />
          </div>

          <div className="social">
            <p>Follow us on</p>
            {/* <span>
              <FaInstagram />
            </span>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span> */}
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="hr">
          <p>Copyright &copy; 2020. All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
