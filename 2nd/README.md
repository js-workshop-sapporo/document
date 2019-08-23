# js workshop sapporo vol2

1. 条件分岐課題
2. 条件分岐解答例

## 演算子

[比較演算子 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)

### 比較演算子

左辺/右辺の値を比較して、その結果をtrue/false（真偽値）として返します。  
ifやdo...whileのような条件分岐や繰り返し構文と合わせて使用します。

|演算子|概要|例|
|:----|:-----|:----|
| `==` |左辺と右辺の値が等しい場合はtrue|5 == 5 // true|
| `!=` |左辺と右辺の値が等しくない場合はtrue|5 != 5 // false|
| `<` |左辺が右辺よりも小さい場合はtrue|5 < 5 // false|
| `<=` |左辺が右辺以下の場合はtrue|5 <= 5 // true|
| `>` |左辺が右辺よりも大きい場合はtrue|5 > 3 // true|
| `>=` |左辺が右辺以上の場合はtrue|5 >= 3 // true|
| `===`|左辺と右辺の値が等しくてデータ型も同じ場合はtrue|5 === 5 // true|
| `!==` |左辺と右辺の値が等しくない場合、またはデータ型が異なる場合はtrue|5 !== 5 // false|
| `?:` | `条件式 ? 式1 : 式2` 条件式がtrueの場合は式1をfalseの場合は式2を返す |(x==1) ? 1 : 0 // 1または0|

#### 等価演算子（==）と同値演算子（===）について

### 論理演算子

複数の条件式（論理値）を論理的に結合し、その結果をtrue/falseとして返します。通常比較演算子と組み合わせて利用することで複雑な式を表現できます。

- `&&` 左右の式がともにtrueの場合はtrue 例：100 === 100 && 1000 === 1000 // true
- `||` 左右の式のどちらかがtrueの場合はtrue 例：100 === 100 || 1000 === 500 // true
- `!`  式がfalseの場合はtrue 例：!(10 > 100) // true

## 制御構文について

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

### Array#mapについて

[Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

> map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。

配列の要素を順番にコールバック関数へ渡し、コールバック関数が返した値から新しい入れる返すメソッドです。各要素を加工したいときに使います。

```javascript
const num = [1, 2, 3];
const newNum = num.map((data) => {
  return data * 10;
});
console.log(newNum) // [10, 20, 30]
```
