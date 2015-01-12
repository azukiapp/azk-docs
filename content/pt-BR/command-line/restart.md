## azk restart
Pára todas instâncias dos sistemas especificados no `Azkfile.js` atual ou aquele especificado e inicia novamente. Mantém o número de instâncias atual, porém, caso ocorra algum erro durante a reinicialização, todos os sistemas serão derrubados.

#### Opções:

- `--verbose, -v, -vv`    Aumenta o nível de detalhes (padrão: falso) - suporta múltiplos
- `--reprovision, -R`     Força o reprovisionamento antes de reiniciar a(s) instância(s) do sistema(s) (padrão: falso)

#### Uso:

    $ azk [options] restart [options] [system]

#### Exemplos:

```sh
$ azk restart -R node010

azk: ↓ stopping `node010` system, 2 instances...
azk: ↑ starting `node010` system, 2 new instances...
azk: ✓ checking `node:0.10` image...
azk: ↻ provisioning `node010` system...
azk: ◴ waiting start `node010` system, try connect port http/tcp...
azk: ◴ waiting start `node010` system, try connect port http/tcp...

┌───┬─────────┬────────────┬────────────────────────┬────────────────────────────┬───────────────────┐
│   │ System  │ Instancies │ Hostname               │ Instances-Ports            │ Provisioned       │
├───┼─────────┼────────────┼────────────────────────┼────────────────────────────┼───────────────────┤
│ ↑ │ node010 │ 2          │ http://node010.azk.dev │ 2-http:49166, 1-http:49165 │ a few seconds ago │
└───┴─────────┴────────────┴────────────────────────┴────────────────────────────┴───────────────────┘
```
