# Azk documentation

### prepare
```sh
azk nvm npm install
azk nvm node_modules/gitbook/bin/gitbook.js install content
azk nvm node_modules/gitbook/bin/gitbook.js build   content
```

### start server
```sh
azk nvm node_modules/gitbook/bin/gitbook.js serve content
```

open: http://localhost:4000

### deploy stage
```sh
AWS_BUCKET=azk-docs-stage ./deploy.sh
```

### deploy production
```sh
AWS_BUCKET=docs.azk.io ./deploy.sh
```
