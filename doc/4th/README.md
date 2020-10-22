# js workshop sapporo vol4

関数について学ぶ回です。

1. 関数とは？
   1. 引数とは？
      1. 引数の省略
      1. 可変長引数リスト
      1. 分割代入
      1. 名前付き引数
      1. 「...」演算子による引数の展開
   1. 戻り値（return）とは？
1. 関数の定義方法
   1. 関数宣言文による定義
   1. 関数リテラルによる定義
   1. Function コンストラクタによる定義
   1. アロー関数式による定義
1. 関数定義における注意点
   1. return 命令の直後で改行しない
   1. 関数はデータ型の一種
   1. function 命令は静的な構造を宣言する
   1. 関数リテラル/Function コンストラクタは実行時に評価される
1. 変数のスコープについて
   1. ローカル変数の有効範囲
   1. 仮引数のスコープ - 基本型と参照型の違いに注意する -
1. 無名関数・即時関数について
1. 入れ子の関数
1. 再帰関数
1. 高階関数
1. コールバック関数
1. this について
1. クロージャについて
   1. クロージャの性質について
   1. クロージャの理解ポイント
   1. クロージャの実例

## 関数とは？

関数は、繰り返し利用するコード（計算処理等）をまとめた文の集まりです。  
関数を利用する場合は、呼び出したいスコープに定義が必要です。

```javascript
function sampleFunc() {
  const text = "Message";
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
  return (base * height) / 2;
}
getTriangle(5, 2); // 結果：5
```

#### 引数の省略

関数を呼びだすときの実引数を省略できます。逆に関数定義式の仮引数よりも多い数の実引数を指定して関数を実行できます。  
関数定義式の仮引数よりも少ない数の実引数を指定して関数を実行すると、実引数が省略された仮引数（`undefined`）が渡されます。

```javascript
function f(x, y) {
  console.log("x = " + x + " y = " + y);
}
f(2); // x = 2 y = undefined
```

この性質を利用して、省略可能な関数を定義できます。  
そのためには、引数を省略した場合の初期値を設定しておく必要があります。

```javascript
function f(a, b) {
  b = b === undefined ? 1 : b;
  return a * b;
}
f(2, 3); // 6
f(2, 0); // 0
f(2); // 2
```

`b = b === undefined ? 1 : b;` 部分は三項演算子を利用して、実引数が省略された仮引数 `undefined` だった場合は `1` を返して、`undefined` 以外はすべて代入した引数 `b` となります。

#### 可変長引数リスト

すべての関数で利用可能なローカル変数として `arguments` があります。  
`arguments` は `Arguments` オブジェクトを値として持っています。  
関数 n 個の実引数を指定して呼び出されたとすると実引数の値が `arguments` に可能されます。

- `arguments[0]` 1 番目の実引数の値
- `arguments[1]` 2 番目の実引数の値
- `arguments[n]` N 番目の実引数の値

`Arguments` オブジェクトは length と callee の 2 つのプロパティを持っているため次の値が格納されます。

- `arguments.length` 実引数の数
- `arguments.callee` 現在実行されている関数への参照

```javascript
function f(x, y) {
  arguments[1] = 3;
  console.log("x = " + x, "y = " + y);
}
f(1, 2); // x = 1, y = 3
```

上記のコードでは、 `arguments[1]` を変更することで関数の仮引数 `y` の値も変更されます。  
`arguments` 変数を使うと、引数の数が決まっていない可変長引数を定義できます。

#### 分割代入

配列から値を取り出して、あるいはオブジェクトからプロパティを取り出して別個の変数に代入できます。

```javascript
const [a, b] = ["関口", "長澤"];
console.log(a); // 関口
console.log(b); // 長澤

const [c, d, ...e] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(c); // 1
console.log(d); // 2
console.log(e); // [3,4,5,6,7,8]
```

#### 名前付き引数

ES2015 から、分割代入を利用することで名前付き引数をよりわかりやすく記述できます。

