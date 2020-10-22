## 課題 1

既存の配列変数 `x_menbers` に新しく `x_new_menbers` という配列変数を作り NEW メンバー `HEATH` と `SUGIZO` を追加してください。

```javascript
const x_menbers = ["YOSHIKI", "TOSHI", "HIDE", "PATA", "TAIJI"];
```

## 課題 2

小文字や大文字が混ざっている配列 `mix_menber_names` を大文字に統一して新しく `upper_menber_names` を作ってください。

```javascript
const x_menbers = [
  "YoShIKi",
  "ToShI",
  "HIdE",
  "paTA",
  "TAiJI",
  "hEAtH",
  "sUGIzo"
];
```

## 課題 3

次の配列の並び順を昇順になるように新しい配列で並び替えてください。

```javascript
const numbers = [5, 6, 4, 2, 10, 44, 33, 30, 50, 1, 999, 79, 48, 66];
```

## 課題 4

次の変数配列 `items` から 3 の倍数を絞り込みして、新しい `new_items` の変数配列を作ってください。

```javascript
const items = [5, 2, 7, 8, 3, 1, 6, 8, 4];
```

## 課題 5

次の配列 `city` を、 配列 `prefecture` の `id` で絞り込みされた配列を作ってください。

```javascript
const city = [
  { id: 1, pref_id: 1, name: "札幌市" },
  { id: 2, pref_id: 1, name: "旭川市" },
  { id: 3, pref_id: 2, name: "青森市" },
  { id: 4, pref_id: 3, name: "盛岡市" },
  { id: 5, pref_id: 4, name: "秋田市" }
];

const prefecture = [
  { id: 1, name: "北海道" },
  { id: 3, name: "岩手県" }
];
```

## 課題 6

次の配列 `cart` から `price` の合計値を求めてください。  
※消費税は加算しないものとします。

```javascript
const cart = [
  { id: 1, name: "りんご", price: 80, count: 1 },
  { id: 2, name: "みかん", price: 40, count: 5 },
  { id: 3, name: "梨", price: 150, count: 2 },
  { id: 4, name: "桃", price: 198, count: 4 }
];
```

## 課題 7

次の配列 `cart` から `price` の消費税も含めた合計値を求めてください。  
消費税は配列 `tax` を使用し、各商品の合計値の小数点は切り捨てください。

ヒント： 小数点切り捨ては `Math.floor(number)` でできます。

```javascript
const cart = [
  { id: 1, name: "ビール", price: 198, count: 2, tax_id: 2 },
  { id: 2, name: "ストロングゼロ", price: 100, count: 1, tax_id: 2 },
  { id: 3, name: "豚肉", price: 212, count: 1, tax_id: 1 },
  { id: 4, name: "玉ねぎ", price: 37, count: 2, tax_id: 1 },
  { id: 5, name: "おろし生姜", price: 90, count: 1, tax_id: 1 }
];

const tax = [
  { id: 1, value: 1.08 },
  { id: 2, value: 1.1 }
];
```

## 課題 8

消費税の計算は式は次になります。  
[https://www.keigenzeiritsu.info/article/18882](https://www.keigenzeiritsu.info/article/18882)

次の配列 `cart` から `price` は税込み価格になります。消費税 8%と 10%を組み合わせて税抜価格の合計値を求めてください。
※小数点は四捨五入する

- 酒：10%
- 水道代：10%
- 食料品：8%
- 新聞定期購読：8%
- ペットフード：10%

```javascript
const cart = [
  { id: 1, name: "酒", price: 126, tax: 10 },
  { id: 2, name: "水道代", price: 5867, tax: 10 },
  { id: 3, name: "食料品", price: 3533, tax: 8 },
  { id: 4, name: "新聞定期購読", price: 4900, tax: 8 },
  { id: 5, name: "ペットフード", price: 3250, tax: 10 },
  { id: 6, name: "コーヒー", price: 225, tax: 8 }
];
```

## 課題 9

`countryLists` の配列（国）から `countryAreaLists` の配列を条件（エリアごと）を参照して、各国が所属するエリアに格納された形で `countryListGroups` という変数オブジェクトを作成してください。（`Asia、Europe、Africa、MiddleEast、Oceania`）

```javascript
// 出力結果 console.log(countryListGroups)
{
  Asia: ['日本', '中国', 'インド'],
  Europe: ['ロシア', 'フランス', 'イギリス'],
  Africa: ['カメルーン', 'エジプト'],
  MiddleEast: ['サウジアラビア'],
  Oceania: ['ニュージーランド']
}
```

```javascript
const countryLists = [
  "日本",
  "ロシア",
  "アメリカ",
  "フランス",
  "ニュージーランド",
  "エジプト",
  "中国",
  "インド",
  "サウジアラビア",
  "カメルーン",
  "イギリス"
];
const countryAreaLists = [
  { area: "アジア", countries: ["日本", "中国", "インド"] },
  { area: "ヨーロッパ", countries: ["フランス", "ロシア", "イギリス"] },
  { area: "アフリカ", countries: ["カメルーン", "エジプト"] },
  { area: "中東", countries: ["サウジアラビア"] },
  { area: "オセアニア", countries: ["ニュージーランド"] }
];
```

## 課題 10

`[1, 2, 3, 4, 5, 6, 7]` の配列の要素を逆順の配列を出力してください。

```javascript
// 出力結果
[7, 6, 5, 4, 3, 2, 1];
```

## 課題 11

`[[1, 2, 3], [4, 5], [6, 7]]` のネストされた配列をネストされていない配列の形にして出力してください。

```javascript
// 出力結果
[1, 2, 3, 4, 5, 6, 7];
```

## 課題 12

`[[1, 2, 3], [4, 5], [6, 7]]` のネストされた配列から次の配列を出力してください。

```javascript
// 出力結果
[7, 6, 5, 4, 3, 2, 1];
```
