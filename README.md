# Rust Playground - Área de Pruebas de Rust

Este proyecto es una **aplicación web interactiva** diseñada para permitir la ejecución de código **Rust** en tiempo real. Está desarrollado utilizando **Vite** para un entorno de desarrollo rápido, **React** para la interfaz de usuario, **TailwindCSS** para el diseño responsive, y un editor de código enriquecido proporcionado por **Ace Editor**. El código escrito por los usuarios se envía a la **API del Rust Playground** mediante solicitudes **POST** para su compilación y ejecución.

## Tecnologías

- **Frontend**: React, Tailwind CSS, TypeScript
- **Herramientas**: Git, Vite
- **API**: Rust-Lang API
- **Dependencia de Editor de código**: Ace Editor (con resaltado de sintaxis Rust)

## Instalación y Uso

Si deseas clonar y ejecutar este proyecto localmente, sigue estos pasos:

1. **Clona este repositorio**:

   ```bash
   git clone https://github.com/fgonzalezurriola/Zona-de-Pruebas-de-Rust
   cd Zona-De-Pruebas-de-Rust
   ```

2. **Instala las dependencias**:

   ```bash
   npm install
   ```

3. **Inicia la aplicación**:

   ```bash
   npm run dev
   ```

4. **Abre tu navegador** y ve a `http://localhost:5173` para ver la aplicación en funcionamiento.

## Funcionalidad

1. **Escribir código**: Los usuarios pueden escribir código Rust en el editor interactivo con resaltado de sintaxis.
2. **Ejecutar código**: Al presionar el botón "Ejecutar Código", el código se envía a la API del Rust Playground y el resultado (o los errores) se muestran en la interfaz.
3. **Visualización del resultado**: La salida de la ejecución del código aparece justo debajo del editor, permitiendo una experiencia rápida y directa.
4. **Ejemplos de prueba**: Al presionar el slide menu aparecen 10 ejemplos de código Rust para probar la aplicación.

## Estructura del Proyecto

```markdown
/src
   /components
       App.tsx      # Componente principal de la aplicación
       main.tsx     # Punto de entrada de la aplicación
   index.css        # Estilos personalizados
   index.html       # Página HTML principal
   vite-env.d.ts    # Definiciones de tipos para Vite
.eslintrc.js        # Configuración de ESLint
tailwind.config.js  # Configuración de TailwindCSS
tsconfig.json       # Configuración de TypeScript
vite.config.ts      # Configuración de Vite
```

## API del Rust Playground

El proyecto utiliza la **API del Rust Lang** para ejecutar el código Rust proporcionado por los usuarios. Se hace una solicitud **POST** hacia la API.

## Despliegue en Vercel

El proyecto está desplegado en **Vercel** para facilitar la visualización del proyecto en producción. Puedes acceder a la aplicación en vivo a través del siguiente enlace:

[**Ver Rust Playground en Vercel**](https://tu-enlace-vercel.vercel.app)

## Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Si estás interesado en saber más sobre mí o mis proyectos, no dudes en contactarme:

- **Email**: [fgonzalezurriola@gmail.com](mailto:fgonzalezurriola@gmail.com)
- **LinkedIn**: [fgonzalezurriola](https://www.linkedin.com/in/fgonzalezurriola/)
- **Telegram**: [@fgonzalezurriola](https://t.me/fgonzalezurriola)
- **Portafolio**: [fgonzalezurriola.github.io](https://fgonzalezurriola.github.io)
