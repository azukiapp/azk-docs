#!/usr/bin/env bash

azk nvm node_modules/gulp/bin/gulp.js gitbook-build
azk nvm node_modules/gulp/bin/gulp.js del-wrong-gitbook-folder
azk nvm node_modules/gulp/bin/gulp.js replace-font-path
azk nvm node_modules/gulp/bin/gulp.js deploy
