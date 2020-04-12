'use strict';
const number = process.argv[2] || 0;
//process.argv は Node.js がデフォルトで提供してくれる、コマンドラインの引数が入った配列。
//なぜ添字として 2 番を使っているかというと、0 番には node コマンドのファイルのパスが入り、
//1 番には実行しているプログラムのファイルのパスが入る、という決まりがあるため。

//process.argv[2] が 0 や null や undefined などの Falsy な値である場合、number には 0 が代入されます。

let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);