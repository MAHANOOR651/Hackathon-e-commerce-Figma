export default function Footer() {
    return (
      <footer className="footer">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-logo-section">
          <img
            src="/images/comforty-logo.png"
            alt="Comforty Logo"
            className="footer-logo-image"
          />
            <h2 className="footer-logo">
              <i className="fas fa-couch"></i> Comforty
            </h2>
            <p className="footer-description">
              Vivamus tristique odio sit amet velit semper, au posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="footer-social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
  
          {/* Category Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Category</h3>
            <ul className="footer-links">
              <li><a href="#">Sofa</a></li>
              <li><a href="#">Armchair</a></li>
              <li><a href="#">Wing Chair</a></li>
              <li><a href="#">Desk Chair</a></li>
              <li><a href="#">Wooden Chair</a></li>
              <li><a href="#">Park Bench</a></li>
            </ul>
          </div>
  
          {/* Support Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li><a href="#">Help & Support</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Help</a></li>
            </ul>
          </div>
  
          {/* Newsletter Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Newsletter</h3>
            <p className="footer-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
            <form className="newsletter-form">
              <input type="email" placeholder="Your email" className="newsletter-input" />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    );
  }
  