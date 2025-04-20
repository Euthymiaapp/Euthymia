import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import './juegoemociones.css';

const niveles = {
  facil: [
    { emoji: '😄', emocion: 'Feliz', opciones: ['Feliz', 'Triste'] },
    { emoji: '😢', emocion: 'Triste', opciones: ['Triste', 'Enojado'] },
    { emoji: '😠', emocion: 'Enojado', opciones: ['Enojado', 'Feliz'] },
  ],
  medio: [
    { emoji: '😨', emocion: 'Asustado', opciones: ['Feliz', 'Triste', 'Asustado', 'Sorprendido'] },
    { emoji: '😲', emocion: 'Sorprendido', opciones: ['Sorprendido', 'Enojado', 'Serio', 'Feliz'] },
    { emoji: '😐', emocion: 'Serio', opciones: ['Serio', 'Asustado', 'Enojado', 'Triste'] },
    { emoji: '😂', emocion: 'Divertido', opciones: ['Divertido', 'Feliz', 'Enojado', 'Triste'] },
    { emoji: '🥺', emocion: 'Tímido', opciones: ['Tímido', 'Feliz', 'Asustado', 'Sorprendido'] },
    { emoji: '😎', emocion: 'Confiado', opciones: ['Feliz', 'Confiado', 'Triste', 'Serio'] },
  ],
  dificil: [
    { emoji: '😇', emocion: 'Inocente', opciones: ['Inocente', 'Feliz', 'Sorprendido', 'Tímido', 'Triste', 'Serio'] },
    { emoji: '🤔', emocion: 'Pensativo', opciones: ['Pensativo', 'Enojado', 'Sorprendido', 'Feliz', 'Triste', 'Confiado'] },
    { emoji: '😬', emocion: 'Incómodo', opciones: ['Incómodo', 'Feliz', 'Asustado', 'Divertido', 'Serio', 'Tímido'] },
    { emoji: '😴', emocion: 'Cansado', opciones: ['Cansado', 'Feliz', 'Enojado', 'Asustado', 'Serio', 'Triste'] },
    { emoji: '😭', emocion: 'Llorando', opciones: ['Llorando', 'Triste', 'Enojado', 'Tímido', 'Pensativo', 'Feliz'] },
    { emoji: '😜', emocion: 'Juguetón', opciones: ['Juguetón', 'Divertido', 'Tímido', 'Triste', 'Sorprendido', 'Cansado'] },
    { emoji: '😤', emocion: 'Frustrado', opciones: ['Frustrado', 'Enojado', 'Triste', 'Confiado', 'Feliz', 'Cansado'] },
    { emoji: '😕', emocion: 'Confundido', opciones: ['Confundido', 'Triste', 'Asustado', 'Feliz', 'Sorprendido', 'Cansado'] },
    { emoji: '🙄', emocion: 'Molesto', opciones: ['Molesto', 'Enojado', 'Sorprendido', 'Feliz', 'Triste', 'Confundido'] },
    { emoji: '😝', emocion: 'Travieso', opciones: ['Travieso', 'Feliz', 'Divertido', 'Cansado', 'Pensativo', 'Enojado'] },
  ],
};

function JuegoEmociones() {
  const [nivel, setNivel] = useState('facil');
  const [indice, setIndice] = useState(0);
  const [acertado, setAcertado] = useState(null);
  const [finalizado, setFinalizado] = useState(false);
  const navigate = useNavigate();

  const juego = niveles[nivel][indice];

  const verificarRespuesta = (opcion) => {
    setAcertado(opcion === juego.emocion);
    if (opcion === juego.emocion) confetti({ particleCount: 100, spread: 60 });
  };

  const siguiente = () => {
    const siguienteIndice = indice + 1;
    if (siguienteIndice < niveles[nivel].length) {
      setIndice(siguienteIndice);
      setAcertado(null);
    } else {
      if (nivel === 'facil') setNivel('medio');
      else if (nivel === 'medio') setNivel('dificil');
      else setFinalizado(true);
      setIndice(0);
      setAcertado(null);
    }
  };

  if (finalizado) {
    return (
      <div className="emociones-container">
        <h2>🎉 ¡Has completado todos los niveles!</h2>
        <button className="volver-juegos" onClick={() => navigate('/juegos')}>
          🔙 Volver a Juegos
        </button>
      </div>
    );
  }

  return (
    <div className="emociones-container">
      <h2>😄 Juego de Emociones</h2>
      <p className="nivel">Nivel: {nivel.charAt(0).toUpperCase() + nivel.slice(1)}</p>

      <div className={`emoji-principal ${acertado === true ? 'anim-correcto' : ''}`}>
        {juego.emoji}
      </div>

      <div className="opciones">
        {juego.opciones.map((opcion, idx) => (
          <button
            key={idx}
            className={`btn-opcion ${
              acertado === null ? '' : opcion === juego.emocion ? 'correcta' : 'incorrecta'
            }`}
            onClick={() => verificarRespuesta(opcion)}
            disabled={acertado !== null}
          >
            {opcion}
          </button>
        ))}
      </div>

      {acertado !== null && (
        <div className="mensaje">
          {acertado ? '✅ ¡Muy bien!' : '❌ Intenta de nuevo'}
          <button onClick={siguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
}

export default JuegoEmociones;
