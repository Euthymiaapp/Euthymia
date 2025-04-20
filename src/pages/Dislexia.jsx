import './dislexia.css';
import dislexiaIntro from '../assets/Dislexia.jpg';
import textodislexia from '../assets/textodislexia.jpg';
import imagendislexia from '../assets/dislexiaimagen.jpg';

function Dislexia() {
  return (
    <div className="tdah-container">
      <header className="tdah-header12">
        <h1>🔠 Dislexia: Trastorno del aprendizaje lectoescritor</h1>
        <p>
          La dislexia es una dificultad específica del aprendizaje que afecta la lectura, escritura y ortografía. No tiene relación con la inteligencia. Con el apoyo adecuado, las personas con dislexia pueden alcanzar su máximo potencial.
        </p>
      </header>

      <section className="tdah-intro">
        <img src={dislexiaIntro} alt="Ilustración Dislexia" className="tdah-image-full" />
        <p>
          Las personas con dislexia suelen tener dificultades para leer con fluidez, confundir letras o escribir con errores. Sin embargo, también desarrollan habilidades especiales en áreas creativas, visuales o técnicas.
        </p>
      </section>

      <section className="tdah-section">
        <h2>🧩 Dificultades comunes</h2>
        <ul>
          <li>📖 Lectura lenta o saltarse palabras</li>
          <li>🔁 Confundir letras similares como b-d o p-q</li>
          <li>✍️ Mala ortografía persistente</li>
          <li>🔡 Escribir con letras desordenadas o invertidas</li>
          <li>🧠 Dificultad para recordar lo que acaban de leer</li>
        </ul>
      </section>

      <section className="tdah-section">
        <h2>🔍 Mitos y verdades</h2>
        
        <div className="tabla-scroll">
          <table className="tdah-table elegante">
            <thead>
              <tr>
                <th>Mito</th>
                <th>Realidad</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>❌ “La dislexia es falta de esfuerzo”</td>
                <td>✅ Es una condición neurológica que requiere estrategias especiales, no más esfuerzo.</td>
              </tr>
              <tr>
                <td>❌ “Se cura con el tiempo”</td>
                <td>✅ No se cura, pero se gestiona con apoyo y métodos adecuados.</td>
              </tr>
              <tr>
                <td>❌ “Las personas con dislexia son menos inteligentes”</td>
                <td>✅ Son igual de inteligentes, solo aprenden de manera distinta.</td>
              </tr>
            </tbody>
          </table>
          
        </div>
        <img
            src={imagendislexia}
            alt="Simulación dislexia visual"
            className="tdah-image-full"
          />
      </section>

      <section className="tdah-section">
        <h2>🤝 ¿Cómo apoyar a alguien con dislexia?</h2>
        <div className="tdah-image-text">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4358/4358691.png"
            alt="Apoyo dislexia"
          />
          <ul>
            <li>📘 Usar textos con letra clara y tamaño grande</li>
            <li>🔊 Leer en voz alta o usar audiolibros</li>
            <li>⏳ Brindar más tiempo para leer y escribir</li>
            <li>🎲 Incluir juegos de letras y sonidos</li>
            <li>💡 Corregir con paciencia y empatía, sin presión</li>
          </ul>
        </div>
      </section>

      <section className="tdah-section">
        <h2>🎨 Ilustración interactiva</h2>
        <div className="tdah-image-text reverse">
          
          <p>
            Esta imagen muestra cómo puede lucir un texto para una persona con dislexia. Visualizaciones como esta ayudan a generar empatía y comprensión real.
          </p>
        </div>

        <img
          src={textodislexia}
          alt="Simulación dislexia texto"
          className="tdah-image-full imagen-texto-grande"
        />
      </section>

      <section className="tdah-section">
        <h2>📚 ¿Sabías que...?</h2>
        <ul>
          <li>🌍 La dislexia afecta aproximadamente al 10% de la población mundial.</li>
          <li>🧠 No está relacionada con la inteligencia, sino con cómo el cerebro procesa el lenguaje escrito.</li>
          <li>🎨 Muchas personas disléxicas destacan en áreas como arte, ingeniería o música.</li>
          <li>📖 Con apoyo, pueden lograr un rendimiento académico exitoso.</li>
        </ul>
      </section>

      <footer className="tdah-footer">
        <p>💙 La dislexia no define el potencial de una persona, solo propone una forma diferente de aprender. Con comprensión y estrategias adecuadas, todo es posible.</p>
      </footer>
    </div>
  );
}

export default Dislexia;
