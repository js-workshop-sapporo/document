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
## 課題4

`console.log` で関数を実行するたびにカウントアップする関数を作ってください。

```javascript
function getCount() {
  let num = 0;
  function count() {
    return num++;
  }
  return count;
}
const value = getCount()
console.log( value() );  // 1
console.log( value() );  // 2
```

## 課題5
## 課題6
