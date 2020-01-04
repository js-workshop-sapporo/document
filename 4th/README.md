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
1. 関数定義における注意点
   1. return命令の直後で改行しない
   1. 関数はデータ型の一種
   1. function命令は静的な構造を宣言する
   1. 関数リテラル/Functionコンストラクターは実行時に評価される
1. 入れ子の関数
1. 無名関数・即時関数について
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

#### 引数の省略

関数を呼び出すときの実引数を省略できます。逆に関数定義式の仮引数よりも多い数の実引数を指定して関数を実行することができます。  
関数定義式の仮引数よりも少ない数の実引数を指定して関数を実行すると、実引数が省略された仮引数（`undefined`）が渡されます。

```javascript
function f(x, y) {
  console.log('x = ' + x + ' y = ' + y);
}
f(2);  // x = 2 y = undefined
```

この性質を利用して、省略可能な関数を定義することができます。  
そのためには、引数を省略した場合の初期値を設定しておく必要があります。

```javascript
function f(a, b) {
  b = b || 1;
  return a * b;
}
f(2, 3) // 6
f(2);  // 2
```

`b = b || 1;` で論理和演算子で、左のオペランドが `true` と評価されるときは左のオペランドを返して、 `false` だった場合は 右のオペランドを返します。  
`b` に値が入ってない場合は、 `undefined` で `false` と評価されるため `b` は `1` となります。

#### 可変長引数リスト

すべての関数で利用可能なローカル変数として `arguments` があります。  
`arguments` は `Arguments` オブジェクトを値として持っています。  
関数n個の実非数を指定して呼び出されたとすると実引数の値が `arguments` に可能されます。

- `arguments[0]` 1番目の実引数の値
- `arguments[1]` 2番目の実引数の値
- `arguments[n]` N番目の実引数の値

`Arguments` オブジェクトはlengthとcalleeの2つのプロパティを持っているため以下の値が格納されます。

- `arguments.length` 実引数の数
- `arguments.callee` 現在実行されている関数への参照

```javascript
function f(x, y) {
  arguments[1] = 3
  console.log('x = ' + x,  'y = ' + y)
}
f(1,2)  // x = 1, y = 3
```

上記のコードでは、 `arguments[1]` を変更することで関数の仮引数 `y` の値も変更されます。  
`arguments` 変数を使うと、引数の数が決まっていない可変長引数を定義できます。

#### 名前付き引数

ES2015から、分割代入を利用することで名前付き引数をよりわかりやすく記述することができます。

```javascript
function getTriangle({ base = 1, height = 1}) {
  return base * height / 2;
}
console.log( getTriangle({base:5, height:4}) )  // 10
```

#### 「...」演算子による引数の展開

「...」演算子は、実引数で利用することで配列を個々の値に展開できます。（正確には `for ... of` ブロックで処理できるオブジェクト）

```javascript
console.log(Math.max(15, -3, 78, 1));  // 結果 78
console.log(Math.max([15, -3, 78, 1]));  // 結果 NaN
```

Math.maxメソッドは可変長引数を受け取るので最初のコードは最大値を求めることができますが最後の配列にした場合は、NaNになります。  
ES2015以前は、applyメソッドを利用する必要がありました。

```javascript
console.log(Math.max.apply(null,  [15, -3, 78, 1])); // 結果 78
```

ES2015からは「...」演算子を利用することができるので下記のように記述することができます。

```javascript
console.log(Math.max(...[15, -3, 78, 1]));  // 結果 78
```

### 戻り値（return）とは？

- [関数の戻り値](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Return_values)

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

## 関数定義における注意点

関数定義の注意点についての説明をします。

### return命令の直後で改行しない

基本的にセミコロンで文末を認識します。しかしセミコロンを省略した場合でも前後の文脈から文末を判断します。  
文末にセミコロンをつけることが好ましいが「必須ではない」です。  
以下のコードは、「base * height / 2」の結果を戻すことを意図したコードですが、意図した結果は得られません。

