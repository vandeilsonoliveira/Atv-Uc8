let contador = 17

for(let i =0; i <= contador; i++){  
    if(i == 0){
      console.log("Numero Zero!");

    }
    else{
      if(i % 2 == 0){
        console.log(`Numero ${i} é Par!`)
      }
      else{
        console.log(`Numero ${i} é Impar!`)
      }
    }
}

// let i = 0
// while(i < contador){
//     if(i == 0){
//         console.log("Numero Zero!");  
//     }
//     else{
//         if(i % 2 == 0){
//           console.log(`Numero ${i} é Par!`)
//         }
//         else{
//           console.log(`Numero ${i} é Impar!`)
//         }
//     }      

//     i++
// }

// let i = 0
// while(i <= contador){
//     switch(i % 2){
//         case 0:
//             console.log(`Numero ${i} é Par!`)   
//             break         
//         case 1:
//             console.log(`Numero ${i} é Impar!`)  
//             break          
//     }      

//     i++
// }