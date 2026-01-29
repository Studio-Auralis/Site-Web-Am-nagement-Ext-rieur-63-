# Script PowerShell pour lancer le serveur de développement
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Lancement du Site Vitrine" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Demarrage du serveur Next.js..." -ForegroundColor Yellow
Write-Host "Patientez quelques secondes...`n" -ForegroundColor Yellow

# Démarrer le serveur en arrière-plan
$job = Start-Job -ScriptBlock {
    Set-Location "C:\Users\samue\Documents\Claude-code\projet-b"
    npm run dev
}

# Attendre 8 secondes que le serveur démarre
Start-Sleep -Seconds 8

# Ouvrir le navigateur
Write-Host "Ouverture du navigateur..." -ForegroundColor Green
Start-Process "http://localhost:3000"

Write-Host "`nServeur demarre sur http://localhost:3000" -ForegroundColor Green
Write-Host "Le navigateur devrait s'ouvrir automatiquement." -ForegroundColor Green
Write-Host "`nAppuyez sur CTRL+C pour arreter le serveur.`n" -ForegroundColor Yellow

# Attendre que le job se termine (garder le serveur actif)
Wait-Job $job
