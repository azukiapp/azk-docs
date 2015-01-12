## azk shell
Initializes a shell with instance context or runs a arbitrary command

#### Opções:

- `-T`                    Desabilita a aloção do pseudo-tty (padrão: falso)
- `-t`                    Força a aloção do pseudo-tty (padrão: falso)
- `--remove, --rm, -r`    Remove as instâncias do shell ao finalizar o comando ou shell (padrão: verdadeiro)
- `--image="", -i`        Define a imagem na qual o shell/comando será executado
- `--command="", -c`      Executa um comando especifico
- `--shell`               Caminho para o binário do shell
- `--cwd="", -C`          Diretório padrão
- `--mount="", -m, -mm`   Aponta para um montagem adicional (ex:./origin:/azk/target) - multiples supported
- `--env="", -e, -ee`     Variável de ambiente adicional - suporta multiplas
- `--verbose, -v`         Exibe detalhes sobre a execução do comando (padrão: falso)

#### Uso:

    $ azk [options] shell [options] [system]

#### Exemplos:

```bash
# Inicia o sistema padrão do Azkfile.js utilizando o shell /bin/bash
$ azk shell --shell /bin/bash

# Inicia o sistema [system_name] montando a pasta / em /azk/root
#   dentro do container e definindo a variável de ambiente RAILS_ENV=dev
$ azk shell [system_name] --mount /=/azk/root -e RAILS_ENV=dev

# Executa o comando `ls` dentro do sistema [system_name]
$ azk shell [system_name] -c "ls -l /"

# Inicia um container a partir da imagem `azukiapp/azktcl:0.0.2` montando
#  executando o comando /bin/bash e forçando a aloção do pseudo-tty
$ azk shell --image azukiapp/azktcl:0.0.2 -t -c "/bin/bash"
```
