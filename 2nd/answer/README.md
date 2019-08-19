## 課題1の解答

## 課題2の解答

## 課題3の解答

```javascript
// 奥さんのお金
const wifeMoney = 10000
// 長澤くんが奥さんから借りたお金
const nagasawaMoney = wifeMoney
// 懇親会の費用
const socialGatheringMoney = 3500
const gindakoMoney = 600
// 懇親会を支払ったときの残額
const balance = nagasawaMoney - socialGatheringMoney
// 懇親会と銀だこを支払った時の残額
const balanceGindako = nagasawaMoney - socialGatheringMoney - gindakoMoney
// 懐に入れた場合
let checkFutokoro = false
// すべて返金した場合
let checkAllMoney = true
// 帰りに銀だこを購入した場合
let checkGindako = true

let nagasawaFutokoroMoney,
    nagasawaMoneyDebt,
    wifeRefund

if (checkFutokoro === true && checkGindako === false) {
  // 懐に入れたときの金額
  nagasawaFutokoroMoney = nagasawaMoney - socialGatheringMoney
  // 長澤くんの借金
  nagasawaMoneyDebt = nagasawaFutokoroMoney + socialGatheringMoney
  // 妻に返金した金額
  wifeRefund = nagasawaMoney - socialGatheringMoney - nagasawaFutokoroMoney
} else if(checkAllMoney === true && checkGindako === false) {
  // 懐に入れたときの金額
  nagasawaFutokoroMoney = nagasawaMoney - socialGatheringMoney - balance
  // 長澤くんの借金
  nagasawaMoneyDebt = nagasawaFutokoroMoney + socialGatheringMoney + balance
  // 妻に返金した金額
  wifeRefund = balance
} else if (checkAllMoney === true && checkGindako === true) {
  // 懐に入れたときの金額
  nagasawaFutokoroMoney = nagasawaMoney - socialGatheringMoney - gindakoMoney - balanceGindako
  // 長澤くんの借金
  nagasawaMoneyDebt = nagasawaMoney
  // 妻に返金した金額
  wifeRefund = nagasawaMoney - socialGatheringMoney - gindakoMoney
}
console.log('長澤くんの懐のお金：' + nagasawaFutokoroMoney + '円')
console.log('長澤くんの奥さんへの借金：-' + nagasawaMoneyDebt + '円')
console.log('奥さんの戻ったお金：' + wifeRefund + '円')
```

## 課題4の解答

## 課題5の解答

## 課題6の解答

## 課題7の解答

## 課題8の解答

## 課題9の解答
