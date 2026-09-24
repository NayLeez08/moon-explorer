'use client' 

interface SearchApodProps {
  onSearch: (date: string) => void
  onRandom: () => void
  loading: boolean
}
export default function SearchApod({
  onSearch,
  onRandom,
  loading,
}: SearchApodProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const date = formData.get('date') as string

    if (!date) {
      return
    }

    onSearch(date)
  }

  return (
    <section className='search-section'>
      <div className='search-header'>
        <h2>🔎 Explorar imágenes</h2>

        <p>Busca una imagen astronómica por fecha o descubre una al azar.</p>
      </div>

      <form onSubmit={handleSubmit} className='search-form'>
        {/* FECHA */}

        <div className='date-input-container'>
          <label htmlFor='date'>📅 Seleccionar fecha</label>

          <input
            id='date'
            name='date'
            type='date'
            min='1995-06-16'
            max={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        {/* BUSCAR */}

        <button type='submit' className='search-button' disabled={loading}>
          {loading ? 'Buscando...' : '🔎 Buscar'}
        </button>

        {/* ALEATORIO */}

        <button
          type='button'
          className='random-button'
          onClick={onRandom}
          disabled={loading}
        >
          🎲 Imagen aleatoria
        </button>
      </form>
    </section>
  )
}
