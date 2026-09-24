'use client' /*le indica a Next.js que ese componente se ejecuta en el cliente */
/*se usa en la página de Explorar porque el usuario puede seleccionar fechas y realizar consultas */

/*Importaciones */
import { useState } from 'react'
import ApodCard from '@/components/ApodCard' /*para mostrar la información obtenida de NASA. */
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'

/*define qué información esperamos recibir de NASA APOD. */
interface ApodData {
  date: string
  title: string
  explanation: string
  url: string
  hdurl?: string /*que esas propiedades son opcionales. */
  media_type: string
  copyright?: string
}

export default function ExplorarPage() {
  const [fecha, setFecha] = useState('')
  const [apod, setApod] = useState<ApodData | null>(
    null,
  ) /*guarda la información recibida de NASA. */

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  /*BUSCAR POR FECHA*/
  const buscarPorFecha = async () => {
    if (!fecha) {
      setError('Selecciona una fecha.')
      return
    }

    const fechaMinima = '1995-06-16'
    const fechaMaxima = new Date().toISOString().split('T')[0]

    // Verificar que la fecha esté dentro del rango permitido
    if (fecha < fechaMinima || fecha > fechaMaxima) {
      setApod(null)
      setError('No fue posible obtener la imagen para esa fecha.')
      return
    }

    try {
      setLoading(true)
      setError('')
      setApod(null)

      const response = await fetch(`/api/apod?date=${fecha}`)

      if (!response.ok) {
        throw new Error('No se encontró una imagen para esa fecha.')
      }

      const data = await response.json()

      setApod(data)
    } catch (error) {
      console.error(error)

      setError('No fue posible obtener la imagen para esa fecha.')
    } finally {
      setLoading(false)
    }
  }

  /*IMAGEN ALEATORIA*/
  const imagenAleatoria = async () => {
    try {
      setLoading(true)
      setError('')
      setApod(null)

      // NASA APOD comenzó el 16 de junio de 1995
      const inicio = new Date('1995-06-16T00:00:00')

      const hoy = new Date()

      const diferencia = hoy.getTime() - inicio.getTime()

      const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24))

      // Elegir un día aleatorio
      const diasAleatorios = Math.floor(Math.random() * dias)

      const fechaAleatoria = new Date(
        inicio.getTime() + diasAleatorios * (1000 * 60 * 60 * 24),
      )

      const año = fechaAleatoria.getFullYear()

      const mes = String(fechaAleatoria.getMonth() + 1).padStart(2, '0')

      const dia = String(fechaAleatoria.getDate()).padStart(2, '0')

      const fechaFormateada = `${año}-${mes}-${dia}`

      const response = await fetch(`/api/apod?date=${fechaFormateada}`)

      if (!response.ok) {
        const errorData = await response
          .json()
          .catch(
            () => null,
          ) /*evita que falle nuevamente si la respuesta no contiene JSON válido. */

        console.error('Error de la API:', {
          status: response.status,
          data: errorData,
        })

        throw new Error(
          errorData?.error ||
            `No se pudo obtener la imagen aleatoria. Código: ${response.status}`,
        )
      }

      const data = await response.json()
      if (data.media_type !== 'image') {
        return imagenAleatoria()
      }
      setApod(data)
    } catch (error) {
      console.error(error)

      setError('No fue posible cargar la imagen aleatoria.')
    } finally {
      /*se ejecuta tanto si la petición funciona como si falla. */
      setLoading(false)
    }
  }

  return (
    <main className='page'>
      {/* HERO */}
      <section className='explore-hero'>
        <div className='hero-icon'>🔭</div>

        <p className='hero-small'>DESCUBRE • EXPLORA • APRENDE</p>

        <h1>
          Explorar el <span>universo</span>
        </h1>

        <p>
          Busca imágenes astronómicas de la NASA por fecha o descubre una imagen
          al azar.
        </p>
      </section>

      {/* OPCIONES */}
      <section className='explore-options'>
        {/* BUSCAR POR FECHA */}
        <div className='search-card'>
          <div className='option-icon'>📅</div>

          <div className='option-content'>
            <h2>Buscar por fecha</h2>

            <p>
              Selecciona una fecha para consultar la imagen astronómica
              publicada por NASA.
            </p>

            <span className='date-range'>
              📅 Disponible del 16 de junio de 1995 hasta hoy
            </span>
            <div className='search-form'>
              <input
                type='date'
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />

              <button onClick={buscarPorFecha}>🔎 Buscar</button>
            </div>
          </div>
        </div>

        {/* ALEATORIA */}
        <div className='random-card'>
          <div className='option-icon random-icon'>🎲</div>

          <div className='option-content'>
            <h2>Imagen aleatoria</h2>

            <p>Descubre una imagen astronómica seleccionada al azar.</p>

            <button
              className='random-button'
              onClick={imagenAleatoria}
              disabled={loading}
            >
              {loading ? '🔄 Buscando...' : '🎲 Explorar imagen aleatoria'}
            </button>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}

      <section className='explore-result'>
        {loading && <Loading />}

        {!loading && error && (
          <ErrorMessage
            message={error}
            onRetry={() => {
              if (fecha) {
                buscarPorFecha()
              } else {
                imagenAleatoria()
              }
            }}
          />
        )}

        {!loading && !error && apod && <ApodCard apod={apod} />}
      </section>
    </main>
  )
}
