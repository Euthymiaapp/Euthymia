import { useState } from 'react';
import './apoyo.css';
import { FaSearch, FaMapMarkerAlt, FaUserMd, FaEnvelope, FaPhone } from 'react-icons/fa';

const psicologos = [
  {
    nombre: 'Heidy Ubeda Chavarría',
    especialidad: 'Psicóloga clínica',
    ciudad: 'Managua',
    telefono: '7683-3661',
    correo: 'ubedaheidy17@gmail.com'
  },
  {
    nombre: 'Karen Matamoros García',
    especialidad: 'Psicóloga clínica',
    ciudad: 'Matagalpa',
    telefono: '5792-3820',
    correo: 'serenamente.matagalpa@gmail.com'
  },
  {
    nombre: 'Sayda Treminio',
    especialidad: 'Psicóloga clínica',
    ciudad: 'Jinotega',
    telefono: '8332-3675',
    correo: 'psicologasaydatreminio@gmail.com'
  },
  {
    nombre: 'Sharon Robinson',
    especialidad: 'Psicóloga clínica',
    ciudad: 'Estelí',
    telefono: '8355-3833',
    correo: 'consultypsico@gmail.com'
  },
  {
    nombre: 'Jorge David Hernández',
    especialidad: 'Psicólogo clínico y forense',
    ciudad: 'León',
    telefono: '8615-0862',
    correo: 'bienestaremocionalenleon@gmail.com'
  }
];

function ApoyoProfesional() {
  const [ciudadFiltro, setCiudadFiltro] = useState('');
  const [especialidadFiltro, setEspecialidadFiltro] = useState('');

  const filtrados = psicologos.filter(p =>
    p.ciudad.toLowerCase().includes(ciudadFiltro.toLowerCase()) &&
    p.especialidad.toLowerCase().includes(especialidadFiltro.toLowerCase())
  );

  return (
    <div className="apoyo-container">
      <h1>🧠 Apoyo Profesional</h1>
      <p>Conecta con especialistas en salud mental en diferentes ciudades de Nicaragua.</p>

      <div className="tarjetas-psicologos">
        {filtrados.map((p, i) => (
          <div className="tarjeta" key={i}>
            <h3>{p.nombre}</h3>
            <p><FaUserMd /> {p.especialidad}</p>
            <p><FaMapMarkerAlt /> {p.ciudad}</p>
            <p><FaPhone /> {p.telefono}</p>
            <p><FaEnvelope /> {p.correo}</p>
          </div>
        ))}
        {filtrados.length === 0 && <p className="no-resultados">🔍 No se encontraron especialistas con esos filtros.</p>}
      </div>
    </div>
  );
}

export default ApoyoProfesional;
