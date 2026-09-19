@echo off
setlocal
cd /d "%~dp0"
title Shannan Hickey Memorial - Cloudflare Deploy

echo ======================================================
echo  SHANNAN HICKEY MEMORIAL - CLOUDFLARE DEPLOY
echo ======================================================
echo.

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed.
  echo Install Node.js 22 LTS or newer from https://nodejs.org/
  pause
  exit /b 1
)

echo [1/4] Installing project dependencies...
call npm ci
if errorlevel 1 goto :fail

echo.
echo [2/4] Signing in to Cloudflare...
echo A browser window may open. Approve the Cloudflare login.
call npx wrangler login
if errorlevel 1 goto :fail

echo.
echo [3/4] Building the production website...
call npm run build
if errorlevel 1 goto :fail

echo.
echo [4/4] Deploying to Cloudflare Workers...
call npx wrangler deploy --config dist/server/wrangler.json
if errorlevel 1 goto :fail

echo.
echo ======================================================
echo  DEPLOYMENT COMPLETE
echo ======================================================
echo.
echo Cloudflare will show the temporary workers.dev address above.
echo.
echo IMPORTANT: the secure form still needs its Cloudflare secrets.
echo Next run SETUP-SECURE-FORMS.bat after Turnstile and Email Service are ready.
echo Then attach shannanhickeymemorial.com in the Cloudflare dashboard.
echo See SECURE-FORMS-SETUP.txt and CLOUDFLARE-SETUP.txt for the exact clicks.
echo.
pause
exit /b 0

:fail
echo.
echo DEPLOYMENT FAILED. Read the error shown above.
echo No domain changes have been made by this script.
pause
exit /b 1
