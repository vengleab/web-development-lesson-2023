const arr = [0, 1, 2, 3, 4 ,5 ,6 ,7, 8]

const [element1, , element3, ...other] = arr;
const newValue = [element1, ...other]

console.log(other)
console.log(newValue)

const student = {id: 1, name: 'John', age: 20};
const {id, ...otherfields} = student;
console.log(otherfields);

function sum(...args) {
  let total = 0;
  args.forEach(element => {
    total += element;
  });
  return total
}

const total = sum(1, 2, 3);
console.log(total);

