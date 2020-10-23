# js workshop sapporo vol5

DOM について学ぶ回です。

ローカルサーバとして `npx @js-primer/local-server` を利用して作っていきます。
`task/source` にコマンドラインでアクセスして上記のコマンドを使うことでブラウザで `localhost:3000` で HTML を表示させることができます。  
Node.js を PC に入っている方は先にインストールしておきましょう。

Node.js のインストールについては[こちら](https://github.com/js-workshop-sapporo/draft-document/blob/feature/5th/doc/node/README.md)をご確認ください。

## DOM について

Web 制作をする上で DOM と JS は切って離せない関係といえるでしょう。  
課題に入る前に DOM とは何なのかをざっくりと知っていただくために下記を一読しておくことをおすすめします。

### DOM とは？

DOM とは `Document Object Model` の略で、Web 上の文章コンテンツを構造化したオブジェクトです。  
オブジェクトについては JavaScript の基本となる知識となりますので MdN の下記ページを確認してください。

- [JavaScript オブジェクトの基本](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Basics)

DOM は HTML や XML をプログラミング言語（JS など）で扱うためのインタフェースとなります。  
たとえば JS で DOM にアクセスして、テキストやスタイルを操作できます。

```html
<h1 id="title">タイトル</h1>
```

```javascript
// id="title" の要素を取得する
const title = document.getElementById("title");
// <h1 id="title">タイトルを変更しました</h1> に更新される
title.innerText = "タイトルを変更しました";
// console.dir()を使えばElementがどんなプロパティを持っているか階層的なリストで確認できます
console.dir(title);
```
