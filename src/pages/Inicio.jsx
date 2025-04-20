import './inicio.css';
import { Link } from 'react-router-dom';
import logoGrande from '../assets/Logo.png';

function Inicio() {
  return (
    <div className="inicio-container">
      
      {/* Encabezado con logo y título alineados */}
      <header className="inicio-hero">
        <div className="hero-title-logo">
          <h1>EUTHYMIA</h1>
          <img src={logoGrande} alt="Logo Euthymia" className="logo-encabezado" />
        </div>
        <p>Un espacio educativo interactivo sobre trastornos del neurodesarrollo</p>
      </header>

      {/* Logo destacado al centro */}
      <div className="inicio-logo-principal">
        <img src={logoGrande} alt="Logo Euthymia grande" className="logo-grande" />
      </div>

      <section className="inicio-seccion bienvenida">
        <h2>👋 ¡Bienvenidos!</h2>
        <p>
          ¡Hola! Te saludamos estudiantes de noveno grado B del Colegio Sagrado Corazón de Jesús, Nicaragua.
          <strong> Hemos diseñado Euthymia</strong>, un sitio web adaptado para personas con Trastorno por Déficit de Atención e Hiperactividad (TDAH),
          Trastorno del Espectro Autista (TEA) y Dislexia. Te damos una cordial bienvenida a nuestro sitio.
        </p>
      </section>

      <section className="inicio-seccion objetivos">
        <h2>🎯 Objetivos del sitio</h2>
        <ul>
          <li>📚 Brindar información clara y accesible sobre trastornos del neurodesarrollo.</li>
          <li>🧩 Ofrecer actividades interactivas y juegos educativos.</li>
          <li>💬 Promover la inclusión, la empatía y el respeto hacia todas las personas.</li>
          <li>🎓 Apoyar el aprendizaje a través de herramientas lúdicas y visuales.</li>
        </ul>
      </section>

      <section className="inicio-seccion navegacion">
        <h2>🔎 ¿Qué puedes explorar aquí?</h2>
        <div className="inicio-opciones">
          <Link to="/tdah" className="card-opcion">
            <h3>TDAH</h3>
            <p>Conoce sus síntomas, causas y estrategias de apoyo.</p>
          </Link>
          <Link to="/tea" className="card-opcion">
            <h3>TEA</h3>
            <p>Aprende sobre el espectro autista y cómo apoyar a quienes lo viven.</p>
          </Link>
          <Link to="/dislexia" className="card-opcion">
            <h3>Dislexia</h3>
            <p>Descubre qué es la dislexia y cómo fomentar la comprensión lectora.</p>
          </Link>
          <Link to="/juegos" className="card-opcion">
            <h3>Juegos</h3>
            <p>Disfruta actividades didácticas y entretenidas diseñadas para reforzar el aprendizaje.</p>
          </Link>
        </div>
      </section>

      <section className="inicio-seccion integrantes">
        <h2>🌐 Sitio web elaborado por:</h2>
        <ul>
          <li>• Rossmery Alejandra Gutiérrez González</li>
          <li>• Anthony Danier Chavarría Espinoza</li>
          <li>• Beckett Anyoe Cruz</li>
          <li>• Josué Emanuel Palacios Gutiérrez</li>
          <li>• Kendry Jaroth Centeno Martínez</li>
        </ul>
      </section>

      <footer className="inicio-footer">
        <p>💡 Desarrollado con dedicación por estudiantes del Colegio Sagrado Corazón de Jesús - Noveno Grado B.</p>
      </footer>
    </div>
  );
}

export default Inicio;
