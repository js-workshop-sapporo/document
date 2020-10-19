# js workshop sapporo vol5

DOMについて学ぶ回です。

ローカルサーバとして `npx @js-primer/local-server` を利用して作っていきます。
`task/source` にコマンドラインでアクセスして 上記のコマンドを使うことでブラウザで `localhost:3000` でHTMLを表示させることができます。  
Node.jsをパソコンに入ってる方は先にインストールしておきましょう。

## Node.jsインストール手順

### インストーラーを使う（初級者向け）

手っ取り早くNode.jsを動かしたい方は[公式サイト](https://nodejs.org/ja/)からLTS版をダウンロードしてください。

インストール手順は下記サイトを参考にしてください。  
Windows向けのページになりますがMacでも概ね同じです。

- [Node.jsをインストールする - Qiita](https://qiita.com/sefoo0104/items/0653c935ea4a4db9dc2b)

### バージョン管理できるようする

Macの場合、 `nodenv` などのツールを使いましょう。

- [MacにNode.jsをインストール（anyenv + nodenv編） - Qiita](https://qiita.com/kyosuke5_20/items/eece817eb283fc9d214f)

Windowsの場合は `nodist` がおすすめです。

- [nodistでNode.jsをバージョン管理 - Qiita](https://qiita.com/satoyan419/items/56e0b5f35912b9374305)
- [Windows環境で Node.js のバージョンを管理（npmも）｜WEBMAN](https://webman-japan.com/win-node-npm-ver-manage/)

### Node.jsがインストールされたか確認する

Macの場合はターミナル。  
Windowsの場合はコマンドプロンプトやPowerShell、Windows ターミナルを使って下記コマンドを叩いてください。

```shell
$ node -v
v12.18.0
```

## DOMについて

Web制作をする上でDOMとJSは切って離せない関係と言えるでしょう。  
課題に入る前にDOMとは何なのかをざっくりと知っていただくために下記を一読しておくことをおすすめします。

### DOMとは？ 

DOMとは `Document Object Model` の略で、ウェブ上の文章コンテンツを構造化したオブジェクトです。  
オブジェクトについてはJavaScriptの基本となる知識となりますのでMdNの下記ページを確認してください。

- [JavaScript オブジェクトの基本](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Basics)

DOMはHTMLやXMLをプログラミング言語（JSなど）で扱うためのインターフェイスとなります。  
たとえばJSでDOMにアクセスして、テキストやスタイルを操作することが可能です。