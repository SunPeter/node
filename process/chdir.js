console.log(process.cwd());
try {
  process.chdir('tmp');
}
catch (err) {
  console.log('chdir: ' + err);
}
console.log(process.cwd());