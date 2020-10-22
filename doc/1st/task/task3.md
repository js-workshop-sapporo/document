# 課題 3

## 変数の型を console.log() と typeof 演算子で確認してみましょう

定義した変数の型を確認してみましょう。

```js
// 未定義
let varIsUndefined;
console.log(typeof varIsUndefined);

// null
let varIsNull = null;
console.log(typeof varIsNull);

// 文字列型
let str = "js workshop sapporo 第1回目";
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
  hoge: "ほげ",
  piyo: "ぴよ"
};
console.log(typeof obj);

// 関数（アロー関数）
const func = () => "関数";
console.log(typeof func);
```
