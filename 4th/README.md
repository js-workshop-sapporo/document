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
1. 変数のスコープについて
   1. ローカル変数の有効範囲
   1. 仮引数のスコープ - 基本型と参照型の違いに注意する -
1. 無名関数・即時関数について
1. 入れ子の関数
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
// アロー関数の構文
(引数,...) => { 関数本体 }
```

```javascript
const sampleFunc = (name, price) => {
  return name + 'はお金を' + price + '円借りました。';
};
console.log(sampleFunc('長澤', 1000)); // 長澤はお金を1000円借りました。

const simpleSampleFunc = (name, price) => name + 'はお金を' + price + '円借りました。';
console.log(simpleSampleFunc('長澤', 10000)); // 長澤はお金を10000円借りました。
```

#### オブジェクトリテラルを返す場合

アロー関数の記法は、自由度があるため思わぬ落とし穴があるため注意が必要です。  
以下はアロー関数が戻り値としてオブジェクトリテラルを返す例です。  
利用する場合は、必ずリテラル全体を丸カッコで括る必要があります。

```javascript
let func = () => ({ text: 'オブジェクトリテラルは丸カッコが必要です。' })
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

JavaScriptでは文の途中で改行できますが、無制限に改行するべきではありません。  
演算子、カンマ、左カッコの直後など、文の継続が明らかな部分のみ改行をするべきです。

### 関数はデータ型の一種

関数と同盟の変数を定義していることから、`getTriangle = 0;` でエラーとなるはずですが、関数はデータ型の一種になるため以下はJavaScriptでは正しいコードになります。  
そのため `getTriangle` の関数を定義するときは、 `getTriangle` という変数に関数型のリテラルを格納すると同じことになるため、変数 `getTriangle` に改めて数値型をセットしても間違いではありません。

```javascript
let getTriangle = function(base, height) {
  return base * height / 2;
};
console.log(getTriangle(5, 2));  // 結果：5
getTriangle = 0;
console.log(getTriangle);
```

この性質から以下のコードを記述することもできます。  
`getTriangle` を変数として参照しているので、 `getTriangle` に格納された関数定義がそのまま文字列として出力されます。 ※正確にはFunctionオブジェクトのtoStringメソッドが呼び出されるため文字列表現に変換されコンソールに表示されています。

関数を呼び出す際に「引数がなくても丸カッコが省略できない」理由でもありますので、丸カッコは「関数を実行する」意味を持ちます。

```javascript
let getTriangle = function(base, height) {
  return base * height / 2;
};
console.log(getTriangle);  // 文字列として出力される
```

### function命令は静的な構造を宣言する

function命令によるよる関数定義は「関数リテラルを代入演算子（=）で変数を代入すること」とは異なる点にも注意が必要です。

```javascript
console.log('三角形の面積：' + getTriangle(5, 2)); // ※1
function getTriangle(base, height) {
  return base * height / 2;
}
```

「関数定義が変数定義である」と考えると `※1` はエラーにならなければなりません。  
`※1` 時点では `getTriangle` 関数は宣言されていないはずだからです。（関数定義を格納した変数 `getTriangle` ）
実際にコンソールで確認すると正しく `getTriangle` 関数は実行されます。  
functionが動的に実行される命令ではなく、静的な構造を宣言するためのキーワードになるからです。  
 **「function命令はコードを解析・コンパイルするタイミングで関数を登録している」 ことになるため、実行時にはコード内の構造の一部として `getTriangle` 関数をどこからでも呼び出すことができることになります。**

#### Note

関数を定義した `<script>要素` は、呼び出し側の スクリプトブロックより前・同じスクリプトブロックに記述されなければなりません。  
ブラウザの場合は、 `<script>要素` 単位で順に処理していくためです。

### 関数リテラル/Functionコンストラクターは実行時に評価される

function命令から関数リテラルに置き換えた場合は、同様の動きは出来ません。  
また、`Function` コンストラクターでも同様です。

