@echo off
echo.
echo ========================================
echo   Lancement du site en developpement
echo ========================================
echo.
echo Demarrage du serveur Next.js...
echo.

cd /d "%~dp0"

start "" "http://localhost:3000"
timeout /t 2 /nobreak >nul

npm run dev

pause
