import './footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Sobre Nosotros</h3>
                    <p>Somos una tienda de moda comprometida con la calidad y el estilo. 
                       Ofrecemos las últimas tendencias en ropa y accesorios para que encuentres 
                       tu look perfecto.</p>
                </div>
                
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <ul>
                        <li>📍 Av. Siempreviva 742</li>
                        <li>📞 +54 11 1234-5678</li>
                        <li>✉️ info@tutienda.com</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Horarios</h3>
                    <ul>
                        <li>Lunes a Viernes: 9:00 - 20:00</li>
                        <li>Sábados: 10:00 - 18:00</li>
                        <li>Domingos: Cerrado</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Redes Sociales</h3>
                    <div className="social-links">
                        <a href="#" className="social-link">Instagram</a>
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">Twitter</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Tu Tienda de Ropa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};