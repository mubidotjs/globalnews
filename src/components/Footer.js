import React from "react";
import { Link } from "react-router-dom";

const styles = {
  tabItem: {
    textDecoration: "none",
    color: "grey",
  },
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="tabColumn">
          <h3>Sections</h3>
          <p>
            <Link to="/" style={styles.tabItem}>
              Home
            </Link>
          </p>
          <p>
            <Link to="/tech" style={styles.tabItem}>
              Technology
            </Link>
          </p>
          <p>
            <Link to="/business" style={styles.tabItem}>
              Business
            </Link>
          </p>
          <p>
            <Link to="/sports" style={styles.tabItem}>
              Sports
            </Link>
          </p>
          <p>
            <Link to="/wall-street-journal" style={styles.tabItem}>
              Wall Street Journal
            </Link>
          </p>
          <p>
            <Link to="/bitcoin" style={styles.tabItem}>
              Bitcoin
            </Link>
          </p>
          <p>
            <Link to="/nasa-mars-images" style={styles.tabItem}>
              Nasa
            </Link>
          </p>
        </div>
        <div className="tabColumn">
          <h3>Corprate</h3>
          <p>
            <Link to="/feedback" style={styles.tabItem}>
              Feedback
            </Link>
          </p>
          <p>
            <Link to="/contact-us" style={styles.tabItem}>
              Contact Us
            </Link>
          </p>
          <p>
            <Link to="/about-us" style={styles.tabItem}>
              About Us
            </Link>
          </p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
