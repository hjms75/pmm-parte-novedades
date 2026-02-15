@echo off
REM Script para probar la PWA localmente en Windows

echo =========================================
echo   Servidor Local - Parte Diario PM PWA
echo =========================================
echo.
echo Iniciando servidor web en el puerto 8000...
echo.
echo Pasos para instalar en Android:
echo.
echo 1. Conecta tu movil a la misma WiFi que este PC
echo 2. En tu movil, abre Chrome
echo 3. Ve a esta direccion:
echo.
echo    http://TU-IP:8000
echo.
echo    (Reemplaza TU-IP con la IP de este PC)
echo.
echo 4. Chrome te preguntara si quieres instalar la app
echo 5. Pulsa 'Anadir' o 'Instalar'
echo.
echo =========================================
echo.
echo Presiona Ctrl+C para detener el servidor
echo.
echo Iniciando...
echo.

REM Intentar iniciar servidor Python
python -m http.server 8000

pause
