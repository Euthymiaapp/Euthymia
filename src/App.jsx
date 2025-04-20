import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Inicio from './pages/Inicio'
import TDAH from './pages/TDAH'
import TEA from './pages/TEA'
import Dislexia from './pages/Dislexia'
import Juegos from './pages/Juegos'
import Juegoencontrar from './pages/Juegoencontrar'
import JuegoDeMemoria from './pages/juegos/Juegodememoria'
import JuegodeRompecabezas from './pages/juegos/PuzzleGame'
import Juegodeemociones from './pages/juegos/JuegoEmociones'
import Apoyo from './pages/Apoyo'
import JuegoLetras from './pages/juegos/Juegoletras'

// 👉 Importa el logo
import logo from './assets/Logo.png'

function App() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  return (
    <div>
      <nav className="navbar">
        {/* 👇 Reemplaza el h1 con una imagen */}
        <Link to="/" className="logo-link" onClick={() => setMenuAbierto(false)}>
          <img src={logo} alt="Mentes Claras Logo" className="logo-img" />
        </Link>

        <button className="menu-toggle" onClick={() => setMenuAbierto(!menuAbierto)}>
          ☰
        </button>

        <div className={`nav-links ${menuAbierto ? 'activo' : ''}`}>
          <Link to="/tdah" onClick={() => setMenuAbierto(false)}>TDAH</Link>
          <Link to="/tea" onClick={() => setMenuAbierto(false)}>Autismo</Link>
          <Link to="/dislexia" onClick={() => setMenuAbierto(false)}>Dislexia</Link>
          <Link to="/juegos" onClick={() => setMenuAbierto(false)}>Juegos</Link>
          <Link to="/Apoyo" onClick={() => setMenuAbierto(false)}>Apoyo</Link>
        </div>
      </nav>

      <Routes>
        <Route index element={<Inicio />} />
        <Route path="/tdah" element={<TDAH />} />
        <Route path="/tea" element={<TEA />} />
        <Route path="/dislexia" element={<Dislexia />} />
        <Route path="/juegos" element={<Juegos />} />
        <Route path="/juegoencontrar" element={<Juegoencontrar />} />
        <Route path="/juegos/Juegodememoria" element={<JuegoDeMemoria />} />
        <Route path="/juegos/PuzzleGame" element={<JuegodeRompecabezas />} />
        <Route path="/juegos/Juegoemociones" element={<Juegodeemociones />} />
        <Route path="/juegos/Juegoletras" element={<JuegoLetras />} />
        <Route path="/Apoyo" element={<Apoyo />} />

        {/* 👇 Ruta por defecto si no se encuentra otra */}
        <Route path="*" element={<Inicio />} />
      </Routes>
    </div>
  )
}

export default App
