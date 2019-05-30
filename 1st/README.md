# js workshop sapporo vol1

1. JavaScriptについて
2. 基本的な書き方について
3. 変数について
4. データ型について

## 1.JavaScriptについて

ブラウザで使われてる言語。最近ではサーバサイドのNode.jsが存在する

## 2.基本的な書き方について

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

### 課題1

作業用のファイルを作ってみましょう。  
index.htmlとapp.jsを作って作業環境を作ります。

#### 作業ファイルを作成

```sh
cd ~/Workspace  // 自身のワークスペースに移動
mkdir js-workshop-sapporo-vol1 // 作業するフォルダを作成
cd js-workshop-sapporo-vol1 // 作業フォルダに移動する
touch {index.html,app.js} // HTMLファイルとJSファイルを作成
```

1.作業用のHTMLファイルを作成する
2.作業用のJSファイルを作成する

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
// Strictモードを宣言しJavaScriptの危険な構文を禁止する
'use strict'
// app.jsに課題を記述する
```

## 3.変数について

変数宣言のキーワードとして `var`、`let`、`const` の3つがある。

識別子には次のルールがある。

- 半角英数字、`_`（アンダースコア）、`$`（ダラー）の組み合わせである
- ただし数字から始めることはできない
- 予約語を使うことはできない

予約語はMDNに一覧としてまとめられている。

参考URL: [予約語 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Reserved_Words)

### varについて

過去に変数の宣言で使用されていた。

関数の外で宣言された変数はグローバル変数になり、グローバル汚染してしまうので嫌われている。

```javascript
var hoge = 'ほげ';

console.log(hoge);  // 結果: ほげ
```

### let・constについて（ES2015以降）

`let`、`const` もES2015以降から使用できる変数宣言。

`var` と違い、使用できるスコープを限定できる、グローバル変数にならない、重複できないなど、セキュアに使用できる。

`const` は定数。

再代入による変更および再宣言が出来ない仕様となっている。

定数は慣例的にすべて大文字で宣言することが多い。

IE11でも使用できる。

```javascript
let fuga = 'ふが';
console.log(fuga);  // 結果: ふが

fuga = '再代入';
console.log(fuga);  // 結果: 再代入

let fuga = '再び再代入';
console.log(fuga);  // 結果: Error: Identifier 'fuga' has already been declared


const PIYO = 'ぴよ';
console.log(PIYO);  // 結果: ぴよ

PIYO = 'ぴよ';
console.log(PIYO);  // 結果: Error: Assignment to constant variable.
```

### 課題2

#### 変数を console.log() で確認してみましょう

作成した変数をconsole.logで確認します。  
このとき、作業用ファイルのHTMLをブラウザで開いてみましょう。

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

// 関数（アロー関数）
const func = () => '関数';
console.log(func());
```

## 4.データ型について

### JavaScriptの主なデータ型

| 分類 | データ型 | 概要 |
| ---- | ---- | ---- |
| 基本型 | 数値型 number | 数字を表す |
|  | 文字列型 string | シングル・ダブルクォートで囲まれた0個以上の文字の集合 |
|  | 真偽型 boolean | true or false |
|  | シンボル型 (ES2015) symbol | シンボルを表す |
|  | 特殊型 null/undefined | 値が空、未定義であることを表す |
| 参照型 | 配列 array | データの集合（各要素にはインデックス番号でアクセスできる） |
|  | オブジェクト object | データの集合（各要素には名前でアクセスできる key value） |
|  | 関数 function | 一連の処理の集合 |

#### 数値型（number）

数値型を作成するには `Number()` コンストラクタから生成（new演算子は使わない）するか、リテラルでプリミティブ値を作成する方法がある。

ベターなのはリテラルでプリミティブ値を作成する方法である。

文字列の整数をキャスト（別の型に変換）するのに `Number()` コンストラクタを使用する場合はある。

```javascript
let fromNewConstructor = new Number(1);
console.log(fromNewConstructor) // 結果: 1
console.log(typeof fromNewConstructor); // 結果: 'object'

let fromConstructor = Number(1);
console.log(fromConstructor) // 結果: 1
console.log(typeof fromConstructor); // 結果: 'number'

let fromLiteral = 1;
console.log(fromLiteral) // 結果: 1
console.log(typeof fromLiteral); // 結果: 'number'
```

`Number()` コンストラクタの引数に与えられた値が数値型に変換できない場合は `NaN` を返す。

```javascript
let fromConstructorWithArgs1 = Number('abc');
console.log(fromConstructorWithArgs1) // 結果: NaN

let fromConstructorWithArgs2 = Number('123');
console.log(fromConstructorWithArgs2) // 結果: 123
```

#### 文字列型（string）

文字列型を作成するには文字列リテラルを使用する。

`String()` コンストラクタを使って文字列を作成することも可能だが冗長なので、基本的には文字列リテラルを使用する。

文字列リテラルは `"` ダブルクォート、`'` シングルクォート、 そして、ES2015から使用可能になった `｀` バッククォートの3種類が存在する。

```javascript
let doubleQuote = "文字列";
console.log(doubleQuote);   // 結果: 文字列

let singleQuote = '文字列';
console.log(singleQuote);   // 結果: 文字列

let backQuote   = `文字列`;
console.log(backQuote);   // 結果: 文字列
```

ダブルクォートとシングルクォートは機能的に大差ないので、プロジェクトの規約に併せて使う。

バッククォートはテンプレートリテラルとも呼ばれ、ダブルとシングルには無い機能が追加されている。

バッククォートで囲われた文字列は改行をそのまま入力することが出来る。

```javascript
let multiLineText1 = `ほげ
ふが
ぴよ`;
console.log(multiLineText1);
/* 結果 ========
ほげ
ふが
ぴよ
================ */

let multiLineText2 = 'ほげ
ふが
ぴよ';
console.log(multiLineText2);
// シングルクォート（ダブルクォート）の場合はエラーが返ってくる
// 結果: Uncaught SyntaxError: Invalid or unexpected token

let multiLineText3 = 'ほげ\nふが\nぴよ';
console.log(multiLineText3);
/* 結果 ======== 
ほげ
ふが
ぴよ
================ */
```

もう一つの機能は `$` を接頭辞とした中括弧で囲うことによってリテラル内で変数が使える。

```javascript
let text = 'World!';
console.log(`Hello ${text}`); // 結果: Hello World!
```

### 課題4

#### 変数の型を console.log() と typeof演算子で確認してみましょう

定義した変数の型を確認してみましょう。

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

// 関数（アロー関数）
const func = () => '関数';
console.log(typeof func);
```

`null` が `object` と返ってきたと思います。

これはJS特有の仕様バグです…。

参考URL: [The history of “typeof null”](http://2ality.com/2013/10/typeof-null.html)
 
そして配列も `object` と返ってきたと思います。

そもそも `typeof` 演算子はオブジェクトもしくはプリミティブ型を返す式になるので、 `null` を除くプリミティブ型以外はすべて `object` が返ってくる仕様となっています。

参考URL: [typeof - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof#Syntax)