```javascript
function getTriangle({ base = 1, height = 1 }) {
  return (base * height) / 2;
}
console.log(getTriangle({ base: 5, height: 4 })); // 10
```

#### 「...」演算子による引数の展開

「...」演算子は、実引数で利用することで配列を個々の値に展開できます。（正確には `for ... of` ブロックで処理できるオブジェクト）

```javascript
console.log(Math.max(15, -3, 78, 1)); // 結果 78
console.log(Math.max([15, -3, 78, 1])); // 結果 NaN
```

Math.max メソッドは可変長引数を受け取るので最初のコードは最大値を求めることができますが最後の配列にした場合は、NaN になります。  
ES2015 以前は、apply メソッドを利用する必要がありました。

```javascript
console.log(Math.max.apply(null, [15, -3, 78, 1])); // 結果 78
```

ES2015 からは「...」演算子を利用できるので次のように記述できます。

```javascript
console.log(Math.max(...[15, -3, 78, 1])); // 結果 78
```

### 戻り値（return）とは？

- [関数の戻り値](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Building_blocks/Return_values)

関数内で処理をした結果を「戻り値」として返すことができます。  
`return` を使わずに実行した場合、そのまま終了します。

```javascript
function hello(name) {
  return "こんにちわ " + name + "さん";
}
console.log(hello("長澤"));
// 結果：こんにちは、長澤さん
```

```javascript
// returnなし
function hello(name) {
  "こんにちわ " + name + "さん";
}
console.log(hello("長澤"));
// 結果：undefined
```

他のプログラミング言語によっては最後に評価された値が返される言語もありますが、JavaScript の場合は `return` を省略した場合、常に未定義（`undefined`）が返されます。

## 関数の定義方法

大きく分けて次の 4 つがあります。

1. 関数宣言文による定義
1. 関数リテラルによる定義
1. Function コンストラクタによる定義
1. アロー関数式による定義

### 関数宣言文による定義

「戻り値」のセクションのサンプルコードで記載しましたが、関数を定義するのにもっとも基本となる方法です。

```javascript
function sampleFunc(name) {
  return "おはようございます " + name + "さん";
}
console.log(sampleFunc("関口")); // おはようございます 関口さん
```

### 関数リテラルによる定義

JavaScript では関数はデータ型の一種のため、文字列や数値と同じく、変数に代入して使うことも可能です。

```javascript
const sampleFunc = function(name) {
  return "こんばんは " + name + "さん";
};
console.log(sampleFunc("日下")); // こんばんは 日下さん
```

### Function コンストラクタによる定義

JavaScript では組込みブジェクトとして Function オブジェクトを用意していますが、正直な話、実務で Function コンストラクタを使って関数を定義したことはありません。

次に掲載するサンプルコードをご覧いただけるとなんとなく察していただけるかと思いますが、コードの見通しがよろしくないので特別な事情がない限り Function コンストラクタによる定義はしないほうがよいと思います。

```javascript
const sampleFunc = new Function(
  "name",
  'return "いただきます " + name + "さん"'
);
console.log(sampleFunc("長谷川")); // いただきます 長谷川さん
```

### アロー関数式による定義

基本的には関数リテラルによる定義と同じですが、よりシンプルに書けます。  
コードが一文で収まる場合ではさらにシンプルに書けます。

```javascript
// アロー関数の構文
(引数,...) => { 関数本体 }
```

```javascript
const sampleFunc = (name, price) => {
  return name + "はお金を" + price + "円借りました。";
};
console.log(sampleFunc("長澤", 1000)); // 長澤はお金を1000円借りました。

const simpleSampleFunc = (name, price) =>
  name + "はお金を" + price + "円借りました。";
console.log(simpleSampleFunc("長澤", 10000)); // 長澤はお金を10000円借りました。
```

#### オブジェクトリテラルを返す場合

アロー関数の記法は、自由度があるため思わぬ落とし穴があるため注意が必要です。  
以下はアロー関数が戻り値としてオブジェクトリテラルを返す例です。  
利用する場合は、必ずリテラル全体を丸括弧くくる必要があります。

