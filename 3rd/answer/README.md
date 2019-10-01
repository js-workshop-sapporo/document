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

### 課題4の解答

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

### 課題5の解答

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

### 課題6の解答

`Array.prototype.reduce()` または `Array.prototype.forEach()` を使用します。  
ただ、 `forEach` は引数に与えられた関数を配列の各要素に対して実行するためのメソッドなので、単一の値にしたい場合は `reduce` メソッドを使うのが理想かもしれません。

- [Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.forEach() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

#### reduce パターン
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

#### forEach パターン
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

### 課題7の解答

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
  // (商品価格 * 税率) * 個数 を計算する
  return prev + ((current.price * currentTax) * current.count);
}, 0);

// 計算結果を小数点を切り捨ててコンソールに表示する
console.log(Math.floor(result));
```
