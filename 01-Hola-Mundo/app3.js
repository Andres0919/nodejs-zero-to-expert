console.log('Inicio de progrmaa')
setTimeout(() => {
  console.log('Primer Timeout');
}, 3000);

setImmediate(() => {
  console.log('Immediate')
})
setTimeout(() => {
  console.log('Segundo Timeout');
  process.nextTick(() => console.log('segundo NextTick'))
}, 100);

setTimeout(() => {
  console.log('Tercer Timeout');
}, 0);


process.nextTick(() => console.log('primer NextTick'))

console.log('Fin de progrmaa')
