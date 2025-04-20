import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './puzzlegame.css';
import confetti from 'canvas-confetti';

import imagen1 from '../../assets/juegomemoria/imagen1.jpg';
import imagen2 from '../../assets/juegomemoria/imagen2.jpg';
import imagen3 from '../../assets/juegomemoria/imagen9.jpg';

const imagenes = {
  facil: imagen1,
  medio: imagen2,
  dificil: imagen3,
};

const niveles = {
  facil: 3,
  medio: 4,
  dificil: 6,
};

const frases = [
  "🎉 ¡Lo lograste! Tu esfuerzo tiene recompensa.",
  "💡 ¡Eres más capaz de lo que crees!",
  "🌟 Cada pieza encaja con paciencia y perseverancia.",
  "🧠 ¡Excelente trabajo! Tu mente es brillante.",
  "🔥 Superaste el reto, sigue así.",
];

function PuzzleGame() {
  const [nivel, setNivel] = useState('facil');
  const [gridSize, setGridSize] = useState(niveles[nivel]);
  const [piezas, setPiezas] = useState([]);
  const [original, setOriginal] = useState([]);
  const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [completado, setCompletado] = useState(false);
  const [fallido, setFallido] = useState(false);
  const [errorVerificacion, setErrorVerificacion] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setGridSize(niveles[nivel]);
    generarPiezas(niveles[nivel]);
  }, [nivel]);

  useEffect(() => {
    let timer;
    if (activo && tiempo > 0) {
      timer = setInterval(() => setTiempo(t => t - 1), 1000);
    } else if (tiempo === 0 && activo) {
      setActivo(false);
      if (nivel === 'dificil') {
        const orden = Array.from({ length: gridSize * gridSize }, (_, i) => i);
        setPiezas(orden);
        setCompletado(true);
        setMensaje("⏱️ Tiempo agotado. Así lucía el rompecabezas completo.");
      } else {
        setFallido(true);
        setMensaje("⏱️ Tiempo agotado. Nivel no completado.");
      }
    }
    return () => clearInterval(timer);
  }, [tiempo, activo]);

  const generarPiezas = (n) => {
    const total = n * n;
    const orden = Array.from({ length: total }, (_, i) => i);
    const mezclado = [...orden].sort(() => Math.random() - 0.5);
    setOriginal(orden);
    setPiezas(mezclado);
    setCompletado(false);
    setFallido(false);
    setErrorVerificacion(false);
    setMensaje('');
    setTiempo(nivel === 'facil' ? 120 : nivel === 'medio' ? 150 : 300);
    setActivo(true);
  };

  const handleDrop = (e, i) => {
    const fromIndex = +e.dataTransfer.getData('piezaIndex');
    const nuevas = [...piezas];
    [nuevas[fromIndex], nuevas[i]] = [nuevas[i], nuevas[fromIndex]];
    setPiezas(nuevas);
  };

  const verificarOrden = () => {
    const correcto = piezas.every((val, i) => val === original[i]);
    if (correcto) {
      setCompletado(true);
      setActivo(false);
      setMensaje(frases[Math.floor(Math.random() * frases.length)]);
      confetti({ particleCount: 150, spread: 70 });
    } else {
      setErrorVerificacion(true);
      setTimeout(() => setErrorVerificacion(false), 2500);
    }
  };

  const siguienteNivel = () => {
    if (nivel === 'facil') setNivel('medio');
    else if (nivel === 'medio') setNivel('dificil');
  };

  return (
    <div className="puzzle-container">
      <h2>🧩 Rompecabezas Nivel: {nivel.charAt(0).toUpperCase() + nivel.slice(1)}</h2>
      <p className="temporizador">⏰ Tiempo restante: {Math.floor(tiempo / 60)}:{String(tiempo % 60).padStart(2, '0')}</p>

      <div
        className="puzzle-grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          aspectRatio: '1 / 1',
        }}
      >
        {piezas.map((val, i) => (
          <div
            key={i}
            className="pieza"
            style={{
              backgroundImage: `url(${imagenes[nivel]})`,
              backgroundPosition: `${(val % gridSize) * (100 / (gridSize - 1))}% ${(Math.floor(val / gridSize)) * (100 / (gridSize - 1))}%`,
              backgroundSize: `${gridSize * 100}%`,
            }}
            draggable={!completado}
            onDragStart={(e) => e.dataTransfer.setData('piezaIndex', i)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDrop(e, i)}
          />
        ))}
      </div>

      {!completado && !fallido && (
        <button className="verificar-btn" onClick={verificarOrden}>
          Verificar
        </button>
      )}

      {errorVerificacion && (
        <div className="mensaje-error-verificacion">
          ❌ Aún no está completo. ¡Sigue intentando!
        </div>
      )}

      {completado && (
        <div className="mensaje-final">
          <p>{mensaje}</p>
          {nivel !== 'dificil' ? (
            <button onClick={siguienteNivel}>Siguiente Nivel</button>
          ) : (
            <button className="boton-volver" onClick={() => navigate('/juegos')}>
              🔙 Volver a Juegos
            </button>
          )}
        </div>
      )}

      {fallido && (
        <div className="mensaje-final error">
          <p>{mensaje}</p>
          <button onClick={() => generarPiezas(gridSize)}>🔁 Intentar de nuevo</button>
        </div>
      )}
    </div>
  );
}

export default PuzzleGame;
