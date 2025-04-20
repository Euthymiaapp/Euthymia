import './tea.css'
import teaIntroImage from '../assets/TEA.jpg' 
import fortalezas from '../assets/fortalezas.png' 
import IconoTEA from '../assets/iconoTEA.jpg' 
import NivelesTEA from '../assets/nivelesTEA.jpg'
import AyudaTea from '../assets/AyudaTEA.jpg'
import MitosTEA from '../assets/MitosTEA.jpg'

function TEA() {
  return (
    <div className="tea-container">
      <header className="tea-header11">
        <h1>🧩 Trastorno del Espectro Autista (TEA)</h1>
        <p>
          El autismo es una condición del neurodesarrollo que afecta la forma en que una persona se comunica,
          comprende y se relaciona con el mundo. Cada persona con TEA es única y merece un entorno empático.
        </p>
      </header>

      <section className="tea-intro">
        <img
          src={teaIntroImage}
          alt="Introducción al TEA"
          className="tea-image-full"
        />
        <p>
          El TEA (Trastorno del Espectro Autista) afecta cómo una persona se comunica, se relaciona con los demás
          y entiende su entorno. Puede incluir desafíos en el lenguaje, interacción social, sensibilidad sensorial
          o comportamientos repetitivos, pero también grandes fortalezas en memoria, lógica o creatividad.
        </p>
      </section>

      <section className="tea-section">
        <h2>🔍 Características comunes</h2>
        <div className="tea-image-text">
          <img
            src={IconoTEA}
            alt="Características del TEA"
          />
          <ul>
            <li>🗣️ Dificultad para comunicarse verbal o no verbalmente</li>
            <li>🙅‍♂️ Evita el contacto visual o físico</li>
            <li>🔁 Necesita rutinas y se altera con los cambios</li>
            <li>🎯 Tiene intereses muy marcados en temas específicos</li>
            <li>🔊 Presenta ecolalia o repite movimientos (estereotipias)</li>
          </ul>
        </div>
      </section>

      <section className="tea-section">
        <h2>📘 Niveles del espectro autista</h2>
        <p>
          El diagnóstico clínico agrupa el TEA en niveles que definen el grado de apoyo requerido por la persona:
        </p>
        <div className="tabla-scroll">
          <table className="tea-table elegante">
            <thead>
              <tr>
                <th>Nivel</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Leve</strong></td>
                <td>Necesita poco apoyo, puede comunicarse, pero tiene dificultades sociales.</td>
              </tr>
              <tr>
                <td><strong>Moderado</strong></td>
                <td>Requiere ayuda regular para actividades diarias y comunicación efectiva.</td>
              </tr>
              <tr>
                <td><strong>Severo</strong></td>
                <td>Necesita asistencia constante en la mayoría de las áreas funcionales.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <img
          src={NivelesTEA}
          alt="Niveles TEA"
          className="tea-image-medium"
        />
      </section>

      <section className="tea-section">
  <h2>🤝 ¿Cómo apoyar a una persona con TEA?</h2>
  <div className="tea-image-text">
    <img
      src={AyudaTea}
      alt="Apoyo a personas con TEA"
    />
    <ul>
      <li>🖼️ Usa imágenes, pictogramas o apoyos visuales</li>
      <li>💬 Habla con claridad, pausas y frases simples</li>
      <li>⏳ Dale tiempo para procesar información</li>
      <li>🧭 Respeta sus rutinas y anticipa cambios</li>
      <li>🎵 Incluye sus intereses y fortalezas para motivar el aprendizaje</li>
    </ul>
  </div>
</section>


      <section className="tea-section fortalezas-section">
        <h2>🌟 Fortalezas en el espectro autista</h2>
        <img
          src={fortalezas}
          alt="fortaleza"
          className="tea-image-full"
        />
        <p>
          El TEA no solo presenta desafíos, también ofrece talentos únicos que pueden brillar con el acompañamiento adecuado:
        </p>
        <ul>
          <li>🧠 Memoria visual o auditiva destacada</li>
          <li>🔍 Habilidad para concentrarse en temas específicos</li>
          <li>🎨 Talento artístico o lógico</li>
          <li>❤️ Autenticidad, honestidad y sensibilidad profunda</li>
        </ul>
       
      </section>
      <section className="tea-section">
  <h2>❓ Mitos y realidades sobre el TEA</h2>
  <img
    src={MitosTEA}
    alt="Mitos sobre el autismo"
    className="tea-image-full"
  />

  <div className="tabla-scroll">
    <table className="tea-table elegante">
      <thead>
        <tr>
          <th>Mito</th>
          <th>Realidad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>“Las personas con TEA no sienten emociones”</td>
          <td>FALSO. Pueden sentir y expresar emociones, aunque de forma diferente.</td>
        </tr>
        <tr>
          <td>“Todas las personas autistas son iguales”</td>
          <td>FALSO. El espectro es amplio; cada persona tiene fortalezas y desafíos únicos.</td>
        </tr>
        <tr>
          <td>“El autismo se cura”</td>
          <td>FALSO. El TEA no tiene cura, pero con apoyo adecuado, pueden desarrollarse plenamente.</td>
        </tr>
        <tr>
          <td>“Los niños con TEA no pueden aprender”</td>
          <td>FALSO. Pueden aprender, solo necesitan métodos adaptados y tiempos personalizados.</td>
        </tr>
      </tbody>
    </table>
   
  </div>
  <footer className="tea-footer">
        <p>💙 Educar y empatizar es el primer paso hacia una sociedad inclusiva para todas las mentes.</p>
      </footer>
</section>

    </div>
    
  )
  
}


export default TEA
