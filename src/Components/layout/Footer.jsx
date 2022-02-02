import React from "react";

function Footer() {
  return (
    <div className="main-footer" fixed="bottom">
      {/* THis is a footer */}
      <div className="container">
        <div>Group Code: 5F22021</div>
        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-md-centre copyright">
            &copy; AgroStats {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
