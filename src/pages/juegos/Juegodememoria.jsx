import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './juegodememoria.css'
import confetti from 'canvas-confetti'

// Imágenes locales
import img1 from '../../assets/juegomemoria/imagen1.jpg'
import img2 from '../../assets/juegomemoria/imagen2.jpg'
import img3 from '../../assets/juegomemoria/imagen3.jpg'
import img4 from '../../assets/juegomemoria/imagen4.jpg'
import img5 from '../../assets/juegomemoria/imagen5.jpg'
import img6 from '../../assets/juegomemoria/imagen6.jpg'

const niveles = {
  facil: [img1, img2, img3],
  medio: [img1, img2, img3, img4],
  dificil: [img1, img2, img3, img4, img5, img6]
}

const mensajes = [
  "✨ El conocimiento es la clave para la empatía.",
  "🌈 Cada mente funciona diferente, y eso está bien.",
  "💪 Los desafíos pueden ser oportunidades disfrazadas.",
  "🧩 Comprender es el primer paso hacia la inclusión.",
  "❤️ Apoyar es más poderoso que juzgar."
]

let idCounter = 0
const generarId = () => ++idCounter

function JuegoDeMemoria() {
  const [nivel, setNivel] = useState('facil')
  const [cartas, setCartas] = useState([])
  const [seleccionadas, setSeleccionadas] = useState([])
  const [completadas, setCompletadas] = useState([])
  const [bloqueado, setBloqueado] = useState(false)
  const [mensajeFinal, setMensajeFinal] = useState('')
  const [instruccionVisible, setInstruccionVisible] = useState(true)

  useEffect(() => {
    if (!instruccionVisible) iniciarJuego(nivel)
  }, [nivel, instruccionVisible])

  const iniciarJuego = (nivelActual) => {
    const imagenes = niveles[nivelActual]
    const duplicadas = [...imagenes, ...imagenes]
    const mezcladas = duplicadas
      .map(img => ({ id: generarId(), img, descubierta: false }))
      .sort(() => Math.random() - 0.5)

    setCartas(mezcladas)
    setSeleccionadas([])
    setCompletadas([])
    setMensajeFinal('')
  }

  const seleccionarCarta = (id) => {
    if (bloqueado) return
    const carta = cartas.find(c => c.id === id)
    if (carta.descubierta || seleccionadas.length === 2) return

    const nuevasCartas = cartas.map(c =>
      c.id === id ? { ...c, descubierta: true } : c
    )

    const nuevaSeleccion = [...seleccionadas, id]

    setCartas(nuevasCartas)
    setSeleccionadas(nuevaSeleccion)

    if (nuevaSeleccion.length === 2) {
      setBloqueado(true)
      const [primera, segunda] = nuevaSeleccion.map(id => cartas.find(c => c.id === id))
      if (primera.img === segunda.img) {
        setCompletadas(prev => [...prev, primera.img])
        setSeleccionadas([])
        setBloqueado(false)
      } else {
        setTimeout(() => {
          setCartas(prev => prev.map(c =>
            nuevaSeleccion.includes(c.id) ? { ...c, descubierta: false } : c
          ))
          setSeleccionadas([])
          setBloqueado(false)
        }, 1000)
      }
    }
  }

  useEffect(() => {
    const total = niveles[nivel].length
    if (completadas.length === total) {
      confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 } })
      setMensajeFinal(mensajes[Math.floor(Math.random() * mensajes.length)])
    }
  }, [completadas, nivel])

  const siguienteNivel = () => {
    if (nivel === 'facil') setNivel('medio')
    else if (nivel === 'medio') setNivel('dificil')
    else setInstruccionVisible(true)
  }

  return (
    <div className="memoria-container">
      <h2>🧠 Juego de Memoria</h2>

      {instruccionVisible ? (
        <div className="instrucciones-juego">
          <p>
            🔁 Haz clic en dos cartas para descubrirlas.<br />
            🎯 Si coinciden, permanecerán abiertas.<br />
            🧠 ¡Encuentra todas las parejas para ganar!
          </p>
          <div className="nivel-selector">
            <label><strong>Nivel:</strong></label>
            <select value={nivel} onChange={e => setNivel(e.target.value)}>
              <option value="facil">Fácil</option>
              <option value="medio">Medio</option>
              <option value="dificil">Difícil</option>
            </select>
          </div>
          <button className="btn-iniciar" onClick={() => setInstruccionVisible(false)}>Comenzar</button>
        </div>
      ) : (
        <>
          <div className="tablero-memoria">
            {cartas.map(carta => (
              <div
                key={carta.id}
                className={`carta ${carta.descubierta ? 'descubierta' : ''}`}
                onClick={() => seleccionarCarta(carta.id)}
              >
                <div className="frontal"></div>
                <div className="trasera">
                  <img src={carta.img} alt="carta" />
                </div>
              </div>
            ))}
          </div>

          {mensajeFinal && (
            <div className="mensaje-final">
              <p>{mensajeFinal}</p>
              {nivel !== 'dificil' && (
                <button className="btn-iniciar" onClick={siguienteNivel}>Siguiente Nivel</button>
              )}
              <Link to="/juegos" className="btn-volver">Volver a Juegos</Link>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default JuegoDeMemoria