```javascript
const getTriangle = function(base, height) {
  return
  base * height / 2;
};
console.log('三角形の面積：' + getTriangle(5, 2));  // undefined
```

しかし、その寛容さが原因でJavaScriptでは以下のように解釈されてしまうため `return` されてしまうため後続の式が `undefined` になってしまいます。

```javascript
return;
base * height / 2;
```

意図した動作させるためには以下のように改行を削除する必要があります。

```javascript
return base * height / 2;
```

#### ほかの命令も途中で改行しないようにする

以下の命令も同様の理由で改行しないようにしましょう。

- ラベル付きの break / continue 命令
- throw 命令
- `++`、 `--` 演算子（後置）

### 関数はデータ型の一種


### function命令は静的な構造を宣言する


### 関数リテラル/Functionコンストラクターは実行時に評価される


## 無名関数・即時関数について

即時関数と無名関数について

## 入れ子の関数

関数の内部に関数を定義することを入れ子にすることができます。  
入れ子の関数のことをローカル関数ととも呼びます。

入れ子の関数（ローカル関数）は外側の関数のローカル変数として格納されるため、外からアクセスすることはできません。  
また、外側の関数の引数やローカル変数にアクセスできます。

以下のコードは `funcA` の中に関数 `funcB` が定義されています。  
この形を入れ子の関数と呼びます。

`value` 変数に `funcA` の実行結果を代入していますが、 変数 `num` を `return` しています。  
`num` の初期値は `0` ですが、 `return` する前に `funcB` でインクリメントしているため `value` は `1` と返ってきます。  
関数 `funcB` の外で定義している変数 `num` を参照できるということになります。

```javascript
function funcA(){
  let num = 0;
  function funcB(){
    num++;
  }
  funcB();
  return num;
}
const value = funcA();
console.log( value );  // 1
```

以下のコードは、 `funcA` の `return` に `funcB` を実行され `funcB` に `return` を加えたコードになります。  

- 関数 `funcA` の `return` で 関数 `funcB` が実行
- 関数 `funcB` で インクリメントした `num` を `return` される
- 変数 `value` には 関数 `funcA` の実行結果が代入されるため `1` になる


```javascript
function funcA(){
  let num = 0;
  function funcB(){
    num++;
    return num;
  }
  return funcB();
}
const value = funcA();
console.log( value );  // 1
```

以下のコードは、関数 `funcA` の `return` で 関数 `funcB` 自体を返すコードになります。（上記のコードは 関数 `funcB` の実行結果）  
関数 `funcB` 自体を `return` することで変数 `value` も関数になるため、変数 `value` を実行することで 関数 `funcB` が実行されて結果 `num` が `return` されることになります。  
これがクロージャーになります。

```javascript
function funcA(){
  let num = 0;
  function funcB(){
    num++;
    return num;
  }
  return funcB;
}
const value = funcA();
console.log( value() );  // 1
console.log( value() );  // 2
```

関数内の変数のスコープが入れ子関数の規則についてはクロージャの本質的な役割を果たしますので、最後の `クロージャーについて` で説明します。

## 再帰関数

自分自身を呼び出す関数のことです。

同じような手続きを何度も呼び出すような処理をコンパクトに書けます。

ただし、無限ループにならないよう終了条件を書く必要があることに注意してください。

次のコードは引数に渡した数値を0になるまでカウントダウンしていく関数です。

変数 `recursiveFunc` に代入した関数 `innerFunc` が終了条件を満たすまで、処理を行いながら自分自身を返し続けます。

※ `innerFunc` はローカル関数扱いとなり外部から呼び出すことはできません

```javascript
const recursiveFunc = function innerFunc(num) {
  console.log(num);
  num--;
  if (num < 0) return false;  // 終了条件を満たした場合は再帰を終了する
  return innerFunc(num);
}
recursiveFunc(10);  // 10,9,8,7,6,5,4,3,2,1,0
innerFunc(5); // 未定義エラーが発生する
```

## 高階関数

高階関数についての説明

## コールバック関数

コールバック関数についての説明

## thisについて

thisについての説明

## クロージャについて

クロージャについての説明
