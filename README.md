# 📱 Parte Diario de Novedades - PWA
## Aplicación para Policía Municipal de Madrid

---

## 🚀 ¿QUÉ ES ESTO?

Esta es una **Progressive Web App (PWA)** - una aplicación web que funciona como una app nativa de Android.

**Características:**
- ✅ Se instala en tu móvil Android
- ✅ Icono en la pantalla de inicio
- ✅ Funciona SIN CONEXIÓN (offline)
- ✅ Pantalla completa (sin barras del navegador)
- ✅ Reconocimiento de voz para dictar
- ✅ Guarda partes automáticamente
- ✅ Exporta a PDF

---

## 📲 INSTALACIÓN EN ANDROID

### **MÉTODO 1: Desde un Servidor Web (Recomendado)**

1. **Sube todos los archivos a un servidor web** con HTTPS
   - Necesitas: `index.html`, `manifest.json`, `service-worker.js` y carpeta `icons/`

2. **Abre la URL en Chrome** desde tu móvil Android

3. **Aparecerá automáticamente** un mensaje:
   ```
   "¿Añadir Parte Diario PM a la pantalla de inicio?"
   ```

4. **Pulsa "Añadir"** o "Instalar"

5. **¡Listo!** Ya tienes el icono en tu móvil

---

### **MÉTODO 2: Instalación Local (Sin servidor)**

Si no tienes servidor web, puedes usar estos pasos:

#### **Opción A: Usar GitHub Pages (GRATIS)**

1. Crea una cuenta en GitHub (gratis)
2. Crea un repositorio nuevo
3. Sube todos los archivos
4. Ve a Settings → Pages → Enable GitHub Pages
5. Obtendrás una URL tipo: `https://tuusuario.github.io/parte-policia`
6. Abre esa URL en tu móvil Android con Chrome
7. Instala la app

#### **Opción B: Servidor local temporal**

1. Instala Python en tu PC (si no lo tienes)
2. Abre terminal/cmd en la carpeta con los archivos
3. Ejecuta:
   ```bash
   python -m http.server 8000
   ```
4. Desde tu móvil, ve a: `http://IP-DE-TU-PC:8000`
   (Reemplaza IP-DE-TU-PC por la IP de tu computadora)
5. Chrome preguntará si quieres instalar
6. Pulsa "Instalar"

---

## 📂 ESTRUCTURA DE ARCHIVOS

```
pwa_parte_policia/
├── index.html              # La aplicación principal
├── manifest.json           # Configuración de la PWA
├── service-worker.js       # Para funcionar offline
├── icons/                  # Iconos de la app
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
└── README.md              # Este archivo
```

---

## 🎯 CÓMO USAR LA APP

### **Una vez instalada:**

1. **Abre la app** desde el icono en tu pantalla de inicio
2. **Rellena los campos** del parte diario
3. **Usa el micrófono 🎤** para dictar texto
4. **Guarda el parte** con el botón 💾
5. **Imprime/Exporta** a PDF con el botón 🖨️

### **Funciones principales:**

- 📝 **Rellenar parte diario** con todos los campos
- 🎤 **Dictar por voz** en campos de lugar e incidencias
- 💾 **Guardar partes** en el dispositivo
- 📁 **Ver partes guardados** anteriormente
- ✏️ **Editar partes** guardados
- 🖨️ **Imprimir/PDF** directamente desde el móvil
- 🗑️ **Limpiar formulario** para empezar de nuevo
- ✍️ **Firmar digitalmente** con el dedo

---

## ⚙️ REQUISITOS

- **Android 5.0+** (Lollipop o superior)
- **Chrome** o **Edge** (versión actualizada)
- **8 MB** de espacio libre
- **Conexión a Internet** para instalar (después funciona offline)

---

## 🔧 SOLUCIÓN DE PROBLEMAS

### **No aparece el mensaje de instalación**

1. Asegúrate de estar usando **Chrome** (no otro navegador)
2. La página debe servirse por **HTTPS** (no HTTP)
3. Cierra Chrome y vuelve a abrir la página
4. Si aún no funciona, en Chrome ve a:
   - Menú (⋮) → "Añadir a pantalla de inicio"

### **El micrófono no funciona**

1. Ve a **Ajustes** de Chrome
2. **Permisos del sitio** → **Micrófono**
3. Asegúrate de que está **Permitido**
4. Recarga la página

### **La app no guarda los datos**

- Los datos se guardan en el navegador (localStorage)
- Si borras los datos de Chrome, se perderán los partes guardados
- **Consejo:** Exporta a PDF los partes importantes

---

## 🌐 HOSTING GRATUITO

Si necesitas alojar la app online gratis:

### **GitHub Pages** ⭐ (Recomendado)
- ✅ Gratis para siempre
- ✅ HTTPS incluido
- ✅ Fácil de actualizar
- URL: `https://tuusuario.github.io/parte-policia`

### **Netlify**
- ✅ Gratis
- ✅ HTTPS automático
- ✅ Arrastra y suelta archivos

### **Vercel**
- ✅ Gratis
- ✅ Muy rápido
- ✅ HTTPS incluido

---

## 📱 CAPTURA DE PANTALLA

La app se ve así en Android:

```
┌─────────────────────────┐
│  📱 Pantalla de Inicio  │
├─────────────────────────┤
│                         │
│   [ICONO PM - Azul]     │
│   Parte Diario PM       │
│                         │
└─────────────────────────┘
```

---

## 🔐 PRIVACIDAD

- ✅ **Todos los datos** se guardan SOLO en tu móvil
- ✅ **No se envía nada** a ningún servidor
- ✅ **Sin publicidad** ni rastreo
- ✅ **Código abierto** - puedes revisarlo

---

## 📞 SOPORTE

Si tienes problemas:

1. Verifica que todos los archivos estén en el servidor
2. Asegúrate de usar HTTPS
3. Prueba en Chrome actualizado
4. Revisa la consola del navegador (F12) para errores

---

## 🔄 ACTUALIZACIONES

Cuando actualices la app:

1. Reemplaza los archivos en el servidor
2. Cambia el número de versión en `service-worker.js`:
   ```javascript
   const CACHE_NAME = 'parte-policia-v1.0.1'; // Incrementar versión
   ```
3. Los usuarios verán un mensaje de nueva versión disponible

---

## ✨ VENTAJAS DE LA PWA vs APK TRADICIONAL

| Característica | PWA | APK Tradicional |
|----------------|-----|-----------------|
| Instalación | 1 clic desde navegador | Descargar + Instalar |
| Actualizaciones | Automáticas | Manual |
| Tamaño | ~2-3 MB | 10-50 MB |
| Permisos | Solo los necesarios | Muchos permisos |
| Desarrollo | Más rápido | Más lento |
| Google Play | No necesario | Requiere cuenta ($25/año) |
| Funciona offline | ✅ Sí | ✅ Sí |
| Acceso a hardware | Limitado | Completo |

---

## 📋 LICENCIA

Esta aplicación es para uso interno de la Policía Municipal de Madrid.

---

**Versión:** 1.0.0  
**Última actualización:** 2026

---

¡Disfruta de tu nueva app móvil! 📱✨
