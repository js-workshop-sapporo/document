## 課題1

`console.log` に `Welcome 関数` の文字列を出力する関数を作ってください。

```javascript
function getMessage(text) {
  return console.log(text);
}
getMessage('Welcome 関数');
```

## 課題2
## 課題3

`console.log` で関数を実行するたびにカウントアップする関数を作ってください。

```javascript
function getCount() {
  let num = 0;
  function count() {
    num++;
    return num;
  }
  return count;
}
const value = getCount()
console.log( value() );  // 1
console.log( value() );  // 2
```

## 課題4

`x` 倍できる関数を作ってください。  
クロージャを利用することでパラメータの異なる複数の関数を生成できます。

```javascript
const makeMultiply = (x) => {
  return (y) => {
    return x * y;
  };
}
const multi2 = makeMultiply(2);  // 2倍
const multi10 = makeMultiply(10);  // 10倍
console.log(multi2(3));  // 6
console.log(multi10(3));  // 30
```

## 課題5
## 課題6
