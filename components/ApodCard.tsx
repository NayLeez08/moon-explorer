interface ApodData {
  date: string
  title: string
  explanation: string
  url: string
  hdurl?: string
  media_type: string
  copyright?: string
}

interface ApodCardProps {
  apod: ApodData
}

export default function ApodCard({ apod }: ApodCardProps) {
  return (
    <article className='apod-card'>
      {/* IMAGEN */}
      <div className='apod-image-container'>
        {apod.media_type === 'image' ? (
          <img src={apod.url} alt={apod.title} className='apod-image' />
        ) : (
          <div className='video-container'>
            <iframe src={apod.url} title={apod.title} allowFullScreen />
          </div>
        )}
      </div>

      {/* INFORMACIÓN */}
      <div className='apod-content'>
        {/* FECHA */}
        <div className='apod-date'>📅 {apod.date}</div>

        {/* TÍTULO */}
        <div className='apod-title'>
          <div className='title-label'>✦ NASA ASTRONOMY PICTURE OF THE DAY</div>

          <h1>{apod.title}</h1>
        </div>

        {/* AUTOR */}
        {apod.copyright && (
          <p className='apod-copyright'>📷 {apod.copyright}</p>
        )}

        {/* DESCRIPCIÓN */}
        <div className='apod-description'>
          <h2>Descripción</h2>

          <p>{apod.explanation}</p>
        </div>

        {/* IMAGEN HD */}
        {apod.hdurl && (
          <a
            href={apod.hdurl}
            target='_blank'
            rel='noopener noreferrer'
            className='hd-button'
          >
            🔭 Ver imagen en HD
          </a>
        )}
      </div>
    </article>
  )
}
