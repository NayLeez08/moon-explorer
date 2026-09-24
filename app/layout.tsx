import type { Metadata } from 'next' /*Importo el tipo Metadata de Next.js para poder definir correctamente los metadatos de mi aplicación. */
import './globals.css'
import './explorar/explorar.css'
import './acerca/acerca.css'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {/*metadatos de la aplicación */
  /*Defino los metadatos para establecer el título y la descripción de mi aplicación. */
  title: 'NASA Explorer',
  description: 'Explora imágenes astronómicas proporcionadas por la NASA.',
}

export default function RootLayout({/*establece la estructura que rodea a las páginas de la aplicación. */
  children,/*representa el contenido de la página que se está mostrando actualmente. */
  /*children representa dinámicamente el contenido de cada página y está tipado como React.ReactNode */
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body>
        <Navbar />

        {children}/*coloca el contenido de la página actual. */
      </body>
    </html>
  )
}
