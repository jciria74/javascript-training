function digitize(n) {
  let str = n.toString();
  let myArray = str.split('').reverse();
  let newArray = [];
  for (i = 0; i < myArray.length; i++ ) {
    newArray.push(Number(myArray[i]));
  }
  return newArray;
}
digitize(35642)