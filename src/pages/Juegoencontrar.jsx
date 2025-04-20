import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import './juegoencontrar.css'

// Fondos y objetos verdaderos locales
import nivelFacilFondo from '../assets/nivelfacil.webp'
import nivelMedioFondo from '../assets/nivelmedio.png'
import nivelDificilFondo from '../assets/niveldificil.png'

import volleyballIcon from '../assets/balonvoley.png'
import cobijaIcon from '../assets/cobija.png'
import plantaIcon from '../assets/planta.png'

import relojIcon from '../assets/relojdearena.png'
import camaraIcon from '../assets/camara.png'
import corajeIcon from '../assets/coraje.png'
import calcetaIcon from '../assets/calcetas.png'
import captusIcon from '../assets/captus.png'
import cajaIcon from '../assets/caja.png'

import audifonoIcon from '../assets/audifono.png'
import cometaIcon from '../assets/cometa.png'
import globoIcon from '../assets/globo.png'
import mochilaIcon from '../assets/mochila.png'
import pelucheIcon from '../assets/peluche.png'
import sombreroIcon from '../assets/sombrero.png'
import tazaIcon from '../assets/tazaamarilla.png'
import telefonoIcon from '../assets/telefono.png'

const frasesTDAH = [
  "✨ Las personas con TDAH tienen una creatividad única. ¡Eso es una fortaleza!",
  "🧠 El TDAH no define tu valor, solo tu manera especial de procesar el mundo.",
  "🚀 Las mentes inquietas también pueden cambiar el mundo.",
  "📚 El conocimiento y la comprensión son las mejores herramientas para acompañar el TDAH.",
]

