#!/bin/bash

# Script para probar la PWA localmente
# Ejecuta este script y luego abre http://localhost:8000 en tu navegador

echo "========================================="
echo "  Servidor Local - Parte Diario PM PWA"
echo "========================================="
echo ""
echo "Iniciando servidor web en el puerto 8000..."
echo ""
echo "📱 Pasos para instalar en Android:"
echo ""
echo "1. Conecta tu móvil a la misma WiFi que este PC"
echo "2. En tu móvil, abre Chrome"
echo "3. Ve a esta dirección:"
echo ""

# Obtener IP local
IP=$(hostname -I | awk '{print $1}')

if [ -z "$IP" ]; then
    IP="IP-DE-TU-PC"
fi

echo "   http://$IP:8000"
echo ""
echo "4. Chrome te preguntará si quieres instalar la app"
echo "5. Pulsa 'Añadir' o 'Instalar'"
echo ""
echo "========================================="
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""
echo "Iniciando..."
echo ""

# Iniciar servidor Python
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "❌ Error: Python no está instalado"
    echo "Por favor instala Python primero"
    exit 1
fi
