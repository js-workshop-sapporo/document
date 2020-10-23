(function(window, document){
  const button = document.getElementById('accordion__trigger');
  const body = document.getElementById('toggle__body');
  const clickToggle = (_clientH) => {
    const lastH = body.style.height
    body.style.height = (lastH == '' || lastH == '0px') ? _clientH + 'px' : '0px'
  }
  const init = () => {
    const _clientH = body.clientHeight
    body.style.height = 'auto'
    body.style.height = '0px'
    button.addEventListener('click', () => clickToggle(_clientH), false)
  }
  init();
})(window,document);