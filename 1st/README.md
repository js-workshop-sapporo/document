# js workshop sapporo 第1回目

1. JavaScriptについて
2. 基本的な書き方について
3. 変数について
4. データ型について


## JavaScriptについて

ブラウザで使われてる言語。最近ではサーバサイドのNode.jsが存在する

## 基本的な書き方について

### 記述場所

1. `<head>` 要素の配下
2. `<body>` 要素の配下（任意の位置）
3. `<body>` 要素の配下（`</body>`閉じタグの直前）

基本的にスクリプトの配置場所は、3が推奨されています。<br>
3でまかなえないケースのみ1をしようします。<br>
関数定義の `<script>` 要素を先に記述しなければならないというルールがあるためです。<br>
`<body>`要素の配下で呼び出す必要がある関数は、`<head>`要素の配下で事前に読み込んでおく必要があります。<br>
Google Analyticsなどのコードは `<head>` 配下に埋め込むことが一般的です。<br>
また、スクリプトからスタイルシートを出力するような状況でも1を仕様することがあります。<br>
1は外部ウィジェットのコードを埋め込む状況以外は使用することはほとんどありません。

課題では3で進めるようにしていきます。

## 課題

### 作業ファイルを作成

```sh
cd ~/Workspace  // 自身のワークスペースに移動
mkdir js-workshop-sapporo-vol1 // 作業するフォルダを作成
cd js-workshop-sapporo-vol1 // 作業フォルダに移動する
touch {index.html,app.js} // HTMLファイルとJSファイルを作成
```

作業用のHTMLを作成する

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>JS Workshop Sapporo vol 1</title>
</head>
<body>
<h1>JS Workshop Sapporo vol 1</h1>
<script src="app.js"></script>
</body>
</html>
```

```js
// app.jsに課題を記述する
```

### 変数について

#### 変数を console.log() で確認してみましょう

```js
// 未定義
let varIsUndefined;
console.log(varIsUndefined);

// null
let varIsNull = null;
console.log(varIsNull);

// 文字列型
let str = 'js workshop sapporo 第1回目';
console.log(str);

// 数値型
let num = 123;
console.log(num);

// 真偽値
let bool = true;
console.log(bool);

// 配列
let array = [1, 2, 3];
console.log(array);

// オブジェクト
let obj = {
  hoge: 'ほげ',
  piyo: 'ぴよ'
};
console.log(obj);

// 関数
const func = () => '関数';
console.log(func());
```

### データ型について

#### プリミティブデータ型

- Boolean
- Null
- Undefined
- Number
- String
- Symbol (ECMAScript 6 の新データ型)

#### それ以外の型

- Object

#### 変数の型を console.log() と typeof演算子で確認してみましょう

```js
// 未定義
let varIsUndefined;
console.log(typeof varIsUndefined);

// null
let varIsNull = null;
console.log(typeof varIsNull);

// 文字列型
let str = 'js workshop sapporo 第1回目';
console.log(typeof str);

// 数値型
let num = 123;
console.log(typeof num);

// 真偽値
let bool = true;
console.log(typeof bool);

// 配列
let array = [1, 2, 3];
console.log(typeof array);

// オブジェクト
let obj = {
  hoge: 'ほげ',
  piyo: 'ぴよ'
};
console.log(typeof obj);

// 関数
const func = () => '関数';
console.log(typeof func);
```

`null` が `object` と返ってきたと思います。

これはJS特有の仕様バグです…。

参考URL: [The history of “typeof null”](http://2ality.com/2013/10/typeof-null.html)
 
そして配列も `object` と返ってきたと思います。

そもそも `typeof` 演算子はオブジェクトもしくはプリミティブ型を返す式になるので、 `null` を除くプリミティブ型以外はすべて `object` が返ってくる仕様となっています。

参考URL: [typeof - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof#Syntax)
