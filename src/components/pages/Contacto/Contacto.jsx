import './Contacto.css';

export const Contacto = () => {
    return (
        <div className="contacto-container">
            <h1 className="page-title">Información de Contacto</h1>
            <div className="cards-container">
                <div className="contact-card">
                    <div className="card-header">
                        <h2>Contacto</h2>
                        <div className="card-icon">📱</div>
                    </div>
                    <div className="card-content">
                        <div className="contact-item">
                            <span className="icon">📍</span>
                            <p>Av. Siempreviva 742</p>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <p>+54 11 1234-5678</p>
                        </div>
                        <div className="contact-item">
                            <span className="icon">✉️</span>
                            <p>info@tutienda.com</p>
                        </div>
                    </div>
                </div>

                <div className="contact-card">
                    <div className="card-header">
                        <h2>Horarios de Atención</h2>
                        <div className="card-icon">🕒</div>
                    </div>
                    <div className="card-content">
                        <div className="schedule-item">
                            <span className="day">Lunes a Viernes:</span>
                            <span className="hours">9:00 - 20:00</span>
                        </div>
                        <div className="schedule-item">
                            <span className="day">Sábados:</span>
                            <span className="hours">10:00 - 18:00</span>
                        </div>
                        <div className="schedule-item closed">
                            <span className="day">Domingos:</span>
                            <span className="hours">Cerrado</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 