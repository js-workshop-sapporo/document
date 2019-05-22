# Google Developer Tool 使い方

JavaScriptのデバッグは実装する上で必要なスキルになるため、基本的な使い方の紹介になります。

## ドキュメント

- [Google Developer Tool ドキュメント ](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2018Q2)

## サンプルコード

以下のサンプルHTMLとJSをダウンロードしてChromeで表示してください。

- [サンプルコード](https://github.com/js-workshop-sapporo/document/tree/master/devtool/example)

## Developer Toolの表示

- Windows : `F12`
- Mac : `command + option + I`

## コンソール画面を開いてみる

サンプルコードを表示した状態で、Developer Toolを表示させてください。

### 変数をconsole.log()してみる

Developer Tool上で、変数を定義してconsole.logする方法です。
改行をいれる場合は、 `Shift + Enter` でできます。

```js
const jsWorkshopSapporo = 'JS Workshop Sapporo 勉強会第一回目'
console.log(jsWorkshopSapporo)
// JS Workshop Sapporo 勉強会第一回目
```

![変数をconsole.log()](assets/20190522005936.png)

### ブレークポイントについて

ブレークポイントは、プログラムの実行中に任意の行で止めることができる機能です。<br>
設定することで現在の変数の値の確認などができます。forやイベントに関する状態の把握が可能です。

```js
// map新しい配列を取り出すときの変数を確認する
const array = ['ほげ', 'ぴよ', 'ふー']
array.map( value => {
  return value
})
```

1. Developer Toolを開く
2. Sourcesパネルを開く
3. 該当の行をクリックしてブレークポイントを設定する 8行目
4. リロードする
5. 止まったタイミングで現在のvalueの値をScopeのLocalで参照する

<a href="https://www.dropbox.com/s/t1esjt5auyol0y4/20190523010950.mp4?dl=0" target="_blank">ブレークポイントの参考動画</a>

### 変数の確認

- マウスを当てると変数を見る
- スコープ内の変数をみる

### プログラムのステップ実行

- リジューム実行
- ステップイン
- ステップオーバー、ステップアウト

### ステップ実行で処理の流れを確認する

## 上級者向けの使い方

### 条件付きブレークポイント

### ログポイント

### ライブ・エクスプレッション