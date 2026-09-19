@echo off
setlocal
cd /d "%~dp0"
title Shannan Hickey Memorial - Secure Forms Setup

echo ======================================================
echo  SECURE CONTACT / REGISTRATION FORM SETUP
echo ======================================================
echo.
echo BEFORE CONTINUING:
echo  1. The site must have been deployed at least once.
echo  2. Cloudflare Turnstile must be created for the site.
echo  3. Cloudflare Email Routing must be configured for shannanhickeymemorial.com.
echo  4. The destination inbox must be verified in Cloudflare.
echo.

if not exist "dist\server\wrangler.json" (
  echo Production config was not found.
  echo Run DEPLOY-CLOUDFLARE.bat first.
  pause
  exit /b 1
)

echo This setup uses Wrangler's own secret prompt.
echo Nothing you paste is written to a temporary file by this script.
echo.

echo [1/3] TURNSTILE SITE KEY
call npx wrangler secret put TURNSTILE_SITE_KEY --config dist/server/wrangler.json
if errorlevel 1 goto :fail

echo.
echo [2/3] TURNSTILE SECRET KEY
call npx wrangler secret put TURNSTILE_SECRET_KEY --config dist/server/wrangler.json
if errorlevel 1 goto :fail

echo.
echo [3/3] PRIVATE DESTINATION INBOX
call npx wrangler secret put FORM_RECIPIENT --config dist/server/wrangler.json
if errorlevel 1 goto :fail

echo.
echo ======================================================
echo  SECURE FORM SETTINGS SAVED
echo ======================================================
echo.
echo The Turnstile secret and destination inbox now live in Cloudflare.
echo The automated form sends FROM forms@shannanhickeymemorial.com.
echo The visitor address is used only as Reply-To.
echo.
echo Open the live Contact page and send one real test submission.
echo.
pause
exit /b 0

:fail
echo.
echo Cloudflare rejected one of the settings. Read the error above.
echo No secret values were saved in a local file by this script.
pause
exit /b 1
