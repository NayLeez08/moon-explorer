export default function AcercaPage() {
  /*Declaración del componente */
  return (
    <main className='about-new-page'>
      {' '}
      {/*El main contiene todo el contenido de la página y la clase
      about-new-page permite darle diseño mediante CSS.*/}
      {/* HERO */}
      <section className='about-new-hero'>
        <div className='about-hero-content'>
          <p className='about-label'>SOBRE EL PROYECTO</p>

          <h1>
            Acerca de
            <span> NASA Explorer</span>
          </h1>

          <p className='about-intro'>
            Una aplicación web para descubrir y consultar imágenes astronómicas
            proporcionadas por la NASA.
          </p>
        </div>

        <div className='about-hero-planet'>
          <img src='/nasa-logo.png' alt='NASA' />
        </div>
      </section>
      {/* ¿QUÉ ES? */}
      <section className='about-description-section'>
        <div className='about-section-title'>
          <div className='about-title-icon'>🚀</div>

          <div>
            <p>NASA EXPLORER</p>

            <h2>¿Qué es NASA Explorer?</h2>
          </div>
        </div>

        <div className='about-description-card'>
          <div className='about-description-text'>
            <p>
              NASA Explorer es una aplicación web desarrollada como proyecto de
              Programación Web Avanzada.
            </p>

            <p>
              La aplicación utiliza la API pública de NASA APOD (Astronomy
              Picture of the Day) para consultar información sobre imágenes
              astronómicas.
            </p>

            <p>
              El objetivo es permitir que los usuarios exploren el universo de
              una manera sencilla, visual e interactiva.
            </p>
          </div>

          <div className='about-planet-small'>🪐</div>
        </div>
      </section>
      {/* CARACTERÍSTICAS */}
      <section className='about-features'>
        <article className='about-feature-card'>
          <div className='about-feature-icon blue-icon'>🖼️</div>

          <div>
            <h3>Imágenes reales</h3>

            <p>
              Consulta imágenes astronómicas del día proporcionadas directamente
              por la NASA.
            </p>
          </div>
        </article>

        <article className='about-feature-card purple-feature'>
          <div className='about-feature-icon purple-icon'>&lt;/&gt;</div>

          <div>
            <h3>Tecnología moderna</h3>

            <p>
              Desarrollada con Next.js y utilizando la API pública de NASA para
              obtener información astronómica.
            </p>
          </div>
        </article>

        <article className='about-feature-card'>
          <div className='about-feature-icon blue-icon'>🎓</div>

          <div>
            <h3>Proyecto educativo</h3>

            <p>
              Creada con fines académicos para aplicar conocimientos de
              desarrollo web.
            </p>
          </div>
        </article>
      </section>
      {/* TECNOLOGÍAS */}
      <section className='about-tech-section'>
        <div className='about-tech-title'>
          <p>DESARROLLO</p>

          <h2>Tecnologías utilizadas</h2>
        </div>

        <div className='about-tech-list'>
          <span>Next.js</span>

          <span>React</span>

          <span>TypeScript</span>

          <span>NASA APOD API</span>

          <span>CSS</span>

          <span>Vercel</span>
        </div>
      </section>
      {/* FRASE FINAL */}
      <section className='about-final'>
        <span>✦</span>

        <p>
          Explorar el universo también es una forma de entender nuestro lugar en
          él.
        </p>

        <span>✦</span>
      </section>
    </main>
  )
}
