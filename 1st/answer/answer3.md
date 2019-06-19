# 課題3の解答

## 変数の型を console.log() と typeof演算子で確認してみましょう

```js
// 未定義
let varIsUndefined;
console.log(typeof varIsUndefined); // undefined

// null
let varIsNull = null;
console.log(typeof varIsNull);  // object

// 文字列型
let str = 'js workshop sapporo 第1回目';
console.log(typeof str);  // string

// 数値型
let num = 123;
console.log(typeof num);  // number

// 真偽値
let bool = true;
console.log(typeof bool); // boolean

// 配列
let array = [1, 2, 3];
console.log(typeof array);  // object

// オブジェクト
let obj = {
  hoge: 'ほげ',
  piyo: 'ぴよ'
};
console.log(typeof obj);  // object

// 関数（アロー関数）
const func = () => '関数';
console.log(typeof func);  // function
```

`null` が `object` と返ってきたと思います。

これはJS特有の仕様バグです…。

参考URL: [The history of “typeof null”](http://2ality.com/2013/10/typeof-null.html)
 
そして配列も `object` と返ってきたと思います。

そもそも `typeof` 演算子はオブジェクトもしくはプリミティブ型を返す式になるので、 `null` を除くプリミティブ型以外はすべて `object` が返ってくる仕様となっています。

参考URL: [typeof - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/typeof#Syntax)

### Topics

配列の型を判定する場合は、以下のようにtoStringでcallすると[object Array]を返すことが可能になります。  
他にもNullも[object Null]と判定します。

```
var array = ['ぴよ', 'ふが', 'はー']
var toString = Object.prototype.toString
toString.call(array)  // [object Array]

// Nullの型判定
toSting.call(null)  // [object Null]
```