import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Mensaje:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