```javascript
let func = () => ({ text: "オブジェクトリテラルは丸カッコが必要です。" });
```

## 関数定義における注意点

関数定義の注意点についての説明をします。

### return 命令の直後で改行しない

基本的にセミコロンで文末を認識します。しかしセミコロンを省略した場合でも前後の文脈から文末を判断します。  
文末にセミコロンをつけることが好ましいが「必須ではない」です。  
次のコードは、「base \* height / 2」の結果を戻すことを意図したコードですが、意図した結果は得られません。

```javascript
const getTriangle = function(base, height) {
  return;
  (base * height) / 2;
};
console.log("三角形の面積：" + getTriangle(5, 2)); // undefined
```

しかし、その寛容さが原因で JavaScript では次のように解釈されてしまうため `return` されてしまうため後続の式が `undefined` になってしまいます。

```javascript
return;
(base * height) / 2;
```

意図した動作させるためには次のように改行を削除する必要があります。

```javascript
return (base * height) / 2;
```

#### 他の命令も途中で改行しないようにする

次の命令も同様の理由で改行しないようにしましょう。

- ラベル付きの break / continue 命令
- throw 命令
- `++`、 `--` 演算子（後置）

JavaScript では文の途中で改行できますが、無制限に改行するべきではありません。  
演算子、カンマ、左括弧直後など、文の継続が明らかな部分のみ改行をするべきです。

### 関数はデータ型の一種

関数と同名の変数を定義していることから、`getTriangle = 0;` でエラーとなるはずですが、関数はデータ型の一種になるため以下は JavaScript では正しいコードになります。  
そのため `getTriangle` の関数を定義するときは、 `getTriangle` という変数に関数型のリテラルを格納すると同じことになるため、変数 `getTriangle` にあらためて数値型をセットしても間違いではありません。

```javascript
let getTriangle = function(base, height) {
  return (base * height) / 2;
};
console.log(getTriangle(5, 2)); // 結果：5
getTriangle = 0;
console.log(getTriangle); // 0
```

この性質から次のコードを記述することもできます。  
`getTriangle` を変数として参照しているので、 `getTriangle` に格納された関数定義がそのまま文字列として出力されます。 ※正確には Function オブジェクトの toString メソッドが呼び出されるため文字列表現に変換されコンソールに表示されています。

関数を呼びだす際に「引数がなくても丸括弧省略できない」理由でもありますので、丸括弧「関数を実行する」意味を持ちます。

```javascript
let getTriangle = function(base, height) {
  return (base * height) / 2;
};
console.log(getTriangle); // 文字列として出力される
```

### function 命令は静的な構造を宣言する

function 命令による関数定義は「関数リテラルを代入演算子（=）で変数を代入すること」とは異なる点にも注意が必要です。

```javascript
console.log("三角形の面積：" + getTriangle(5, 2)); // ※1
function getTriangle(base, height) {
  return (base * height) / 2;
}
```

「関数定義が変数定義である」と考えると `※1` はエラーにならなければなりません。  
`※1` 時点では `getTriangle` 関数は宣言されていないはずだからです。（関数定義を格納した変数 `getTriangle`）
実際にコンソールで確認すると正しく `getTriangle` 関数は実行されます。  
function が動的に実行される命令ではなく、静的な構造を宣言するためのキーワードになるからです。  
 **「function 命令はコードを解析・コンパイルするタイミングで関数を登録している」ことになるため、実行時にはコード内の構造の一部として `getTriangle` 関数をどこからでも呼びだすことができることになります。**

#### Note

関数を定義した `<script>要素` は、呼び出し側のスクリプトブロックより前・同じスクリプトブロックに記述されなければなりません。  
ブラウザの場合は、 `<script>要素` 単位で順に処理していくためです。

### 関数リテラル/Function コンストラクタは実行時に評価される

function 命令から関数リテラルに置き換えた場合は、同様の動きはできません。  
また、`Function` コンストラクタでも同様です。

