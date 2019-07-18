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

## 課題
### 課題1
文字列の変数を使用して、条件が○○だった場合 コンソールに文字列「○○」とログを出し、  
条件に当てはまらない場合は、コンソールに文字列「○○」とログが出るように実装してください。

### 課題2
数字の変数が20以上だった場合は、コンソールに文字列「20歳のためお酒が呑めます。」  
19以下だった場合は、コンソールに文字列「19歳のためお酒は呑めません。」と出力するように実装してください。

### 課題3
下記の要件を満たすプログラムを実装してください。

- 数字が代入された変数 `vitality` を作成する
- `vitality` が30未満の場合はコンソールに「DANGER」と出力する
- `vitality` が30以上50未満の場合はコンソールに「WARNING」と出力する
- `vitality` が50以上70未満の場合はコンソールに「CAUTION」と出力する
- `vitality` が70以上100以下の場合はコンソールに「NOTICE」と出力する
- 上記以外の数値が変数 `vitality` に代入されている場合はコンソールに「ERROR」と出力する

### 課題4
下記の要件を満たすプログラムを実装してください。

- 変数 `anything` を作成する
- `anything` に代入された値が `文字列型` の場合はコンソールに「anything is String」と出力する
- `anything` に代入された値が `数値型` の場合はコンソールに「anything is Number」と出力する
    - ただし `NaN (Not a Number)` は含めないものとする（後述の「anything is Error!」をコンソールに出力）
- `anything` に代入された値が `配列` の場合はコンソールに「anything is Array」と出力する
- `anything` に代入された値が `null` の場合はコンソールに「anything is Null」と出力する
- `anything` に代入された値が上記に当てはまらない場合は「anything is Error!」をコンソールに出力する

### 課題5
下記の要件を満たすプログラムを実装してください。

- 変数 `member` を作成する
- `member` を代入された値が `森崎` の場合はコンソールに「博之」と出力する
- `member` を代入された値が `安田` の場合はコンソールに「顕」と出力する
- `member` を代入された値が `戸次` の場合はコンソールに「重幸」と出力する
- `member` を代入された値が `大泉` の場合はコンソールに「洋」と出力する
- `member` を代入された値が `音尾` の場合はコンソールに「琢真」と出力する
- `member` に代入された値が上記に当てはまらない場合は「NOT TEAM NACS!」をコンソールに出力する

### 課題6
下記の要件を満たすプログラムを実装してください。

- 数値は1〜30までインクリメントしながら数値をコンソールに出力する
- 3の倍数の場合は「アホになる！」をコンソールに出力する