const nivelesBase = {
  facil: {
    fondo: nivelFacilFondo,
    anchoOriginal: 800,
    altoOriginal: 600,
    objetos: [
      { nombre: 'Balón de volleyball', icon: volleyballIcon, x: 160, y: 460, objetivo: true },
      { nombre: 'Cobija', icon: cobijaIcon, x: 320, y: 530, objetivo: true },
      { nombre: 'Planta', icon: plantaIcon, x: 544, y: 301, objetivo: true },
      { nombre: 'Guitarra', icon: 'https://img.icons8.com/color/48/guitar.png', x: 300, y: 150 },
      { nombre: 'Zapato', icon: 'https://img.freepik.com/iconos-gratis/zapato_318-449253.jpg', x: 720, y: 160 },
      { nombre: 'Tetera', icon: 'https://img.icons8.com/color/48/teapot.png', x: 680, y: 400 },
      { nombre: 'Control', icon: 'https://img.icons8.com/color/48/controller.png', x: 580, y: 230 },
    ]
  },
  medio: {
    fondo: nivelMedioFondo,
    anchoOriginal: 800,
    altoOriginal: 600,
    objetos: [
      { nombre: 'Reloj de Arena', icon: relojIcon, x: 110, y: 440, objetivo: true },
      { nombre: 'Cámara', icon: camaraIcon, x: 270, y: 510, objetivo: true },
      { nombre: 'Coraje', icon: corajeIcon, x: 380, y: 280, objetivo: true },
      { nombre: 'Calcetas', icon: calcetaIcon, x: 480, y: 430, objetivo: true },
      { nombre: 'Cactus', icon: captusIcon, x: 620, y: 320, objetivo: true },
      { nombre: 'Caja', icon: cajaIcon, x: 700, y: 510, objetivo: true },
      { nombre: 'Tijeras', icon: 'https://img.icons8.com/color/48/scissors.png', x: 100, y: 100 },
      { nombre: 'Auriculares', icon: 'https://img.icons8.com/color/48/headphones.png', x: 150, y: 200 },
      { nombre: 'Taza café', icon: 'https://img.icons8.com/color/48/coffee-to-go.png', x: 200, y: 350 },
      { nombre: 'Pelota', icon: 'https://cdn-icons-png.flaticon.com/512/5213/5213872.png', x: 300, y: 200 },
      { nombre: 'Pincel', icon: 'https://img.icons8.com/color/48/paint-brush.png', x: 400, y: 150 },
      { nombre: 'Libro', icon: 'https://img.icons8.com/color/48/book.png', x: 500, y: 240 },
      { nombre: 'Zapato', icon: 'https://cdn-icons-png.flaticon.com/512/860/860895.png', x: 600, y: 330 },
      { nombre: 'Guitarra', icon: 'https://img.icons8.com/color/48/guitar.png', x: 670, y: 200 },
      { nombre: 'Laptop', icon: 'https://img.icons8.com/color/48/laptop.png', x: 710, y: 420 },
    ]
  },
  dificil: {
    fondo: nivelDificilFondo,
    anchoOriginal: 800,
    altoOriginal: 600,
    objetos: [
      { nombre: 'Audífono', icon: audifonoIcon, x: 90, y: 450, objetivo: true },
      { nombre: 'Cometa', icon: cometaIcon, x: 180, y: 370, objetivo: true },
      { nombre: 'Globo', icon: globoIcon, x: 260, y: 500, objetivo: true },
      { nombre: 'Mochila', icon: mochilaIcon, x: 360, y: 320, objetivo: true },
      { nombre: 'Peluche', icon: pelucheIcon, x: 450, y: 410, objetivo: true },
      { nombre: 'Sombrero', icon: sombreroIcon, x: 520, y: 190, objetivo: true },
      { nombre: 'Taza', icon: tazaIcon, x: 610, y: 440, objetivo: true },
      { nombre: 'Teléfono', icon: telefonoIcon, x: 710, y: 340, objetivo: true },
      { nombre: 'Coraje', icon: corajeIcon, x: 370, y: 180, objetivo: true },
      { nombre: 'Caja', icon: cajaIcon, x: 270, y: 280, objetivo: true },
      { nombre: 'Camisa', icon: 'https://img.icons8.com/color/48/t-shirt.png', x: 300, y: 100 },
      { nombre: 'Auriculares', icon: 'https://img.icons8.com/color/48/headphones.png', x: 400, y: 100 },
      { nombre: 'Manzana', icon: 'https://img.icons8.com/color/48/apple.png', x: 500, y: 100 },
      { nombre: 'Cepillo', icon: 'https://img.icons8.com/color/48/hair-brush.png', x: 600, y: 100 },
      { nombre: 'Control', icon: 'https://img.icons8.com/color/48/controller.png', x: 700, y: 100 },
      { nombre: 'Pelota', icon: 'https://cdn-icons-png.flaticon.com/512/5213/5213872.png', x: 400, y: 200 },
      { nombre: 'Martillo', icon: 'https://img.icons8.com/color/48/hammer.png', x: 150, y: 100 },
      { nombre: 'Reloj', icon: 'https://img.icons8.com/color/48/alarm-clock.png', x: 200, y: 200 },
      { nombre: 'Pizza', icon: 'https://img.icons8.com/color/48/pizza.png', x: 250, y: 300 },
      { nombre: 'Cuchara', icon: 'https://img.icons8.com/color/48/spoon.png', x: 300, y: 400 },
    ]
  }
}

// Función para mezclar los objetos al azar
function mezclarObjetos(objetos) {
  const copia = [...objetos]
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copia[i], copia[j]] = [copia[j], copia[i]]
  }
  return copia
}