```javascript
console.log("三角形の面積：" + getTriangle(5, 2)); // Error: Cannot access 'getTriangle' before initialization
const getTriangle = function(base, height) {
  return (base * height) / 2;
};
```

- **関数リテラル/Function コンストラクタは実行時（代入時）に評価される**

関数リテラル/Function コンストラクタで記述するときは、**呼び出し元コードよりも先に記述する**必要があります。  
記述のし方で解釈が異なりますので、注意してください。

## 変数のスコープについて

スコープとは、変数がスクリプトの中のどの場所から参照できるかを決める概念になります。  
大きく分けて 3 つに分類されます。

- グローバルスコープ : スクリプト全体から参照できる
- ローカルスコープ : 定義された関数のみで参照できる
- ブロックスコープ : ES2015 から追加された概念で、 `let` 命令で宣言された変数はブロックの外では無効になります。

```javascript
const scope = "グローバル";
function valueFunc() {
  const scope = "ローカル";
  return scope;
}
console.log(valueFunc()); // ローカル
console.log(scope); // グローバル
```

一行目の変数 `scope` はグローバル変数で、関数 `valueFunc` の変数 `scope` はローカル変数とみなされます。  
`valueFunc` 関数を介することでグローバルで定義した `scope` とは別物として認識されるため同名の変数でもそれぞれを返されます。  
**※const,let,var で宣言していない変数はすべてグローバル変数としてされますので必ず宣言すること**

```javascript
if (true) {
  let i = 5;
}
console.log(i); // スコープ外のためエラー
```

ブロックスコープが利用できる環境の場合で、`let` で宣言すれば即時関数と同様の効果を得ることができます。

### ローカル変数の有効範囲

ローカル変数は、関数内全体で有効ではありますが宣言される前に実行するとローカル変数は確保されていないため `undefined` 未定義として出力されます。  
この挙動のことを変数の巻き上げと呼びます。  
ローカル変数を宣言する場合は、 **必ず関数の先頭で宣言する**ように心がけましょう。

```javascript
const scope = "グローバル";
function valueFunc() {
  console.log(scope); // undefined
  const scope = "ローカル";
  return scope;
}
console.log(valueFunc()); // ローカル
console.log(scope); // グローバル
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
console.log(decrementValue(100)); // 99
console.log(value); // 10
```

この場合は、仮引数はローカル変数としてみなしてグローバルの変数 `value` に影響はありません。  
グローバル変数 `value` とローカル変数 `value` は別物になります。

しかし、仮引数に渡される値が参照型の場合は影響があります。

```javascript
const value = [1, 2, 4, 8, 16];
function decrementValue(value) {
  value.pop(); // 末尾を削除
  return value;
}
console.log(decrementValue(value)); // [1, 2, 4, 8]
console.log(value); // [1, 2, 4, 8]
```

参照型は、「値そのものではなく、値を格納したメモリ上の場所（アドレス）だけを格納した型のことを指します。  
参照型で受け渡しする場合は、渡される値（値そのものではなく）もメモリ上のアドレス情報だけとなります。  
この値の渡し方を参照渡しと呼びます。  
グローバルとローカルで定義した value は別物になりますが、 `decrementValue(value)` でグローバルの値を渡された時点で結果的に参照しているメモリ上の場所が等しくなります。

**配列を操作した場合などグローバル変数 `value` にも反映されるので注意が必要です。**  
参照型の性質を理解したうえで、コードを書くとバグが起きる原因を防げます。

## 無名関数・即時関数について

即時関数と無名関数についてを説明します。  
関数は定義しただけでは実行されません。関数を呼び出されて初めて実行されます。  
その方法のひとつとして無名関数/即時関数があります

通常、無名関数を実行するときは、それを変数に代入して括弧演算子で実行します。

```javascript
const func = function(...) {};
func();
```

JavaScript には、無名関数を定義時に実行する「即時関数」という構文があります。  
上記のコードを即時関数に置き換えると次になります。

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

無名関数を変数に代入することも、関数定義式を関数値に変換する方法の 1 つです。即時関数には引数を渡すことも可能です。  
次のように引数 a に 1、b に 2 が代入されます。

