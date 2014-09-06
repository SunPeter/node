console.log(process.argv);


//由于argv[0]固定等于NodeJS执行程序的绝对路 径,
// argv[1]固定等于主模块的绝对路径,
// 因此第一个命令行参数 从argv[2]这个位置开始。

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});