function JuegoEncontrados() {
  const [nivelActual, setNivelActual] = useState('facil')
  const [objetosNivel, setObjetosNivel] = useState(mezclarObjetos(nivelesBase[nivelActual].objetos))
  const [encontrados, setEncontrados] = useState([])
  const [pistaActiva, setPistaActiva] = useState(false)
  const [mensaje, setMensaje] = useState('')
  const [instruccionVisible, setInstruccionVisible] = useState(true)
  const [nivelDesbloqueado, setNivelDesbloqueado] = useState(() =>
    JSON.parse(localStorage.getItem('niveles-desbloqueados')) || ['facil']
  )

  const { fondo, anchoOriginal, altoOriginal } = nivelesBase[nivelActual]
  const objetivos = objetosNivel.filter(obj => obj.objetivo)
  const siguiente = objetivos.find(obj => !encontrados.includes(obj.nombre))

  useEffect(() => {
    if (encontrados.length === objetivos.length) {
      confetti({ particleCount: 200, spread: 120, origin: { y: 0.6 } })
      setMensaje(frasesTDAH[Math.floor(Math.random() * frasesTDAH.length)])
      desbloquearSiguienteNivel()
    }
  }, [encontrados])

  const desbloquearSiguienteNivel = () => {
    const orden = ['facil', 'medio', 'dificil']
    const siguiente = orden[orden.indexOf(nivelActual) + 1]
    if (siguiente && !nivelDesbloqueado.includes(siguiente)) {
      const actualizado = [...nivelDesbloqueado, siguiente]
      setNivelDesbloqueado(actualizado)
      localStorage.setItem('niveles-desbloqueados', JSON.stringify(actualizado))
    }
  }

  const verificar = (nombre) => {
    if (objetivos.some(obj => obj.nombre === nombre) && !encontrados.includes(nombre)) {
      setEncontrados([...encontrados, nombre])
      setPistaActiva(false)
    }
  }

  const cambiarNivel = (nuevoNivel) => {
    setNivelActual(nuevoNivel)
    setObjetosNivel(mezclarObjetos(nivelesBase[nuevoNivel].objetos))
    setEncontrados([])
    setPistaActiva(false)
    setMensaje('')
    setInstruccionVisible(false)
  }

  const reiniciar = () => {
    cambiarNivel(nivelActual)
  }

  return (
    <div className="juego-container">
      <div className="top-bar">
        <h2>Encuentra los objetos</h2>
        <select value={nivelActual} onChange={(e) => cambiarNivel(e.target.value)}>
          {Object.keys(nivelesBase).map(n => (
            <option key={n} value={n} disabled={!nivelDesbloqueado.includes(n)}>
              {n.toUpperCase()}
            </option>
          ))}
        </select>
        <p>{encontrados.length} / {objetivos.length} encontrados</p>
      </div>

      {instruccionVisible && (
        <div className="instrucciones inicial">
          🔍 ¡Bienvenido! Debes encontrar los objetos correctos entre varios elementos.<br />
          Algunos íconos son trampas. Usa la lista como guía. ¡Buena suerte!
        </div>
      )}

      <div className="lista-horizontal">
        {objetivos.map((obj, i) => (
          <button key={i} className={`objeto-btn ${encontrados.includes(obj.nombre) ? 'encontrado' : ''}`}>
            {obj.nombre}
          </button>
        ))}
      </div>

      <div className="zona-juego">
        <img src={fondo} alt="Fondo" className="fondo" />
        {objetosNivel.map((obj, i) =>
          !encontrados.includes(obj.nombre) && (
            <img
              key={i}
              src={obj.icon}
              alt={obj.nombre}
              className="objeto-sobre-imagen grande"
              style={{
                top: `${(obj.y / altoOriginal) * 100}%`,
                left: `${(obj.x / anchoOriginal) * 100}%`
              }}
              onClick={() => verificar(obj.nombre)}
            />
          )
        )}
        {pistaActiva && siguiente && (
          <div className="pista"
            style={{
              top: `${(siguiente.y / altoOriginal) * 100}%`,
              left: `${(siguiente.x / anchoOriginal) * 100}%`
            }}
          />
        )}
      </div>

      {mensaje && (
        <div className="mensaje-final">
          {mensaje}
          <br />
          {nivelActual !== 'dificil' && nivelDesbloqueado.includes(getSiguienteNivel(nivelActual)) && (
            <button onClick={() => cambiarNivel(getSiguienteNivel(nivelActual))}>
              ➡️ Siguiente Nivel
            </button>
          )}
        </div>
      )}

      <div className="botones">
        <button onClick={reiniciar}>🔁 Reiniciar</button>
        <button onClick={() => setPistaActiva(true)}>💡 Pista</button>
      </div>
    </div>
  )
}

function getSiguienteNivel(actual) {
  const orden = ['facil', 'medio', 'dificil']
  const idx = orden.indexOf(actual)
  return orden[idx + 1]
}

export default JuegoEncontrados