```javascript
(function(a, b) {...})(1, 2);
```

即時関数には関数名をつけることもできます。ただし関数名は関数内部のみ有効です。

```javascript
(function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
})(5); // 120
```

関数の実行結果を変数に代入して、式の中で使うこともできます。  
この方法でグローバルスコープを汚染しない名前空間を生成することに使われます。  
**※ES2015 環境では即時関数は基本的に不要になります。**

```javascript
const x = (function() {...})();
```

## 入れ子の関数

関数の内部に関数を定義することを入れ子と呼びます。  
入れ子の関数のことをローカル関数ととも呼びます。

入れ子の関数（ローカル関数）は外側の関数のローカル変数として格納されるため、外からアクセスすることはできません。  
また、外側の関数の引数やローカル変数にアクセスできます。

次のコードは `funcA` の中に関数 `funcB` が定義されています。  
この形を入れ子の関数と呼びます。

`value` 変数に `funcA` の実行結果を代入していますが、 変数 `num` を `return` しています。  
`num` の初期値は `0` ですが、 `return` する前に `funcB` でインクリメントしているため `value` は `1` と返ってきます。  
関数 `funcB` の外で定義している変数 `num` を参照できるということになります。

```javascript
function funcA() {
  let num = 0;
  function funcB() {
    num++;
  }
  funcB();
  return num;
}
const value = funcA();
console.log(value); // 1
```

次のコードは、 `funcA` の `return` に `funcB` を実行され `funcB` に `return` を加えたコードになります。

- 関数 `funcA` の `return` で関数 `funcB` が実行
- 関数 `funcB` でインクリメントした `num` を `return` される
- 変数 `value` には関数 `funcA` の実行結果が代入されるため `1` になる

```javascript
function funcA() {
  let num = 0;
  function funcB() {
    num++;
    return num;
  }
  return funcB();
}
const value = funcA();
console.log(value); // 1
```

次のコードは、関数 `funcA` の `return` で関数 `funcB` 自体を返すコードになります。（上記のコードは関数 `funcB` の実行結果）  
関数 `funcB` 自体を `return` することで変数 `value` も関数になるため、変数 `value` を実行することで関数 `funcB` が実行されて結果 `num` が `return` されることになります。  
これがクロージャになります。

```javascript
function funcA() {
  let num = 0;
  function funcB() {
    num++;
    return num;
  }
  return funcB;
}
const value = funcA();
console.log(value()); // 1
console.log(value()); // 2
```

関数内の変数のスコープが入れ子関数の規則についてはクロージャの本質的な役割を果たしますので、最後の `クロージャについて` で説明します。

## 再帰関数

自分自身を呼びだす関数のことです。  
同じような手続きを何度も呼びだすような処理をコンパクトに書けます。  
ただし、無限ループにならないよう終了条件を書く必要があることに注意してください。  
次のコードは引数に渡した数値を 0 になるまでカウントダウンしていく関数です。  
終了条件を満たすまで、処理を行いながら自分自身を返し続けます。

```javascript
function recursiveFunc(num) {
  console.log(num);
  num--;
  if (num < 0) return false; // 終了条件を満たした場合は再帰を終了する
  return recursiveFunc(num);
}
recursiveFunc(10); // 10,9,8,7,6,5,4,3,2,1,0
```

## 高階関数

JavaScript は第一級関数をサポートしているため、関数の引数に関数を受け取ることができます。  
引数として受け取った関数を扱う関数を高階関数と呼びます。  
次のコードの場合、第 2 引数で関数を受け取るので `mockForEach` が高階関数となります。  
第 1 引数に配列を受け取り、 `for in` 文で回して第 2 引数で受け取った関数を実行していきます。  
第 2 引数に渡した関数は引数で受け取った値をログに出すという至極シンプルな処理です。

