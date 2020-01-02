# js workshop sapporo vol4

関数について学ぶ回です。

1. 関数とは？
    1. 引数とは？
        1. 引数の省略
        1. 可変長引数リスト
        1. 名前付き引数
        1. 「...」演算子による引数の展開
    1. 戻り値（return）とは？
1. 関数の定義方法
    1. 関数宣言文による定義
    1. 関数リテラルによる定義
    1. Functionコンストラクタによる定義
    1. アロー関数式による定義
1. 入れ子の関数
1. 即時関数について
1. 関数定義における注意点
   1. return命令の直後で改行しない
   1. 関数はデータ型の一種
   1. function命令は静的な構造を宣言する
   1. 関数リテラル/Functionコンストラクターは実行時に評価される
1. 無名関数
1. 再帰関数
1. 高階関数
1. コールバック関数
1. thisについて
1. クロージャについて

## 関数とは？

関数は、繰り返し利用するコード（計算処理等）をまとめた文の集まりです。  
関数を利用する場合は、呼び出したいスコープに定義が必要です。

```javascript
function sampleFunc() {
  const text = 'Message';
  return text;
}
sampleFunc();
```

### 引数とは？

引数は、関数の挙動をきめるためのパラメータです。  
呼び出し元から指定された値を受け取るための変数をカンマ区切りで指定します。  
※ `仮引数` とも呼ぶ

```javascript
function getTriangle(base, height) {
  return base * height / 2;
}
getTriangle(5, 2); // 結果：5
```

### 戻り値（return）とは？

関数内で処理をした結果を「戻り値」として返すことができます。  
`return` を使わずに実行した場合、そのまま終了します。

```javascript
function hello(name) {
  return 'こんにちわ ' + name + 'さん'
}
console.log(hello('長澤'))
// 結果：こんにちは、長澤さん
```

```javascript
// returnなし
function hello(name) {
  'こんにちわ ' + name + 'さん'
}
console.log(hello('長澤'))
// 結果：undefined
```

他のプログラミング言語によっては最後に評価された値が返される言語もありますが、JavaScriptの場合は `return` を省略した場合、常に未定義（`undefined`）が返されます。

## 関数の定義方法

大きく分けて次の4つがあります。

1. 関数宣言文による定義
1. 関数リテラルによる定義
1. Functionコンストラクタによる定義
1. アロー関数式による定義

### 関数宣言文による定義

「戻り値」のセクションのサンプルコードで記載しましたが、関数を定義するのに最も基本となる方法です。

```javascript
function sampleFunc(name) {
  return 'おはようございます ' + name + 'さん'
}
console.log(sampleFunc('関口')); // おはようございます 関口さん 
```

### 関数リテラルによる定義

JavaScriptでは関数はデータ型の一種のため、文字列や数値と同じく、変数に代入して使うことも可能です。

```javascript
const sampleFunc = function(name) {
  return 'こんばんは ' + name + 'さん'
}
console.log(sampleFunc('日下')); // こんばんは 日下さん
```

### Functionコンストラクタによる定義

JavaScriptでは組み込みオブジェクトとしてFunctionオブジェクトを用意していますが、正直な話、実務でFunctionコンストラクタを使って関数を定義したことはありません。

次に掲載するサンプルコードをご覧いただけるとなんとなく察していただけるかと思いますが、コードの見通しがよろしくないので特別な事情がない限りFunctionコンストラクタによる定義はしないほうが良いと思います。

```javascript
const sampleFunc = new Function('name', 'return "いただきます" + name + "さん"');
console.log(sampleFunc('長谷川')); // いただきます 長谷川さん
```

### アロー関数式による定義

基本的には関数リテラルによる定義と同じですが、よりシンプルに書けます。

コードが1文で収まる場合では更にシンプルに書けます。

```javascript
const sampleFunc = (name, price) => {
  return name + 'はお金を' + price + '円借りました。';
};
console.log(sampleFunc('長澤', 1000)); // 長澤はお金を1000円借りました。

const simpleSampleFunc = (name, price) => name + 'はお金を' + price + '円借りました。';
console.log(simpleSampleFunc('長澤', 10000)); // 長澤はお金を10000円借りました。
```
