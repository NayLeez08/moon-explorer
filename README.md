# 🚀 NASA Explorer

NASA Explorer es una aplicación web desarrollada como proyecto de
Programación Web Avanzada.

La aplicación permite explorar imágenes astronómicas proporcionadas
por la NASA mediante la API pública NASA APOD
(Astronomy Picture of the Day).

El proyecto busca ofrecer una experiencia sencilla, visual e
interactiva para consultar información relacionada con el universo.

---

## 🌌 Funcionalidades

- 🏠 Página de inicio con información sobre el universo.
- 🔭 Consulta de la imagen astronómica del día.
- 📅 Búsqueda de imágenes astronómicas por fecha.
- 🎲 Consulta de imágenes aleatorias.
- 🖼️ Visualización de imágenes proporcionadas por NASA.
- 🔍 Visualización de imágenes en alta definición cuando están disponibles.
- 📖 Descripción e información de cada imagen.
- ⏳ Indicador de carga mientras se consulta la API.
- ⚠️ Manejo de errores durante las peticiones.
- 📱 Diseño adaptable a dispositivos móviles, tablets y computadoras.
- ℹ️ Página "Acerca de" con información del proyecto y tecnologías utilizadas.

---

## 🛰️ API utilizada

El proyecto utiliza la API pública:

**NASA APOD - Astronomy Picture of the Day**

La API proporciona información astronómica acompañada de imágenes
o contenido multimedia.

La aplicación realiza las peticiones desde una ruta de API propia
del proyecto para mantener la clave de NASA protegida.

---

## 🛠️ Tecnologías utilizadas

- Next.js
- React
- TypeScript
- CSS
- NASA APOD API
- Vercel
- Git
- GitHub

---

## 📂 Estructura del proyecto

```text
moon-explorer/
│
├── app/
│   ├── api/
│   │   └── apod/
│   │       └── route.ts
│   │
│   ├── acerca/
│   │   ├── page.tsx
│   │   └── acerca.css
│   │
│   ├── explorar/
│   │   ├── page.tsx
│   │   └── explorar.css
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ApodCard.tsx
│   ├── Loading.tsx
│   └── ErrorMessage.tsx
│
├── public/
│
├── .env.local
├── .gitignore
├── package.json
└── README.md