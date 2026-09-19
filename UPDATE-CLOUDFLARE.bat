@echo off
setlocal
cd /d "%~dp0"
title Shannan Hickey Memorial - Cloudflare Update

echo ======================================================
echo  SHANNAN HICKEY MEMORIAL - UPDATE LIVE SITE
echo ======================================================
echo.

echo [1/3] Installing/verifying dependencies...
call npm ci
if errorlevel 1 goto :fail

echo.
echo [2/3] Building the production website...
call npm run build
if errorlevel 1 goto :fail

echo.
echo [3/3] Deploying the new version...
call npx wrangler deploy --config dist/server/wrangler.json
if errorlevel 1 goto :fail

echo.
echo UPDATE COMPLETE.
echo.
pause
exit /b 0

:fail
echo.
echo UPDATE FAILED. Read the error shown above.
pause
exit /b 1
