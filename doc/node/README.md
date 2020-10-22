# Node.js インストール手順

## インストーラを使う（初級者向け）

手っ取り早く Node.js を動かしたい方は[公式サイト](https://nodejs.org/ja/)から LTS 版をダウンロードしてください。

インストール手順は下記サイトを参考にしてください。  
Windows 向けのページになりますが Mac でもおおむね同じです。

- [Node.js をインストールする - Qiita](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)

## バージョン管理できるようする

Mac の場合、 `nodenv` などのツールを使いましょう。

- [Mac に Node.js をインストール（anyenv + nodenv 編） - Qiita](https://qiita.com/kyosuke5_20/items/eece817eb283fc9d214f)

Windows の場合は `nodist` がおすすめです。

- [nodist で Node.js をバージョン管理 - Qiita](https://qiita.com/satoyan419/items/56e0b5f35912b9374305)
- [Windows 環境で Node.js のバージョンを管理（npm も）｜ WEBMAN](https://webman-japan.com/win-node-npm-ver-manage/)

## Node.js がインストールされたか確認する

Mac の場合はターミナル。  
Windows の場合はコマンドプロンプトや PowerShell、Windows ターミナルを使って下記コマンドを叩いてください。

```shell
$ node -v
v12.18.0
```
