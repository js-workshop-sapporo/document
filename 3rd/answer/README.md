## 課題1の解答

スプレッド演算子を使用して変数 `new_x_menbers` に `x_menbers` を代入して `HEATH` と `SUGIZO` を追加します。

```javascript
const x_members = ['YOSHIKI', 'TOSHI', 'HIDE', 'PATA', 'TAIJI'];
const new_x_members = [...x_members, 'HEATH', 'SUGIZO'];
console.log(new_x_members);
```

- [スプレッド構文 - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

```javascript
// スプレッド演算子を使わない例：concatを使って結合する
const x_menbers = ['YOSHIKI', 'TOSHI', 'HIDE', 'PATA', 'TAIJI'];
const add_menbers = ['HEATH', 'SUGIZO'];
const new_x_menbers = x_menbers.concat(add_menbers);
console.log(x_menbers);
console.log(new_x_menbers);
```

- [Array.prototype.concat() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## 課題2の解答

array.map()を使い新しい配列を作り戻り値に `toUpperCase` メソッドを使います。

```javascript
const x_members = ['YoShIKi', 'ToShI', 'HIdE', 'paTA', 'TAiJI', 'hEAtH', 'SUGIzo'];
const upper_member_names = x_members.map(val => val.toUpperCase());
console.log('元の配列 ' + x_members);
console.log('新しい配列 ' + upper_member_names);
```

- [Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [String.prototype.toUpperCase() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

## 課題3の解答

array.sort()を使い比較関数で昇順にします。  
sortメソッドは元の配列を変更してしまうので、sliceで配列をコピーします。  
元の配列は変更しないようにしましょう。

### 比較関数

配列の要素は比較関数の返り値に基づきソートされます。

- 0より小さい − aはbの前に来る
- 0より大きい − bはaの前に来る
- 0に等しい − aとbは変更されない

### 参考

- [Array.prototype.sort() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.slice() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

```javascript
const numbers = [5, 6, 4, 2, 10, 44, 33, 30, 50, 1, 999, 79, 48, 66];
const sort_numbers = numbers.slice().sort((a, b) => a - b);
console.log('元の配列 ' + numbers);
console.log('sortした配列 ' + sort_numbers);
```

## 課題4の解答

filter()メソッドを使用します。  
引数として与えれた値を各配列要素に対して実行し新しい配列を生成します。  
このメソッドは元の配列は変更しません。

第2引数のオブジェクトも指定することができます。

```javascript
const items = 配列データ;
// 第2引数にオブジェクトを指定する
items.filter(コールバック, オブジェクト)
```

### 参考

- [Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```javascript
const items = [5, 2, 7, 8, 3, 1, 6, 8, 4];
const new_items = items.filter((value) => value % 3 === 0);
console.log(items);
console.log(new_items);
```

## 課題5の解答

課題2と4の応用です。  
`Array.prototype.filter()` と `Array.prototype.map()` を使用します。
要素のチェックには `Array.prototype.indexOf()` を使用します。
2つの配列から相互で関係している値を元に新たな値を出力する事は実務でもよくあります。  
この例だと `city` 配列内の `pref_id` が `prefecture` 配列の `id` と関係しています。

- [Array.prototype.indexOf() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

```javascript
const city = [
  { id: 1, pref_id: 1, name: '札幌市' },
  { id: 2, pref_id: 1, name: '旭川市' },
  { id: 3, pref_id: 2, name: '青森市' },
  { id: 4, pref_id: 3, name: '盛岡市' },
  { id: 5, pref_id: 4, name: '秋田市' }
];

const prefecture = [
  { id: 1, name: '北海道' },
  { id: 3, name: '岩手県' }
];

const filteredCity = city.filter(item => {
  return prefecture.map(pref => pref.id).indexOf(item.pref_id) >= 0
});

console.log(filteredCity);
```

## 課題6の解答

`Array.prototype.reduce()` または `Array.prototype.forEach()` を使用します。  
ただ、 `forEach` は引数に与えられた関数を配列の各要素に対して実行するためのメソッドなので、単一の値にしたい場合は `reduce` メソッドを使うのが理想かもしれません。

- [Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### reduce パターン
```javascript
const cart = [
  { id: 1, name: 'りんご', price: 80, count: 1 },
  { id: 2, name: 'みかん', price: 40, count: 5 },
  { id: 3, name: '梨', price: 150, count: 2 },
  { id: 4, name: '桃', price: 198, count: 4 }
];

const result = cart.reduce((prev, current) => {
  return prev + (current.price * current.count)
}, 0);

console.log(result)
```

### forEach パターン
```javascript
const cart = [
  { id: 1, name: 'りんご', price: 80, count: 1 },
  { id: 2, name: 'みかん', price: 40, count: 5 },
  { id: 3, name: '梨', price: 150, count: 2 },
  { id: 4, name: '桃', price: 198, count: 4 }
];

let result = 0;
cart.forEach(elem => {
  result += (elem.price * elem.count)
});

console.log(result)
```

## 課題7の解答

`Array.prototype.reduce()` と `Array.prototype.find()` を組み合わせて合計値を算出します。
`cart` 配列の `tax_id` が `tax` 配列の `id` と関係しています。

- [Array.prototype.find() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

```javascript
const cart = [
  { id: 1, name: 'ビール', price: 198, count: 2, tax_id: 2 },
  { id: 2, name: 'ストロングゼロ', price: 100, count: 1, tax_id: 2 },
  { id: 3, name: '豚肉', price: 212, count: 1, tax_id: 1 },
  { id: 4, name: '玉ねぎ', price: 37, count: 2, tax_id: 1 },
  { id: 5, name: 'おろし生姜', price: 90, count: 1, tax_id: 1 }
];

const tax = [
  { id: 1, value: 1.08 }, // 消費税 8%
  { id: 2, value: 1.1 }   // 消費税 10%
];

// デフォルトの税率（8%）
const DEFAULT_TAX = 1.08;

const result = cart.reduce((prev, current) => {
  // 商品に紐付いている tax_id から tax 配列の id を元に現在の商品の税率探す
  const findTax = tax.find(item => item.id === current.tax_id);
  // tax_id とマッチする id が tax配列に存在すればそのvalueを使用するがない場合はデフォルトを使用する
  const currentTax = findTax ? findTax.value : DEFAULT_TAX;
  // 小数点を切り捨てた(商品価格 * 税率) * 個数 を計算する
  return prev + ((Math.floor(current.price * currentTax)) * current.count);
}, 0);

// コンソールに表示する
console.log(result);
```

## 課題8の解答

JavaScriptの浮動小数型で計算（1.08や1.1）すると誤差が生じます。  
JavaScriptなど多くの言語で浮動小数点数に [IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754) という形式を使用しています。この形式は2進法になっているので、1.08のような10進法では割り切れる小数でも [IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754) では正確に表せないことで発生します。  
JavaScriptの場合は、「整数の範囲内で計算」か「適当な単位で丸め操作」が必要になります。

1. reduceTaxで、各データの再計算した税込み価格を求めて各データの比較から税抜価格を返す
2. excludedTaxで、各データごとにreduceTaxを実行し税抜価格の配列を作成する
3. excludedTaxTotalで、excludedTaxの配列の合計を求めます。（reduceを使います）

### 参考
- [JavaScriptで消費税を計算する](https://qiita.com/jkr_2255/items/0ca7bc536d930f83a901)
- [浮動小数点数の正確な値を割り出す](https://qiita.com/jkr_2255/items/0321b411243daf549ffc)
- [消費税の税込み価格、税抜き価格の計算方法は？端数はどうする？](https://www.keigenzeiritsu.info/article/18882)
- [JavaScriptで小数点の誤差が発生する件の備忘録](https://qiita.com/Chinats/items/e2647ca7900dfe7835a8)
- [IEEE 754](https://ja.wikipedia.org/wiki/IEEE_754)
- [JavaScriptの浮動小数点数型の誤差をなくす](https://confrage.jp/javascript%E3%81%AE%E6%B5%AE%E5%8B%95%E5%B0%8F%E6%95%B0%E7%82%B9%E6%95%B0%E5%9E%8B%E3%81%AE%E8%AA%A4%E5%B7%AE%E3%82%92%E3%81%AA%E3%81%8F%E3%81%99/)

```javascript
const cart = [
  { id: 1, name: '酒', price: 126, tax: 10 },
  { id: 2, name: '水道代', price: 5867, tax: 10 },
  { id: 3, name: '食料品', price: 3533, tax: 8 },
  { id: 4, name: '新聞定期購読', price: 4900, tax: 8 },
  { id: 5, name: 'ペットフード', price: 3250, tax: 10 },
  { id: 6, name: 'コーヒー', price: 225, tax: 8 }
];
/**
 * @name reduceTax 消費税の計算（正確な値を求める）浮動小数点対策
 * @param  {Number} priceWithTax
 * @param  {Number} taxRate
 * @return {Number} cart.priceから税抜価格を求めて再度税込価格を求め直し、cart.priceと比較
 *                  cart.price = であればそのままtempを返す
 *                  cart.price - reverseが大きければtempをマイナスして返す
 *                  それ以外はプラスして返す
 */
const reduceTax = (priceWithTax, taxRate) => {
  // 本体価格 ＝ 税込み価格 /（1 + 税率）
  const temp = Math.round(priceWithTax / (taxRate + 1));
  const reverse = Math.round(temp * (taxRate + 1));
  if (reverse === priceWithTax) {
    return temp;
  } else if (reverse > priceWithTax) {
    return temp - 1;
  } else {
    return temp + 1;
  }
};
/**
 * @param  {Object} (item
 * @return {Number} 税抜価格
 */
const excludedTax = cart.map((item) => {
  // cartのtaxを税率に変換
  const taxRate = Number(item.tax) / 100;
  return reduceTax(item.price, taxRate);
});
/**
 * @param  {Number} (total
 * @param  {Number} item
 * @return {Number} 配列の合計
 */
const excludedTaxTotal = excludedTax.reduce((total, item) => {
  return total + item;
});
// toLocaleString で三桁ごとにカンマをつける
console.log('税抜価格の合計： ' + excludedTaxTotal.toLocaleString() + '円');
```

### Tips

ライブラリで対応させる方法もあります。

- [https://github.com/MikeMcl/decimal.js](https://github.com/MikeMcl/decimal.js)

## 課題9の解答

課題5とほぼ同じ内容になりますが、最後にフィルタリングした値を元に `countryListGroups` の値に追加していきます。

forEachとfilterとpushと前回勉強したswitch構文を組み合わせて実装します。

1. 追加先のオブジェクトを定義
2. `countryLists` を `forEach` で回す
3. フィルタリングした結果は `filtered` へ代入
4. `filtered` の値を元に `switch` 構文で条件マッチしたエリアに `countryListGroups.XXXX` へ `push` します。

```javascript
const countryLists = ['日本', 'ロシア', 'アメリカ', 'フランス', 'ニュージーランド', 'エジプト', '中国', 'インド', 'サウジアラビア', 'カメルーン', 'イギリス'];
const countryAreaLists = [
  { area: 'アジア', countries: ['日本', '中国', 'インド'] },
  { area: 'ヨーロッパ', countries: ['フランス', 'ロシア', 'イギリス'] },
  { area: 'アメリカ', countries: ['アメリカ'] },
  { area: 'アフリカ', countries: ['カメルーン', 'エジプト'] },
  { area: '中東', countries: ['サウジアラビア'] },
  { area: 'オセアニア', countries: ['ニュージーランド'] }
];
/**
 * 追加先のオブジェクトを定義
 */
const countryListGroups = {
  Asia: [],
  Europe: [],
  America: [],
  Africa: [],
  MiddleEast: [],
  Oceania: []
}
/**
 * エリアに属している国をエリアごとの配列に追加
 * @param  {String} (element
 */
countryLists.forEach((element) => {
  // element（国）が属してるエリアをフィルタリング
  const filtered = countryAreaLists.filter(item => {
    return item.countries.indexOf(element) >= 0;
  })
  // フィルタリングの条件にあったエリアに国を追加
  switch (filtered[0].area) {
    case 'アジア':
      countryListGroups.Asia.push(element);
      break;
    case 'ヨーロッパ':
      countryListGroups.Europe.push(element);
      break;
    case 'アメリカ':
      countryListGroups.America.push(element);
      break;
    case 'アフリカ':
      countryListGroups.Africa.push(element);
      break;
    case '中東':
      countryListGroups.MiddleEast.push(element);
      break;
    case 'オセアニア':
      countryListGroups.Oceania.push(element);
      break;
    default:
      break;
  }
})
console.log(countryListGroups);
```

## 課題10の解答

array.reverse()を利用し、配列の要素を逆順に出来ます。  

### 参考

- [Array.prototype.reverse() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

```javascript
const array = [1, 2, 3, 4, 5, 6, 7];
const reverseArray = array.reverse();

console.log(reverseArray);
```

### TIPS
`reverse()` メソッドは元の配列（回答例の `array` 変数）を上書きしてしまいます。

```javascript
const array = [1, 2, 3, 4, 5, 6, 7];
console.log(array); // → [1, 2, 3, 4, 5, 6, 7]
const reverseArray = array.reverse();

console.log(array); // → [7, 6, 5, 4, 3, 2, 1]
```

## 課題11の解答

array.flat()を利用し、ネスト化された配列を平滑化することが出来ます。  

### 参考

- [Array.prototype.flat() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

```javascript
const array = [[1, 2, 3], [4, 5], [6, 7]];
const flatArray = array.flat();

console.log(flatArray);
```

### TIPS
`flat()` メソッドは、`ES2019` で追加されたメソッドなので、対応ブラウザ等に注意が必要

- [Array.prototype.flat() - JavaScript | MDN 対応状況](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#Browser_compatibility)

## 課題12の解答

課題11、課題10の内容の応用

1. ネストされた配列を平滑化
1. 平滑化後の配列を逆順に反転　(反転処理を `reduceRight` を利用している)

回答例はメソッドチェーンを利用した例であるが、処理毎に変数に代入しても可

### 参考

- [Array.prototype.reduceRight() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

```javascript
const array = [[1, 2, 3], [4, 5], [6, 7]];
const reverseArray = array.flat().reduceRight( (accumulator, currentValue) => {
  return accumulator.concat(currentValue)
}, []);

console.log(reverseArray);
```
