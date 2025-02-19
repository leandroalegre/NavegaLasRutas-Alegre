import './Nosotros.css';

export const Nosotros = () => {
    return (
        <div className="nosotros-container">
            <h1 className="page-title">Sobre Nosotros</h1>
            <div className="about-card">
                <div className="card-header">
                    <h2>Nuestra Historia</h2>
                    <div className="card-icon">👕</div>
                </div>
                <div className="card-content">
                    <p>Somos una tienda de moda comprometida con la calidad y el estilo. 
                       Ofrecemos las últimas tendencias en ropa y accesorios para que encuentres 
                       tu look perfecto.</p>
                    <div className="divider"></div>
                    <h3>Nuestra Misión</h3>
                    <p>Nuestra misión es proporcionar a nuestros clientes la mejor experiencia 
                       de compra, con productos de alta calidad y un servicio excepcional.</p>
                    <div className="values-grid">
                        <div className="value-item">
                            <span className="value-icon">⭐</span>
                            <h4>Calidad</h4>
                            <p>Productos seleccionados de primera calidad</p>
                        </div>
                        <div className="value-item">
                            <span className="value-icon">🤝</span>
                            <h4>Servicio</h4>
                            <p>Atención personalizada y profesional</p>
                        </div>
                        <div className="value-item">
                            <span className="value-icon">💫</span>
                            <h4>Innovación</h4>
                            <p>Últimas tendencias en moda</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 