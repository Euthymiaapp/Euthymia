import { useEffect, useState } from 'react';
import './juegoletras.css';
import confetti from 'canvas-confetti';

const niveles = {
  facil: [
    { palabra: 'bola', letraCorrecta: 'b', opciones: ['b', 'd'] },
    { palabra: 'dado', letraCorrecta: 'd', opciones: ['b', 'd'] },
    { palabra: 'pato', letraCorrecta: 'p', opciones: ['p', 'q'] },
  ],
  medio: [
    { palabra: 'goma', letraCorrecta: 'g', opciones: ['g', 'q', 'p', 'd'] },
    { palabra: 'queso', letraCorrecta: 'q', opciones: ['b', 'q', 'p', 'd'] },
    { palabra: 'lupa', letraCorrecta: 'p', opciones: ['b', 'p', 'q', 'g'] },
  ],
  dificil: [
    { palabra: 'banco', letraCorrecta: 'b', opciones: ['b', 'd', 'p', 'q', 'g', 'h'] },
    { palabra: 'dedo', letraCorrecta: 'd', opciones: ['b', 'd', 'p', 'q', 'h', 'g'] },
    { palabra: 'gorro', letraCorrecta: 'g', opciones: ['p', 'q', 'g', 'd', 'b', 'h'] },
  ],
};

function JuegoLetras() {
  const [nivel, setNivel] = useState('facil');
  const [indice, setIndice] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [tiempo, setTiempo] = useState(30);

  const ronda = niveles[nivel][indice];

  useEffect(() => {
    const timer = setInterval(() => {
      setTiempo(t => {
        if (t === 1) {
          siguiente();
        }
        return t > 0 ? t - 1 : 0;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [indice, nivel]);

  const verificar = (opcion) => {
    setSeleccion(opcion);
    if (opcion === ronda.letraCorrecta) {
      confetti({ particleCount: 100, spread: 70 });
    }
  };

  const siguiente = () => {
    const siguienteIndice = indice + 1;
    if (siguienteIndice < niveles[nivel].length) {
      setIndice(siguienteIndice);
      setSeleccion(null);
      setTiempo(30);
    } else {
      if (nivel === 'facil') setNivel('medio');
      else if (nivel === 'medio') setNivel('dificil');
      else {
        alert('🎉 ¡Juego completado!');
        setNivel('facil');
      }
      setIndice(0);
      setSeleccion(null);
      setTiempo(30);
    }
  };

  return (
    <div className="letras-container">
      <h2>🔠 Encuentra la letra correcta</h2>
      <p className="nivel">Nivel: {nivel.toUpperCase()}</p>
      <p className="palabra">Palabra: <strong>{ronda.palabra}</strong></p>
      <p className="tiempo">⏰ Tiempo restante: {tiempo}s</p>

      <div className="opciones">
        {ronda.opciones.map((op, idx) => (
          <button
            key={idx}
            className={`opcion-btn ${seleccion ? (op === ronda.letraCorrecta ? 'correcta' : seleccion === op ? 'incorrecta' : '') : ''}`}
            onClick={() => verificar(op)}
            disabled={!!seleccion}
          >
            {op}
          </button>
        ))}
      </div>

      {seleccion && (
        <button className="siguiente-btn" onClick={siguiente}>Siguiente</button>
      )}
    </div>
  );
}

export default JuegoLetras;
