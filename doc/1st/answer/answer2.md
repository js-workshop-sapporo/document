# 課題 2 の解答

## 変数を console.log() で確認してみましょう

```js
// 未定義
let varIsUndefined;
console.log(varIsUndefined); // undefined

// null
let varIsNull = null;
console.log(varIsNull); // null

// 文字列型
let str = "js workshop sapporo 第1回目";
console.log(str); // 'js workshop sapporo 第1回目'

// 数値型
let num = 123;
console.log(num); // 123

// 真偽値
let bool = true;
console.log(bool); // true

// 配列
let array = [1, 2, 3];
console.log(array); // Array(3)

// オブジェクト
let obj = {
  hoge: "ほげ",
  piyo: "ぴよ"
};
console.log(obj); // Object

// 関数（アロー関数）
const func = () => "関数";
console.log(func()); // '関数'
```
