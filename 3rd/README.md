# js workshop sapporo vol3

配列の操作やオブジェクトの操作について学ぶ回です。

## 配列の操作

### mapメソッド

配列の各要素を加工したい場合に使用されます。  
引数に与えられたコールバック関数を配列の要素順で1度づつ実行し、コールバック関数の結果から新しい配列を作ります。  

- [Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

#### 例
```javascript
const array = [1, 2, 3, 4];
const doubleArray = array.map(current => current * 2);

console.log(array); // => [1, 2, 3, 4] 
console.log(doubleArray); // =>  [2, 4, 6, 8]
```

### someメソッド

配列内に目的とする要素があるかどうかを調べるのに使用されます。  
配列の各要素に、引数に与えられたコールバック関数を実行し、マッチした要素があるなら `true` を返し、無い場合は `false` を返します。    
もし、空の配列でsomeメソッドを実装した場合は必ず `false` が返ってきます。

#### 例
```javascript
const prefecture = ['北海道', '東京', '沖縄'];

const hasHokkaido = prefecture.some(pref => pref === '北海道');

console.log(hasHokkaido); // => true
```

### filterメソッド

配列内の要素をとある条件で絞り込みした要素だけにしたい場合に使用されます。  
配列の各要素に、引数に与えられたコールバック関数が `true` を返した要素だけ集めた新しい配列を返します。

```javascript
const animals = [
  { id: 1, category: 'cat', name: 'トム'  },
  { id: 2, category: 'dog', name: 'スパイク' },
  { id: 3, category: 'cat', name: 'ブッチ' },
  { id: 4, category: 'dog', name: 'ドルーピー' },
];

const dogs = animals.filter(animal => animal.category === 'dog');

console.log(dogs);
// => [{ id: 2, category: 'dog', name: 'スパイク' }, { id: 4, category: 'dog', name: 'ドルーピー' },]
```

### sortメソッド

配列内の要素をコールバック関数に渡した比較関数で並び替えを行います。  
元の配列を変更してしまう破壊的なメソッドですので、sliceメソッドか concatメソッドを使って元の配列をコピーした配列に使用するようにしましょう。

```javascript
const numbers = [1, 0, 3, 4, 2];
const sortedNumbers = numbers.concat().sort((a, b) => a - b);

console.log('numbers:', numbers); // => [1, 0, 3, 4, 2]
console.log('sortedNumbers:', sortedNumbers); // => [0, 1, 2, 3, 4]
```

## オブジェクトについて

- [JavaScript オブジェクトの基本](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects/Basics)

オブジェクトの基本についてはMDNを参照してください。
