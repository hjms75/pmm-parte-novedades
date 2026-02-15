# 🎤 CONVERSIÓN AUTOMÁTICA DE NÚMEROS
## Reconocimiento de Voz - Números en Dígitos

---

## ✨ NUEVA FUNCIONALIDAD

La aplicación PWA ahora convierte **automáticamente** los números que dices en palabras a sus equivalentes numéricos.

---

## 📝 ¿CÓMO FUNCIONA?

Cuando usas el micrófono 🎤 para dictar, la app detecta cuando dices números y los convierte automáticamente:

### **Ejemplos de conversión:**

| **Dices:** | **Se escribe:** |
|------------|-----------------|
| "uno" | 1 |
| "dos" | 2 |
| "diez" | 10 |
| "veinticinco" | 25 |
| "treinta y cinco" | 35 |
| "cuarenta y dos" | 42 |
| "cien" | 100 |
| "doscientos" | 200 |
| "mil" | 1000 |

---

## 🎯 CASOS DE USO

### **Ejemplo 1: Número de agentes**
```
Usuario dice: "Agentes números uno dos tres cuatro cinco"
App escribe: "AGENTES NÚMEROS 1 2 3 4 5"
```

### **Ejemplo 2: Dirección**
```
Usuario dice: "Calle Gran Vía número veinticinco"
App escribe: "CALLE GRAN VÍA NÚMERO 25"
```

### **Ejemplo 3: Hora**
```
Usuario dice: "A las dieciocho horas treinta minutos"
App escribe: "A LAS 18 HORAS 30 MINUTOS"
```

### **Ejemplo 4: Descripción de incidencia**
```
Usuario dice: "Tres vehículos involucrados en la intersección"
App escribe: "3 VEHÍCULOS INVOLUCRADOS EN LA INTERSECCIÓN"
```

### **Ejemplo 5: Cantidad de denuncias**
```
Usuario dice: "Siete denuncias de tráfico"
App escribe: "7 DENUNCIAS DE TRÁFICO"
```

---

## 📊 NÚMEROS SOPORTADOS

### **Unidades (0-9):**
- cero → 0
- uno/una → 1
- dos → 2
- tres → 3
- cuatro → 4
- cinco → 5
- seis → 6
- siete → 7
- ocho → 8
- nueve → 9

### **Del 10 al 29:**
- diez → 10
- once → 11
- doce → 12
- trece → 13
- catorce → 14
- quince → 15
- dieciséis → 16
- diecisiete → 17
- dieciocho → 18
- diecinueve → 19
- veinte → 20
- veintiuno → 21
- veintidós → 22
- veintitrés → 23
- veinticuatro → 24
- veinticinco → 25
- veintiséis → 26
- veintisiete → 27
- veintiocho → 28
- veintinueve → 29

### **Decenas (30-90):**
- treinta → 30
- cuarenta → 40
- cincuenta → 50
- sesenta → 60
- setenta → 70
- ochenta → 80
- noventa → 90

### **Números compuestos:**
- "treinta y uno" → 31
- "treinta y dos" → 32
- "cuarenta y cinco" → 45
- "cincuenta y tres" → 53
- "sesenta y siete" → 67
- "setenta y nueve" → 79
- "ochenta y cuatro" → 84
- "noventa y ocho" → 98

### **Centenas:**
- cien/ciento → 100
- doscientos/doscientas → 200
- trescientos/trescientas → 300
- cuatrocientos/cuatrocientas → 400
- quinientos/quinientas → 500
- seiscientos/seiscientas → 600
- setecientos/setecientas → 700
- ochocientos/ochocientas → 800
- novecientos/novecientas → 900

### **Números complejos:**
- "ciento cinco" → 105
- "ciento veintitrés" → 123
- "doscientos cincuenta" → 250
- "quinientos ochenta y dos" → 582

### **Miles:**
- mil → 1000
- "dos mil" → 2000
- "cinco mil" → 5000
- "mil quinientos" → 1500

---

## 💡 CONSEJOS DE USO

### **Para mejores resultados:**

✅ **Di los números claramente**
- Pronuncia cada número con claridad
- Haz una pausa breve entre números diferentes

✅ **Usa la forma natural**
- Puedes decir "veinticinco" o "veinte y cinco"
- Ambas formas funcionan

✅ **Números en secuencia**
- Para números como agentes: "uno dos tres cuatro"
- Se convertirá a: "1 2 3 4"

✅ **Números en contexto**
- "Calle número treinta y cinco" → "CALLE NÚMERO 35"
- El sistema mantiene el contexto

---

## 🔄 FUNCIONAMIENTO TÉCNICO

### **Proceso automático:**

