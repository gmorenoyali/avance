import React from 'react';

import '../styles/Services.css'

import Boda from '../assets/img/boda.jpg';
import EventoEmpresarial from '../assets/img/eventoEmpresarial.jpg';
import VeladaSocial from '../assets/img/veladaSocial.jpg';
import Cumpleaños from '../assets/img/cumpleaños.jpg';

const services = [
  {
    image: Boda,
    title: 'Bodas',
    description: 'Ofrecemos menús personalizados y un servicio impecable para hacer tu boda inolvidable. Disfruta de una experiencia culinaria exquisita sin preocupaciones.',
  },
  {
    image: EventoEmpresarial,
    title: 'Eventos Empresariales',
    description: 'Brindamos menús personalizados y un servicio profesional para tus eventos corporativos, asegurando una experiencia culinaria excepcional y sin estrés.',
  },
  {
    image: VeladaSocial,
    title: 'Veladas Sociales',
    description: 'Ofrecemos menús personalizados y un servicio excepcional para tus eventos sociales, garantizando una experiencia culinaria memorable y sin preocupaciones.',
  },
  {
    image: Cumpleaños,
    title: 'Cumpleaños',
    description: 'Ofrecemos menús a medida y un servicio excepcional para tus fiestas de cumpleaños, garantizando una experiencia gastronómica placentera y sin preocupaciones.',
  },
];

const Services = () => {
  return (
    
    <section className="services"id="Services">
      {services.map((service, index) => (
        <div key={index} className="service-card">          
          <img src={service.image} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;