```javascript
console.log('三角形の面積：' + getTriangle(5, 2)); // ※1
const getTriangle = function(base, height) {
  return base * height / 2;
}
```

- **関数リテラル/Functionコンストラクターは実行時（代入時）に評価される**

関数リテラル/Functionコンストラクターで記述するときは、**呼び出し元コードよりも先に記述する**必要があります。  
記述の仕方で解釈が異なりますので、注意してください。

## 変数のスコープについて

スコープあ、変数がスクリプトの中のどの場所から参照できるかを決めるが概念になります。  
大きく分けて2つに分類されます。

- グローバルスコープ : スクリプト全体から参照できる
- ローカルスコープ : 定義された関数のみで参照できる
- ブロックスコープ : ES2015から追加された概念で `let` 命令で宣言された変数はブロックの外では無効になります。

```javascript
const scope = 'グローバル';
function valueFunc() {
  const scope = 'ローカル';
  return scope;
}
console.log(valueFunc());  // ローカル
console.log(scope);  // グローバル
```

一行目の変数 `scope` はグローバル変数で、関数 `valueFunc` の変数 `scope` はローカル変数とみなされます。  
`valueFunc` 関数を介することで グローバルで定義した `scope` とは別物として認識されるため同名の変数でもそれぞれを返されるようになります。  
**※const,let,varで宣言していない変数はすべてグローバル変数としてされますので必ず宣言すること**

```javascript
if (true) {
  let i = 5;
}
console.log(i);  // スコープ外のためエラー
```

ブロックスコープが利用できる環境の場合で、`let` で宣言すれば即時関数と同様の効果を得ることができます。

### ローカル変数の有効範囲

ローカル変数の有効の範囲は、関数全体に有効ではありますが宣言される前に実行するとローカル変数は確保されていないため `undefined` 未定義として出力されます。  
この挙動のことを変数の巻き上げと呼びます。  
かならずローカル変数を宣言する場合は、 **関数の戦闘で宣言する**ように心がけましょう。

```javascript
const scope = 'グローバル';
function valueFunc() {
  console.log(scope);  // undefined
  const scope = 'ローカル';
  return scope;
}
console.log(valueFunc());  // ローカル
console.log(scope);  // グローバル
```

### 仮引数のスコープ - 基本型と参照型の違いに注意する -

仮引数とは「呼び出し元から関数に渡された値を受け取るための変数」になります。  
仮引数は、**基本的にローカル変数**として処理されます。

```javascript
const value = 10;
function decrementValue(value) {
  value--;
  return value;
}
console.log(decrementValue(100));  // 99
console.log(value);  // 10
```

この場合は、仮引数はローカル変数としてみなしてグローバルの変数 `value` に影響はありません。  
グローバル変数 `value` と ローカル変数 `value` は別物になります。

しかし、仮引数に渡される値が参照型の場合は影響があります。

```javascript
const value = [1, 2, 4, 8, 16];
function decrementValue(value) {
  value.pop();  // 末尾を削除
  return value;
}
console.log(decrementValue(value));  // [1, 2, 4, 8]
console.log(value);  // [1, 2, 4, 8]
```

参照型は、「値そのものではなく、値を格納したメモリ上の場所（アドレス）だけを格納した型のことを指します。  
参照型で受け渡しする場合は、渡される値（値そのものではなく）もメモリ上のアドレス情報だけとなります。  
この値の渡し方を参照渡しと呼びます。  
グローバルとローカルで定義したvalueは別物になりますが、 `decrementValue(value)` でグローバルの値を渡された時点で結果的に参照しているメモリ上の場所が等しくなります。

**配列を操作した場合など グローバル変数 `value` にも反映されるので注意が必要です。**  
参照型び性質を理解した上で、コードを書くとバグが起きる原因を防げます。

## 無名関数・即時関数について

