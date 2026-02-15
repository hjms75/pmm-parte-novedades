# 📱 GUÍA RÁPIDA DE INSTALACIÓN
## Parte Diario PM - PWA para Android

---

## ⚡ INSTALACIÓN RÁPIDA (3 MÉTODOS)

---

### 📌 MÉTODO 1: GitHub Pages (GRATIS - Más Fácil) ⭐

**Tiempo: 5 minutos**

1. **Crea cuenta en GitHub** (si no tienes)
   - Ve a: https://github.com
   - Pulsa "Sign up"
   - Es gratis

2. **Crea un repositorio nuevo**
   - Pulsa "New repository"
   - Nombre: `parte-policia`
   - Marca "Public"
   - Pulsa "Create repository"

3. **Sube los archivos**
   - Pulsa "Upload files"
   - Arrastra TODOS los archivos de esta carpeta
   - Pulsa "Commit changes"

4. **Activa GitHub Pages**
   - Ve a "Settings" del repositorio
   - En el menú izquierdo: "Pages"
   - En "Source" selecciona "main" branch
   - Pulsa "Save"

5. **Espera 1 minuto**
   - GitHub te dará una URL tipo:
   ```
   https://tu-usuario.github.io/parte-policia
   ```

6. **Instala en tu móvil Android**
   - Abre esa URL en Chrome (móvil)
   - Chrome preguntará: "¿Añadir a pantalla de inicio?"
   - Pulsa "Añadir"
   - ¡Listo! 🎉

---

### 📌 MÉTODO 2: Netlify (GRATIS - Super Rápido)

**Tiempo: 2 minutos**

1. **Ve a Netlify**
   - https://www.netlify.com

2. **Arrastra carpeta**
   - Arrastra TODA la carpeta `pwa_parte_policia`
   - A la zona que dice "Drop your site here"

3. **Netlify genera URL automáticamente**
   ```
   https://random-name-12345.netlify.app
   ```

4. **Abre en tu móvil**
   - Chrome mostrará: "¿Instalar app?"
   - Pulsa "Instalar"
   - ¡Listo! 🎉

---

### 📌 MÉTODO 3: Servidor Local (Para Pruebas)

**Tiempo: 1 minuto**

**En Windows:**
1. Doble clic en `iniciar_servidor.bat`
2. Anota tu IP (ejemplo: 192.168.1.100)
3. En tu móvil Android:
   - Conecta a la misma WiFi
   - Abre Chrome
   - Ve a: `http://192.168.1.100:8000`
4. Chrome pregunta instalar → Pulsa "Instalar"

**En Linux/Mac:**
1. Terminal en esta carpeta
2. Ejecuta: `./iniciar_servidor.sh`
3. Sigue las instrucciones en pantalla

---

## 📱 DESPUÉS DE INSTALAR

### **Verás el icono "PM" azul en tu pantalla de inicio**

```
┌────────────┐
│     PM     │  ← Icono azul con estrella
│            │
└────────────┘
Parte Diario
```

### **Al abrir:**
- ✅ Pantalla completa (sin barras de Chrome)
- ✅ Funciona sin Internet (después de primera carga)
- ✅ Guarda partes automáticamente
- ✅ Reconocimiento de voz 🎤

---

## ⚙️ CONFIGURACIÓN INICIAL

**Primera vez que abres la app:**

1. **Permisos de micrófono**
   - La app pedirá permiso
   - Pulsa "Permitir"
   - Necesario para dictar por voz

2. **Prueba la app**
   - Rellena un parte de prueba
   - Usa el micrófono 🎤 para dictar
   - Guarda con 💾
   - Verifica que se guardó

---

## 🎯 USO DIARIO

1. **Abre la app** desde el icono
2. **Rellena el parte**
   - Escribe o usa 🎤 para dictar
3. **Guarda** con 💾
4. **Imprime/PDF** con 🖨️ cuando termines

---

## 🔄 ACTUALIZAR LA APP

Si haces cambios en los archivos:

**GitHub Pages:**
1. Ve al repositorio
2. "Upload files" → Sube archivos nuevos
3. Espera 1 minuto
4. La app se actualiza automáticamente

**Netlify:**
1. Arrastra nueva carpeta
2. Se actualiza al instante

**Servidor Local:**
- Los cambios se ven inmediatamente
- Solo recarga la página

---

## ❓ PREGUNTAS FRECUENTES

**¿Necesito Internet para usar la app?**
- Solo para la primera instalación
- Después funciona sin Internet
- El reconocimiento de voz SÍ necesita Internet

**¿Los datos se guardan?**
- Sí, en el móvil
- No se envían a ningún servidor
- Si desinstalas Chrome, se pierden

**¿Cuánto ocupa?**
- 2-3 MB aproximadamente
- Muy ligera

**¿Funciona en iPhone?**
- Sí, pero la instalación es diferente
- En Safari: Compartir → Añadir a inicio

**¿Es segura?**
- Sí, todo se guarda en tu móvil
- No hay servidores externos
- Código abierto (puedes revisarlo)

---

## 🆘 SOLUCIÓN DE PROBLEMAS

**"No aparece botón de instalar"**
→ Usa Chrome (no Firefox/Opera)
→ Asegúrate de estar en HTTPS (no HTTP)
→ Ve a Menú ⋮ → "Añadir a inicio"

**"Error al registrar Service Worker"**
→ Verifica que `service-worker.js` esté en la carpeta
→ Verifica que estés en HTTPS
→ Borra caché de Chrome

**"No funciona el micrófono"**
→ Ve a Ajustes de Android
→ Apps → Chrome → Permisos
→ Activa Micrófono

---

## 📞 SOPORTE TÉCNICO

Si tienes problemas:

1. ✅ Lee este documento completo
2. ✅ Lee el README.md
3. ✅ Verifica que todos los archivos estén presentes
4. ✅ Prueba en Chrome actualizado
5. ✅ Verifica permisos de micrófono

---

## ✅ CHECKLIST DE ARCHIVOS

Antes de subir al servidor, verifica que tengas:

```
☑ index.html
☑ manifest.json
☑ service-worker.js
☑ .htaccess (opcional)
☑ icons/
  ☑ icon-72x72.png
  ☑ icon-96x96.png
  ☑ icon-128x128.png
  ☑ icon-144x144.png
  ☑ icon-152x152.png
  ☑ icon-192x192.png
  ☑ icon-384x384.png
  ☑ icon-512x512.png
```

---

## 🎉 ¡LISTO!

Ahora tienes una app móvil profesional instalable en Android.

**Ventajas:**
- ✅ Sin Google Play Store
- ✅ Sin cuotas de desarrollador
- ✅ Actualizaciones instantáneas
- ✅ Funciona offline
- ✅ Reconocimiento de voz
- ✅ Exporta a PDF

---

**¡Disfruta tu nueva app! 📱✨**
