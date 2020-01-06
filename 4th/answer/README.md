## 課題1

引数を使い実行ごと違う文字列が出力する関数を作ってください。出力結果は `console.log` を使用してください。

```javascript
function getMessage(text) {
  return console.log(text);
}
getMessage('Welcome 関数');
getMessage('js workshop sapporo vol4');
```

## 課題2

上記の配列から最大値と最小値を返す関数を代入分割を使い `max` と `min` で出力するように関数を作ってください。出力結果は `console.log` を使用してください。

```javascript
const numberList = [1000, 423, 544, 1232, 2, 6];
const getMaxMin = (...nums) => {
  return [Math.max(...nums), Math.min(...nums)];
};
const [max, min] = getMaxMin(...numberList);
console.log(max);  // 1232
console.log(min);  // 2
```

## 課題3

`console.log` で関数を実行するたびにカウントアップする関数を作ってください。  
クロージャを利用することでカウントアップする関数を作ることができます。

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
