#!/usr/bin/env bash
echo == 1. Install JSDoc package ==
npm install jsdoc --save-dev
echo == 2. Generate documentation ==
./node_modules/jsdoc/jsdoc.js change.js
echo == 3. Open documentaion via browser ==
open ./out/global.html