1. **Hablas** por el micrófono 🎤
2. **Chrome** transcribe tu voz a texto
3. **App detecta** números en palabras
4. **Convierte** automáticamente a dígitos
5. **Muestra** el resultado en tiempo real
6. **Mantiene** mayúsculas según el campo

### **Conversión inteligente:**

- ✅ Solo convierte palabras completas (no partes de palabras)
- ✅ Respeta el contexto de la frase
- ✅ Mantiene formato de mayúsculas
- ✅ Funciona en tiempo real (ves la conversión mientras hablas)

---

## 📋 EJEMPLOS PRÁCTICOS

### **Rellenando el parte diario:**

**Campo: AGENTES NÚMEROS**
```
Dices: "uno dos tres cuatro cinco seis siete"
Escribe: "1 2 3 4 5 6 7"
```

**Campo: LUGAR**
```
Dices: "Calle de Alcalá número ciento veintidós"
Escribe: "CALLE DE ALCALÁ NÚMERO 122"
```

**Campo: INCIDENCIA**
```
Dices: "Vehículo matrícula cuatro cinco seis siete ABC"
Escribe: "VEHÍCULO MATRÍCULA 4 5 6 7 ABC"
```

```
Dices: "Accidente con tres vehículos a las dieciocho horas"
Escribe: "ACCIDENTE CON 3 VEHÍCULOS A LAS 18 HORAS"
```

```
Dices: "Se levantaron cinco denuncias en total"
Escribe: "SE LEVANTARON 5 DENUNCIAS EN TOTAL"
```

---

## 🎓 CASOS ESPECIALES

### **Números con decimales:**
```
"tres coma cinco" → "3,5"
"veinte punto ocho" → "20,8"
```

### **Rangos de números:**
```
"Del uno al diez" → "DEL 1 AL 10"
"Entre veinte y treinta" → "ENTRE 20 Y 30"
```

### **Fechas:**
```
"día quince del doce" → "DÍA 15 DEL 12"
"dos mil veinticuatro" → "2024"
```

### **Horas:**
```
"las catorce treinta" → "LAS 14 30"
"dieciocho horas quince minutos" → "18 HORAS 15 MINUTOS"
```

---

## ⚠️ LIMITACIONES

### **No se convierten:**

❌ **Números ordinales**
- "primero", "segundo", "tercero" → Se mantienen como texto
- Razón: Tienen significado diferente a los cardinales

❌ **Números dentro de palabras**
- "veintiuno" como parte de otra palabra se mantiene
- Solo se convierten números completos

❌ **Expresiones no numéricas**
- "Un momento" → NO se convierte a "1 momento"
- "Una vez" → NO se convierte a "1 vez"
- El sistema detecta el contexto

---

## 🔧 CONFIGURACIÓN

### **No requiere configuración**

- ✅ Funciona automáticamente
- ✅ Siempre activado
- ✅ No necesita ajustes
- ✅ Compatible con todos los campos

---

## 🆕 NOVEDADES DE ESTA VERSIÓN

### **v1.1.0 - Conversión de números**

✨ **Nuevo:** Conversión automática de números en palabras a dígitos
✨ **Nuevo:** Soporte para números compuestos (treinta y cinco → 35)
✨ **Nuevo:** Conversión en tiempo real mientras hablas
✨ **Mejorado:** Mantiene formato de mayúsculas
✨ **Mejorado:** Detección inteligente de contexto

---

## 📱 COMPATIBILIDAD

### **Funciona en:**

- ✅ Android 5.0+ con Chrome
- ✅ iOS 14.3+ con Safari
- ✅ PC con Chrome/Edge
- ✅ Todos los campos de texto con micrófono 🎤

---

## 💬 PREGUNTAS FRECUENTES

**¿Puedo desactivar esta función?**
- No, está siempre activa para mayor comodidad

**¿Funciona sin Internet?**
- El reconocimiento de voz necesita Internet
- La conversión de números funciona offline

**¿Qué pasa si digo un número que no está en la lista?**
- Se escribe tal como lo reconoce Chrome
- Cubre del 0 al 999 y miles

**¿Funciona con números muy grandes?**
- Números hasta 9999 funcionan perfectamente
- Para números mayores, es mejor dictarlos dígito por dígito

**¿Respeta mi pronunciación regional?**
- Sí, funciona con variantes españolas
- "Dieciséis" o "dieciseis" funcionan igual

---

## 🎯 RESUMEN

### **Antes:**
```
Dices: "Calle número veinticinco"
Aparecía: "CALLE NÚMERO VEINTICINCO"
Tenías que: Corregir manualmente a "25"
```

### **Ahora:**
```
Dices: "Calle número veinticinco"
Aparece: "CALLE NÚMERO 25"
¡Listo! ✅
```

---

**¡Disfruta de la nueva funcionalidad! 🎤✨**

*Actualización v1.1.0 - Conversión automática de números*
