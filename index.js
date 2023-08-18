// console.log("2+2")
// console.log ("hola este numero es",2+5)

// var  pepe = "hola me llamo pepe";
// var mun = 55;
// var bolean = false;
// var  notdefined = undefined;

// console.log(typeof text); // hola

//  let behindCount = 10

//  while(behindCount > 0){

//     behindCount = behindCount -1
//     console.log(behindCount + " segundos")
//  }

// let numero = 0
// while(numero< 10){
//     numero++
//     console.log(numero)
// }

//  let behindCount = 10

//  while(behindCount > 0){

//     behindCount = behindCount -1

//     console.log(behindCount + " segundos")

//     if(behindCount=== 5){
//         break
//     }
//   }

// revisar mañana

//  let behindCount = 10

//  while(behindCount > 0){

//     behindCount = behindCount -1

//     console.log(behindCount + " segundos")
//     if(8){
//         continue
//     }
//     console.log(behindCount)
//  }

// function saludar(){
//    document.write("holi pedro")
// }
// saludar()

// function addition(){
//     return 1+1
// }

// const result = addition()

// document.write (result)

function GetRandomNumber() {
	const random = Math.random();
	const multiplied = random * 10;
	const ronded = Math.floor(multiplied);
	const result = ronded + 1;
	return result;
}

const result = GetRandomNumber();
document.write(result);
