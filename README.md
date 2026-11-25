# MY LITTLE PLUSHIE

Monito de peluche generado **100% mediante código**: SVG vectorial, CSS3 y JavaScript.
No hay fotografías, PNG, JPG, GIF, ilustraciones descargadas, emojis ni modelos 3D.

## Estructura

```
MyLittlePlushie/
├── index.html                 # Página y controles (sin SVG del personaje)
├── assets/
│   ├── css/style.css          # Diseño, keyframes y estados de animación
│   └── js/
│       ├── monkey.js          # ÚNICA definición del SVG + máquina de estados
│       └── app.js             # Botones, globos de diálogo y reproductor MP3
```

## Uso

Se ve igual en **PC y teléfono** (diseño responsive y controles táctiles de 44 px).

1. Con XAMPP: inicia Apache y abre `http://localhost/MyLittlePlushie/`.
2. Sin servidor: abre `index.html` directamente en el navegador.
3. En GitHub Pages: sube esta carpeta a un repositorio y abre
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.
   Si publicas desde la raíz del repo, no hay que cambiar rutas: todas son relativas.
4. Pulsa **ABRAZAR**, **BAILAR**, **SALUDAR**, **ALEGRÍA**, **DORMIR** o **DESPERTAR**.
5. Toca directamente al monito para una reacción aleatoria (saludar, saltar o inclinar la cabeza).
6. En el reproductor, elige un archivo MP3 local y usa reproducir/pausar, detener, volumen y progreso.

> En GitHub Pages, ve a *Settings → Pages → Deploy from a branch → main / root* y guarda.
> Todo funciona sin conexión una vez cargada la página; no hay CDN, fuentes remotas ni imágenes externas.

## Animaciones

- `idle`: respiración y parpadeo.
- `hug`: brazos abiertos, cabeza inclinada, cuerpo más cerca y corazones.
- `dance`: balanceo, brazos y piernas alternados.
- `wave`: brazo derecho levantado con vaivén de la mano.
- `sleep`: ojos cerrados, cabeza ladeada, letras Z y sin otras animaciones.
- `wake`: estiramiento y vuelta al estado normal.
- `joy`: salto, mejillas iluminadas y partículas de corazones.
- `tilt`: inclinación curiosa de la cabeza.
- La cola tiene movimiento propio: balanceo en reposo, vaivén en el baile y movimientos durante el salto.
- Con música activa, el personaje realiza un balanceo decorativo en estados compatibles.

El personaje se controla cambiando `data-state` en el `<svg>`; el SVG nunca se reconstruye.
Para depurar desde la consola: `window.plushie.hug()`, `window.plushie.dance()`, etc.
