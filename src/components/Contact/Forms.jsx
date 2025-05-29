// src/components/AddEmployee/Forms.jsx
import { useState } from 'react';

export default function Forms() {
  const [form, setForm] = useState({
    nombre: '',
    correo_electronico: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    // Aquí puedes hacer algo como enviar los datos a un servidor
  };

  return (
    <div className="overlay-box-agregar">
      <form className="form" onSubmit={handleSubmit}>
        <label className='label'>NOMBRE</label>
        <input
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          className='box'
        />

        <label className='label'>CORREO ELECTRÓNICO</label>
        <input
          name="correo_electronico"
          type="email"
          value={form.correo_electronico}
          onChange={handleChange}
          required
          className='box'
        />

        <label className='label'>MENSAJE</label>
        <textarea
          name="mensaje"
          value={form.mensaje}
          onChange={handleChange}
          required
          className='box-message'
        />

        <button type="submit" className='send-button'>ENVIAR</button>
      </form>
    </div>
  );
}
