# Tutorial de autentificación Auth en Astro

Siguiendo el tutorial de Manu Martines
https://youtu.be/VNTpMg3uiMc?si=rqm0pXpR_ECtIpxF

Vamos a usar la librería Auth-Astro para autentificar usuarios en Astro
Permite iniciar sesión con Google, Facebook, Twitter, Github, Microsoft, Apple y correo electrónico.
https://github.com/nowaythatworked/auth-astro
















## EPERM: operation not permitted, rmdir
Con esto se solucionan el error
```sh
$ npm run build

> generador-de-sitios-estaticos---fazt@0.0.1 build
> astro build

13:22:14 [types] Generated 1ms
13:22:14 [vite] Re-optimizing dependencies because lockfile has changed
EPERM: operation not permitted, rmdir 'D:\Progra\Platzi\Cursos Webs\Astro-Desarrollo-web\node_modules\.vite\deps'
  Stack trace:

```

ejecutando los 5 pasos de aquí, se soluciona (ojo comandos para consola windows, no funcionan en bash porque emula comandos Linux)

1) clean npm cache
npm cache clean --force

2) (Windows) delete node_modules and package-lock.json
rd /s /q "node_modules"
del package-lock.json
del -f yarn.lock

3) update your npm version
npm install -g npm@latest --force

4) clean npm cache
npm cache clean --force

5) install packages
npm install
