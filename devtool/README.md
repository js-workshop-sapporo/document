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