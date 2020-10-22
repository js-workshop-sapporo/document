(function(){
  /** 入力欄 */
  const input = document.getElementById('myInput');

  /** ボタン */
  const button =  document.getElementById('myButton');

  /** クリックイベントリスナー */
  const onClickEvent = function() {
    alert(input.value);
  };

  /** ボタンにイベントリスナーを追加 */
  button.addEventListener('click', onClickEvent);
})();