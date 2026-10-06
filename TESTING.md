# Validación de Cat Invaders y portafolio

El PR #1 fue cerrado sin fusionar. Esta rama parte de su commit
`542a6472acfad1a23da8691071f8d749831fc3e8` y contiene el prototipo más sus correcciones.

## Android

Requisitos: JDK 17, Gradle 8.7, Android SDK 34/build-tools 34.0.0 y emulador o
dispositivo API 26+. El proyecto original no incluye Gradle Wrapper; usar la
versión indicada (también fijada en CI).

Desde `android-cat-invaders/`:

```sh
gradle :app:assembleDebug :app:testDebugUnitTest :app:lintDebug
gradle :app:connectedDebugAndroidTest
```

- `GameEngineTest`: invalidación observable con movimiento sin cambios en HUD ni
  tamaño de listas; conservación de puntaje/vidas/posición durante dos oleadas;
  último impacto suma exactamente 10; retiro de proyectiles; bloqueo al terminar
  y reinicio completo.
- `CatInvadersScreenTest`: capturas reales del Canvas comprueban cambios de píxeles
  al mover gato y proyectil sin tocar el HUD; transición de oleada mantiene el HUD;
  el botón Reintentar limpia la partida y vuelve a permitir disparar. Se desactiva
  únicamente el bucle automático para controlar los pasos sin temporizadores.
- Prueba manual en API 26 y API 34: observar movimiento continuo sin tocar botones,
  arrastrar/disparar, completar dos oleadas con una vida perdida, verificar puntaje
  acumulado, perder las vidas restantes y reintentar. Deben aparecer 18 gatos,
  puntaje 0, tres vidas y ningún proyectil anterior. Verificar que la formación
  retoma su dirección inicial. Probar distintos tamaños de pantalla.

El avance de oleada ocurre en el tick siguiente al último impacto. `startWave()`
solo repone gatos, limpia proyectiles y restablece la dirección; `reset()` además
reinicia puntaje, vidas, posición y Game Over. Los campos de las entidades son
estado observable de Compose, leído directamente por Canvas.

## Web

Desde la raíz:

```sh
npm ci --no-audit --no-fund
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

El antiguo test «learn react» se reemplaza por verificaciones de identidad,
enlace GitHub y apertura del CV. Solo se simula el renderer de partículas WebGL.
No hay juego web: animación, oleadas y reinicio se validan en Android. Abrir el
portafolio en escritorio y móvil para comprobar menú, enlaces y apertura/cierre
del CV con el renderer real.

## Automatización y criterio de aceptación

`.github/workflows/validate.yml` ejecuta tests y build web, build/lint/tests JVM
Android y tests Compose en emulador API 34. Conserva los reportes Android incluso
si falla el job. No dar por validado Android hasta que todas esas tareas terminen
correctamente; complementar con la prueba manual API 26 y pantallas distintas.

## Resultado en este entorno (6 de octubre de 2026)

- `npm ci`: completado.
- `CI=true npm test -- --watchAll=false --runInBand`: 2 pruebas aprobadas.
- `npm run build`: compilación de producción correcta.
- React reporta un aviso preexistente por `class` en lugar de `className` y
  Browserslist informa que su base de navegadores está desactualizada.
- Gradle 8.7 ejecutó el intento de build/tests/lint, pero falló al resolver el
  plugin Android `com.android.application:8.5.2` en los repositorios configurados.
  No llegó a compilar Kotlin ni a ejecutar tests Android. Además, este entorno
  no tiene Android SDK ni emulador: los tests instrumentados siguen pendientes.
