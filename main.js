// //for
//
// var array = ["Jon", "Don", "Sparta"];
//
// for(var i = 0 ; i < array.length; i++) {
//   // console.log(array[i]);
// }
//
// //While
// var j = 0;
// while (j < 5) {
//   // console.log('This loop has run ' + j + ' times');
//   j++
// }
//
// var gameOver = false;
// while ( gameOver ) {
//   // console.log("You Died");
// }
//
// //Do while: the loop witj always run the code once before checking
// var naumber;
//
// do{
//   number = Math.random();
//   // console.log(number);
//
// } while (number < 0.5);
//
// //For in
// var myObject = new Object();
//
// myObject.a = "1";
// myObject.b = "2";
// myObject.c = "3";
//
// for ( var key in myObject ){
//   // console.log(key);
//   console.log(myObject[key]);
// }

var j = 0;
while (j < 101) {
  j++

  if (j % 3 === 0 && j % 5 === 0) {
    console.log("FizzBuzz");
  }
  else if (j % 3 === 0) {
    console.log("Fizz");
  }
  else if (j % 5 === 0) {
    console.log("Buzz");
  }
  else {
    console.log(j)
  }
}
