## 課題 1 の解答

```javascript
// myNameがマッチした場合
const myName = "長澤";
if ("長澤" === myName) {
  console.log("my name is Nagasawa");
}

// myNameがマッチしない場合
const myName = "関口";
if ("長澤" !== myName) {
  console.log("my name is not Nagasawa");
}
```

## 課題 2 の解答

```javascript
const age = 19;
if (19 <= age) {
  console.log("19歳のためお酒は呑めません。");
} else {
  console.log("20歳のためお酒が呑めます。");
}
```

## 課題 3 の解答

```javascript
// 奥さんのお金
const wifeMoney = 10000;
// 長澤くんが奥さんから借りたお金
const nagasawaMoney = wifeMoney;
// 懇親会の費用
const socialGatheringMoney = 3500;
const gindakoMoney = 600;
// 懇親会を支払ったときの残額
const balance = nagasawaMoney - socialGatheringMoney;
// 懇親会と銀だこを支払った時の残額
const balanceGindako = nagasawaMoney - socialGatheringMoney - gindakoMoney;
// 懐に入れた場合
let checkFutokoro = false;
// すべて返金した場合
let checkAllMoney = true;
// 帰りに銀だこを購入した場合
let checkGindako = true;

let nagasawaFutokoroMoney, nagasawaMoneyDebt, wifeRefund;

if (checkFutokoro === true && checkGindako === false) {
  // 懐に入れたときの金額
  nagasawaFutokoroMoney = nagasawaMoney - socialGatheringMoney;
  // 長澤くんの借金
  nagasawaMoneyDebt = nagasawaFutokoroMoney + socialGatheringMoney;
  // 妻に返金した金額
  wifeRefund = nagasawaMoney - socialGatheringMoney - nagasawaFutokoroMoney;
} else if (checkAllMoney === true && checkGindako === false) {
  // 懐に入れたときの金額
  nagasawaFutokoroMoney = nagasawaMoney - socialGatheringMoney - balance;
  // 長澤くんの借金
  nagasawaMoneyDebt = nagasawaFutokoroMoney + socialGatheringMoney + balance;
  // 妻に返金した金額
  wifeRefund = balance;
} else if (checkAllMoney === true && checkGindako === true) {
  // 懐に入れたときの金額
  nagasawaFutokoroMoney =
    nagasawaMoney - socialGatheringMoney - gindakoMoney - balanceGindako;
  // 長澤くんの借金
  nagasawaMoneyDebt = nagasawaMoney;
  // 妻に返金した金額
  wifeRefund = nagasawaMoney - socialGatheringMoney - gindakoMoney;
} else {
  // 例外処理
  // 懐に入れたときの金額
  nagasawaFutokoroMoney = 0;
  // 長澤くんの借金
  nagasawaMoneyDebt = 0;
  // 妻に返金した金額
  wifeRefund = 0;
}
console.log("長澤くんの懐のお金：" + nagasawaFutokoroMoney + "円");
console.log("長澤くんの奥さんへの借金：-" + nagasawaMoneyDebt + "円");
console.log("奥さんの戻ったお金：" + wifeRefund + "円");
```

## 課題 4 の解答

```javascript
// この場合 NOTICE が表示される
const vitality = 100;

if (vitality < 30) {
  console.log("DANGER");
} else if (30 <= vitality && vitality < 50) {
  console.log("WARNING");
} else if (50 <= vitality && vitality < 70) {
  console.log("CAUTION");
} else if (70 <= vitality && vitality <= 100) {
  console.log("NOTICE");
} else {
  console.log("ERROR");
}
```

## 課題 5 の解答

```javascript
const anything = "文字列";

if (typeof anything === "string") {
  console.log("anything is String");
} else if (typeof anything === "number" && !isNaN(anything)) {
  console.log("anything is Number");
} else if (Array.isArray(anything)) {
  console.log("anything is Array");
} else if (anything === null) {
  console.log("anything is Null");
} else {
  console.log("anything is Error!");
}
```

## 課題 6 の解答

解答例 1

```javascript
const member = "森崎";

if (member === "森崎") {
  console.log("博之");
} else if (member === "安田") {
  console.log("顕");
} else if (member === "戸次") {
  console.log("重幸");
} else if (member === "大泉") {
  console.log("洋");
} else if (member === "音尾") {
  console.log("琢真");
} else {
  console.log("NOT TEAM NACS!");
}
```

解答例 2

```javascript
const member = "森崎";

switch (member) {
  case "森崎":
    console.log("博之");
    break;
  case "安田":
    console.log("顕");
    break;
  case "戸次":
    console.log("重幸");
    break;
  case "大泉":
    console.log("洋");
    break;
  case "音尾":
    console.log("琢真");
    break;
  default:
    console.log("NOT TEAM NACS!");
}
```

## 課題 7 の解答

解答例: for で回すパターン

```javascript
const TEAM_NACS = ["森崎", "安田", "戸次", "大泉", "音尾"];
let concatNacs = "";

for (let i = 0; i < TEAM_NACS.length; i++) {
  // 配列の末尾の場合は句読点を付けない
  if (i === TEAM_NACS.length - 1) {
    concatNacs += TEAM_NACS[i];
  } else {
    concatNacs += TEAM_NACS[i] + "、";
  }
}
console.log(concatNacs);
```

解答例: 配列のメソッドを使う（今回は if と for の会ですが例のひとつとして…）

```javascript
const TEAM_NACS = ["森崎", "安田", "戸次", "大泉", "音尾"];

console.log(TEAM_NACS.join("、"));
```

## 課題 8 の解答

```javascript
for (let i = 1; i <= 30; i++) {
  if (i % 3 === 0) {
    console.log("アホになる！");
  } else {
    console.log(i);
  }
}
```

## 課題 9 の解答

解答例: from tkm-mur

```javascript
const kukuElement = [1, 2, 3, 4, 5, 6, 7, 8, 9];

kukuElement.forEach(parent => {
  const row = kukuElement.map(child => {
    return parent * child;
  });
  console.log(row.join(" "));
});
```

解答例: for ループのみで頑張るパターン

```javascript
for (let i = 1; i <= 9; i++) {
  // 1行分の結果を保持
  let row = "";
  for (let j = 1; j <= 9; j++) {
    // 九九の演算
    row += i * j;
    // 結果表示を見やすくするための空白文字追加
    row += " ";
  }
  // 1行毎に結果を出力
  console.log(row);

  // 結果を1度初期化
  row = "";
}
```

解答例: 1 回の for ループで頑張るパターン

```javascript
for (let i = 1; i < 10; i++) {
  // 九九の演算と 1行毎に結果を出力
  console.log(i, i * 2, i * 3, i * 4, i * 5, i * 6, i * 7, i * 8, i * 9);
}
```

## 課題 10 の解答

解答例:

```javascript
for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let j = 1; j <= 10 - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i * 2 - 1; k++) {
    row += "*";
  }
  console.log(row);
}
```