```javascript
// 高階関数
function mockForEach(array, callback) {
  for (let key in array) {
    callback(array[key]);
  }
}

// 引数に渡された値をconsoleで表示する
function showArrayValue(value) {
  console.log(value);
}

const fruits = ["蜜柑", "葡萄", "林檎"];

mockForEach(fruits, showArrayValue); // '蜜柑','葡萄','林檎'
```

## コールバック関数

前述した高階関数、つまり引数に関数を受け取れる関数に引数に渡す関数がコールバック関数です。  
MDN で配列の組込みソッドを眺めているとメソッドの構文を説明している項目で、メソッドの引数に `function callback(currentValue){}` のような記載がありますが、それです。  
サンプルコードとして `Array.prototype.forEach()` を参考に見ていきます。

```javascript
const fruits = ["蜜柑", "葡萄", "林檎"];

fruits.forEach(element => {
  console.log(element); // '蜜柑','葡萄','林檎'
});
```

`forEach` メソッドは第一引数に関数を受け取ります。これがコールバック関数です。  
`forEach` メソッドのコールバック関数の第一引数には配列の各要素が渡されるので、各要素に対して一度ずつ実行します。  
上記のサンプルコードでは即時関数を渡しています。  
関数リテラルや関数宣言文で定義した関数を渡しても問題ないですが、冗長な書き方になってしまうため、実務ではサンプルコードのように即時関数を渡して処理するケースが多いです。

## this について

呼び出される際の状況によって参照先が変わる読み取り専用のグローバル変数のようなキーワードです。  
主に次のような条件によって変化します。

- 関数から呼び出した時
- メソッドから呼び出した時
- コンストラクタから呼び出した時
- アロー関数から呼び出した時

### 関数から呼び出した時

関数から呼び出した時 `this` はグローバルオブジェクトを参照します。  
ただし、次のメソッドを使って関数を呼び出せば `this` の値を束縛できます。

- call()
- apply()
- bind()

#### 普通に呼びだす

まずは普通に関数から呼び出した時の `this` の挙動です。  
※ブラウザでの動作を想定しています

```javascript
function hoge() {
  console.log(this);
  this.foo = "this is foo";
}

hoge(); // Windowオブジェクトがコンソールに表示される
console.log(foo); // グローバルに展開され 'this is foo' とコンソールに表示される
```

#### call（) apply(）

`call()` と `apply()` の違いは引数をカンマつなぎで渡すか配列で渡すかの違いで挙動は同じです。  
引数にオブジェクトを渡すと `this` を束縛できます。

```javascript
function someHuman(age, loan) {
  console.log(
    this.name + "は、" + age + "歳です。妻への借金は " + loan + "円です。"
  );
}
const nagasawa = {
  name: "長澤"
};
someHuman(34, 100000); // は、34歳です。妻への借金は 100000円です。
someHuman.call(nagasawa, 34, 100000); // 長澤は、34歳です。妻への借金は 100000円です。
someHuman.apply(nagasawa, [34, 100000]); // 長澤は、34歳です。妻への借金は 100000円です。
```

#### bind()

前述の `call()` と `apply()` と使い方微妙に似ていますが、 `bind()` は `this` を束縛した新しい関数を返します。  
したがって基本的には関数リテラルで定義して使います。

```javascript
function someHuman(age, loan) {
  console.log(
    this.name + "は、" + age + "歳です。妻への借金は " + loan + "円です。"
  );
}
const nagasawa = {
  name: "長澤"
};

const boundSomeHuman = someHuman.bind(nagasawa);

boundSomeHuman(34, 100000); // 長澤は、34歳です。妻への借金は 100000円です。
```

### メソッドから呼び出した時

メソッドが属するオブジェクトを参照します。  
次のコードから `hoge` オブジェクトに属するメソッド `piyoMethod` 内で `this` をログで表示すると自分自身を参照していることがわかります。

```javascript
const hoge = {
  fuga: "fuga",
  piyoMethod: function() {
    console.log(this); // { fuga: "fuga", piyoMethod: ƒ }
    this.fuga = "override fuga!!";
  }
};

console.log(hoge.fuga); // fuga
hoge.piyoMethod();
```

