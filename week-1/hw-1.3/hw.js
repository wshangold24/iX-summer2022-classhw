function printTodaysDate() {
    let date = new Date();
    console.log(date)
}

//TEST
printTodaysDate();


function checkIfNumberIsPerfectSquare(number) {
    return (Math.sqrt(number) % 1 == 0);
}

//TEST
console.log(checkIfNumberIsPerfectSquare(281961));


function printFirst10InFibonacci() {
    console.log(0);
    console.log(1);
    let num = 1;
    let prev = 0;
    for (let i = 0; i < 8; i++) {
      let temp = num + prev;
      console.log(num + prev);
      prev = num;
      num = temp;
    }
  }
  
  //TEST
  printFirst10InFibonacci();