即時関数と無名関数についてを説明します。  
関数は定義しただけでは実行されません。関数を呼び出されてはじめて実行されます。  
その方法の一つとして無名関数/即時関数があります

通常、無名関数を実行するときは、それを変数に代入して括弧演算子で実行します。

```javascript
const func = function(...) {};
func();
```

JavaScriptには、無名関数を定義時に実行する「即時関数」という構文があります。  
上記のコードを即時関数に置き換えると以下になります。

```javascript
(function() {...})();
// もしくは以下のように書くこともできます。
(function() {...}());
```

どちらのコードも正常に動作します。  
関数定義式をグループ化演算子()で囲んでいます。  
括弧で囲むことで、括弧内の関数定義式が評価されて関数値（正確には関数オブジェクトへの参照）となります。  
関数定義式を関数値にする方法としては、次のようなものもあります。

```javascript
+function(...) {}()
```

無名関数を変数に代入することも、関数定義式を関数値に変換する方法の1つです。即時関数には引数を渡すことも可能です。  
以下のように引数aに1、bに2が代入されます。

```javascript
(function(a, b) {...})(1, 2);
```

即時関数には関数名をつけることもできます。ただし関数名は関数内部のみ有効です。

```javascript
(function fact(n) {
  if ( n <= 1) return 1;
  return n * fact(n-1);
})(5); // 120
```

関数の実行結果を変数に代入して、式の中で使うこともできます。  
この方法でグローバルスコープを汚染しない名前空間を生成することに使われます。  
**※ES2015環境では即時関数は基本的に不要になります。**

```javascript
const x = (function() {...})();
```

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

JavaScriptは第一級関数をサポートしているため、関数の引数に関数を受け取ることができます。  
引数として受け取った関数を扱う関数を高階関数と呼びます。  
次のコードの場合、第2引数で関数を受け取るので `mockForEach` が高階関数となります。  
第1引数に配列を受け取り、 `for in` 文で回して第2引数で受け取った関数を実行していきます。  
第2引数に渡した関数は引数で受け取った値をログに出すという至極シンプルな処理です。  

```javascript
// 高階関数
function mockForEach(array, callback) {
  for (let key in array) {
    callback(array[key])
  }
}

// 引数に渡された値をconsoleで表示する
function showArrayValue(value) {
  console.log(value);
}

const fruits = ['蜜柑','葡萄', '林檎'];

mockForEach(fruits, showArrayValue); // '蜜柑','葡萄', '林檎'
```

## コールバック関数

前述した高階関数、つまり引数に関数を受け取れる関数に引数に渡す関数がコールバック関数です。  
MDNで配列の組み込みメソッドを眺めているとメソッドの構文を説明している項目で、メソッドの引数に `function callback(currentValue){}` のような記載がありますが、それです。  
サンプルコードとして `Array.prototype.forEach()` を参考に見ていきます。

```javascript
const fruits = ['蜜柑','葡萄', '林檎'];

fruits.forEach(element => {
  console.log(element); // '蜜柑','葡萄', '林檎'
});
```

forEachメソッドは第一引数に関数を受け取ります。これがコールバック関数です。  
コールバック関数の第一引数には配列の各要素が渡されるので、各要素に対して一度ずつ実行します。  
上記のサンプルコードでは即時関数を渡しています。  
関数リテラルや関数宣言文で定義した関数を渡しても問題無いですが、冗長な書き方になってしまうため、実務ではサンプルコードのように即時関数を渡して処理するケースが多いです。

## thisについて

呼び出される際の状況によって参照先が変わる読み取り専用のグローバル変数のようなキーワードです。  
主に次のような条件によって変化します。

- 関数から呼び出した時
- メソッドから呼び出した時
- コンストラクタから呼び出した時
- アロー関数から呼び出した時

### 関数から呼び出した時

関数から呼び出した時 `this` はグローバルオブジェクトを参照します。  
ただし、次のメソッドを使って関数を呼び出せば `this` の値を束縛することができます。

- call()
- apply()
- bind()

