'use strict'
console.log('Hello Developer Tool');

// 変数の確認
const siam_shade = 'JS Workshop Sapporo';

const ss_member = ['HIDEKI', 'KAZUMA', 'DAITA', 'NATCHIN', '淳士', 1, ['配列1', '配列2'], {name: '名前', age: 18}]
let new_member = ss_member.map( value => {
  typeCheck(value)
  return value
})

// SIAM SHADEの6人目のメンバーを追加する
new_member.push('グッチー')

function typeCheck(type) {
  switch(typeof type) {
    case 'string':
      console.log('文字列')
      break
    case 'number':
      console.log('数字')
      break
    case 'object':
      console.log('オブジェクト')
      break
  }
}
