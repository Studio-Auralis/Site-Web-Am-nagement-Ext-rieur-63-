@echo off
echo ========================================
echo Creation des assets pour portfolio
echo ========================================
echo.

:: Demarrer le serveur Next.js en arriere-plan
echo [1/3] Demarrage du serveur de dev...
start /B cmd /c "npm run dev > nul 2>&1"

:: Attendre que le serveur demarre
echo [2/3] Attente du demarrage (10 secondes)...
timeout /t 10 /nobreak > nul

echo [3/3] Le serveur est pret sur http://localhost:3000
echo.
echo Vous pouvez maintenant :
echo - Prendre des screenshots avec Playwright
echo - Enregistrer une video de demo
echo - Tester le site complet
echo.
echo Appuyez sur une touche pour arreter le serveur...
pause > nul

:: Arreter tous les processus node
taskkill /F /IM node.exe > nul 2>&1
echo Serveur arrete.
