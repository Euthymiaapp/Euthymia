import { Link } from 'react-router-dom';
import './juegos.css';

function Juegos() {
  return (
    <div className="juegos-container">
      <h2 className="titulo-juegos">🎮 Juegos Interactivos</h2>
      <p className="intro-juegos">
        Explora juegos diseñados para mejorar la atención, la concentración y la memoria mientras aprendes
        sobre trastornos del neurodesarrollo como el TDAH, Autismo y Dislexia.
      </p>

      <div className="juegos-grid">
        <Link to="/Juegoencontrar" className="juego-card">
          <div className="emoji-grande">🔍</div>
          <h3>Juego de Encontrar Objetos</h3>
          <p>Busca elementos ocultos y mejora tu atención visual.</p>
        </Link>

        <Link to="/juegos/juegodememoria" className="juego-card">
          <div className="emoji-grande">🧠</div>
          <h3>Juego de Memoria</h3>
          <p>Encuentra los pares y ejercita tu memoria cognitiva.</p>
        </Link>

        <Link to="/juegos/PuzzleGame" className="juego-card">
          <div className="emoji-grande">🧩</div>
          <h3>Juego de Rompecabezas</h3>
          <p>Ordena las piezas y fortalece la lógica y la concentración.</p>
        </Link>

        <Link to="/juegos/juegoemociones" className="juego-card">
          <div className="emoji-grande">😊</div>
          <h3>Juego de Emociones</h3>
          <p>Identifica emociones y desarrolla habilidades socioemocionales.</p>
        </Link>
        <Link to="/juegos/Juegoletras" className="juego-card">
          <div className="emoji-grande">🔠</div>
          <h3>Juego de Letras</h3>
          <p>Elige la letra correcta que forma parte de la palabra. Mejora tu atención visual y discriminación de letras similares.</p>
        </Link>
      </div>
    </div>
  );
}

export default Juegos;
