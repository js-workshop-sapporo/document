# js workshop sapporo vol2

1. 条件分岐課題
2. 条件分岐解答例

## 条件分の基本

### if...else 文

```javascript
if (condition) {
  // condition が true の場合
} else {
  // condition が false の場合
}
```

### else if文

```javascript
if (condition) {
  // condition が true の場合
} else if (condition_2) {
  // condition は false だが statement_2 が true の場合
} else {
  // condition も condition_2 両方 false の場合
}
```

### falseと評価される値

- `false`
- `undefined`
- `null`
- `0`
- `NaN`
- 空の文字列 (`''`)

上記以外の、オブジェクトを含むすべての値は、条件文に渡されると `true` に評価されます。

参考: [制御フローとエラー処理 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
