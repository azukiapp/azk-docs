## image

Definem qual imagem será utilizada para levantar a instância do container. Atualmente as imagens são baixadas do [Docker](https://registry.hub.docker.com).

#### Uso:
```js
image: '[NAMESPACE/REPOSITORY:TAG]',
```

##### Exemplos:

```js
// Podemos definir tags diferentes e assim pegar versões diferentes do repositório [Azktcl](https://registry.hub.docker.com/u/azukiapp/azktcl/)
image: "azukiapp/azktcl:0.0.1",
image: "azukiapp/azktcl:0.0.2",

// Todas as configurações abaixo apontam para a mesma imagem,
// ou seja, várias tags podem apontar para a mesma imagem.
// Observe que, para as imagens oficiais do docker, não é
// necessário nem informar o namespace (library, no caso)
image: "node:0",
image: "node:0.10",
image: "node:latest",
image: "library/node:latest",  // <- library/ é opcional somente neste caso
```

