@echo off
cls

echo Lint code
call .\node_modules\.bin\eslint.cmd src\Funcs.js test\Funcs.UnitTests.js
if ERRORLEVEL == 1 goto ERROR_MODE

echo run unit tests
::node_modules\.bin\karma start --single-run
npm test

:ERROR_MODE
echo Error

:END
Echo done

