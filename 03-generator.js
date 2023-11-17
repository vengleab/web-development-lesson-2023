function *sequence() {
  let i = 1;
  while (i<3) {
    yield i++;
  }
}

const idIncrement = sequence();
const arrSeq = []
for(let i = idIncrement.next(); i.done != true; i = idIncrement.next()){
  arrSeq.push(i.value)
} 

console.log(arrSeq)