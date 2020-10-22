# 課題 2

## 変数を console.log() で確認してみましょう

作成した変数を console.log で確認します。  
このとき、作業用ファイルの HTML をブラウザで開いてみましょう。

```js
// 未定義
let varIsUndefined;
console.log(varIsUndefined);

// null
let varIsNull = null;
console.log(varIsNull);

// 文字列型
let str = "js workshop sapporo 第1回目";
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
  hoge: "ほげ",
  piyo: "ぴよ"
};
console.log(obj);

// 関数（アロー関数）
const func = () => "関数";
console.log(func());
```