しかし、メソッド内で定義した関数内で `this` を使用するとグローバルオブジェクトを参照するので注意してください。

```javascript
const hoge = {
  fuga: "fuga",
  piyoMethod: function() {
    console.log(this); // { fuga: "fuga", piyoMethod: ƒ }

    function innerFunc() {
      console.log(this.fuga); // undefined
    }

    innerFunc();
  }
};

hoge.piyoMethod();
```

上記の回避策として `this` をメソッド内で変数に退避しておくというテクニックがあります。

```javascript
const hoge = {
  fuga: "fuga",
  piyoMethod: function() {
    const self = this; // メソッド内で変数に格納しておくと参照元を保つことができる
    console.log(this); // { fuga: "fuga", piyoMethod: ƒ }

    function innerFunc() {
      console.log(self.fuga); // fuga
    }

    innerFunc();
  }
};

hoge.piyoMethod();
```

`innerFunc` で実行した `console.log` で自身の `fuga` プロパティが表示されたことが確認できます。  
先述した `call()` 、 `apply()` 、 `bind()` を使って `this` を束縛する方法でも代用できます。

```javascript
const hoge = {
  fuga: "fuga",
  piyoMethod: function() {
    console.log(this); // { fuga: "fuga", piyoMethod: f }

    function innerFunc() {
      console.log(this.fuga); // fuga
    }

    innerFunc.call(this); // innerFunc内の this を hoge オブジェクトに束縛
  }
};

hoge.piyoMethod();
```

### コンストラクタから呼び出した時

コンストラクタが作成したインスタンス自身を参照します。  
コンストラクタとインスタンスについては今回のテーマが関数であり、今回のテーマ外である `prototype` と `class` が大きく関わってくるので詳細は割愛します。  
興味のある方は調べてみてください。

今回はサンプルコードを見て、なんとなく「こんな感じなのか」レベルで認識していただけるだけで大丈夫です。  
※JavaScript で `class` っぽいことを表現してきた `prototype` を使ってコンストラクタを作成します。

```javascript
// コンストラクタ
const Human = function(name) {
  this.name = name;
};

// Humanオブジェクトの prototype に getNameメソッドを追加
Human.prototype.getName = function() {
  console.log("私の名前は " + this.name + " です。");
};

const sekiguchi = new Human("関口"); // インスタンスを作成し nameプロパティに 関口 を設定する
const who = new Human(); // 引数を省略した場合は undefined が渡される
sekiguchi.getName(); // 私の名前は 関口 です。
who.getName(); // 私の名前は undefined です。
```

### アロー関数から呼び出した時

アロー関数における `this` は、自身の外側のスコープに定義された最も近い関数（関数定義時のコンテキスト）の `this` を参照します。  
次のコードのアロー関数の `this` の場合、 `func` 内の `this` を参照しています。  
この挙動のおかげで先述したような `this` を変数に退避しておく必要がなくなります。

```javascript
const hoge = {
  value: "hoge",
  func: function() {
    const innerFunc = function() {
      console.log(this); // Windowオブジェクト
    };
    const innerArrow = () => {
      console.log(this); // {value: "hoge", func: f }
    };
    innerFunc();
    innerArrow();
  }
};
hoge.func();
```

## クロージャについて

クロージャ（関数閉包）とは、**自分自身が定義された環境において、関数内の自由変数の名前解決を行う** というものになります。  
変数の名前解決は関数がクロージャを定義することを意味しています。

```javascript
const a = "A";
function f() {
  const b = "B";
  function g() {
    const c = "C";
    console.log(a + b + c);
  }
  g();
}
```

内側関数 `g` の定義された環境とは、その外側のプログラムコード全体です。この環境内では関数 `g` は自由変数 `a` と `b` の名前解決が行われます。  
変数の名前解決は次のようなしくみになります。

