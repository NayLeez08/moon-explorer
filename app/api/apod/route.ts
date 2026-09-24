import {
  NextRequest,
  NextResponse,
} from 'next/server' /*Representa la solicitud HTTP que recibe nuestro servidor. */

export async function GET(request: NextRequest) {
  /*responde a las solicitudes HTTP */
  try {
    const apiKey =
      process.env
        .NASA_API_KEY /*Aquí obtenemos la clave API desde una variable de entorno. */

    if (!apiKey) {
      /*Comprobar que exista la clave */
      return NextResponse.json(
        {
          error: 'No se encontró la clave API de NASA',
        },
        {
          status: 500,
        },
      )
    }

    /*Obtener fecha*/
    const searchParams = request.nextUrl.searchParams
    const date = searchParams.get('date')

    /*Aquí se construye la URL que se utilizará para consultar NASA.  */
    let nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

    /*se comprueba si el usuario proporcionó una fecha.*/
    if (date) {
      nasaUrl += `&date=${date}`
    }

    // Petición a NASA
    const response = await fetch(nasaUrl, {
      method: 'GET',
      cache: 'no-store',
      signal: AbortSignal.timeout(10000),
    })

    /*Error de NASA*/
    if (!response.ok) {
      const errorText = await response.text()
      console.error('Error de NASA API:', response.status, errorText)
      return NextResponse.json(
        {
          error: 'Error al consultar la API de NASA',
          status: response.status,
        },
        {
          status: response.status,
        },
      )
    }

    /*Obtener información*/
    const data = await response.json()

    // Responder al frontend
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error en la API de NASA:', error)

    if (error instanceof Error && error.name === 'TimeoutError') {
      return NextResponse.json(
        {
          error: 'NASA tardó demasiado en responder.',
        },
        {
          status: 504,
        },
      )
    }

    return NextResponse.json(
      {
        error: 'No se pudo obtener la información de NASA.',
      },
      {
        status: 500,
      },
    )
  }
}
