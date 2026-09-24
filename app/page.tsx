/*Este archivo corresponde a la página principal de mi 
aplicación. Como está ubicado en app/page.tsx, Next.js lo utiliza automáticamente para la ruta */
export default function Home() {
  return (
    <main className='home-page'>
      {/* HERO */}
      <section className='home-hero-new'>
        <div className='home-hero-icon'>🚀</div>

        <p className='home-hero-small'>NASA EXPLORER</p>

        <h1>Explora el universo</h1>

        <p className='home-hero-description'>
          Descubre información fascinante sobre el espacio, las estrellas, los
          planetas y los misterios del universo.
        </p>

        <a href='/explorar' className='home-explore-button'>
          🔭 Comenzar exploración
        </a>
      </section>

      {/* INFORMACIÓN */}
      <section className='space-section'>
        <div className='space-section-title'>
          <span>🌌</span>

          <div>
            <p>DESCUBRE EL UNIVERSO</p>

            <h2>Un espacio lleno de misterios</h2>
          </div>
        </div>

        <div className='space-cards'>
          {/* TARJETA 1 */}
          <article className='space-card'>
            <div className='space-card-icon'>🪐</div>

            <h3>Los planetas</h3>

            <p>
              Nuestro Sistema Solar está formado por ocho planetas que orbitan
              alrededor del Sol. Cada uno posee características únicas que lo
              hacen especial.
            </p>
          </article>

          {/* TARJETA 2 */}
          <article className='space-card'>
            <div className='space-card-icon'>⭐</div>

            <h3>Las estrellas</h3>

            <p>
              Las estrellas son enormes cuerpos celestes que producen luz y
              energía. El Sol es la estrella más cercana a nuestro planeta.
            </p>
          </article>

          {/* TARJETA 3 */}
          <article className='space-card'>
            <div className='space-card-icon'>🌙</div>

            <h3>La Luna</h3>

            <p>
              La Luna es el satélite natural de la Tierra y desempeña un papel
              importante en fenómenos como las mareas.
            </p>
          </article>
        </div>
      </section>

      {/* CURIOSIDADES */}
      <section className='facts-section'>
        <div className='facts-header'>
          <span>✨</span>

          <div>
            <p>DATOS DEL ESPACIO</p>

            <h2>¿Sabías que...?</h2>
          </div>
        </div>

        <div className='facts-list'>
          <div className='fact'>
            <span>01</span>

            <p>
              La luz del Sol tarda aproximadamente 8 minutos en llegar a la
              Tierra.
            </p>
          </div>

          <div className='fact'>
            <span>02</span>

            <p>Júpiter es el planeta más grande de nuestro Sistema Solar.</p>
          </div>

          <div className='fact'>
            <span>03</span>

            <p>
              El universo contiene una enorme cantidad de galaxias, estrellas y
              otros objetos celestes.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
