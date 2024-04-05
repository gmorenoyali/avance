import React, { useState } from 'react';

import '../styles/ContactForm.css'; // Importa los estilos

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
  });

  const [submissions, setSubmissions] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agregar la información ingresada a la lista de submissions
    setSubmissions([...submissions, formData]);
    // Limpiar el formulario después de enviar
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Formulario de Contacto</h2>
      <p>Por favor, complete el siguiente formulario para ponerse en contacto con nosotros.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="fullName">Nombre Completo</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Fecha</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="submissions">
        <h3>Envíos</h3>
        <ul>
          {submissions.map((submission, index) => (
            <li key={index}>
              <p><strong>Nombre Completo:</strong> {submission.fullName}</p>
              <p><strong>Teléfono:</strong> {submission.phone}</p>
              <p><strong>Correo Electrónico:</strong> {submission.email}</p>
              <p><strong>Fecha:</strong> {submission.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;