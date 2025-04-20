import './tdah.css'
import tdahIntroImage from '../assets/Tdah.jpg'
import Tiposdetdah from '../assets/TiposdeTDAH.jpg'
import fortalezatdh from '../assets/fortalezatdah.jpg'
import mitostdah from '../assets/mitostdh.jpg'
import causatdah from '../assets/causastdah.jpg'

function TDAH() {
  return (
    <div className="tdah-container">
      <header className="tdah-header11">
        <h1>TDAH: Trastorno por Déficit de Atención e Hiperactividad</h1>
        <p>
          Una condición del neurodesarrollo que influye en la atención, el autocontrol y el comportamiento.
          Afecta tanto a niños como a adultos, y requiere comprensión, diagnóstico y estrategias de apoyo.
        </p>
      </header>

      <section className="tdah-intro">
      <img
        src={tdahIntroImage}
        alt="Ilustración introductoria sobre TDAH"
        className="tdah-image-full"
      />
      <p>
        El TDAH se manifiesta en tres dimensiones principales: inatención, hiperactividad e impulsividad.
        Estas características pueden generar retos académicos, sociales, laborales y familiares, pero con
        las estrategias adecuadas, también pueden convertirse en fortalezas.
      </p>
    </section>


      <section className="tdah-section">
        <h2>📊 ¿Cuáles son los síntomas?</h2>
        <div className="tdah-grid">
          <div className="tdah-card">
            <img src="https://cdn-icons-png.flaticon.com/512/2462/2462719.png" alt="Inatención" />
            <h3>Inatención</h3>
            <ul>
              <li>Dificultad para seguir instrucciones</li>
              <li>Frecuentes olvidos y pérdidas de objetos</li>
              <li>Problemas para concentrarse en tareas largas</li>
            </ul>
          </div>
          <div className="tdah-card">
            <img src="https://cdn-icons-png.flaticon.com/512/3890/3890766.png" alt="Hiperactividad" />
            <h3>Hiperactividad</h3>
            <ul>
              <li>Movimientos constantes, incluso sin necesidad</li>
              <li>Dificultad para permanecer sentado</li>
              <li>Hablar en exceso o interrumpir actividades</li>
            </ul>
          </div>
          <div className="tdah-card">
            <img src="https://cdn-icons-png.flaticon.com/512/4151/4151978.png" alt="Impulsividad" />
            <h3>Impulsividad</h3>
            <ul>
              <li>Responder antes de que finalicen las preguntas</li>
              <li>Dificultad para esperar turnos</li>
              <li>Interrupción constante a otros</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="tdah-section">
  <h2>📌 Clasificación de los tipos de TDAH</h2>
  <p>
    Según el <strong>DSM-5</strong> (Manual Diagnóstico y Estadístico de los Trastornos Mentales), el TDAH se clasifica en tres tipos principales, cada uno con características particulares que afectan la forma en que se manifiesta la condición:
  </p>

  <div className="tabla-scroll">
  <table className="tdah-table elegante">
    <thead>
      <tr>
        <th>🧩 Tipo</th>
        <th>📝 Características principales</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Inatento</strong></td>
        <td>Desorganización, dificultad para mantener la atención, errores por descuido, y olvidos frecuentes.</td>
      </tr>
      <tr>
        <td><strong>Hiperactivo/Impulsivo</strong></td>
        <td>Movimiento constante, hablar en exceso, dificultad para esperar turnos e interrupciones frecuentes.</td>
      </tr>
      <tr>
        <td><strong>Combinado</strong></td>
        <td>Presenta síntomas marcados tanto de inatención como de hiperactividad e impulsividad.</td>
      </tr>
    </tbody>
  </table>
</div>

  <div className="tdah-fortalezas-img-contenedor">
      <img
       src={Tiposdetdah}
      alt="Clasificación TDAH"
      className="tdah-image-medium"
    />


    <p>
      Conocer el tipo de TDAH es esencial para brindar un apoyo adecuado. Cada manifestación requiere estrategias diferentes, y con la orientación correcta, se pueden desarrollar herramientas personalizadas que potencien el bienestar y el aprendizaje.
    </p>
  </div>
</section>


      <section className="tdah-section">
        <h2>🧠 Causas y factores de riesgo</h2>
        <p>
          No existe una única causa del TDAH, pero se sabe que influye una combinación de factores biológicos y ambientales:
        </p>
        <ul>
          <li>🧬 Genética: el TDAH suele presentarse en miembros de una misma familia.</li>
          <li>🧠 Neurobiología: diferencias en la actividad cerebral y los niveles de dopamina.</li>
          <li>🤰 Factores prenatales: exposición al alcohol, tabaco o estrés durante el embarazo.</li>
          <li>💥 Factores ambientales: exposición a plomo, traumas infantiles o falta de estructura familiar.</li>
        </ul>
        <img
          src={causatdah}
          alt="Causas del TDAH"
          className="tdah-image-full"
        />
      </section>

      <section className="tdah-section">
        <h2>🏫 Impacto en diferentes áreas de la vida</h2>
        <p>El TDAH afecta muchas áreas del desarrollo personal y social:</p>
        <ul>
          <li>🎓 Desempeño escolar: dificultad para concentrarse y completar tareas.</li>
          <li>👨‍👩‍👧 Relaciones familiares: frustración en padres o hermanos por comportamientos impulsivos.</li>
          <li>👫 Habilidades sociales: interrupciones, dificultad para hacer amigos.</li>
          <li>💼 Vida laboral: problemas con la puntualidad, la organización y el seguimiento de tareas.</li>
        </ul>
      </section>

      <section className="tdah-section">
        <h2>🛠️ Tratamientos y apoyo</h2>
        <div className="tdah-image-text">
          <img src="https://cdn-icons-png.flaticon.com/512/4358/4358691.png" alt="Apoyo terapéutico" />
          <ul>
            <li>✔ Psicoterapia conductual</li>
            <li>✔ Apoyo escolar y adaptaciones educativas</li>
            <li>✔ Entrenamiento para padres y tutores</li>
            <li>✔ En algunos casos, medicación (bajo supervisión médica)</li>
          </ul>
        </div>
      </section>

      <section className="tdah-section fortalezas-section">
  <h2>🌟 Fortalezas de las personas con TDAH</h2>
  <p>Además de los desafíos, las personas con TDAH poseen habilidades únicas que pueden ser una ventaja en muchos entornos:</p>

  <div className="tdah-fortalezas-list">
    <ul>
      <li>🎨 <strong>Creatividad:</strong> capacidad de pensar "fuera de la caja" y proponer ideas innovadoras.</li>
      <li>⚡ <strong>Energía y entusiasmo:</strong> alta vitalidad para emprender proyectos con intensidad.</li>
      <li>🔍 <strong>Hiperfoco:</strong> cuando se interesan en un tema, pueden concentrarse profundamente.</li>
      <li>❤️ <strong>Empatía y sensibilidad:</strong> gran capacidad para conectar emocionalmente con los demás.</li>
    </ul>
  </div>

  <div className="tdah-fortalezas-img-contenedor">
    <img
      src={fortalezatdh}
      alt="Fortalezas del TDAH"
      className="tdah-image-full"
    />
    <p className="tdah-fortalezas-texto">
      Con el acompañamiento adecuado, estas fortalezas pueden florecer aún más. Es importante reconocer y potenciar las habilidades de las personas con TDAH en lugar de enfocarse solo en sus dificultades.
    </p>
  </div>
</section>


      <section className="tdah-section">
  <h2>❓ ¿Mito o realidad?</h2>
  <img
          src={mitostdah}
          alt="Causas del TDAH"
          className="tdah-image-full"
        />
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
        <td>“El TDAH es una excusa para no hacer las cosas”</td>
        <td>FALSO. El TDAH es una condición reconocida por la OMS con base científica y médica.</td>
      </tr>
      <tr>
        <td>“Solo afecta a los niños”</td>
        <td>FALSO. Aunque se diagnostica en la infancia, muchos adultos continúan con síntomas.</td>
      </tr>
      <tr>
        <td>“No pueden concentrarse en nada”</td>
        <td>FALSO. Pueden tener hiperfoco si algo les apasiona, y concentrarse profundamente.</td>
      </tr>
    </tbody>
  </table>
</div>

</section>


      <footer className="tdah-footer">
        <p>💡 Con empatía, conocimiento y recursos adecuados, el TDAH puede ser entendido, gestionado y hasta convertirse en un motor de éxito.</p>
      </footer>
    </div>
  )
}

export default TDAH
