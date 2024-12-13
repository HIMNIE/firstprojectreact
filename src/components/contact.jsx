import React from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  React.useEffect(() => {
    emailjs.init('WUBVHsL2racubGdMD'); // Inicializa EmailJS al montar el componente
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const btn = event.target.elements['button'];
    btn.value = 'Enviando......';

    const serviceID = 'default_service';
    const templateID = 'template_j0rkser';

    emailjs.sendForm(serviceID, templateID, event.target)
      .then(() => {
        btn.value = 'Enviar mensaje';
        alert('Gracias, hemos recibido tu mensaje correctamente');
      })
      .catch((err) => {
        btn.value = 'Enviar mensaje';
        alert(JSON.stringify(err));
      });
  };

  return (
    <div id="contacto">
      <h2>Completa tus datos y me pondré en contacto contigo lo antes posible.</h2>
      <form id="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Nombre Completo:</label>
          <input type="text" id="name" name="name" placeholder="Tu nombre completo" required />
        </div>
        <div className="field">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" placeholder="Tu correo electrónico" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Teléfono:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Tu número de teléfono"
            pattern="[0-9+() -]{7,15}"
            title="Por favor, ingrese un número de teléfono válido."
            required
          />
        </div>
        <div className="field">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" placeholder="Tu mensaje" required></textarea>
        </div>
        <input type="submit" id="button" value="Enviar mensaje" />
      </form>
    </div>
  );
}

export default Contact;
