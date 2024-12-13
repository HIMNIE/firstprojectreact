import React from 'react';
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p className="p-footer">© 2024 ALMORABIT Todos los derechos reservados</p>

        <div className="social-icons">
          <a href="https://www.facebook.com/almorabit.ibrahim.5" target="_blank" rel="noopener noreferrer" title="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="mailto:almorabitibrahim@gmail.com" target="_blank" rel="noopener noreferrer" title="Correo Electrónico">
            <i className="fas fa-envelope"></i> {/* Ícono de correo */}
          </a>
          <a href="https://www.instagram.com/almdev/profilecard/?igsh=cGt3b3hrY3Y2Y3R3" target="_blank" rel="noopener noreferrer" title="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/ibrahim-al-morabit-34a2a061" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://wa.me/34632024713" target="_blank" rel="noopener noreferrer" title="Contáctanos por WhatsApp" className="whatsapp-icon">
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
