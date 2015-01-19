@echo off
echo list=[ > list.js
for /f "delims=" %%i in ('dir img /B /A-D') do echo ,"%%i" >> list.js
echo ]; >> list.js
REM echo "%output%" > list.js
rem echo " > list.js
rem dir img /B /A-D >> list.js
rem echo " >> list.js