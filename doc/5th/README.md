# js workshop sapporo vol5

DOM について学ぶ回です。

ローカルサーバとして `npx @js-primer/local-server` を利用して作っていきます。
`task/source` にコマンドラインでアクセスして上記のコマンドを使うことでブラウザで `localhost:3000` で HTML を表示させることができます。  
Node.js を PC に入っている方は先にインストールしておきましょう。

Node.js のインストールについては[こちら](https://github.com/js-workshop-sapporo/draft-document/blob/feature/5th/doc/node/README.md)をご確認ください。

## DOM について

Web 制作をする上で DOM と JS は切って離せない関係と言えるでしょう。  
課題に入る前に DOM とは何なのかをざっくりと知っていただくために下記を一読しておくことをおすすめします。

### DOM とは？

DOM とは `Document Object Model` の略で、Web 上の文章コンテンツを構造化したオブジェクトです。  
オブジェクトについては JavaScript の基本となる知識となりますので MdN の下記ページを確認してください。

- [JavaScript オブジェクトの基本](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Basics)

DOM は Document Object Model という名前の略称で、 HTML や XML をプログラミング言語（JS など）で扱うための API となります。  
その名のとおり、文書に含まれる要素、属性をオブジェクトとみなし、文書というのはオブジェクトの集合体だと考えることができます。  
文書を構成するオブジェクトは、要素ノード、属性ノード、テキストノードなどと呼びます。  
DOM にはこれらのノードを取得、追加、置換、削除ができる API を提供しています。  
たとえば JS で DOM にアクセスして、テキストやスタイルを操作できます。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JSWSP Vol.5</title>
  </head>
  <body>
    <h1 id="title">JSWSPについて</h1>
    <p>開催日は<strong>2020/11/13</strong>です！</p>
  </body>
</html>
```

```javascript
// id="title" の要素を取得する
const title = document.getElementById("title");
// <h1 id="title">JSWSP Vol.5 Online について</h1> に更新される
title.innerText = "JSWSP Vol.5 Online について";
// console.dir()を使えばElementがどんなプロパティを持っているか階層的なリストで確認できます
console.dir(title);
```

また、DOM はドキュメントを文章ツリーとして扱います。
したがって、上記のような html の場合、次のようなツリー構造と解釈されます。

![ドキュメントツリー](./document_tree.png)