1. 関数 `f` が呼び出されると関数`f` の call オブジェクトが生成される
1. 次に関数 `g` の関数宣言で評価されて、関数 `g` の関数オブジェクトが生成される。この関数オブジェクトには関数 `g` のコード、変数 `b` が納めた関数 `f` の call オブジェクトへの参照、変数`a` を納めたグローバルオブジェクトへの参照が格納される
1. 関数`g` が呼びされて実行すると、関数 `g` の call オブジェクトが生成されるとともに、関数 `g` の関数オブジェクトが参照する変数オブジェクトのチェインをたどって自由変数 `a` と `b` を参照する

関数 `g` の関数オブジェクトと、それが参照している変数オブジェクトが、自由変数 `a` と `b` の名前解決を行うためのデータ構造ということになります。  
このデータ構造は、関数 `f` が呼ばれて関数 `g` が評価されたときに生成されます。  
**※JavaScript のクロージャは、関数オブジェクトとそれを参照する変数オブジェクトとセットになります**

また、関数 `g` の関数オブジェクトが存在している間は、クロージャ内の変数オブジェクトは関数オブジェクトに参照されているため、メモリ上に存続します。

### Note

入れ子の関数 g は開いた関数ですが、スコープチェインを用いることで環境から変数 b と a を取り込んで実質的には閉じた関数になっています。「開いたものを閉ざす」というのがクロージャの語源です。

### クロージャの性質について

入れ子の関数で紹介したカウントアップ関数の説明をします。

```javascript
function funcA() {
  let num = 0;
  function funcB() {
    num++;
    return num;
  }
  return funcB;
}
const value = funcA();
console.log(value()); // 1
console.log(value()); // 2
```

この例では、 `value()` を実行するたびにローカル変数の `num` が 1 ずつ増えます。

1. 外側の関数 `funcA` は、入れ子の関数 `funcB` への参照を戻り値として返している
1. 入れ子の関数 `funcB` は、外側の関数 `funcB` のローカル変数 `num` を参照している

ローカル変数 `num` はクロージャの内部状態として保持されます。  
`num` はローカル変数になるため外部からアクセスはできません。  
関数 `funcB` はクロージャの内部状態を変更するためのメソッドのような動きをします。  
クロージャはオブジェクトのようにも見えますが、オブジェクトのプロパティは外部からアクセスできますが、クロージャは内部状態は外部に対して隠蔽されています。  
オブジェクトのプロパティは外部から隠蔽することをカプセル化と呼びますが、**クロージャはカプセル化されたオブジェクトである**といえます。

`const value = funcA();` は複数作れば、それぞれ独立したカウンタとして使うこともできます。  
異なる `funcA` を生成されるため、クロージャも異なる内部状態を保持します。  
クロージャは `ファクトリ関数` とみなします。ファクトリは工場の意味でオブジェクトを生成する工場というイメージになります。

```javascript
const value1 = funcA();
const value2 = funcA();
console.log(value1()); // 1
console.log(value2()); // 1
console.log(value1()); // 2
console.log(value2()); // 2
```

### クロージャの理解ポイント

- 外側の関数を呼びだすと、その関数の call オブジェクトと入れ子の関数の関数オブジェクトが生成され、入れ子の関数の定義するクロージャが生成されます。外部関数はクロージャを生成するファクトリ関数とみなします。
- 外部の関数の call オブジェクトはクロージャの内部状態で、外側の関数を呼び出されるたびに異なる内部状態を生成します。
- 入れ子の関数の関数オブジェクトが存在している限りは、外側の関数の call オブジェクトは存在し続けます。**外部の関数の関数オブジェクトが消失しても存続します。**
- クロージャは内部状態（外部の関数のローカル変数）は、外側から隠蔽されており、内部の関数からのみアクセスできます。

### クロージャの実例

クロージャの実例として挙げる代表例は、ショッピングカートの注文ボタンの二重クリック防止などがあります。

- 注文ボタンの二重クリック防止

他にも Web アプリケーションなど利用ケース挟まざまですが、 `jQuery` のようなイベント系で利用することは多いのではないでしょうか。  
コードリーディングした際に、 `return function` が書かれたローカル関数がある場合はクロージャを使っている可能性があります。