#### 普通に呼び出す

まずは普通に関数から呼び出した時の `this` の挙動です。  
※ブラウザでの動作を想定しています

```javascript
function hoge() {
  console.log(this);
  this.foo = 'this is foo';
}

hoge();  // Windowオブジェクトがコンソールに表示される
console.log(foo);   // グローバルに展開され 'this is foo' とコンソールに表示される
```

#### call() apply()

`call()` と `apply()` の違いは引数をカンマつなぎで渡すか配列で渡すかの違いで挙動は同じです。  
引数にオブジェクトを渡すと `this` を束縛できます。

```javascript
function someHuman(age, loan) {
  console.log(this.name + 'は、' + age + '歳です。妻への借金は ' + loan + '円です。');
}
const nagasawa = {
  name:'長澤'
};
someHuman(34, 100000);  // は、34歳です。妻への借金は 100000円です。
someHuman.call(nagasawa, 34, 100000); // 長澤は、34歳です。妻への借金は 100000円です。
someHuman.apply(nagasawa, [34, 100000]); // 長澤は、34歳です。妻への借金は 100000円です。
```

#### bind()

前述の `call()` と `apply()` と使い方微妙に似ていますが、 `bind()` は `this` を束縛した新しい関数を返します。  
したがって基本的には関数リテラルで定義して使います。

```javascript
function someHuman(age, loan) {
  console.log(this.name + 'は、' + age + '歳です。妻への借金は ' + loan + '円です。');
}
const nagasawa = {
  name:'長澤'
};

const boundSomeHuman = someHuman.bind(nagasawa);

boundSomeHuman(34, 100000); // 長澤は、34歳です。妻への借金は 100000円です。
```

### メソッドから呼び出した時

メソッドから呼び出した時の説明

### コンストラクタから呼び出した時

コンストラクタから呼び出した時の説明

### アロー関数から呼び出した時

アロー関数から呼び出した時の説明

## クロージャについて

クロージャ（関数閉包）とは、**自分自身が定義された環境において、関数内の自由変数の名前解決を行う** というものになります。  
変数の名前解決は関数がクロージャを定義することを意味しています。

```javascript
const a = 'A';
function f() {
  const b = 'B';
  function g() {
    const c = 'C';
    console.log(a+b+c);
  }
  g();
}
```

内側関数 `g` の定義された環境とは、その外側のプログラムコード全体です。この環境内では関数 `g` は自由変数 `a` と `b` の名前解決が行われます。  
変数の名前解決は以下のような仕組みになります。

1. 関数 `f` が呼び出されると関数`f` のcallオブジェクトが生成される
1. 次に関数 `g` の関数宣言で評価されて、関数 `g` の関数オブジェクトが生成される。この関数オブジェクトには関数 `g` のコード、変数 `b` が納めた関数 `f` のcallオブジェクトへの参照、変数`a` を納めたグローバルオブジェクトへの参照が格納される
1. 関数`g` が呼びされて実行すると、関数 `g` のcallオブジェクトが生成されるとともに、関数 `g` の関数オブジェクトが参照する変数オブジェクトのチェーンをたどって自由変数 `a` と `b` を参照する

関数 `g` の関数オブジェクトと、それが参照している変数オブジェクトが、自由変数 `a` と `b` の名前解決を行うためのデータ構造ということになります。  
このデータ構造は、関数 `f` が呼ばれて関数 `g` が評価ｓれたときに生成されます。  
**※JavaScriptのクロージャは、関数オブジェクトとそれを参照する変数オブジェクトとセットになります**

また、関数 `g` の関数オブジェクトが存在している間は、クロージャ内の変数オブジェクトは関数オブジェクトに参照されているため、メモリ上に存続します。

### Note

入れ子の関数gは開いた関数ですが、スコープチェーンを用いることで環境から変数bとaを取り込んで自室的な閉じた関数になっています。「開いたものを閉ざす」というのがクロージャの語源です。

