# js workshop sapporo 第1回目

1. JavaScriptについて
2. 基本的な書き方について
3. 変数について
4. データ型について


## JavaScriptについて

ブラウザで使われてる言語。最近ではサーバサイドのNode.jsが存在する

## 基本的な書き方について

### 記述場所

- <head>の配下

## 課題

### 変数について

#### 変数を console.log() で確認してみましょう

```javascript
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

```javascript
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
